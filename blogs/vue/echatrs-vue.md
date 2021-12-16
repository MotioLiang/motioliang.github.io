---
title: Echarts图表在Vue项目完整引入以及按需加载
date: 2020-04-28
tags:
    - vue
    - echarts
categories:
    - Web
---

## 一、完整引入 Echarts

1. 下载安装 echarts 包

```shell
npm install echarts -D
```

2. 定义图表显示的容器，并进行渲染

```vue
<template>
    <div id="myChart" ref="myChart"></div>
</template>
<style>
#myChart {
    width: 95%;
    height: 300px;
    margin: 20px auto;
    border: 1px solid #ccc;
}
</style>
<script>
// 引入完整的echarts
import echarts from 'echarts'
export default {
    mounted() {
        // 调用绘制图表的方法
        this.draw()
    },
    methods: {
        draw() {
            // 实例化echarts对象
            myChart = echarts.init(this.$refs.myChart)

            // 绘制条形图
            myChart.setOption({
                title: {
                    text: 'Echarts 入门实例',
                    top: 5,
                    left: 'center'
                },
                legend: {
                    data: ['衣服', '帽子', '裤子', '鞋子'],
                    top: 30
                },
                // X轴
                xAxis: {
                    data: ['一月', '二月', '三月', '四月']
                },
                // Y轴
                yAxis: {},
                // 数据
                series: [
                    {
                        name: '衣服',
                        type: 'bar',
                        data: [120, 100, 440, 320]
                    },
                    {
                        name: '帽子',
                        type: 'bar',
                        data: [200, 120, 240, 330]
                    },
                    {
                        name: 'bar',
                        type: 'line',
                        data: [120, 200, 240, 260, 300]
                    },
                    {
                        name: 'bar',
                        type: 'line',
                        data: [120, 200, 300, 140, 260]
                    }
                ]
            })
        }
    }
}
</script>
```

缺点：如果是完整的引入 Echarts，会额外的引入其他无用的配置文件，造成应用文件体积过大，资源加载耗时过长，影响用户体验。

## 二、Echarts 按需加载

1. 专门设置一个 echarts 配置文件

```js
// 文件路径 @/lib/echarts.js 自行配置

// 加载echarts，注意引入文件的路径
import echarts from 'echarts/lib/echarts'

// 再引入你需要使用的图表类型，标题，提示信息等
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

export default echarts
```

2. 在需要的组件内加载 echarts，绘制图表

```js
 <template>
     // ... 与上面实例相同
 </template>
 <style>
     // ... 与上面实例相同
 </style>
 <script>
 // 重点：此位置引入的是你单独配置的echarts
 import echarts from '@/lib/echarts'
 export default {
     mounted () {
         // ...与上面实例相同
     },
     methods: {
         draw () {
             // ... 与上面实例相同
         }
     }
 }
 </script>
```

按此方式打包的项目，会只加载引用你所使用的图表、标题、提示信息等组件，降低了应用文件体积，实现按需加载

## 三、引入插件 babel-plugin-equire,配合实现 Echarts 按需引入

在上面的实例中，我们单独配置的 echarts 文件，需要引入对应的图表、标题、提示信息等，都需要我们手动进行加载，比较麻烦。引入 babel-plugin-equire 插件，方便使用。

1. 下载 babel-plugin-equire

```shell
 npm install babel-plugin-equire -D
```

2. 在.babelrc 文件中的配置

```json
 "plugins": [
     "... 其他插件",
     "equire"
 ]
```

3. 修改@/lib/echarts 文件

```js
// eslint-disable-next-line
const echarts = equire([
    // 写上你需要的
    'bar',
    'legend',
    'title'
])

export default echarts
```
