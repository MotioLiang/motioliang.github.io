---
title: vue-router 前端路由的实现原理
date: 2022-03-20
tags:
    - vue
categories:
    - Web
---

## Hash 路由

Hash 即 URL 中#号及其后面的字符，由于 URL 中 Hash 值的改变并不会向服务器发起请求，并且我们也可以通过 `hashchange` 事件对其改变进行监听，因此我们就可以通过改变页面的 Hash 来实现不同视图的匹配与切换。

使用 api 有

```js
// 设置hash
window.location.hash = 'xxxx'
// 获取hash
let hash = window.location.hash
// 监听hash变化
window.addEventListener(
    'hashchange',
    function (event) {
        let newURL = event.newURL
        let oldURL = event.oldURL
    },
    false
)
```

### 创建路由类

原理就是通过键值对的形式保存路由及对应要执行的回调函数，当监听到页面 hash 发生改变时，根据最新的 hash 值调用注册好的回调函数，即改变页面。

```js
class Routers {
    constructor() {
        this.routes = {}
        this.currentUrl = ''
        this.refresh = this.refresh.bind(this)
        window.addEventListener('load', this.refresh, false)
        window.addEventListener('hashchange', this.refresh, false)
    }

    route(path, callback) {
        this.routes[path] = callback || function () {}
    }

    refresh() {
        this.currentUrl = location.hash.slice(1) || '/'
        this.routes[this.currentUrl]()
    }
}
```

### 注册路由

使用 route 方法添加对应的路由及其回调函数即可。以下代码实现了一个根据不同 hash 改变页面颜色的路由，模拟了页面的切换，在实际的 SPA 应用中，对应的就是页面内容的变化了。

```js
var Router = new Routers()
var content = document.querySelector('body')

function changeBgColor(color) {
    content.style.background = color
}

// 添加路由
Router.route('/', () => {
    changeBgColor('yellow')
})
Router.route('/red', () => {
    changeBgColor('red')
})
Router.route('/green', () => {
    changeBgColor('green')
})
Router.route('/blue', () => {
    changeBgColor('blue')
})
```

## History 路由

在 H5 之前，浏览器的 history 仅支持页面之前的跳转，包括前进和后退等功能。

在 HTML5 中，新增以下 API：

```js
// 添加新状态到历史状态栈
history.pushState()
// 用新状态代替当前状态
history.replaceState()
// 获取当前状态对象
history.state
```

`history.pushState` 用于在浏览历史中添加历史记录,但是并不触发跳转,此方法接受三个参数

> 1. state：一个与指定网址相关的状态对象，popstate 事件触发时，该对象会传入回调函数。如果不需要这个对象，此处可以填 null
> 2. title：新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填 null
> 3. url：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址

`history.replaceState` 方法的参数与 `pushState` 方法一模一样，区别是它修改浏览历史中当前纪录,而非添加记录,同样不触发跳转。
popstate 事件,每当同一个文档的浏览历史（即 history 对象）出现变化时，就会触发 `popstate` 事件。
需要注意的是，仅仅调用 `pushState` 方法或 `replaceState` 方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用 `back`、`forward`、`go` 方法时才会触发。

### 创建路由类

原理就是通过键值对的形式保存路由及对应要执行的回调函数，当监听到页面 hash 发生改变时，根据最新的 hash 值调用注册好的回调函数，即改变页面。

```js
class Routers {
    constructor() {
        this.routes = {}
        // 在初始化时监听popstate事件
        this._bindPopState()
    }
    // 初始化路由
    init(path) {
        history.replaceState({ path: path }, null, path)
        this.routes[path] && this.routes[path]()
    }
    // 将路径和对应回调函数加入hashMap储存
    route(path, callback) {
        this.routes[path] = callback || function () {}
    }
    // 触发路由对应回调
    go(path) {
        history.pushState({ path: path }, null, path)
        this.routes[path] && this.routes[path]()
    }
    // 监听popstate事件
    _bindPopState() {
        window.addEventListener('popstate', e => {
            const path = e.state && e.state.path
            this.routes[path] && this.routes[path]()
        })
    }
}
```

### 注册路由

与之前类似，注册每个路由及其对应的回调函数

```js
var Router = new Routers()
var content = document.querySelector('body')
var ul = document.querySelector('ul')

// 初始化
Router.init(location.pathname)

// 添加路由
Router.route('/', () => {
    changeBgColor('yellow')
})
Router.route('/red', () => {
    changeBgColor('red')
})
Router.route('/green', () => {
    changeBgColor('green')
})
Router.route('/blue', () => {
    changeBgColor('blue')
})

ul.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        e.preventDefault()
        Router.go(e.target.getAttribute('href'))
    }
})

function changeBgColor(color) {
    content.style.background = color
}
```
