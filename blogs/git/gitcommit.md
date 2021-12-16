---
title: git 回退到某个commit
date: 2021-3-20
tags:
    - git
categories:
    - Web
---

### git 回退到某个 commit

```js
回退命令：
$ git reset --hard HEAD^         回退到上个版本

$ git reset --hard HEAD~3        回退到前3次提交之前，以此类推，回退到n次提交之前

$ git reset --hard commit_id     退到/进到 指定commit的sha码


强推到远程：
$ git push origin HEAD --force
```
