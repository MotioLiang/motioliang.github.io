---
title: Win10系统下基于gitblit搭建git服务器
date: 2020-02-06
tags:
    - git
categories:
    - Node
---

<!-- more -->

## JDK 安装及配置环境变量

因为 Gitblit 需要 JDK，所以需要配置 java 环境。在 java 官网下载的最新 JDK 是 13.0.0，经过我的测试发现会报错。所以改成了 JDK8.0，之后就可以正常运行了。

> 链接：[https://pan.baidu.com/s/1N1Q-pp21WkD32g371gwqOg](https://pan.baidu.com/s/1N1Q-pp21WkD32g371gwqOg)
> 提取码：iuxw

### 配置 JDK 环境变量

配置如下，**“我的电脑”-右键-“属性”-（左侧）高级系统设置-（弹窗右下角）环境变量配置，** 窗口上方是用户变量，下方是系统变量，变量都配置在用户变量里！

> 创建 JAVA_HOME，值是你的刚刚 jdk 的安装目录，比如 C:\Program Files (x86)\Java\jdk1.8.0_101

> 创建 CLASS_PATH，值 .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar （注意最前面有一点）

> 编辑 PATH，把值放到最前边　.;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;

![var.jpg](https://s2.loli.net/2021/12/16/xGCujRT7kILFP2g.png)

### 检查安装和配置情况

在命令行窗口中，输入以下两行命令

![java.png](https://s2.loli.net/2021/12/16/v59WchJLN3HBDbZ.png)

## Gitblit 的获取

传送门[http://www.gitblit.com/](http://www.gitblit.com/)(Gitblit 官网)，
可以看到 1.8.0 版本，貌似还是 2016 年发布的。点击下载 windows 版本，下载后不用安装，直接解压，我这里是放在：
`D:\Git\gitblit\gitblit-1.8.0` 路径下

![gitblitcom.png](https://s2.loli.net/2021/12/16/ThXpwiol2xAQB5z.png)

## 创建 Git 服务器资料存储文件夹

创建文件夹为：`D:\Git\GitRepository`

![gitfolder.png](https://s2.loli.net/2021/12/16/p9UuNlIP2OfbvsH.png)

## 配置 Gitblit 属性

1、找到`D:\Git\gitblit\gitblit-1.8.0\data\defaults.properties`文件，我这里用“vscode”打开，你也可以用其它可编辑软件打开
将`git.repositoriesFolder = D:/Git/GitRepository` （我们前面创建的 Git 服务器的资料存储路径）

> 注意! 其中的 D:\Git\GitRepository 中的”\”一定要用”/“。

![repositoriesFolder.png](https://s2.loli.net/2021/12/16/IYRGOjhlX5A78HE.png)

2、找到 server.httpPort，设定 http 协议的端口号: 8442

![port.png](https://s2.loli.net/2021/12/16/3eF9K61UaBXdioO.png)

3、找到 server.httpBindInterface，设定服务器的 IP 地址。这里就设定你电脑的 IP 地址：

> 我电脑的 IP 地址为（192.168.1.101）

![ip.png](https://s2.loli.net/2021/12/16/Lr7y8l3cnUViOJq.png)

4、找到 server.httpsBindInterface，设定为 localhost

![localhost.png](https://s2.loli.net/2021/12/16/y9thkX5PRzijboI.png)

5、 Ctr + s 保存文件，关闭。

## Gitblit 批处理文件的修改与执行

进入文件夹 gitblit，找到 gitblit.cmd 文件，双击运行。

![gitblitcmd.png](https://s2.loli.net/2021/12/16/MJksE23Gm6u8qNz.png)

![gitblitcmdrun.png](https://s2.loli.net/2021/12/16/bRJatO4cyjs9nlq.png)

## 设置以 Windows Service 方式启动 Gitblit

1、在文件夹 gitblit\gitblit-1.8.0 中，找到 installService.cmd 文件，打开文件（我这里用记事本)。

![service.png](https://s2.loli.net/2021/12/16/gwSbPTvEmRLpBM8.png)

2、用“记事本”打开，修改 ARCH

> 32 位系统：`SET ARCH=x86`
>
> 64 位系统：`SET ARCH=amd64 `

3、 添加 CD 为程序目录

> `SET CD=D:\Git\gitblit`(你的实际目录)

![configservice.png](https://s2.loli.net/2021/12/16/FzQtx3dUunj2WGg.png)

4、修改 StartParams 里的启动参数，给空就可以了.

![startp.png](https://s2.loli.net/2021/12/16/H8aw6KnsvSdTklZ.png)

5、Ctr + s 保存，关闭文件。

6、以管理员权限运行 installService.cmd。

在计算机服务里面查看有 gitblit 服务这一栏

> ps(如果要卸载这个服务,可以以管理员权限运行 CMD，在命令行中输入 sc delete gitblit 即可卸载)

![serviceinfo.png](https://s2.loli.net/2021/12/16/z6AZoxeHVgnXCad.png)

## 在浏览器中查看 gitblit 服务器情况：

在浏览器地址栏中输入：`192.168.1.101:8442`

可以看到安装成功，初始默认账号：admin 密码：admin

![show.png](https://s2.loli.net/2021/12/16/ehkjnDLpgN7mzvo.png)
