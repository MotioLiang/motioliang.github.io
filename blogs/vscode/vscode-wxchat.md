---
title: 使用 VS Code 编写小程序
date: 2021-12-14
tags:
    - vscode
    - wxchat
categories:
    - 开发工具
---

### 插件推荐

**vscode wxml**

[vscode wxml](https://marketplace.visualstudio.com/items?itemName=coderfee.vscode-wxml) 为 VSCode 提供 wxml 语法支持及代码片段

**wxml**

[wxml](https://marketplace.visualstudio.com/items?itemName=cnyballk.wxml-vscode) 微信小程序 wxml 格式化以及高亮组件

### 保存自动编译

如果要实现保存自动格式化，需要在 **VS Code setting.json** 增加下面配置

```json
// 保存格式化
"wxmlConfig.onSaveFormat": true,
// 配置
"wxmlConfig.format": {
	"brace_style": "collapse", // 括号风格
	"end_with_newline": true, // 用换行符结束输出
	"indent_char": " ", // 缩进字符
	"indent_handlebars": false,
	"indent_inner_html": false,
	"indent_scripts": "keep", // 在脚本标签内设置缩进级别
	"indent_size": 3,
	"indent_with_tabs": false, // 制表符缩进
	"max_preserve_newlines": 1, // 保留的最大换行数
	"wrap_attributes_count": 2, // 属性换行数
	"unformatted": "['text']",
	"disable_automatic_closing_labels": false,
	"preserve_newlines": true, // 保留换行符
	"wrap_attributes": "force-expand-multiline" // 属性换行
}
```
