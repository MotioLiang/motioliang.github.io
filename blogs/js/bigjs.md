---
title: Bigjs 解决 JavaScript 数值计算时精度问题处理
date: 2023-6-1
tags:
    - js
categories:
    - Web
sticky: 1
---

## js 精度问题

当使用 JavaScript 进行数值计算时，会面临一些精度问题，这些问题可能会导致不正确的结果。以下是一些常见的奇奇怪怪的 js 数据精度问题：

### 1. 浮点数精度问题

在 JS 中，浮点数的精度有限。例如：

```javascript
0.1 + 0.2 // 结果为0.30000000000000004
23.327 * 100 // 结果为2332.7000000000003
```

这个结果显然不符合我们的期望。因为这是由于浮点数本身就无法表示 0.1 和 0.2 精确值。

解决方案：可以使用 `toFixed` 方法将其转换为字符串保留特定位数的小数，或者使用 Big.js 库中的 `Big` 对象。

### 2. 整数运算超出范围

在 JS 中，整数运算的范围为 -2^53 ~ 2^53。当运算结果超出该范围时，会发生奇怪的事情，例如：

```javascript
Math.pow(2, 53) + 1 // 结果为9007199254740992
```

解决方案：可以使用 BigInt 类型进行更大范围的整数运算，但是要注意支持性不够广泛，需在浏览器和 Node.js 环境中提供额外的支持。

### 3. 数字类型转换问题

在 JS 中，数字类型之间的转换也可能会导致奇怪的问题。例如：

```javascript
'10' > '9' // 结果为false
```

原因是在字符串比较中，比较的是字符编码而不是实际的数字大小。

解决方案：可以使用 `parseInt` 或者 `parseFloat` 将字符串转换为数字，或者使用 `Number` 函数将字符串强制类型转换为数字。

### 4. 小数点后多余的零

在 JS 中，将一个小数转换成字符串时，如果它没有小数部分，那么默认会添加 `.0`。例如：

```javascript
String(1.0) // 结果为"1.0"
```

这种自动添加小数点可能会导致输出结果与预期不符。

解决方案：可以使用 `Number.prototype.toFixed()` 来保持一定的小数点位数，或者使用 `Number.prototype.toPrecision()` 来控制总位数。

## Big.js

Big.js 是一个 JavaScript 的 “任意精度” 数字库，能够处理普通数字无法表示的大数字计算。这个库可以非常有用，例如在金融交易、密码学和科学计算中。

### 安装

Big.js 可以通过多种途径来安装：

-   npm 安装: `npm install big.js`
-   下载源码包: [github.com/MikeMcl/big…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FMikeMcl%2Fbig.js%2Farchive%2Fv5.2.2.tar.gz)
-   在线 CDN 引入: `<script src="https://cdn.jsdelivr.net/npm/big.js@5.2.2/big.min.js"></script>`

### 使用方法

在代码中引入 big.js：

```javascript
const Big = require('big.js')
```

### 创建一个 Big 对象

```javascript
const x = new Big(123.4567)
const y = Big(987654321.123456789)
const z = new Big('123456789012345678901234567890')
```

上述代码创建了三个 Big 对象。你可以将任何字符串、数字或其他 Big 对象传递给构造函数。请注意，只有字符串才能正确表示 0.1、0.01 等小数。我们可以用以下方式来打印这些对象的值：

```javascript
console.log(x.toString()) // "123.4567"
console.log(y.toString()) // "987654321.123456789"
console.log(z.toString()) // "123456789012345678901234567890"
```

### 进行运算

Big.js 支持 +、-、\*、/、mod、pow、sqrt 和 abs 操作。下面是代码示例：

```javascript
const x = Big(123.4567)
const y = Big('987654321.123456789')

console.log(x.plus(y).toString()) // "987654444.580156789"
console.log(x.minus(y).toString()) // "-987654197.666756789"
console.log(x.times(y).toString()) // "121931366283.89509775303"
console.log(x.div(y).toString()) // "0.00012468606749151914"
console.log(x.mod(y).toString()) // "123.4567"
console.log(x.pow(3).toString()) // "18604128.120667185023"
console.log(x.sqrt().toString()) // "11.107774091203273684"
console.log(x.abs().toString()) // "123.4567"
```

### 设置运算精度

默认情况下，Big.js 将结果四舍五入到 20 位数字。但是你可以更改这个精度设置。这里提供了两种方式：

#### 全局配置

在全局范围内，你可以通过 Big.RM 和 Big.DP 来更改默认设置。RP（Rounding Precision）指定了四舍五入的精度（默认为 20），而 DP（Decimal Places）指定了默认保留的小数位数。

```javascript
Big.RM = 0 // 舍去模式（0 表示四舍五入）
Big.DP = 10 // 小数点后保留 10 位
```

#### 局部配置

如果你不想全局更改设置，那么可以在每次操作时单独进行设置。以下是如何使用它们：

```javascript
const x = new Big(1)
const y = new Big(3)

x.div(y) // '0.33333333333333333333'
x.dp = 2 // 将小数点后的位数设置为 2
x.div(y) // '0.33'
x.round(1) // 四舍五入至整数
x.div(y).toString() // '0.3'
```

### 十六进制和二进制格式

当处理加密哈希等特殊数据类型时，十六进制和二进制格式的数字显得尤为重要。Luckily, Big.js 提供了相关方法。以下是相关代码示例：

创建一个 big.js 实例需要传入一个数字或字符串。下面是一个创建 big.js 实例的示例：

```javascript
const num1 = new Big(123.4567)
const num2 = new Big('9876543210123456789')
```

### 加法

Big 对象可以使用 `plus()` 方法来进行加法操作，返回一个新的 Big 对象，不改变原有对象：

```javascript
const num1 = new Big(1.23)
const num2 = new Big(4.56)

const result = num1.plus(num2) // 等价于 num1 + num2
console.log(result.toString()) // 5.79
```

### 减法

Big 对象可以使用 `minus()` 方法来进行减法操作，返回一个新的 Big 对象，不改变原有对象：

```javascript
const num1 = new Big(1.23)
const num2 = new Big(4.56)

const result = num1.minus(num2) // 等价于 num1 - num2
console.log(result.toString()) // -3.33
```

### 乘法

Big 对象可以使用 `times()` 方法来进行乘法操作，返回一个新的 Big 对象，不改变原有对象：

```javascript
const num1 = new Big(1.23)
const num2 = new Big(4.56)

const result = num1.times(num2) // 等价于 num1 * num2
console.log(result.toString()) // 5.6088
```

### 除法

Big 对象可以使用 `div()` 方法来进行除法操作，返回一个新的 Big 对象，不改变原有对象：

```javascript
const num1 = new Big(1.23)
const num2 = new Big(4.56)

const result = num1.div(num2) // 等价于 num1 / num2
console.log(result.toString()) // 0.26973684210526315789
```

### 幂运算

Big 对象可以使用 `pow()` 方法来进行幂运算操作，返回一个新的 Big 对象，不改变原有对象：

```javascript
const num1 = new Big(2)
const num2 = new Big(3)

const result = num1.pow(num2) // 等价于 num1 ** num2
console.log(result.toString()) // 8
```

### 比较

Big 对象可以使用 `cmp()` 方法来进行比较操作，返回一个负数、零或正数，分别表示小于、等于或大于。

```javascript
const num1 = new Big(1.23)
const num2 = new Big(4.56)

console.log(num1.cmp(num2)) // -1
console.log(num2.cmp(num1)) // 1
console.log(num1.cmp(num1)) // 0
```

### 四舍五入和保留小数位数

Big 对象可以使用 `toFixed()` 方法来进行四舍五入和保留小数位数操作：

```javascript
const num1 = new Big(1.23456789)

console.log(num1.toFixed(2)) // 1.23
console.log(num1.toFixed(5)) // 1.23457
console.log(num1.toFixed(10)) // 1.2345678900
```
