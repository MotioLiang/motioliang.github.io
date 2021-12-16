---
title: localStorage 本地储存的 js 插件
date: 2020-04-01
tags:
    - js
categories:
    - Web
---

## 概述

基于 localStorage 本地储存的 js 插件 ，提供有效期、输出 json 数据等功能。

## 方法

| **方法名** |   **说明**   |      **参数**       |
| :--------: | :----------: | :-----------------: |
|  setItem   |   设置缓存   | key, value, expires |
|  getItem   |   获取缓存   |         key         |
| removeItem |   删除缓存   |         key         |
|   clear    | 删除全部缓存 |                     |

## 代码

```js
class Storage {
    // 设置缓存
    setItem(key, value, expires = 0) {
        let options = {
            key,
            value,
            expires, // 设置过期时间(默认天)
            startTime: new Date().getTime() //记录何时将值存入
        }
        // expires设置了以options为值放进去
        if (options.expires) {
            // 数字以天为单位
            if (typeof options.expires === 'number') {
                options.expires = expires * 24 * 60 * 60 * 1000
                localStorage.setItem(options.key, JSON.stringify(options))
            }
        } else {
            if (options.value instanceof Object || options.value instanceof Array) {
                options.value = JSON.stringify(options.value)
            }
            localStorage.setItem(options.key, options.value)
        }
    }

    // 获取缓存
    getItem(key) {
        let item = localStorage.getItem(key)
        if (!item) {
            return null
        }
        //先将拿到的试着进行json转为对象的形式
        try {
            item = JSON.parse(item)
        } catch (error) {
            //如果不行就不是json的字符串，就直接返回
            item = item
        }
        //如果有expires的值，说明设置了失效时间
        if (item.expires) {
            let date = new Date().getTime()

            //取出的时间，与item.expires比较，如果大于就是过期了，如果小于或等于就还没过期
            if (date - item.startTime > item.expires) {
                localStorage.removeItem(key)
                return null
            } else {
                return item.value
            }
        } else {
            return item
        }
    }

    // 删除缓存
    removeItem(key) {
        localStorage.removeItem(key)
    }

    // 删除全部缓存
    clear() {
        localStorage.clear()
    }
}

let storage = new Storage()

storage.setItem('cs', false)
storage.getItem('cs')
```
