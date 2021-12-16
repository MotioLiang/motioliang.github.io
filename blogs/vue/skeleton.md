---
title: vue-cli3.0中添加骨架屏
date: 2019-3-15
tags:
    - vue
categories:
    - Web
---

> tip 介绍
> 为了前端体验更加友好，减缓用户的焦虑情绪，提升项目质量等，我们在项目里面可以使用骨架屏，提前渲染出来一个跟正式页面相似的页面出来。

## 在 vue 中使用骨架屏

### 1. 添加 vue-skeleton-webpack-plugin 插件

> 安装  vue-server-renderer ，并且 vue 的版本要和 vue-server-renderer 的版本一直，所以安装的时候可以直接 npm install vue vue-server-renderer --save (版本不一致的话，到时候会报 vue 和 vue-server-rendere 版本不一致)

```bash
npm install vue-skeleton-webpack-plugin
```

### 2. 新建我们的骨架组件

> 首先在我们的项目中，我这里是在 app.vue 同级目录下新建了一个 Skeleton.vue 里面用来写我们的骨架屏代码。在这个页面里面我们可以根据需要来编写代码，最好使用样式或者 base64 的图片，以减少初始的请求。

```javascript
<template>
  <div class="skeleton-wrapper">
    <section class="skeleton-block">
      <!-- eslint-disable vue/max-len -->
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==">
    </section>
  </div>
</template>

<script>
export default {
  name: 'Skeleton',
};
</script>

<style scoped>
.skeleton-block {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background:#f7f7f7;
}
</style>
```

### 3. 把我们的骨架屏文件引入到 vue 里面

> 在 main.js 同级新建一个 Skeleton.js 文件引入的 Skeleton.vue，并把它引入到 vue。

```javascript
// - Skeleton.js
import Vue from 'vue'
import Skeleton from './Skeleton.vue'

export default new Vue({
    components: {
        Skeleton
    },
    render: h => h(Skeleton)
})
```

### 4. 配置打包方案

> 在项目根目录新建 vue.config.js,在里面配置 vue-skeleton-webpack-plugin 插件。

```javascript
const path = require('path')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new SkeletonWebpackPlugin({
                webpackConfig: {
                    entry: {
                        app: path.join(__dirname, './src/Skeleton.js')
                    }
                },
                minimize: true
            })
        ]
    }
}
```

### 5. 在浏览器中查看效果

> 因为网络快的时候，我们是不显示骨架屏的，所以要把我们的浏览器网络调慢一点（调整为 solw 3G），以方便我们开发和调试；会看到骨架屏先被渲染出来，然后才会有我们的页面渲染出来。
> ![skeleton.jpg](https://s2.loli.net/2021/12/16/VFjWNrvyP4I1dsw.png)

### 6. 根据路由来渲染不同的骨架

> vue-skeleton-webpack-plugin 框架是支持根据不同路由来渲染不同的骨架屏的，附上地址：
> [vue-skeleton-webpack-plugin 插件地址](https://github.com/lavas-project/vue-skeleton-webpack-plugin)
