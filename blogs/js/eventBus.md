---
title: 简版 EventBus
date: 2022-03-12
tags: -js
categories:
    - Web
---

> 实现一个类，首先在 constructor 里找一个地方去存消息列队，直接用一个对象存，然后在 on 方法里去注册事件，其实就是把传进来的函数保存到消息列队里去,在 emit 方法里去调用，如果有，直接把消息列队里的方法拿出来，执行，并且传入参数，如果没有，直接略

```js
let bus = new EventBus()

let btn = document.querySelector('.btn')

btn.onclick = function () {
    bus.emit('send', { str: '触发' })
}

bus.on('send', val => {
    console.log(val)
})

setTimeout(() => {
    bus.off('send')
}, 5000)
```

```js
class EventBus {
    constructor() {
        this.task = {}
    }

    /**
     * 注册事件（订阅）
     * @param {String} name  事件名称
     * @param {Function} fn  回调函数
     */
    on(name, fn) {
        // 没有注册就创建队列
        if (!this.task.hasOwnProperty(name)) this.task[name] = []

        this.task[name].push(fn)
    }

    /**
     * 触发事件（发布）
     * @param {String} name  事件名称
     * @param {...any} args  传入的参数，不限个数
     */
    emit(name, ...args) {
        // 判断队列是否存在
        if (!this.task.hasOwnProperty(name)) return

        this.task[name].forEach(fn => fn(...args))
    }

    /**
     * 移除指定回调（取消订阅）
     * @param {String} name  事件名称
     */
    off(name) {
        // 判断队列是否存在
        if (!this.task.hasOwnProperty(name)) return

        delete this.task[name]
    }
}
```
