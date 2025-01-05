import{_ as o,c as l,e as p,a as s,b as a,d as e,o as i,r as c}from"./app-DKLT9RiB.js";const r={},u={href:"https://www.jianshu.com/p/dedb04225bc5",target:"_blank",rel:"noopener noreferrer"},d={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-None-Match",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/304",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag",target:"_blank",rel:"noopener noreferrer"};function g(h,n){const t=c("ExternalLinkIcon");return i(),l("div",null,[n[18]||(n[18]=p('<h3 id="http-报文" tabindex="-1"><a class="header-anchor" href="#http-报文"><span>HTTP 报文</span></a></h3><blockquote><p>HTTP 报文就是浏览器和服务器间通信时发送及响应的数据块。浏览器向服务器请求数据，发送请求(request)报文；服务器向浏览器返回数据，返回响应(response)报文。报文信息主要分为两部分</p><ol><li>包含属性的首部(header)--------------------------附加信息（cookie，缓存信息等）与缓存相关的规则信息，均包含在 header 中</li><li>包含数据的主体部分(body)-----------------------HTTP 请求真正想要传输的部分</li></ol></blockquote><h3 id="缓存规则解析" tabindex="-1"><a class="header-anchor" href="#缓存规则解析"><span>缓存规则解析</span></a></h3><p>为方便大家理解，我们认为浏览器存在一个缓存数据库,用于存储缓存信息。在客户端第一次请求数据时，此时缓存数据库中没有对应的缓存数据，需要请求服务器，服务器返回后，将数据存储至缓存数据库中。</p><p><img src="https://s2.loli.net/2021/12/16/LehUNAt8lMYHCj1.jpg" alt="database.jpg"></p>',5)),s("p",null,[n[1]||(n[1]=a("相关博客 ")),s("a",u,[n[0]||(n[0]=a(" https://www.jianshu.com/p/dedb04225bc5")),e(t)])]),n[19]||(n[19]=p(`<p>当打开浏览器的开发者工具，查看网络请求，对于资源大小（Size）选项，除了有具体的数字大小，还有 from memory cache、from disk cache 字段之类出现。</p><p><img src="https://s2.loli.net/2021/12/16/IDULux46PC2dzoB.jpg" alt="network.jpg"></p><h3 id="缓存位置" tabindex="-1"><a class="header-anchor" href="#缓存位置"><span>缓存位置</span></a></h3><ul><li>from Service Worker</li><li>from memory cache</li><li>from disk cache</li><li>真正的网络请求（显示资源的具体大小）</li></ul><p><strong>Service Worker</strong> 本质是作为服务器与客户端之间的代理服务器，伴随着 PWA 出现。Service Worker 真正意义上将缓存控制权交给了前端，相比于 LocalStorage、SessionStorage，后两者只是单纯的接口数据缓存，例如用户信息（一个对象）、列表信息（一个数组），而前者可以缓存静态资源，甚至拦截网络请求，根据网络状况作出不同的缓存策略。</p><p><strong>memory cache</strong> 将资源缓存在了内存中。事实上，所有的网络请求都会被浏览器缓存到内存中，当然，内存容量有限，缓存不能无限存放在内存中，因此，注定是个短期缓存。 内存缓存的控制权在浏览器，前后端都不能干涉。</p><p><strong>disk cache</strong> 将资源缓存在硬盘中，disk cache 也叫 http cahce，因为其严格遵守 http 响应头字段来判断哪些资源是否要被缓存，哪些资源是否已经过期。绝大多数缓存都是 disk cache。<strong>硬盘缓存的控制权在后端</strong> disk cahce 分为强制缓存与对比缓存。</p><h3 id="http-缓存策略-disk-cache" tabindex="-1"><a class="header-anchor" href="#http-缓存策略-disk-cache"><span>http 缓存策略（disk cache）</span></a></h3><p>disk cache 也叫 http cahce，因为其严格遵守 http 响应头字段来判断哪些资源是否要被缓存，哪些资源是否已经过期。绝大多数缓存都是 disk cache。 disk cahce 分为<strong>强制缓存</strong>与<strong>对比缓存</strong>。</p><p><strong>强制缓存</strong> 控制强制缓存的有两种方式： 一种为设置失效时间:Expires:Thu, 18 Apr 2019 06:15:31 GMT； 一种为 cache-control: must-revalidate, max-age=31536000； Cache-Control 字段值：</p><ul><li>max-age=xxx，最大的有效时间</li><li>must-revalidate，如果超过了 max-age 的时间，必须向服务器发送请求，验证资源的有效性</li><li>no-cache，基本等价于 max-age=0，由对比缓存来决定是否缓存资源</li><li>no-store，真正意义上的不缓存</li><li>public，所有内容都可以被缓存</li><li>private，所有内容只有客户端可以缓存，代理服务器不能缓存。默认值</li></ul><p><strong>对比缓存</strong>（即经常看到的 304） 不同于强制缓存，浏览器直接根据响应头 Cache-Control 字段直接判断缓存资源是否有效，对比缓存需要再次向服务器确认。 Last-Modified &amp; If-Modified-Since 服务器通过响应头 Last-Modified 告知浏览器，资源最后被修改的时间： last-modified: Wed, 17 Apr 2019 22:40:00 GMT（Response Headers）当再次请求该资源时，浏览器需要再次向服务器确认，资源是否过期，其中的凭证就是请求头 If-Modified-Since 字段，值为上次请求中响应头 Last-Modified 字段的值：If-Modified-Since: Thu, 18 Apr 2019 17:05:33 +0800（Request Headers）服务器会接收 If-Modified-Since 字段的值与被请求资源的最后修改时间作比较 如果 If-Modified-Since 的值大于被请求资源的最后修改时间，则说明浏览器缓存的资源仍然有效，服务器会返回 304 状态码，告知浏览器直接取缓存即可。其中服务器返回的只有 Http 头部，并不包含主体（不然就没有缓存的意义了）。 否则，就跟正常的请求一样，服务器返回 200 状态码，并附带最新的资源。</p><div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre><code><span class="line"><span class="token keyword">const</span> server <span class="token operator">=</span> http</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">收到请求，请求地址为: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">const</span> filename <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./image.png&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        fs<span class="token punctuation">.</span><span class="token function">stat</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> stat<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> lastModified <span class="token operator">=</span> stat<span class="token punctuation">.</span>mtime<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>lastModified <span class="token operator">===</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;if-modified-since&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">304</span><span class="token punctuation">,</span> <span class="token string">&#39;Not Modified&#39;</span><span class="token punctuation">)</span></span>
<span class="line">                res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">                    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Last-Modified&#39;</span><span class="token punctuation">,</span> lastModified<span class="token punctuation">)</span></span>
<span class="line">                    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;localhost:3000服务已开启!&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>请求对比可发现除了状态码发生改变，资源也变小，说明在第二次之后响应时是不包含 http 主体的</strong></p><p><strong>Etag &amp; If-None-Match</strong></p><p>Last-Modiflied 与 Expires 一样，也是有缺陷的。如果，资源的变化的时间间隔小于秒级，比如说是毫秒级的，或者说资源直接是动态生成的，那根据 Last-Modified 判断，资源就是每时每刻都最新的，即被修改过！ 所以，Etag &amp; If-Node-Match 就是来解决这个问题的。</p>`,16)),s("p",null,[n[3]||(n[3]=s("code",null,"ETag",-1)),n[4]||(n[4]=a("头的另一个典型用例是缓存未更改的资源。 如果用户再次访问给定的 URL（设有")),n[5]||(n[5]=s("code",null,"ETag",-1)),n[6]||(n[6]=a("字段），显示资源过期了且不可用，客户端就发送值为")),n[7]||(n[7]=s("code",null,"ETag",-1)),n[8]||(n[8]=a("的")),s("a",d,[n[2]||(n[2]=s("code",null,"If-None-Match",-1)),e(t)]),n[9]||(n[9]=a(" header 字段："))]),n[20]||(n[20]=p(`<div class="language-dart line-numbers-mode" data-highlighter="prismjs" data-ext="dart" data-title="dart"><pre><code><span class="line"><span class="token class-name">If</span><span class="token operator">-</span><span class="token class-name">None</span><span class="token operator">-</span><span class="token class-name">Match</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;33a64df551425fcc55e4d42a148795d9f25f89d4&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,1)),s("p",null,[n[12]||(n[12]=a("服务器将客户端的 ETag（作为 If-None-Match 字段的值一起发送）与其当前版本的资源的 ETag 进行比较，如果两个值匹配（即资源未更改），服务器将返回不带任何内容的")),s("a",k,[n[10]||(n[10]=s("code",null,"304",-1)),e(t)]),n[13]||(n[13]=a("未修改状态，告诉客户端缓存版本可用（新鲜）。 相关资料 ")),s("a",m,[n[11]||(n[11]=a("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag")),e(t)]),n[14]||(n[14]=s("strong",null,"优先级",-1)),n[15]||(n[15]=a(" 强制缓存与对比缓存是可以同时存在的，并且")),n[16]||(n[16]=s("strong",null,"强制缓存的优先级高于对比缓存",-1)),n[17]||(n[17]=a("。实际应用中，也是两者共同使用的。"))])])}const v=o(r,[["render",g],["__file","http-cache.html.vue"]]),b=JSON.parse('{"path":"/blogs/http/http-cache.html","title":"HTTP缓存机制及原理","lang":"en-US","frontmatter":{"title":"HTTP缓存机制及原理","date":"2020-06-13T00:00:00.000Z","tags":["http"],"categories":["http"]},"headers":[{"level":3,"title":"HTTP 报文","slug":"http-报文","link":"#http-报文","children":[]},{"level":3,"title":"缓存规则解析","slug":"缓存规则解析","link":"#缓存规则解析","children":[]},{"level":3,"title":"缓存位置","slug":"缓存位置","link":"#缓存位置","children":[]},{"level":3,"title":"http 缓存策略（disk cache）","slug":"http-缓存策略-disk-cache","link":"#http-缓存策略-disk-cache","children":[]}],"git":{"createdTime":1639637702000,"updatedTime":1640055210000,"contributors":[{"name":"王浩亮","email":"wanghaoliang@epatient.cn","commits":2}]},"filePathRelative":"blogs/http/http-cache.md"}');export{v as comp,b as data};
