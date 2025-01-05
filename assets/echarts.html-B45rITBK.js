import{_ as n,c as a,e as p,o as e}from"./app-DKLT9RiB.js";const l={};function t(o,s){return e(),a("div",null,s[0]||(s[0]=[p(`<p>想要做一个人员关系图，官网 echarts 图 graph webkit dep 稍微改了一下</p><p><img src="https://s2.loli.net/2021/12/16/cHEgS3myvRfw7V8.png" alt="echarts.jpg"></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">myChart<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">$<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">ROOT_PATH</span> <span class="token operator">+</span> <span class="token string">&#39;data/asset/data/webkit-dep.json&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ooo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    myChart<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> webkitDep <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;force&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">categories</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;测试人员&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;HTMLElement&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;测试车辆&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;SVGElement&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">        <span class="token literal-property property">nodes</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token comment">// 一类</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&#39;最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。&lt;br/&gt;经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，&lt;br/&gt;正义战胜邪恶，自己也迎来了成长。&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;丁义珍&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 二类</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;赵敏雅&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;范军&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;孙海&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;李博&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;image://https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&#39;家庭&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&#39;家庭&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&#39;家庭&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&#39;家庭&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&#39;家庭&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&#39;家庭&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">des</span><span class="token operator">:</span> <span class="token string">&#39;家庭&#39;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> option8 <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;测试人员&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;测试车辆&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;测试手机&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">itemGap</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#f5f5f5&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> x<span class="token punctuation">.</span>data<span class="token punctuation">.</span>des</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;graph&#39;</span><span class="token punctuation">,</span> <span class="token comment">//</span></span>
<span class="line">                <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&#39;force&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">roam</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">rich</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token literal-property property">bg</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;#f5f5f5&#39;</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 连线样式</span></span>
<span class="line">                <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#4b565b&#39;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 联线文字描述</span></span>
<span class="line">                <span class="token literal-property property">edgeLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">return</span> x<span class="token punctuation">.</span>data<span class="token punctuation">.</span>des</span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//设置图像的大小</span></span>
<span class="line">                <span class="token function-variable function">symbolSize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">                    <span class="token keyword">switch</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span>data<span class="token punctuation">.</span>category<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span></span>
<span class="line">                            size <span class="token operator">=</span> <span class="token number">40</span></span>
<span class="line">                            <span class="token keyword">break</span></span>
<span class="line">                        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span></span>
<span class="line">                            size <span class="token operator">=</span> <span class="token number">30</span></span>
<span class="line">                            <span class="token keyword">break</span></span>
<span class="line">                        <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span></span>
<span class="line">                            size <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line">                            <span class="token keyword">break</span></span>
<span class="line">                        <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span></span>
<span class="line">                            size <span class="token operator">=</span> <span class="token number">30</span></span>
<span class="line">                            <span class="token keyword">break</span></span>
<span class="line">                        <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span></span>
<span class="line">                            size <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line">                            <span class="token keyword">break</span></span>
<span class="line">                        <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">                            <span class="token number">10</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token keyword">return</span> size</span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">                <span class="token literal-property property">data</span><span class="token operator">:</span> webkitDep<span class="token punctuation">.</span>nodes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    node<span class="token punctuation">.</span>id <span class="token operator">=</span> idx</span>
<span class="line">                    <span class="token keyword">return</span> node</span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">                <span class="token literal-property property">categories</span><span class="token operator">:</span> webkitDep<span class="token punctuation">.</span>categories<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">                <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// initLayout: &#39;circular&#39;</span></span>
<span class="line">                    <span class="token comment">// repulsion: 20,</span></span>
<span class="line">                    <span class="token literal-property property">edgeLength</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">repulsion</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">gravity</span><span class="token operator">:</span> <span class="token number">0.01</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">                <span class="token literal-property property">edges</span><span class="token operator">:</span> webkitDep<span class="token punctuation">.</span>links</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option8<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const i=n(l,[["render",t],["__file","echarts.html.vue"]]),r=JSON.parse('{"path":"/blogs/js/echarts.html","title":"echarts 人物关系图","lang":"en-US","frontmatter":{"title":"echarts 人物关系图","date":"2020-06-25T00:00:00.000Z","tags":["echarts"],"categories":["js"]},"headers":[],"git":{"createdTime":1639637702000,"updatedTime":1639637702000,"contributors":[{"name":"王浩亮","email":"wanghaoliang@epatient.cn","commits":1}]},"filePathRelative":"blogs/js/echarts.md"}');export{i as comp,r as data};
