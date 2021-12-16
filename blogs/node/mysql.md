---
title: mysql对自增主键ID进行重新排序
date: 2018-12-25
tags:
    - mysql
categories:
    - Node
---

## 不清空数据

原理：删除原有的自增 ID，重新建立新的自增 ID。

### 1.删除原有主键:

```sql
ALTER TABLE `table_name` DROP `id`;
```

### 2.添加新主键字段并设置主键:

```sql
ALTER TABLE `table_name` ADD 'id' mediumint(6) PRIMARY KEY NOT NULL AUTO_INCREMENT FIRST;
```

## 清空数据

如果曾经的数据都不需要的话，可以直接清空所有数据，并将自增字段恢复从 1 开始计数

```sql
truncate table 表名
```
