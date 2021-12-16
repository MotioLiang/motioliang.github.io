---
title: 去掉字符串中的html标签
date: 2021-8-21
tags:
    - js
categories:
    - Web
---

有些时候只需要获取到字符串中的文字内容，不需要 html 标签，用以下代码实现

```js
//去掉字符串中标签
content = content
    .replace(/<.+?>/g, '')
    .replace(/&nbsp;/gi, '')
    .replace(/\s/gi, '')
```
