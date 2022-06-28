---
title: 关于JS小数的加减乘除精度丢失问题
date: 2021-8-21
tags:
    - js
categories:
    - Web
sticky: 1
---

::: tip
在 javascript 中，当你使用小数进行加减乘除运算时，你会发现，所得到的结果有时后面带有长长的一段小数，使运算变得复杂，并且影响计算结果。上网查询了一下原因，大致如下：在 javascript 中，带小数的数据运算时总会出现好多位小数.这是因为在 javascript 中浮点数的计算是以 2 进制计算的。
:::

```js
/**
 * @desc 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
 * @param {number} num1 加数1
 * @param {number} num2 加数2
 * @author wanghaolaing
 */
function numAdd(num1, num2) {
    var baseNum, baseNum1, baseNum2
    try {
        baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
        baseNum1 = 0
    }
    try {
        baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
        baseNum2 = 0
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2))
    return (num1 * baseNum + num2 * baseNum) / baseNum
}

/**
 * @desc 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
 * @param {number} num1 被减数
 * @param {number} num2 减数
 * @author wanghaolaing
 */
function numSub(num1, num2) {
    var baseNum, baseNum1, baseNum2
    var precision // 精度
    try {
        baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
        baseNum1 = 0
    }
    try {
        baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
        baseNum2 = 0
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2))
    precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2
    return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision)
}

/**
 * @desc 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
 * @param {number} num1 乘数1
 * @param {number} num2 乘数2
 * @author wanghaolaing
 */
function numMulti(num1, num2) {
    var baseNum = 0
    try {
        baseNum += num1.toString().split('.')[1].length
    } catch (e) {}
    try {
        baseNum += num2.toString().split('.')[1].length
    } catch (e) {}
    var baseNum1 = Number(num1.toString().replace('.', ''))
    var baseNum2 = Number(num2.toString().replace('.', ''))
    return (baseNum1 * baseNum2) / Math.pow(10, baseNum)
}

/**
 * @desc 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
 * @param {number} num1 被除数
 * @param {number} num2 除数
 * @author wanghaolaing
 */
function numDiv(num1, num2) {
    var baseNum1 = 0,
        baseNum2 = 0
    try {
        baseNum1 = num1.toString().split('.')[1].length
    } catch (e) {
        baseNum1 = 0
    }
    try {
        baseNum2 = num2.toString().split('.')[1].length
    } catch (e) {
        baseNum2 = 0
    }
    var baseNum3 = Number(num1.toString().replace('.', ''))
    var baseNum4 = Number(num2.toString().replace('.', ''))
    return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1)
}
```
