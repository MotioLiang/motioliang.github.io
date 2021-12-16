---
title: es6原生实现观察者模式
date: 2018-12-25
tags:
    - js
    - Proxy
categories:
    - Web
---

## 使用 Proxy 实现观察者模式

> 观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行。

```js
const person = observable({
    name: '张三',
    age: 22
})

function print() {
    console.log('姓名：', person.name, '年龄：', person.age)
}

observe(print)
person.name = '李四'
```

上面代码中，数据**person**是观察目标，函数**print**是观察者，一旦对象发生变化，**print**就会自动执行。

下面，使用**Proxy**写一个观察者模式的最简单实现，即实现**observable**和**observe**这两个函数。思路是**obervable**函数返回一个原始对象的 Proxy 代理，拦截赋值操作，触发充当观察者的各个函数。

```js
const queuedObservers = new Set()
const observe = fn => queuedObservers.add(fn)

const observable = obj => new Proxy(obj, { set })
function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    queuedObservers.forEach(observe => observe())
    return result
}
```

上面代码中，先定义了一个**Set**集合，所有的观察者函数都放进这个集合，然后，**observable**函数返回原始函数对象的代理，拦截赋值操作。拦截函数**set**之中，会自动执行所有的观察者。
