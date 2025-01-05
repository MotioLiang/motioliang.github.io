import{_ as s,c as a,e as p,o as t}from"./app-DKLT9RiB.js";const e={};function o(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">介绍</p><p>可能在项目中大家都会遇到文件上传的需求,比如头像,图片等,但是太大的文件上传会给服务器造成很大大压力,那么我们就需要压缩上传的文件 其实这儿所说的压缩,就是图片重绘,改变图片大小</p></div><p>这样就可以完成图片的重绘了,到底该上传多大的文件还需要根据具体业务去调整代码<strong>toDataURL</strong>里面的参数：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//html</span></span>
<span class="line"><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;upload&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>van<span class="token operator">-</span>uploader</span>
<span class="line">  <span class="token operator">:</span>after<span class="token operator">-</span>read<span class="token operator">=</span><span class="token string">&quot;onRead&quot;</span></span>
<span class="line">  <span class="token operator">:</span>before<span class="token operator">-</span>read<span class="token operator">=</span><span class="token string">&quot;getImageData&quot;</span></span>
<span class="line">  v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;fileList&quot;</span></span>
<span class="line">  <span class="token operator">:</span>max<span class="token operator">-</span>count<span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//js</span></span>
<span class="line"><span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token literal-property property">fileList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 回显图片</span></span>
<span class="line">     <span class="token literal-property property">imagePath</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 上传图片路径</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"> <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token comment">// 将base64转换为file文件</span></span>
<span class="line">  <span class="token function">dataURLtoFile</span> <span class="token punctuation">(</span><span class="token parameter">dataurl<span class="token punctuation">,</span> filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> arr <span class="token operator">=</span> dataurl<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">let</span> mime <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">:(.*?);</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">let</span> bstr <span class="token operator">=</span> <span class="token function">atob</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">let</span> n <span class="token operator">=</span> bstr<span class="token punctuation">.</span>length</span>
<span class="line">      <span class="token keyword">let</span> u8arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        u8arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> bstr<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span>u8arr<span class="token punctuation">]</span><span class="token punctuation">,</span> filename<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> mime<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 上传之前检测图片类似返回true和false会影响到onRead函数</span></span>
<span class="line">    <span class="token function">beforeRead</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(.jpg|.jpeg|.png|.bmp)$</span><span class="token regex-delimiter">/</span></span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>regex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token string">&#39;图片格式不支持上传&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取图片原图宽高</span></span>
<span class="line">    <span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">var</span> imgs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      imgs<span class="token punctuation">.</span>src <span class="token operator">=</span> file<span class="token punctuation">.</span>content<span class="token punctuation">;</span></span>
<span class="line">      imgs<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">argument</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        _this<span class="token punctuation">.</span><span class="token function">compressImg</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">file</span><span class="token operator">:</span> file<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 压缩图片</span></span>
<span class="line">    <span class="token function">compressImg</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建Canvas对象(画布)</span></span>
<span class="line">      <span class="token keyword">let</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      img<span class="token punctuation">.</span>src <span class="token operator">=</span> item<span class="token punctuation">.</span>file<span class="token punctuation">.</span>content<span class="token punctuation">;</span> <span class="token comment">// 指定图片的DataURL(图片的base64编码数据)</span></span>
<span class="line">      img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> item<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line">        canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> item<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line">        context<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> newBase <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>file<span class="token punctuation">.</span>file<span class="token punctuation">.</span>type<span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> files <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dataURLtoFile</span><span class="token punctuation">(</span>newBase<span class="token punctuation">,</span> item<span class="token punctuation">.</span>file<span class="token punctuation">.</span>file<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>files<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token number">4194304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$toast</span><span class="token punctuation">(</span><span class="token string">&quot;请选择小于4M的图片！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">upLoadChooseImage</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const i=s(e,[["render",o],["__file","compress-pictures.html.vue"]]),u=JSON.parse('{"path":"/blogs/vue/compress-pictures.html","title":"vue+vant ui图片上传压缩图片大小","lang":"en-US","frontmatter":{"title":"vue+vant ui图片上传压缩图片大小","date":"2020-02-22T00:00:00.000Z","tags":["vue","vant"],"categories":["vue"]},"headers":[],"git":{"createdTime":1639637702000,"updatedTime":1717680921000,"contributors":[{"name":"motioliang","email":"1398814154@qq.com","commits":1},{"name":"王浩亮","email":"wanghaoliang@epatient.cn","commits":1}]},"filePathRelative":"blogs/vue/compress-pictures.md"}');export{i as comp,u as data};