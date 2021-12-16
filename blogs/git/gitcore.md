---
title: Git 默认不区分大小写
date: 2021-8-21
tags:
    - git
categories:
    - Web
---

::: tip 背景：
通过代码规范，修改了包名为全小写（修改了文件夹目录），但发现 push 后，git 服务器的文件夹目录还是为大写
:::

**解决方法：**

git 默认是不区分大小写的，意思是你修改一个文件名/文件夹的时候，**git status** 是不会提示你有修改的

可以通过 **git config --get core.ignorecase** 查看默认配置

通过 **git config core.ignorecase false** 设置为区分大小写

然后 **git status** 就可以看到变动

然后 **push** 到远程服务器
