---
title: 实现简化版 vue-mini
date: 2022-03-27
tags:
    - vue
categories:
    - Web
---

### 调用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vue-mini</title>
</head>
<body>
    <div id="app">
        <h1>差值表单式</h1>
        <h3>{{msg}}</h3>
        <h3>{{count}}</h3>
        <h1>v-text</h1>
        <h3 v-text="msg"></h3>
        <h1>v-model</h1>
        <input type="text" v-model="msg"></input>
        <input type="text" v-model="count"></input>
    </div>
    <script src="./js/dep.js"></script>
    <script src="./js/watcher.js"></script>
    <script src="./js/compiler.js"></script>
    <script src="./js/observe.js"></script>
    <script src="./js/vue.js"></script>
    <script>
        let vm = new Vue({
            el: '#app',
            data:{
                msg: 'hello vue',
                count: 100,
                person: {son: 'hi'}
            }
        })
    </script>
</body>
</html>
```

### vue.js

```js
/**
 * new Vue({
 *  el:'',
 *  data:{},
 *  option:{}
 * })
 * */
class Vue {
    constructor(options) {
        // 1.通过属性保存选项的数据
        this.$options = options || {}
        this.$data = options.data || {}
        this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
        // 2.把data中的成员转换为getter何setter，注入到Vue实例中
        this._proxyData(this.$data)
        // 3.调用observer对象，监听数据的变化
        new Observer(this.$data)
        // 4.调用compiler对象，解析指令和差值表达式
        new Compiler(this)
    }
    _proxyData(data) {
        // 遍历data中的所有属性
        Object.keys(data).forEach(key => {
            // 把data的属性注入到vue实例中
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get() {
                    return data[key]
                },
                set(newVal) {
                    if (data[key] === newVal) {
                        return
                    }
                    data[key] = newVal
                }
            })
        })
    }
}
```

### dep.js

```js
class Dep {
    constructor(subs) {
        // 存储所有的观察者
        this.subs = []
    }
    // 收集依赖，添加观察者
    addSub(sub) {
        if (sub && sub.update) {
            this.subs.push(sub)
        }
    }
    // 通知所有观察者
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}
```

### watcher.js

```js
class Watcher {
    constructor(vm, key, cb) {
        this.vm = vm
        // data中的属性名称
        this.key = key
        // 回调函数负责更新视图
        this.cb = cb
        // 把watcher对象记录到Dep类的静态属性的target
        Dep.target = this
        // 触发get方法，在get方法中调用addSub
        this.oldValue = vm[key]
        Dep.target = null
    }
    // 当数据发生变化的时候更新视图
    update() {
        let newVal = this.vm[this.key]
        if (newVal === this.oldValue) {
            return
        }
        this.cb(newVal)
    }
}
```

### compiler.js

```js
class Compiler {
    constructor(vm) {
        this.el = vm.$el
        this.vm = vm
        this.compile(this.el)
    }

    // 编译模板，处理文本节点和元素节点
    compile(el) {
        let childNode = el.childNodes
        Array.from(childNode).forEach(node => {
            if (this.isTextNode(node)) {
                // 处理文本节点
                this.compileText(node)
            } else if (this.isElementNode(node)) {
                // 处理元素节点
                this.compileElement(node)
            }
            // 判断node节点是否有子节点，如果有子节点，要递归调用compile
            if (node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        })
    }

    // 编译元素节点，处理指令
    compileElement(node) {
        // 遍历所有的属性节点
        Array.from(node.attributes).forEach(attr => {
            // 判断是否是指令
            let attrName = attr.name
            if (this.isDirective(attrName)) {
                //  v-text ---> text
                attrName = attrName.substr(2)
                let key = attr.value
                this.update(node, key, attrName)
            }
        })
    }
    update(node, key, attrName) {
        let updateFn = this[attrName + 'Updater']
        updateFn && updateFn.call(this, node, this.vm[key], key)
    }
    // 处理v-text 指令
    textUpdater(node, value, key) {
        node.textContent = value
        new Watcher(this.vm, key, newValue => {
            node.textContent = newValue
        })
    }

    // 处理v-model 指令
    modelUpdater(node, value, key) {
        node.value = value
        new Watcher(this.vm, key, newValue => {
            node.value = newValue
        })
        // 双向绑定
        node.addEventListener('input', () => {
            this.vm[key] = node.value
        })
    }

    // 编译文本节点，处理差值表达式
    compileText(node) {
        // console.dir(node)
        let reg = /\{\{(.+?)\}\}/
        let value = node.textContent
        if (reg.test(value)) {
            let key = RegExp.$1.trim()
            node.textContent = value.replace(reg, this.vm[key])

            // 创建watcher对象，当数据改变更新视图
            new Watcher(this.vm, key, newValue => {
                node.textContent = newValue
            })
        }
    }

    // 判断元素属性是否是指令
    isDirective(attrName) {
        return attrName.startsWith('v-')
    }

    // 判断节点是否是文本节点
    isTextNode(node) {
        return node.nodeType === 3
    }

    // 判断节点是否是元素节点
    isElementNode(node) {
        return node.nodeType === 1
    }
}
```

### observer.js

```js
class Observer {
    constructor(data) {
        this.walk(data)
    }
    // 把对象属性转换成响应式数据
    walk(data) {
        // 1. 判断data是否对是对象
        if (!data || typeof data !== 'object') {
            return
        }
        // 2.遍历data对象的所有属性
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }
    defineReactive(obj, key, value) {
        let that = this
        // 负责收集依赖，并发出通知
        let dep = new Dep()
        // 如果value是对象，把value内部的属性转换成响应式数据
        this.walk(value)
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                // 收集依赖
                Dep.target && dep.addSub(Dep.target)
                return value
            },
            set(newVal) {
                if (newVal === value) {
                    return
                }
                value = newVal
                // 如果新的值是一个对象，把新值的属性转换成响应式数据
                that.walk(newVal)
                // 发送通知
                dep.notify()
            }
        })
    }
}
```
