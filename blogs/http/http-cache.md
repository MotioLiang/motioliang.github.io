---
title: HTTP缓存机制及原理
date: 2020-06-13
tags:
    - http
categories:
    - Web
---

### HTTP 报文

> HTTP 报文就是浏览器和服务器间通信时发送及响应的数据块。浏览器向服务器请求数据，发送请求(request)报文；服务器向浏览器返回数据，返回响应(response)报文。报文信息主要分为两部分
>
> 1. 包含属性的首部(header)--------------------------附加信息（cookie，缓存信息等）与缓存相关的规则信息，均包含在 header 中
> 2. 包含数据的主体部分(body)-----------------------HTTP 请求真正想要传输的部分

### 缓存规则解析

为方便大家理解，我们认为浏览器存在一个缓存数据库,用于存储缓存信息。在客户端第一次请求数据时，此时缓存数据库中没有对应的缓存数据，需要请求服务器，服务器返回后，将数据存储至缓存数据库中。

![database.jpg](https://s2.loli.net/2021/12/16/LehUNAt8lMYHCj1.jpg)

相关博客
[ https://www.jianshu.com/p/dedb04225bc5](https://www.jianshu.com/p/dedb04225bc5)

当打开浏览器的开发者工具，查看网络请求，对于资源大小（Size）选项，除了有具体的数字大小，还有 from memory cache、from disk cache 字段之类出现。

![network.jpg](https://s2.loli.net/2021/12/16/IDULux46PC2dzoB.jpg)

### 缓存位置

-   from Service Worker
-   from memory cache
-   from disk cache
-   真正的网络请求（显示资源的具体大小）

**Service Worker**
本质是作为服务器与客户端之间的代理服务器，伴随着 PWA 出现。Service Worker 真正意义上将缓存控制权交给了前端，相比于 LocalStorage、SessionStorage，后两者只是单纯的接口数据缓存，例如用户信息（一个对象）、列表信息（一个数组），而前者可以缓存静态资源，甚至拦截网络请求，根据网络状况作出不同的缓存策略。

**memory cache**
将资源缓存在了内存中。事实上，所有的网络请求都会被浏览器缓存到内存中，当然，内存容量有限，缓存不能无限存放在内存中，因此，注定是个短期缓存。
内存缓存的控制权在浏览器，前后端都不能干涉。

**disk cache**
将资源缓存在硬盘中，disk cache 也叫 http cahce，因为其严格遵守 http 响应头字段来判断哪些资源是否要被缓存，哪些资源是否已经过期。绝大多数缓存都是 disk cache。**硬盘缓存的控制权在后端**
disk cahce 分为强制缓存与对比缓存。

### http 缓存策略（disk cache）

disk cache 也叫 http cahce，因为其严格遵守 http 响应头字段来判断哪些资源是否要被缓存，哪些资源是否已经过期。绝大多数缓存都是 disk cache。
disk cahce 分为**强制缓存**与**对比缓存**。

**强制缓存**
控制强制缓存的有两种方式：
一种为设置失效时间:Expires:Thu, 18 Apr 2019 06:15:31 GMT；
一种为 cache-control: must-revalidate, max-age=31536000；
Cache-Control 字段值：

-   max-age=xxx，最大的有效时间
-   must-revalidate，如果超过了 max-age 的时间，必须向服务器发送请求，验证资源的有效性
-   no-cache，基本等价于 max-age=0，由对比缓存来决定是否缓存资源
-   no-store，真正意义上的不缓存
-   public，所有内容都可以被缓存
-   private，所有内容只有客户端可以缓存，代理服务器不能缓存。默认值

**对比缓存**（即经常看到的 304）
不同于强制缓存，浏览器直接根据响应头 Cache-Control 字段直接判断缓存资源是否有效，对比缓存需要再次向服务器确认。 Last-Modified & If-Modified-Since
服务器通过响应头 Last-Modified 告知浏览器，资源最后被修改的时间： last-modified: Wed, 17 Apr 2019 22:40:00 GMT（Response Headers）当再次请求该资源时，浏览器需要再次向服务器确认，资源是否过期，其中的凭证就是请求头 If-Modified-Since 字段，值为上次请求中响应头 Last-Modified 字段的值：If-Modified-Since: Thu, 18 Apr 2019 17:05:33 +0800（Request Headers）服务器会接收 If-Modified-Since 字段的值与被请求资源的最后修改时间作比较 如果 If-Modified-Since 的值大于被请求资源的最后修改时间，则说明浏览器缓存的资源仍然有效，服务器会返回 304 状态码，告知浏览器直接取缓存即可。其中服务器返回的只有 Http 头部，并不包含主体（不然就没有缓存的意义了）。 否则，就跟正常的请求一样，服务器返回 200 状态码，并附带最新的资源。

```tsx
const server = http
    .createServer((req, res) => {
        console.log(`收到请求，请求地址为: ${req.url}`)
        const filename = path.resolve(__dirname, './image.png')

        fs.stat(filename, (err, stat) => {
            const lastModified = stat.mtime.toUTCString()
            if (lastModified === req.headers['if-modified-since']) {
                res.writeHead(304, 'Not Modified')
                res.end()
            } else {
                fs.readFile(filename, (err, file) => {
                    if (err) {
                        res.end(err.message)
                    }

                    res.setHeader('Last-Modified', lastModified)
                    res.end(file)
                })
            }
        })
    })
    .listen(3000)
console.log('localhost:3000服务已开启!')
```

**请求对比可发现除了状态码发生改变，资源也变小，说明在第二次之后响应时是不包含 http 主体的**

**Etag & If-None-Match**

Last-Modiflied 与 Expires 一样，也是有缺陷的。如果，资源的变化的时间间隔小于秒级，比如说是毫秒级的，或者说资源直接是动态生成的，那根据 Last-Modified 判断，资源就是每时每刻都最新的，即被修改过！
所以，Etag & If-Node-Match 就是来解决这个问题的。

`ETag`头的另一个典型用例是缓存未更改的资源。 如果用户再次访问给定的 URL（设有`ETag`字段），显示资源过期了且不可用，客户端就发送值为`ETag`的[`If-None-Match`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match) header 字段：

```dart
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

服务器将客户端的 ETag（作为 If-None-Match 字段的值一起发送）与其当前版本的资源的 ETag 进行比较，如果两个值匹配（即资源未更改），服务器将返回不带任何内容的[`304`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/304)未修改状态，告诉客户端缓存版本可用（新鲜）。
相关资料
[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag)
**优先级**
强制缓存与对比缓存是可以同时存在的，并且**强制缓存的优先级高于对比缓存**。实际应用中，也是两者共同使用的。
