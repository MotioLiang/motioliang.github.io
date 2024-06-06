---
title: Vite 项目推荐使用的几个插件
date: 2024-06-02
tags:
    - vite
categories:
    - 开发工具
---

`Vite` 可以使用插件进行扩展，这得益于 `Rollup` 优秀的插件接口设计和一部分 `Vite` 独有的额外选项。
在 `Vue3 + Vite` 开发中，有下面几个插件帮助，无异于锦上添花，不失为日常开发中的神器。

### 1、`unplugin-vue-components`

`Vue` 的按需组件自动导入。[github地址](https://github.com/antfu/unplugin-vue-components)

#### 自动导入UI库

内置了大多数常见UI库解析器。以 [Ant Design Vue](https://www.antdv.com/docs/vue/introduce-cn) 为例。

- 安装

```shell
pnpm add unplugin-vue-components -D
// 安装ant-design-vue
pnpm add ant-design-vue
```

- Vite配置使用

```js
// vite.config.js
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver
} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ]
})
```

- 使用插件，代码前后对比

模板代码不变：

```html
<template>
  <a-button>Add</a-button>
</template>
```

使用插件前需要在 `<script>` 标签 `import` 该组件， 如下：

```js
<script setup>
import { Button } from 'ant-design-vue'
</script>
```

使用插件后，就不需要引入了，直接使用 `ant-design-vue` 组件。

### 2、`unplugin-auto-import`

自动导入 `Composition API`。[github地址](https://github.com/antfu/unplugin-auto-import)

- 安装

```bash
pnpm add unplugin-auto-import -D
```

- Vite配置使用

```js
// vite.config.js
import { defineConfig } from 'vite'
import autoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    autoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      dts: false
    })
  ]
})
```

- 使用插件，代码前后对比

使用前：

```js
import { computed, ref } from 'vue'
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

使用后：

```js
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

### 3、`rollup-plugin-visualizer`

打包分析插件。

- 安装

```bash
pnpm add rollup-plugin-visualizer -D
```

- vite配置

```js
// vite.config.js
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    visualizer()
  ]
})
```

- 使用插件

执行打包命令（`pnpm build`）后，会在根目录下生成一个 `stats.html`文件，用浏览器打开后，如下图：

![visualizer](https://s2.loli.net/2024/06/03/9yHNJXCoheIs71z.png)

### 4、`vite-plugin-compression`

使用 `gzip` 或 `brotli` 压缩资源。打包优化的时候会使用到这个插件，减小打包体积。[github地址](https://github.com/vbenjs/vite-plugin-compression)

- 安装

```bash
pnpm add vite-plugin-compression -D
```

- vite配置使用

两种格式（`gz` 格式和 `br` 格式）配置。

```js
// vite.config.js
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    // gz格式
    compression({
      threshold: 1024 * 500,   // 体积大于 threshold 才会被压缩,单位 b
      ext: '.gz',   // 压缩文件格式
      deleteOriginFile: false   // 是否删除源文件
    })
    // br格式
    // compression({
    //   threshold: 1024 * 500,    // 体积大于 threshold 才会被压缩,单位 b
    //   ext: '.br',
    //   algorithm: 'brotliCompress',
    //   deleteOriginFile: false
    // })
  ]
})
```

- 参数说明

| params             | type                                | default       | default                                                      |
| ------------------ | ----------------------------------- | ------------- | ------------------------------------------------------------ |
| verbose            | boolean                             | true          | Whether to output the compressed result in the console       |
| filter             | RegExp or (file: string) => boolean | DefaultFilter | Specify which resources are not compressed                   |
| disable            | boolean                             | false         | Whether to disable                                           |
| threshold          | number                              | 1025          | It will be compressed if the volume is larger than threshold, the unit is b |
| algorithm          | string                              | gzip          | Compression algorithm, optional [‘gzip’,‘brotliCompress’ ,‘deflate’,‘deflateRaw’] |
| ext                | string                              | .gz           | Suffix of the generated compressed package                   |
| compressionOptions | object                              | -             | The parameters of the corresponding compression algorithm    |
| deleteOriginFile   | boolean                             | -             | Whether to delete source files after compression             |
