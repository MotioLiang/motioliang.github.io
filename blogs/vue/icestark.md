---
title: 微前端 icestark 教程、规范、常见问题
date: 2024-06-30
tags:
    - vue
    - icestark
categories:
    - Web
---

### 1.1、介绍

[icestark](https://github.com/ice-lab/icestark) 是一个面向大型系统的微前端解决方案，适用于以下业务场景：

- 后台比较分散，体验差别大，因为要频繁跳转导致操作效率低，希望能统一收口的一个系统内
- 单页面应用非常庞大，多人协作成本高，开发/构建时间长，依赖升级回归成本高
- 系统有二方/三方接入的需求

![2.png](https://s2.loli.net/2024/06/29/MyXdKEZ6eqp3CRh.png)

### 1.2、项目结构

# 2、icestark 工作流程

icestark 目前支持三种加载模式，分别是 `script`、`fetch` 和 `import`

- `script`

默认加载方式。该模式下，icestark 会通过 HTML script  标签加载微应用脚本资源，再次加载时充分利用浏览器缓存进行加载。

- `fetch`

当指定 loadScriptMode 为 fetch，或配置微应用沙箱模式时，会通过 window.fetch 或用户自定义的 fetch 能力 加载并缓存脚本资源。再次加载时，会充分利用本地内部缓存进行加载。

- `import`

加载 ES modules 类型微应用的主要方式，该模式会通过 Dynamic Import 动态加载脚本资源。

推荐使用 `import` 当前项目模板也是采用 `import` 模式进行加载微应用

![icestark.jpg](https://s2.loli.net/2024/06/23/FTCl21fnpikmBwG.jpg)

### 2.1、项目结构图

![1.png](https://s2.loli.net/2024/06/29/ysAuXbQ2dVmfUB4.png)

# 3、Vue 主应用接入

### 3.1、主应用框架目录规范

```Shell
── project-name                      项目名称
   ├── public                        项目公共目录
   │   ├── favicon.ico                   Favourite 图标
   ├── src                           项目源码目录
   │   ├── api                       把所有请求数据的接口，按照模块在单独的JS文件中
   │   ├── assets                    静态资源目录，公共的静态资源，图片，字体等
   │   │   ├── iconfont                  字体资源
   │   │   ├── images                    图片资源
   │   │   ···
   │   ├── components               公共组件目录
   │   ├── i18n                     多语言配置
   │   ├── libs                     公共脚本
   │   ├── micro                    微服务配置
   │   ├── routes                   前端路由
   │   │   └── index.js
   │   │   ···
   │   ├── store                    数据中心
   │   ├── style                    公共样式，可以是各种预处理语言
   │   │   ├── global.scss              公共样式
   │   │   ├── reset.css                重置样式
   │   │   ···
   │   └── views                     页面目录，所有业务逻辑的页面都应该放这里
   │       ├── home                      应用首页
   │       │   └── index.vue
   │   ├── main.js                   入口js文件
   │   ├── App.vue                   根组件
   │       ···
   ├── .env.development              Vue 开发环境的配置
   ├── .env.uat                      Vue 测试环境的配置
   ├── .env.test                     Vue 预发版环境的配置
   ├── .env.pro                      Vue 生成环境的配置
   ├──  index.html                   页面入口 HTML 模板
   ├── .eslintrc.js                  Eslint 配置文件
   ├── .gitignore                    Git 忽略文件
   ├── package.json                  包依赖文件
   ├── package-lock.json             依赖包版本管理文件
   ├── README.md                     项目介绍
   ├── vite.config.js                脚手架配置
   ···
```

### 3.2、安装 icestark 依赖

```Shell
npm i --save @ice/stark
```

### 3.3、配置微应用加载方式和地址

在 **src/micro/apps.js** 里面进行配置，采用 `import` 的形式进行加载

##### 3.3.1、配置路径

```JavaScript
── project-name
   ├── src
   │   ├── micro
   │   │   └── apps.js       子站加载配置地址
   ...
```

##### 3.3.2、参考配置

```JavaScript
export default function (appContainer) {
  return [
    {
      // 微应用唯一标识也是子站的 base 地址
      name: 'sme',
      // 微应用激活规则
      activePath: (url) => url.includes('/sme'),
      // 页面标题
      title: 'sme',
      // 微应用挂载 DOM 节点
      container: appContainer,
      // 微应用 JavaScript 资源加载方式
      loadScriptMode: 'import',
      // 标识微应用是否是一个标准的 UMD 微应用
      umd: true,
      // 微应用对应的 html 入口
      entry: window._env_.SME_PATH
    }
  ];
}
```

### 3.4、子站地址配置环境变量

```JavaScript
// 开发环境
SME_PATH=http://sme.ruijienetwork.com.cn:8088/sme

// 测试环境
SME_PATH=https://sme.ruijienetwork.com.cn/sme
```

### 3.5、定义基准路由

##### 3.5.1、配置路径

```JavaScript
── project-name
   │   ├── routes
   │   │   └── index.js
   │   │   └── router.js
   │   │   ├── modules              子站统一配置文件夹
   │   │   │   └── sme.js           sme 子站路由配置
   │   │   │   │···
```

##### 3.5.2、参考配置

```JavaScript
import { createRouter, createWebHistory } from "vue-router";
import routers from "./router";
import { getBasename } from '@ice/stark-app';

const router = createRouter({
  history: createWebHistory(),
  base: getBasename(),
  routes: routers,
});

export default router;
```

### 3.6、配置微应用路由

```JavaScript
export default [
  {
    path: "/sme",
    name: "sme",
    meta: {
      title: "sme",
    },
    component: () => import("@/layout/index.vue"),
    redirect: 'sme/saleAndAgentName',
    children: [
      {
        path: "saleAndAgentName",
        name: "saleAndAgentName",
        meta: {
          title: "选择订单",
        },
      },
      {
        path: "createdOrderName",
        name: "createdOrderName",
        meta: {
          title: "创建订单",
        },
      },
    ]
  },
];
```

### 3.7、在导航组件，注册微应用

在 src/layout/index.vue 里面通过 `registerMicroApps` 来注册微应用

```HTML
<template>
  <a-layout has-sider>
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="goRouter">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <a-button type="primary" @click="jumpHomePage">首页</a-button>
      </a-layout-header>

      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center', height: 'calc(100vh - 100px)', 'overflow-y': 'auto' }">
          <!-- 定义微应用的容器 -->
          <div id="ice-container" />
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { UserOutlined, VideoCameraOutlined} from '@ant-design/icons-vue';
import  apps  from "@/micro/apps";
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import { isInIcestark } from "@ice/stark-app";
import start from '@ice/stark/lib/start';
import { registerMicroApps } from '@ice/stark/lib/apps';

const router = useRouter();

const selectedKeys = ref(["1"]);

// 获取微应用挂载的 dom 节点
function getAppContainer (value = 'ice-container') {
  return document.getElementById(value);
}

// 注册微应用
function registerApps () {
  registerMicroApps(apps(getAppContainer()));
}

// 启动微应用，监听回调
function setMicroAppStart () {
  start({
    onAppEnter(activeApps) {
      console.log({ activeApps });
    },
    onError (activeApps) {
      console.log({ activeApps });
    },
    onLoadingApp: (activeApps) => {
      console.log({ activeApps });
    },
    onFinishLoading: (activeApps) => {
      console.log({ activeApps });
    },
  });
}

onMounted(() => {
  // 判断是后已经存在 icestark 环境，防止重复注册
  if(!isInIcestark()){
    registerApps();
    setMicroAppStart();
   }
});

function jumpHomePage() {
  router.push('/');
}

function goRouter({key}) {
  if(key === '1'){
    router.push({path: '/sme/SaleAndAgentName'});
  }
  if(key === '2'){
    router.push({path: '/sme/CreatedOrderName'});
  }
}
</script>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
```

# 4、Vue 微应用接入

### 4.1、安装 icestark 依赖

```Shell
npm i @ice/stark @ice/stark-app -S
```

### 4.2、安装 vite-plugin-index-html

```SQL
npm i vite-plugin-index-html  -D
```

通过插件配置使打包生成支持 import 格式的文件，由于使用 `vite-plugin-index-html` 替换 `vite-plugin-html` 导致打包不能配置变量，也就不能配置环境变量，需要将子站的环境变量统一放到主站里面

在 vit.config.js 里面新增配置

```JavaScript
import htmlPlugin from "vite-plugin-index-html";

export default defineConfig({
  plugins: [
    htmlPlugin({
      input: "./src/main.js",
      preserveEntrySignatures: "exports-only",
    })
});
```

### 4.3、应用入口适配

在 main.js 中进行调整，支持 `umd` 格式导出 `mount/unmount` 方法进行挂载和卸载，兼容非 icestark 环境的情况下执行 vue 的挂载

```JavaScript
import { createApp } from "vue";
import App from "~/App.vue";
import router from "~/router";
import { isInIcestark } from "@ice/stark-app";

let app = null;

export function mount ({ container }) {
  app = createApp(App);
  app.use(router);
  app.mount(container);
}

export function unmount () {
  app.unmount();
}

// 非 icestark 环境下进行默认注册，注：挂载的元素 id 不能重复
if (!isInIcestark()) {
  createApp(App).use(router).mount("#apps");
} else {
  const mountedNode = getMountNode();
  mountedNode.innerHTML = "";
  createApp(App).use(router).mount(mountedNode);
}
```

### 4.4、定义基准路由

vue-router base 路径兼容处理支持 icestark 环境运行和默认环境运行

```JavaScript
import { createRouter, createWebHistory } from "vue-router";
import routers from "./router";
import { getBasename } from "@ice/stark-app";
import isInIcestark from "@ice/stark-app/lib/isInIcestark";

// 返回一个函数，重复进入 vue 应用的时候，重置 routes 实例
const genRoute = () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: routers,
      base: isInIcestark() ? getBasename() : "/sme",
    });
    
    return router;
}

export default router;
```

### 4.5、定义基准路由

在 vite.config.js 中配置 base 地址， base 地址和域名后缀以及主站加载子站的 name 相同

```JavaScript
import { defineConfig } from "vite";

export default defineConfig({
  base: "/sme/",
});
```

# 5、项目模板

### 5.1、应用技术

 vite + vue + [ant-design-vue](https://vue-components-uat.ruijie.com.cn/components/overview) + [icestark](https://micro-frontends.ice.work/)

### 5.2、模板内容

主应用（使用红色主题） + 子应用（默认蓝色主题）

<!-- ### 5.3、模板下载

下载地址：<https://ruijie.feishu.cn/drive/folder/OxQWfE9eNlJIIWd641gcLCqgnqe?from=from_copylink> -->

# 6、常见问题解决

### 6.1、在主应用和子应用多次切换时，主应用会出现样式丢失问题

这个问题是由于子应用运行在 `boostrap` 阶段，此时加载的样式会被 `patch` 记录，并在 `rebuild` 阶段还原。 懒加载组件运行在 `mounting` 阶段，此时加载的样式只会被记录一次。 所以在第一次切换时，会被 `rebuild` 还原，但是此时记录将被清空。 在超过两次的切换后，组件样式不再加载，无法添加新的记录，导致无法进行 `rebuild`，最终导致样式丢失。

解决方案：主应用加载组件，不使用路由懒加载

### 6.2、子站图片地址加载失败

图片地址是相对地址，导致 dom 节点图片真实地址指向主站，导致图片加载失败

解决方案：在子站配置 server 的 origin 是图片在地址显示为完整的路径地址

在vite.config.js 中新增配置如下

```JavaScript
  server: {
    host: "sme.ruijienetwork.com.cn",
    port: 8088,
    origin: "http://sme.ruijienetwork.com.cn:8088/",
  }
```

### 6.3、主站和子站使用统一组件库，不同主题导致样式污染

主站和子站同时使用 rj-ant-design-vue 主站使用 红色主题的，其中一子站使用，蓝色主题色，导致子站样式影响主站样式

解决方案：主站或子站配置， rj-ant-design-vue 的样式前缀

以主站配置为例

1、在 app.vue 中，配置前缀别名

```HTML
<template>
  <div id="app">
    <a-config-provider prefix-cls="partenrs-ant">
      <router-view />
    </a-config-provider>
  </div>
</template>
```

2、在 vite.config.js 中配置 less 变量

```JavaScript
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "@ant-prefix": "partenrs-ant"
        },
        javascriptEnabled: true,
      },
    },
  },
```

### 6.4、频繁切换主应用界面和子应用界面，子应用不显示

在切换主站界面和子站界面时，子站跳转主站界面会执行 unmount 进行卸载，在次访问子站时数据存在缓存，contaniner 存在 dom 结构，导致子站执行 mount 失败

解决方案：在 vue 挂在的时候通过 id 值进行挂载

```JavaScript
let app = null;
 
export function mount ({ container }) {
  app = createApp(App);
  app.use(router);
  app.mount(`#${container.getAttribute("id")}`);
}
```

### 6.5、子站下载本地的静态文件

```JavaScript
import templateXlsx from '@/assets/文件.xlsx';

const fileDownload = () => {
  state.downloadLoading = true;
  const link = document.createElement('a');
  link.href = templateXlsx;
  link.style.display = 'none';
  link.setAttribute('download', '文件.xlsx');
  link.click();
  state.downloadLoading = false;
};
```
