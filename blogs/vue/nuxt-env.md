---
title: 'nuxt 配置环境变量'
date: 2021-02-21
tags:
    - vue
    - nuxt
categories:
    - Web
---

1.在根目录下新建 env.js 文件

```js
export default {
    dev: {
        MODE: 'develpment',
        ENV_API: 'http://jsonplaceholder.typicode.com'
    },
    pro: {
        MODE: 'production',
        ENV_API: 'http://jsonplaceholder.typicode.com/110'
    }
}
```

2.在 nuxt.config.js 中

<!--more-->

```js
import env from './env'

export default {
    env: {
        baseUrl: env[process.env.MODE].ENV_API
    }
}
```

3.修改 packages.json

```js
 "scripts": {
    "dev": "cross-env  MODE=dev nuxt",
    "build": "cross-env MODE=pro nuxt build",
    "start": "cross-env MODE=pro nuxt start",
    "generate": "cross-env MODE=pro nuxt generate",
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
    "precommit": "npm run lint"
  },
```
