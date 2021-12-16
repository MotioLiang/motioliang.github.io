---
title: el-checkbox选中时页面文字抖动
date: 2020-09-02
tags:
    - vue
    - element-ui
categories:
    - Web
---

## el-checkbox 选中时页面文字抖动

vue 项目开发中，关于 el-checkbox，在选中的时候出现抖动问题，搜集到的信息，记录下来方便使用：在写在没有 scoped 的 style 里面写样式

### 1.表单验证信息出现时页面抖动

```css
.reprint-remark-form .el-form-item__error {
    transition: none !important;
}
```

### 2.多选框选中时页面抖动

```css
.reprint-remark-form .el-form-item__error {
    transition: none !important;
}
```

### 3.单选框选中时页面抖动

```css
.reprint-remark-form .el-form-item__error {
    transition: none !important;
}
```

### 4.下拉框触发时页面抖动

```css
.reprint-remark-form .el-form-item__error {
    transition: none !important;
}
```

### 5.element 中的 icon 之一：

```css
.reprint-remark-form .el-form-item__error {
    transition: none !important;
}
```

### 6.el-tab 标签页切换时页面抖动

```css
.reprint-remark-form .el-form-item__error {
    transition: none !important;
}
```

参考: [https://blog.csdn.net/qq_42345108/article/details/102948191](https://blog.csdn.net/qq_42345108/article/details/102948191/).
