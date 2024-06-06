---
title: rimraf 删除依赖 以及安装依赖报错清理缓存
date: 2024-06-04
tags:
    - rimraf
categories:
    - Node
---


于项目太大 所导致的依赖也很大 所以再要手动删除依赖的时候会非常的慢 所以就用到了rimraf来进行删除操作 会节省很多时间 同理删除其他大文件也可以使用

#### 安装`rimraf`

首先npm全局安装一个`rimraf`

```shell
npm install rimraf -g
```

然后就可以使用rimraf 进行删除

```shell
 rimraf node_modules
```

 一般像安装 依赖的时候报错 就可以先删除依赖 然后清理下缓存再进行安装

```shell
1、rimraf node_modules
2、npm cache clean --force
3、npm install
```
