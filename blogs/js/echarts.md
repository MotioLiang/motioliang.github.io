---
title: echarts 人物关系图
date: 2020-06-25
tags:
    - echarts
categories:
    - Web
---

想要做一个人员关系图，官网 echarts 图 graph webkit dep 稍微改了一下

![echarts.jpg](https://s2.loli.net/2021/12/16/cHEgS3myvRfw7V8.png)

```js
myChart.showLoading()

$.get(ROOT_PATH + 'data/asset/data/webkit-dep.json', function (ooo) {
    myChart.hideLoading()

    var webkitDep = {
        type: 'force',
        categories: [
            {
                name: '测试人员',
                base: 'HTMLElement'
            },
            {
                name: '测试车辆',
                base: 'SVGElement'
            }
        ],

        nodes: [
            // 一类
            {
                name: '张三',
                value: 0,
                category: 0,
                des: '最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。'
            },
            {
                name: '李四',
                value: 1,
                category: 0
            },
            {
                name: '王五',
                value: 2,
                category: 0
            },
            {
                name: '丁义珍',
                value: 3,
                category: 0
            },

            // 二类
            {
                name: '赵敏雅',
                value: 4,
                category: 1
            },
            {
                name: '范军',
                value: 5,
                category: 1
            },
            {
                name: '孙海',
                value: 6,
                category: 1
            },
            {
                name: '李博',
                value: 7,
                category: 1,
                symbol: 'image://https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
            }
        ],
        links: [
            {
                source: 0,
                target: 4,
                des: '家庭'
            },
            {
                source: 0,
                target: 5,
                des: '家庭'
            },
            {
                source: 0,
                target: 6,
                des: '家庭'
            },
            {
                source: 0,
                target: 7,
                des: '家庭'
            },

            {
                source: 7,
                target: 1,
                des: '家庭'
            },
            {
                source: 7,
                target: 2,
                des: '家庭'
            },
            {
                source: 7,
                target: 3,
                des: '家庭'
            }
        ]
    }

    var option8 = {
        legend: {
            data: ['测试人员', '测试车辆', '测试手机'],
            top: 0,
            itemGap: 26,
            textStyle: {
                padding: [0, 12]
            },
            backgroundColor: '#f5f5f5'
        },
        tooltip: {
            formatter: function (x) {
                return x.data.des
            }
        },
        series: [
            {
                type: 'graph', //
                layout: 'force',
                animation: true,
                roam: true,
                draggable: true,
                label: {
                    normal: {
                        position: 'bottom',
                        show: true,
                        rich: {
                            bg: {
                                backgroundColor: '#f5f5f5'
                            }
                        }
                    }
                },

                // 连线样式
                lineStyle: {
                    normal: {
                        width: 2,
                        color: '#4b565b'
                    }
                },

                // 联线文字描述
                edgeLabel: {
                    normal: {
                        show: true,
                        formatter: function (x) {
                            return x.data.des
                        }
                    }
                },

                //设置图像的大小
                symbolSize: (value, params) => {
                    let size = 0
                    switch (params.data.category) {
                        case 0:
                            size = 40
                            break
                        case 1:
                            size = 30
                            break
                        case 2:
                            size = 20
                            break
                        case 3:
                            size = 30
                            break
                        case 4:
                            size = 20
                            break
                        default:
                            10
                    }
                    return size
                },

                data: webkitDep.nodes.map(function (node, idx) {
                    node.id = idx
                    return node
                }),

                categories: webkitDep.categories,

                force: {
                    // initLayout: 'circular'
                    // repulsion: 20,
                    edgeLength: 150,
                    repulsion: 50,
                    gravity: 0.01
                },

                edges: webkitDep.links
            }
        ]
    }

    myChart.setOption(option8)
})
```
