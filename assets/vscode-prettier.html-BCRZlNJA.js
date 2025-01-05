import{_ as t,c as i,a as n,b as e,d as l,e as o,o as r,r as p}from"./app-DKLT9RiB.js";const c={},d={id:"在插件市场搜索prettier并安装",tabindex:"-1"},u={class:"header-anchor",href:"#在插件市场搜索prettier并安装"},m={href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"};function v(g,s){const a=p("ExternalLinkIcon");return r(),i("div",null,[n("h3",d,[n("a",u,[n("span",null,[s[1]||(s[1]=e("在插件市场搜索")),n("a",m,[s[0]||(s[0]=e("Prettier")),l(a)]),s[2]||(s[2]=e("并安装"))])])]),s[3]||(s[3]=o(`<p><img src="https://s2.loli.net/2021/12/16/OESKXoj2vipDCcP.png" alt="prettier.png"></p><h3 id="vs-code-参考配置项" tabindex="-1"><a class="header-anchor" href="#vs-code-参考配置项"><span>VS Code 参考配置项</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token property">&quot;prettier.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;prettier.useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;prettier.printWidth&quot;</span><span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;prettier.trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;prettier.arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一般配置项描述" tabindex="-1"><a class="header-anchor" href="#一般配置项描述"><span>一般配置项描述</span></a></h3><ul><li><strong>printWidth</strong> 编辑器每行的长度，默认 80</li><li><strong>tabWidth</strong> 制表符 tab 的宽度，默认值是 2</li><li><strong>useTabs</strong> 代码缩进是否用制表符 tab，默认 false</li><li><strong>semi</strong> 是否使用分号，默认 true，使用分号</li><li><strong>singleQuote</strong> 是否使用单引号，默认为 false，不适用单引号，使用双引号</li><li><strong>quoteProps</strong> 对象属性的引号使用</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string">&quot;as-needed&quot;</span> <span class="token comment">// 仅在需要的时候使用</span></span>
<span class="line"><span class="token string">&quot;consistent&quot;</span> <span class="token comment">// 有一个属性需要引号，就都需要引号</span></span>
<span class="line"><span class="token string">&quot;preserve&quot;</span> <span class="token comment">// 保留用户输入的情况</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>trailingComma</strong> 末尾逗号</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string">&quot;none&quot;</span> <span class="token comment">// 末尾没有逗号</span></span>
<span class="line"><span class="token string">&quot;es5&quot;</span> <span class="token comment">// es5有效的地方保留</span></span>
<span class="line"><span class="token string">&quot;all&quot;</span> <span class="token comment">// 在可能的地方都加上逗号</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>bracketSpacing</strong> 字面量对象括号中的空格，默认 true</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token boolean">true</span> <span class="token comment">// Example: { foo: bar }.</span></span>
<span class="line"><span class="token boolean">false</span> <span class="token comment">// Example: {foo: bar}.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>arrowParens</strong> 箭头函数中的括号</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string">&quot;avoid&quot;</span> <span class="token comment">// 在有需要的时候使用. Example: x =&gt; x</span></span>
<span class="line"><span class="token string">&quot;always&quot;</span> <span class="token comment">// 一直使用. Example: (x) =&gt; x</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>endOfLine</strong> 行末尾标识</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token string">&quot;auto&quot;</span>  <span class="token comment">// 默认使用Maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)</span></span>
<span class="line"><span class="token string">&quot;lf&quot;</span> <span class="token comment">// Line Feed only (\\n), common on Linux and macOS as well as inside git repos</span></span>
<span class="line"><span class="token string">&quot;crlf&quot;</span> <span class="token comment">// Carriage Return + Line Feed characters (\\r\\n), common on Windows</span></span>
<span class="line"><span class="token string">&quot;cr&quot;</span> <span class="token comment">// Carriage Return character only (\\r), used very rarely</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>`,15))])}const b=t(c,[["render",v],["__file","vscode-prettier.html.vue"]]),h=JSON.parse('{"path":"/blogs/vscode/vscode-prettier.html","title":"VS Code 插件之 - Prettier","lang":"en-US","frontmatter":{"title":"VS Code 插件之 - Prettier","date":"2021-12-16T00:00:00.000Z","tags":["vscode"],"categories":["vscode"]},"headers":[{"level":3,"title":"在插件市场搜索Prettier并安装","slug":"在插件市场搜索prettier并安装","link":"#在插件市场搜索prettier并安装","children":[]},{"level":3,"title":"VS Code 参考配置项","slug":"vs-code-参考配置项","link":"#vs-code-参考配置项","children":[]},{"level":3,"title":"一般配置项描述","slug":"一般配置项描述","link":"#一般配置项描述","children":[]}],"git":{"createdTime":1639647837000,"updatedTime":1639663935000,"contributors":[{"name":"MotioLiang","email":"1398814154@qq.com","commits":1},{"name":"王浩亮","email":"wanghaoliang@epatient.cn","commits":1}]},"filePathRelative":"blogs/vscode/vscode-prettier.md"}');export{b as comp,h as data};