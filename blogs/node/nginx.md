---
title: deepin15.9安装nginx
date: 2018-12-15
tags:
    - nginx
categories:
    - Node
---

## 使用 wget 命令下载

```bash
wget -c https://nginx.org/download/nginx-1.15.0.tar.gz
```

## 配置

```bash
./configure
```

## 编译安装

### 1.安装

```bash
make
make install
```

<!--more-->

### 2.查看安装路径

```bash
whereis nginx
```

## 启动停止 nginx

```bash
cd /user/local/nginx/sbin/
./nginx
./nginx -s stop
./nginx -s quit
./nginx -s reload
```

> ./nginx -s quit:此方式停止步骤是待 nginx 进程处理任务完毕进行停止。
> ./nginx -s stop:此方式相当于先查出 nginx 进程 id 再使用 kill 命令强制杀掉进程。

## 查询 nginx 进程

```bash
ps aux|grep nginx
```

## 重启 nginx

### 1.先停止再启动（推荐）：

对 nginx 进行重启相当于先停止再启动，即先执行停止命令再执行启动命令。如下：

```bash
./nginx -s quit
./nginx
```

### 2.重新加载配置文件：

当 ngin x 的配置文件 nginx.conf 修改后，要想让配置生效需要重启 nginx，使用-s reload 不用先停止 nginx 再启动 nginx 即可将配置信息在 nginx 中生效，如下：

```bash
./nginx -s reload
```

## 开机自启动

即在 rc.local 增加启动代码就可以了。

```bash
vi /etc/rc.local
```

**增加一行 /usr/local/nginx/sbin/nginx**
设置执行权限：

```bash
chmod 755 rc.local
```

![nginx.png](https://s2.loli.net/2021/12/16/gMe9LVlR7fcE1bK.png)
