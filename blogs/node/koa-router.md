---
title: Koa2使用koa-combine-routers路由拆分成多文件
date: 2021-11-14
tags:
    - Koa2
categories:
    - Node
---

一般路由可能会遇到下面这样的用法，这属于常规用法，但是模块多了也就不怎么好看了。

```js
app.use(home.routes())
app.use(home.allowedMethods())
app.use(users.routes())
app.use(users.allowedMethods())
```

假设我们有两个路由模块分别为 home、users 首先新建文件夹 routes,并在 routes 文件夹下新建 home.js、user.js、index.js

### routes/home.js

```js
const Router = require('koa-router')
const router = new Router()

router.prefix('/home')

router.get('/', async (ctx, next) => {
    ctx.body = 'Hello home'
})

module.exports = router
```

### routes/user.js

```js
const Router = require('koa-router')
const router = new Router()

router.prefix('/user')

router.get('/', async (ctx, next) => {
    ctx.body = 'Hello User'
})
```

### routes/index.js

```js
const glob = require('glob')
const { resolve } = require('path')
const combineRouters = require('koa-combine-routers')

let registerRouter = () => {
    return glob.sync(resolve(__dirname, './', '**/*.js')).reduce((pre, cur) => {
        if (cur.endsWith('/index.js')) return pre
        let routerModule = require(cur)
        return [...pre, routerModule]
    }, [])
}

const router = combineRouters(registerRouter())

module.exports = router
```

### routes/index.js

```js
const Koa = require('koa')
const app = new Koa()

const registerRouter = require('./routes')

app.use(registerRouter())

app.listen(3000)
```
