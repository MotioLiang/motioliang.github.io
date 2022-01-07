---
title: 在 vue 中使用 Element 的 Message 组件，解决弹窗重复弹出
date: 2022-01-07
tags:
    - vue
    - element-ui
categories:
    - Web
---

### 1. 在 utils 文件夹中新建 message.js

```js
import { Message } from 'element-ui'

/**
 * @desc 打开提示框
 * @param {object} options 指 Element Message Options
 * @param {string} type 主题
 * @param {boolean} single 是否只显示一个，默认: true
 * @returns {object} 当前 Element Message 的实例
 */
function showMessage(options, type, single = true) {
    if (single) {
        if (document.getElementsByClassName('el-message').length === 0) {
            return type ? Message[type](options) : Message(options)
        }
    } else {
        return type ? Message[type](options) : Message(options)
    }
}

const DonMessage = function (options) {
    return showMessage(options || {})
}

DonMessage.success = options => showMessage(options, 'success')

DonMessage.warning = options => showMessage(options, 'warning')

DonMessage.info = options => showMessage(options, 'info')

DonMessage.error = options => showMessage(options, 'error')

DonMessage.closeAll = Message.closeAll

export default DonMessage
```

### 2. 引入文件

```js
import message from '@u/message'
```

-   js 文件中直接使用

```js
message.warning('请登录')
```

-   挂载到 vue 原型上

```js
// main.js
Vue.prototype.$message = message

// vue文件中调用
this.$message.warning('请登录')
```
