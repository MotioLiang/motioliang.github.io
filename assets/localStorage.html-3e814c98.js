import{_ as n,o as s,c as a,a as t}from"./app-31c067ee.js";const e={},p=t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>基于 localStorage 本地储存的 js 插件 ，提供有效期、输出 json 数据等功能。</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><table><thead><tr><th style="text-align:center;"><strong>方法名</strong></th><th style="text-align:center;"><strong>说明</strong></th><th style="text-align:center;"><strong>参数</strong></th></tr></thead><tbody><tr><td style="text-align:center;">setItem</td><td style="text-align:center;">设置缓存</td><td style="text-align:center;">key, value, expires</td></tr><tr><td style="text-align:center;">getItem</td><td style="text-align:center;">获取缓存</td><td style="text-align:center;">key</td></tr><tr><td style="text-align:center;">removeItem</td><td style="text-align:center;">删除缓存</td><td style="text-align:center;">key</td></tr><tr><td style="text-align:center;">clear</td><td style="text-align:center;">删除全部缓存</td><td style="text-align:center;"></td></tr></tbody></table><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Storage</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置缓存</span>
    <span class="token function">setItem</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> expires <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
            key<span class="token punctuation">,</span>
            value<span class="token punctuation">,</span>
            expires<span class="token punctuation">,</span> <span class="token comment">// 设置过期时间(默认天)</span>
            <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//记录何时将值存入</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// expires设置了以options为值放进去</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>expires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 数字以天为单位</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options<span class="token punctuation">.</span>expires <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                options<span class="token punctuation">.</span>expires <span class="token operator">=</span> expires <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span>
                localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">||</span> options<span class="token punctuation">.</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                options<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>key<span class="token punctuation">,</span> options<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取缓存</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> item <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//先将拿到的试着进行json转为对象的形式</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            item <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果不行就不是json的字符串，就直接返回</span>
            item <span class="token operator">=</span> item
        <span class="token punctuation">}</span>
        <span class="token comment">//如果有expires的值，说明设置了失效时间</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>expires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token comment">//取出的时间，与item.expires比较，如果大于就是过期了，如果小于或等于就还没过期</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>date <span class="token operator">-</span> item<span class="token punctuation">.</span>startTime <span class="token operator">&gt;</span> item<span class="token punctuation">.</span>expires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> item<span class="token punctuation">.</span>value
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> item
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 删除缓存</span>
    <span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 删除全部缓存</span>
    <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> storage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Storage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

storage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;cs&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
storage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;cs&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","localStorage.html.vue"]]);export{r as default};
