---
title: vue-cli3 DllPlugin 提取公用库
date: 2020-06-13
tags:
    - vue
categories:
    - Web
---

## vue-cli3 DllPlugin 提取公用库

> 开发过程中个人编写的源文件才会频繁变动，而一些库文件我们一般是不会去改动的。如果能把这些库文件提取出来，就能减少打包体积，加快编译速度。本文主要讲述在 vue-cli3 中利用 DllPlugin 来进行预编译。

#### 1、安装相关插件

```js
yarn add webpack-cli add-asset-html-webpack-plugin clean-webpack-plugin --D
```

#### 2、编写配置文件

在项目根目录下新建 webpack.dll.conf.js，输入以下内容。

```js
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// dll文件存放的目录
const dllPath = 'public/vendor'

module.exports = {
    entry: {
        // 需要提取的库文件
        vendor: ['vue', 'vue-router', 'vuex', 'axios', 'element-ui']
    },

    output: {
        path: path.join(__dirname, dllPath),
        filename: '[name].dll.js',
        // vendor.dll.js中暴露出的全局变量名
        // 保持与 webpack.DllPlugin 中名称一致
        library: '[name]_[hash]'
    },

    plugins: [
        // 清除之前的dll文件
        new CleanWebpackPlugin(['*.*'], {
            root: path.join(__dirname, dllPath)
        }),
        // 设置环境变量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: 'production'
            }
        }),
        // manifest.json 描述动态链接库包含了哪些内容
        new webpack.DllPlugin({
            path: path.join(__dirname, dllPath, '[name]-manifest.json'),
            // 保持与 output.library 中名称一致
            name: '[name]_[hash]',
            // 当前node命名执行的目录
            context: process.cwd()
        })
    ]
}
```

#### 3、生成 dll

在 package.json 中加入如下命令

```json
"scripts": {
    ...
    "dll": "webpack -p --progress --config ./webpack.dll.conf.js"
},
```

控制台运行

```shell
yarn run dll
```

#### 4、忽略已编译文件

为了节约编译的时间，这时间我们需要告诉 webpack 公共库文件已经编译好了，减少 webpack 对公共库的编译时间。在项目根目录下找到 vue.config.js ( 没有则新建 )，配置如下:

```js
const webpack = require('webpack')

module.exports = {
    ...
    configureWebpack: {
        plugins: [
          new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require('./public/vendor/vendor-manifest.json')
          })
        ]
    }
}
```

#### 5、index.html 中加载生成的 dll 文件

经过上面的配置，公共库提取出来了，编译速度快了，但如果不引用生成的 dll 文件，网页是不能正常工作的。

打开 public/index.html，插入 script 标签。

```js
...
<script src="./vendor/vendor.dll.js"></script>
```

到此公用库提取完成，但总觉得最后一部手工插入 script 不太优雅，下面介绍下如何自动引入生成的 dll 文件。

打开 vue.config.js 在 configureWebpack plugins 节点下，配置 add-asset-html-webpack-plugin

```js
const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
    ...
    configureWebpack: config => {
        // 减少 webpack 对公共库的编译
        const dllReference = new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require('./public/vendor/vendor-manifest.json')
        })
        config.plugins.push(dllReference)

        // 将 dll 注入到 生成的 html 模板中
        const addAssetHtml = new AddAssetHtmlPlugin({
             // dll文件位置
            filepath: path.resolve(__dirname, './public/vendor/*.js'),
             // dll 引用路径
            publicPath: './vendor',
             // dll最终输出的目录
            outputPath: './vendor'
        })
        config.plugins.push(addAssetHtml)
    }
}
```
