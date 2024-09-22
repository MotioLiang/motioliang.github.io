---
title: 双系统电脑引导修复
date: 2024-09-21
tags:
    - 系统引导
categories:
    - 系统
---

如果在重装系统后，电脑中原有的系统引导丢失，没办法进入其他系统，可以通过以下方法进行修复。

![1670235288851269.png](https://s2.loli.net/2024/09/21/AkEL2fQ9GUcdhqB.png)

**一、下载【EasyBCD】软件：**

官网连接：[https://neosmart.net/EasyBCD](https://neosmart.net/EasyBCD)

离线安装包：[https://share.weiyun.com/8QkN7u7a](https://share.weiyun.com/8QkN7u7a)

**二、安装【EasyBCD】**

![1669692714441508.jpg](https://s2.loli.net/2024/09/21/nUQLYZuo8ewkvNA.jpg)

点击【Next】。

![1669692678240746.jpg](https://s2.loli.net/2024/09/21/DwSx9bh2N7gJUM3.jpg)

点击【I Agree】。

![1669692689406933.jpg](https://s2.loli.net/2024/09/21/XvOEuKg7YJLzZwF.jpg)

再次点击【Next】。

![1669692701293560.jpg](https://s2.loli.net/2024/09/21/s1rbIcJtDqBYhAv.jpg)

点击【Install】。

![1669692714441508.jpg](https://s2.loli.net/2024/09/21/nUQLYZuo8ewkvNA.jpg)

直到出现【Finish】字样，此时代表软件已安装完成。

![1669692724324810.jpg](https://s2.loli.net/2024/09/21/32YhFyEJjuRdzKT.jpg)

在选择语言后，点击【Go】就可以开始运行了。

**三、找到另一个系统**

首先要找到之前的系统都存放在哪个磁盘里。此前重装系统后，新系统会放在 C 盘中，有【Windows】、【用户】、【Program Files】等文件，可以通过这三个文件的特征寻找另一个系统。

打开不同的磁盘寻找，如果同时出现以上三个文件夹，这就是另一个系统所在的位置，接下来就可以使用【EasyBCD】来修复系统了。

**四、添加新条目**

回到【EasyBCD】，点击左侧目录中的【添加新条目】。

![1669692765752544.jpg](https://s2.loli.net/2024/09/21/TCat5Ng9YLOMw2o.jpg)

**五、选择磁盘**

在右侧【Windows】系统下的【驱动器】中，选择另一个系统所在位置的磁盘。

![1669692780348572.jpg](https://s2.loli.net/2024/09/21/fKOVTzMCQ4lL7eB.jpg)

**六、修复完成**

点击【添加新条目】，此时窗口的左下方会出现【Microsoft Windows 已成功添加到启动菜单！】，即代表修复完成，待重启电脑后就可以使用之前的系统了。

![1669692799209229.jpg](https://s2.loli.net/2024/09/21/gwd851U6ieAHCrn.jpg)
