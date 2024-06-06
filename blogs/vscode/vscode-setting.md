---
title: VS Code 深度配置
date: 2024-06-02
tags:
    - vscode
categories:
    - 开发工具
---

看完本文，你将

- 让你的 VSCode 打字流畅度提升 114 倍
- 不同工程使用各自的项目配置、插件
- 更加美观的自定义窗口
- 更加智能代码提示、替换
- 更加清晰的代码块结构，能一目了然<https://gitee.com/cjl2385/dig-for-gold/tree/master/VSCodehttps://gitee.com/cjl2385/dig-for-gold/tree/master/VSCode地看出嵌套关系>
- 删掉那些标题党推荐的无用插件，使用 VSCode 自带的功能
- 自定义代码颜色，VSCode 主题

# **现况概要**

我每天逛各种社区，看到的关于 VSCode 的文章，99.99% 都是 **插件推荐**

而这些插件，说真的作用不大，很多都是 VSCode 内置的功能，而且同质化严重 他们也就知道那几个插件，没什么可说的

于是乎，我只能自己一点点的摸索 VSCode 最佳配置实践 今天有空就写一点吧

# **安装**

没错，这也要讲，不是我水，因为有些时候，你下载速度很慢 所以你要使用镜像下载

详细教程搜 **VSCode镜像下载**

注意，下载最新版的，因为我讲的配置，很多是新特性 目前我的版本是 `1.89.0`像 VSCode 这种良心的应用，无脑装最新版即可

# **配置**

第一步下载中文插件，这个大家应该都会，搜：**Chinese (Simplified) (简体中文)**

第二步，打开设置，快捷键 *Ctrl + ,*

第三步，打开 `setting.json`

![640.webp](https://s2.loli.net/2024/06/03/b5vErm6pVy9RxMo.webp)

## **丝滑打字配置**

这四行配置加入后，你马上会给我点赞 你将体会到如同潺潺流水，流过你手的感觉 这是全新的体验，是绝大多数编辑器不具备的体验

```
{
    "editor.smoothScrolling": true,
    "editor.cursorBlinking": "expand",
    "editor.cursorSmoothCaretAnimation": "on",
    "workbench.list.smoothScrolling": true,
}
```

## **鼠标控制大小**

直接上图，按下 *Ctrl + 鼠标滚轮*

![1.gif](https://s2.loli.net/2024/06/03/JX2xOmNfFTZQa6D.gif)

```
{
    "editor.mouseWheelZoom": true,
}
```

## **彩虹括号与作用域块线条提示**

一堆插件推荐的文章，天天叫你装插件实现，明明自带的功能

```
{
    "editor.guides.bracketPairs": true,
    "editor.bracketPairColorization.enabled": true,
}
```

![2.webp](https://s2.loli.net/2024/06/03/LR9TONQdJ3FGBtj.webp)

## **更加智能的代码提示**

```
{
    // 控制活动代码段是否阻止快速建议
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    // 除了 `Tab` 键以外， `Enter` 键是否同样可以接受建议
    // 这能减少“插入新行”和“接受建议”命令之间的歧义
    "editor.acceptSuggestionOnEnter": "smart",
    // 代码补全列表中，优先选择最近的建议
    "editor.suggestSelection": "recentlyUsedByPrefix",
}
```

有一种场景，比如你在输入代码，输到一般，你突然想要代码补全 于是你调出建议，但是补全的代码会直接插入，不会覆盖你的输入 这时代码就会多一点内容出来，那么就报错了

这个也是可以配置的

```
{
    "editor.suggest.insertMode": "replace",
}
```

## **自动补全括号、引号**

```
{
    "editor.autoClosingBrackets": "beforeWhitespace",
    "editor.autoClosingDelete": "always",
    "editor.autoClosingOvertype": "always",
    "editor.autoClosingQuotes": "beforeWhitespace",
}
```

## **关闭缩进猜测**

如果你打开一个文件，他的缩进是 2，而你的配置是 4 那么你格式化时，他很可能不按你的配置来

```
{
     // 关闭缩进猜测
    "editor.detectIndentation": false,
    "editor.tabSize": 4,
}
```

## **美化窗口**

window 默认窗口如下，丑陋至极

![3.webp](https://s2.loli.net/2024/06/03/T3ACcq2G6JQbngM.webp)

配置后使用 VSCode 自己的窗口

![4.webp](https://s2.loli.net/2024/06/03/3VtwrU1hJdzXkBx.webp)

```
{
    "window.dialogStyle": "custom",
}
```

## **自动换行和行高**

设置了这个，就不用横向滚动了

```
{
    "editor.wordWrap": "on",
    "editor.lineHeight": 1.5,
}
```

## **紧凑的文件夹模式**

```
{
    // 文件夹紧凑模式
    "explorer.compactFolders": true,
    "notebook.compactView": true,
}
```

设置后会把没用的东西折叠，利于啰嗦的 *Java* 项目

![5.webp](https://s2.loli.net/2024/06/03/GfH8vX6Ne53osql.webp)

## **格式化自动删分号**

无意义的分号，不加为妙。现代编程语言都可以不用分号

```
{
    "javascript.format.semicolons": "remove",
    "typescript.format.semicolons": "remove",
}
```

## **Typescript 语言设置中文**

![6.webp](https://s2.loli.net/2024/06/03/NrmflY8gKC5qiPQ.webp)

```
{
    "typescript.locale": "zh-CN",
}
```

## **枚举类型数值提示**

![7.webp](https://s2.loli.net/2024/06/03/dhyUox3ev9cnGMV.webp)

```
{
    "typescript.inlayHints.enumMemberValues.enabled": true,
}
```

## **JS 获得所有类型推导**

如果你全开，那就满屏幕都是类型

![8.webp](https://s2.loli.net/2024/06/03/LeMTarWof38PxkC.webp)

在设置里搜 `inlayHints`即可，你自行选择 我的配置如下

```
{
    // 类型提示
    "javascript.inlayHints.enumMemberValues.enabled": true,
    "javascript.inlayHints.functionLikeReturnTypes.enabled": false,
    "javascript.inlayHints.parameterNames.enabled": "none",
    "typescript.inlayHints.enumMemberValues.enabled": true,
    "typescript.preferences.preferTypeOnlyAutoImports": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "typescript.preferences.includePackageJsonAutoImports": "on",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "javascript.preferences.quoteStyle": "single",
    "typescript.preferences.quoteStyle": "single",
}
```

## **TS 导入、重命名、补全自动更新相关引用**

```
{
    "typescript.preferences.preferTypeOnlyAutoImports": true,
    "typescript.preferences.includePackageJsonAutoImports": "on",
    "javascript.suggest.autoImports": true,
    "typescript.suggest.autoImports": true,
    "vue.updateImportsOnFileMove.enabled": true,
}
```

## **Vue 自动补全 .value 和缺失属性提醒**

```
{
    "vue.inlayHints.missingProps": true,
    "vue.autoInsert.dotValue": true,
}
```

## **关闭开屏 VSCode 的亲切问候**

```
{
    "workbench.startupEditor": "none",
}
```

## **自动猜测文本编码**

```
{
    "files.autoGuessEncoding": true,
}
```

## **保存自动删除末尾空格**

这个想开就开，我不开，因为影响 md 格式

```
{
    "files.trimTrailingWhitespace": false,
}
```

## **搜索吸附目录**

新版特性，你要更新噢

![9.webp](https://s2.loli.net/2024/06/03/SXos73qK1TibFd6.webp)

```
{
     "search.searchEditor.singleClickBehaviour": "peekDefinition",
}
```

## **父级自动吸附置顶**

![10.webp](https://s2.loli.net/2024/06/03/aJOl1A6xReDNwGK.webp)

```
{
    "editor.stickyScroll.enabled": true,
}
```

## **终端代码补全**

实验性配置

![11.webp](https://s2.loli.net/2024/06/03/OBSU6f4sey8XZpr.webp)

```
{
    "terminal.integrated.shellIntegration.suggestEnabled": true,
}
```

## **终端命令置顶**

图我就不放了，就是吸顶

```
{
    "terminal.integrated.stickyScroll.enabled": true
}
```

## **index 替换成目录名**

在打开很多文件时，能区分出是谁

```
{
    // index 替换成 目录名
    "workbench.editor.customLabels.patterns": {
        "**/index.vue": "${dirname}.vue",
        "**/index.js": "${dirname}.js",
        "**/index.ts": "${dirname}.ts",
        "**/index.jsx": "${dirname}.jsx",
        "**/index.tsx": "${dirname}.tsx"
    },
}
```

## **行内样式代码补全**

比如你在写 style 字符串时，能有代码提示

```
{
    // 行内样式代码补全
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    },
}
```

## **双击选中被截断字符**

再也不用担心双击被下滑线截断了

```
{
    "editor.wordSeparators": "`~!@%^&*()=+[{]}\\|;:'\",.<>/?（），。；：",
}
```

## **折行缩进策略和关闭右侧代码地图**

关闭右侧代码地图大家自己选择，反正我觉得碍眼

```
{
    "editor.minimap.enabled": false,
    "editor.foldingStrategy": "indentation",
}
```

## **关闭搜索中跟踪符号链接**

提高搜索性能

```
{
    "search.followSymlinks": false,
}
```

## **更新模式选择**

我要手动的

```
{
    "update.mode": "manual",
}
```

## **搜索排除目录**

提高性能，需要重启生效

```
{
    "search.exclude": {
        "**/node_modules": true,
        "**/pnpm-lock.yaml": true,
        "**/package-lock.json": true,
        "**/.DS_Store": true,
        "**/.git": true,
        "**/.gitignore": true,
        "**/.idea": true,
        "**/.svn": true,
        "**/.vscode": true,
        "**/build": true,
        "**/dist": true,
        "**/tmp": true,
        "**/yarn.lock": true
    },
}
```

## **文件关联**

比如小程序中的 .wxss 这种文件，会把它作为css文件来处理 提供对应的 css 的语法提示 css 的格式化等 jsonc意思是能写注释的 JSON

```
{
    "files.associations": {
        "*.wxss": "css",
        "*.wxml": "html",
        "*.svg": "html",
        "*.xml": "html",
        "*.wxs": "javascript",
        // json注释
        "*.cjson": "jsonc",
        "*.json": "jsonc"
    },
}
```

## **window 相对路径复制使用 `/`**

右键文件复制路径，当你导入东西时有用 默认 window 反斜杠

```
{
    "explorer.copyRelativePathSeparator": "/",
}
```

# **不同项目使用不同配置**

方式很多，我最推荐这个

![12.webp](https://s2.loli.net/2024/06/03/skrF586hTqvpxmM.webp)

# **代码自定义配色**

这个如果你有强烈需求，我建议你写插件 因为配置文件的颜色，在 VSCode 上，会时不时闪烁 非常影响体验，你必须输入文件才有效

配置很多，我放在上 git 上

上面的配置也有，我把个人用的配置删了 如果和你的配置冲突，自行检查

<https://gitee.com/cjl2385/dig-for-gold/tree/master/VSCode>
