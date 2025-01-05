import{_ as d,c as p,a as s,b as e,d as i,e as l,o as c,r}from"./app-DKLT9RiB.js";const t={},v={href:"https://github.com/ice-lab/icestark",target:"_blank",rel:"noopener noreferrer"},u={href:"https://vue-components-uat.ruijie.com.cn/components/overview",target:"_blank",rel:"noopener noreferrer"},o={href:"https://micro-frontends.ice.work/",target:"_blank",rel:"noopener noreferrer"};function m(b,n){const a=r("ExternalLinkIcon");return c(),p("div",null,[n[6]||(n[6]=s("h3",{id:"_1-1、介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-1、介绍"},[s("span",null,"1.1、介绍")])],-1)),s("p",null,[s("a",v,[n[0]||(n[0]=e("icestark")),i(a)]),n[1]||(n[1]=e(" 是一个面向大型系统的微前端解决方案，适用于以下业务场景："))]),n[7]||(n[7]=l(`<ul><li>后台比较分散，体验差别大，因为要频繁跳转导致操作效率低，希望能统一收口的一个系统内</li><li>单页面应用非常庞大，多人协作成本高，开发/构建时间长，依赖升级回归成本高</li><li>系统有二方/三方接入的需求</li></ul><p><img src="https://s2.loli.net/2024/06/29/MyXdKEZ6eqp3CRh.png" alt="2.png"></p><h3 id="_1-2、项目结构" tabindex="-1"><a class="header-anchor" href="#_1-2、项目结构"><span>1.2、项目结构</span></a></h3><h1 id="_2、icestark-工作流程" tabindex="-1"><a class="header-anchor" href="#_2、icestark-工作流程"><span>2、icestark 工作流程</span></a></h1><p>icestark 目前支持三种加载模式，分别是 <code>script</code>、<code>fetch</code> 和 <code>import</code></p><ul><li><code>script</code></li></ul><p>默认加载方式。该模式下，icestark 会通过 HTML script 标签加载微应用脚本资源，再次加载时充分利用浏览器缓存进行加载。</p><ul><li><code>fetch</code></li></ul><p>当指定 loadScriptMode 为 fetch，或配置微应用沙箱模式时，会通过 window.fetch 或用户自定义的 fetch 能力 加载并缓存脚本资源。再次加载时，会充分利用本地内部缓存进行加载。</p><ul><li><code>import</code></li></ul><p>加载 ES modules 类型微应用的主要方式，该模式会通过 Dynamic Import 动态加载脚本资源。</p><p>推荐使用 <code>import</code> 当前项目模板也是采用 <code>import</code> 模式进行加载微应用</p><p><img src="https://s2.loli.net/2024/06/23/FTCl21fnpikmBwG.jpg" alt="icestark.jpg"></p><h3 id="_2-1、项目结构图" tabindex="-1"><a class="header-anchor" href="#_2-1、项目结构图"><span>2.1、项目结构图</span></a></h3><p><img src="https://s2.loli.net/2024/06/29/ysAuXbQ2dVmfUB4.png" alt="1.png"></p><h1 id="_3、vue-主应用接入" tabindex="-1"><a class="header-anchor" href="#_3、vue-主应用接入"><span>3、Vue 主应用接入</span></a></h1><h3 id="_3-1、主应用框架目录规范" tabindex="-1"><a class="header-anchor" href="#_3-1、主应用框架目录规范"><span>3.1、主应用框架目录规范</span></a></h3><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">── project-name                      项目名称</span>
<span class="line">   ├── public                        项目公共目录</span>
<span class="line">   │   ├── favicon.ico                   Favourite 图标</span>
<span class="line">   ├── src                           项目源码目录</span>
<span class="line">   │   ├── api                       把所有请求数据的接口，按照模块在单独的JS文件中</span>
<span class="line">   │   ├── assets                    静态资源目录，公共的静态资源，图片，字体等</span>
<span class="line">   │   │   ├── iconfont                  字体资源</span>
<span class="line">   │   │   ├── images                    图片资源</span>
<span class="line">   │   │   ···</span>
<span class="line">   │   ├── components               公共组件目录</span>
<span class="line">   │   ├── i18n                     多语言配置</span>
<span class="line">   │   ├── libs                     公共脚本</span>
<span class="line">   │   ├── micro                    微服务配置</span>
<span class="line">   │   ├── routes                   前端路由</span>
<span class="line">   │   │   └── index.js</span>
<span class="line">   │   │   ···</span>
<span class="line">   │   ├── store                    数据中心</span>
<span class="line">   │   ├── style                    公共样式，可以是各种预处理语言</span>
<span class="line">   │   │   ├── global.scss              公共样式</span>
<span class="line">   │   │   ├── reset.css                重置样式</span>
<span class="line">   │   │   ···</span>
<span class="line">   │   └── views                     页面目录，所有业务逻辑的页面都应该放这里</span>
<span class="line">   │       ├── home                      应用首页</span>
<span class="line">   │       │   └── index.vue</span>
<span class="line">   │   ├── main.js                   入口js文件</span>
<span class="line">   │   ├── App.vue                   根组件</span>
<span class="line">   │       ···</span>
<span class="line">   ├── .env.development              Vue 开发环境的配置</span>
<span class="line">   ├── .env.uat                      Vue 测试环境的配置</span>
<span class="line">   ├── .env.test                     Vue 预发版环境的配置</span>
<span class="line">   ├── .env.pro                      Vue 生成环境的配置</span>
<span class="line">   ├──  index.html                   页面入口 HTML 模板</span>
<span class="line">   ├── .eslintrc.js                  Eslint 配置文件</span>
<span class="line">   ├── .gitignore                    Git 忽略文件</span>
<span class="line">   ├── package.json                  包依赖文件</span>
<span class="line">   ├── package-lock.json             依赖包版本管理文件</span>
<span class="line">   ├── README.md                     项目介绍</span>
<span class="line">   ├── vite.config.js                脚手架配置</span>
<span class="line">   ···</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2、安装-icestark-依赖" tabindex="-1"><a class="header-anchor" href="#_3-2、安装-icestark-依赖"><span>3.2、安装 icestark 依赖</span></a></h3><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">npm i --save @ice/stark</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-3、配置微应用加载方式和地址" tabindex="-1"><a class="header-anchor" href="#_3-3、配置微应用加载方式和地址"><span>3.3、配置微应用加载方式和地址</span></a></h3><p>在 <strong>src/micro/apps.js</strong> 里面进行配置，采用 <code>import</code> 的形式进行加载</p><h5 id="_3-3-1、配置路径" tabindex="-1"><a class="header-anchor" href="#_3-3-1、配置路径"><span>3.3.1、配置路径</span></a></h5><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">── project-name</span>
<span class="line">   ├── src</span>
<span class="line">   │   ├── micro</span>
<span class="line">   │   │   └── apps.js       子站加载配置地址</span>
<span class="line">   ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-3-2、参考配置" tabindex="-1"><a class="header-anchor" href="#_3-3-2、参考配置"><span>3.3.2、参考配置</span></a></h5><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">export default function (appContainer) {</span>
<span class="line">  return [</span>
<span class="line">    {</span>
<span class="line">      // 微应用唯一标识也是子站的 base 地址</span>
<span class="line">      name: &#39;sme&#39;,</span>
<span class="line">      // 微应用激活规则</span>
<span class="line">      activePath: (url) =&gt; url.includes(&#39;/sme&#39;),</span>
<span class="line">      // 页面标题</span>
<span class="line">      title: &#39;sme&#39;,</span>
<span class="line">      // 微应用挂载 DOM 节点</span>
<span class="line">      container: appContainer,</span>
<span class="line">      // 微应用 JavaScript 资源加载方式</span>
<span class="line">      loadScriptMode: &#39;import&#39;,</span>
<span class="line">      // 标识微应用是否是一个标准的 UMD 微应用</span>
<span class="line">      umd: true,</span>
<span class="line">      // 微应用对应的 html 入口</span>
<span class="line">      entry: window._env_.SME_PATH</span>
<span class="line">    }</span>
<span class="line">  ];</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4、子站地址配置环境变量" tabindex="-1"><a class="header-anchor" href="#_3-4、子站地址配置环境变量"><span>3.4、子站地址配置环境变量</span></a></h3><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">// 开发环境</span>
<span class="line">SME_PATH=http://sme.ruijienetwork.com.cn:8088/sme</span>
<span class="line"></span>
<span class="line">// 测试环境</span>
<span class="line">SME_PATH=https://sme.ruijienetwork.com.cn/sme</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5、定义基准路由" tabindex="-1"><a class="header-anchor" href="#_3-5、定义基准路由"><span>3.5、定义基准路由</span></a></h3><h5 id="_3-5-1、配置路径" tabindex="-1"><a class="header-anchor" href="#_3-5-1、配置路径"><span>3.5.1、配置路径</span></a></h5><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">── project-name</span>
<span class="line">   │   ├── routes</span>
<span class="line">   │   │   └── index.js</span>
<span class="line">   │   │   └── router.js</span>
<span class="line">   │   │   ├── modules              子站统一配置文件夹</span>
<span class="line">   │   │   │   └── sme.js           sme 子站路由配置</span>
<span class="line">   │   │   │   │···</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-5-2、参考配置" tabindex="-1"><a class="header-anchor" href="#_3-5-2、参考配置"><span>3.5.2、参考配置</span></a></h5><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">import { createRouter, createWebHistory } from &quot;vue-router&quot;;</span>
<span class="line">import routers from &quot;./router&quot;;</span>
<span class="line">import { getBasename } from &#39;@ice/stark-app&#39;;</span>
<span class="line"></span>
<span class="line">const router = createRouter({</span>
<span class="line">  history: createWebHistory(),</span>
<span class="line">  base: getBasename(),</span>
<span class="line">  routes: routers,</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">export default router;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6、配置微应用路由" tabindex="-1"><a class="header-anchor" href="#_3-6、配置微应用路由"><span>3.6、配置微应用路由</span></a></h3><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">export default [</span>
<span class="line">  {</span>
<span class="line">    path: &quot;/sme&quot;,</span>
<span class="line">    name: &quot;sme&quot;,</span>
<span class="line">    meta: {</span>
<span class="line">      title: &quot;sme&quot;,</span>
<span class="line">    },</span>
<span class="line">    component: () =&gt; import(&quot;@/layout/index.vue&quot;),</span>
<span class="line">    redirect: &#39;sme/saleAndAgentName&#39;,</span>
<span class="line">    children: [</span>
<span class="line">      {</span>
<span class="line">        path: &quot;saleAndAgentName&quot;,</span>
<span class="line">        name: &quot;saleAndAgentName&quot;,</span>
<span class="line">        meta: {</span>
<span class="line">          title: &quot;选择订单&quot;,</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        path: &quot;createdOrderName&quot;,</span>
<span class="line">        name: &quot;createdOrderName&quot;,</span>
<span class="line">        meta: {</span>
<span class="line">          title: &quot;创建订单&quot;,</span>
<span class="line">        },</span>
<span class="line">      },</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7、在导航组件-注册微应用" tabindex="-1"><a class="header-anchor" href="#_3-7、在导航组件-注册微应用"><span>3.7、在导航组件，注册微应用</span></a></h3><p>在 src/layout/index.vue 里面通过 <code>registerMicroApps</code> 来注册微应用</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;a-layout has-sider&gt;</span>
<span class="line">    &lt;a-layout-sider :style=&quot;{ overflow: &#39;auto&#39;, height: &#39;100vh&#39;, position: &#39;fixed&#39;, left: 0, top: 0, bottom: 0 }&quot;&gt;</span>
<span class="line">      &lt;div class=&quot;logo&quot; /&gt;</span>
<span class="line">      &lt;a-menu v-model:selectedKeys=&quot;selectedKeys&quot; theme=&quot;dark&quot; mode=&quot;inline&quot; @click=&quot;goRouter&quot;&gt;</span>
<span class="line">        &lt;a-menu-item key=&quot;1&quot;&gt;</span>
<span class="line">          &lt;user-outlined /&gt;</span>
<span class="line">          &lt;span class=&quot;nav-text&quot;&gt;nav 1&lt;/span&gt;</span>
<span class="line">        &lt;/a-menu-item&gt;</span>
<span class="line">        &lt;a-menu-item key=&quot;2&quot;&gt;</span>
<span class="line">          &lt;video-camera-outlined /&gt;</span>
<span class="line">          &lt;span class=&quot;nav-text&quot;&gt;nav 2&lt;/span&gt;</span>
<span class="line">        &lt;/a-menu-item&gt;</span>
<span class="line">      &lt;/a-menu&gt;</span>
<span class="line">    &lt;/a-layout-sider&gt;</span>
<span class="line"></span>
<span class="line">    &lt;a-layout :style=&quot;{ marginLeft: &#39;200px&#39; }&quot;&gt;</span>
<span class="line">      &lt;a-layout-header :style=&quot;{ background: &#39;#fff&#39;, padding: 0 }&quot;&gt;</span>
<span class="line">        &lt;a-button type=&quot;primary&quot; @click=&quot;jumpHomePage&quot;&gt;首页&lt;/a-button&gt;</span>
<span class="line">      &lt;/a-layout-header&gt;</span>
<span class="line"></span>
<span class="line">      &lt;a-layout-content :style=&quot;{ margin: &#39;24px 16px 0&#39;, overflow: &#39;initial&#39; }&quot;&gt;</span>
<span class="line">        &lt;div :style=&quot;{ padding: &#39;24px&#39;, background: &#39;#fff&#39;, textAlign: &#39;center&#39;, height: &#39;calc(100vh - 100px)&#39;, &#39;overflow-y&#39;: &#39;auto&#39; }&quot;&gt;</span>
<span class="line">          &lt;!-- 定义微应用的容器 --&gt;</span>
<span class="line">          &lt;div id=&quot;ice-container&quot; /&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">      &lt;/a-layout-content&gt;</span>
<span class="line">      &lt;a-layout-footer :style=&quot;{ textAlign: &#39;center&#39; }&quot;&gt;</span>
<span class="line">        Ant Design ©2018 Created by Ant UED</span>
<span class="line">      &lt;/a-layout-footer&gt;</span>
<span class="line">    &lt;/a-layout&gt;</span>
<span class="line">  &lt;/a-layout&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">import { UserOutlined, VideoCameraOutlined} from &#39;@ant-design/icons-vue&#39;;</span>
<span class="line">import  apps  from &quot;@/micro/apps&quot;;</span>
<span class="line">import { onMounted, ref } from &#39;vue&#39;;</span>
<span class="line">import { useRouter } from &quot;vue-router&quot;;</span>
<span class="line">import { isInIcestark } from &quot;@ice/stark-app&quot;;</span>
<span class="line">import start from &#39;@ice/stark/lib/start&#39;;</span>
<span class="line">import { registerMicroApps } from &#39;@ice/stark/lib/apps&#39;;</span>
<span class="line"></span>
<span class="line">const router = useRouter();</span>
<span class="line"></span>
<span class="line">const selectedKeys = ref([&quot;1&quot;]);</span>
<span class="line"></span>
<span class="line">// 获取微应用挂载的 dom 节点</span>
<span class="line">function getAppContainer (value = &#39;ice-container&#39;) {</span>
<span class="line">  return document.getElementById(value);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 注册微应用</span>
<span class="line">function registerApps () {</span>
<span class="line">  registerMicroApps(apps(getAppContainer()));</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 启动微应用，监听回调</span>
<span class="line">function setMicroAppStart () {</span>
<span class="line">  start({</span>
<span class="line">    onAppEnter(activeApps) {</span>
<span class="line">      console.log({ activeApps });</span>
<span class="line">    },</span>
<span class="line">    onError (activeApps) {</span>
<span class="line">      console.log({ activeApps });</span>
<span class="line">    },</span>
<span class="line">    onLoadingApp: (activeApps) =&gt; {</span>
<span class="line">      console.log({ activeApps });</span>
<span class="line">    },</span>
<span class="line">    onFinishLoading: (activeApps) =&gt; {</span>
<span class="line">      console.log({ activeApps });</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">onMounted(() =&gt; {</span>
<span class="line">  // 判断是后已经存在 icestark 环境，防止重复注册</span>
<span class="line">  if(!isInIcestark()){</span>
<span class="line">    registerApps();</span>
<span class="line">    setMicroAppStart();</span>
<span class="line">   }</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">function jumpHomePage() {</span>
<span class="line">  router.push(&#39;/&#39;);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function goRouter({key}) {</span>
<span class="line">  if(key === &#39;1&#39;){</span>
<span class="line">    router.push({path: &#39;/sme/SaleAndAgentName&#39;});</span>
<span class="line">  }</span>
<span class="line">  if(key === &#39;2&#39;){</span>
<span class="line">    router.push({path: &#39;/sme/CreatedOrderName&#39;});</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;</span>
<span class="line">#components-layout-demo-fixed-sider .logo {</span>
<span class="line">  height: 32px;</span>
<span class="line">  background: rgba(255, 255, 255, 0.2);</span>
<span class="line">  margin: 16px;</span>
<span class="line">}</span>
<span class="line">.site-layout .site-layout-background {</span>
<span class="line">  background: #fff;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">[data-theme=&#39;dark&#39;] .site-layout .site-layout-background {</span>
<span class="line">  background: #141414;</span>
<span class="line">}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4、vue-微应用接入" tabindex="-1"><a class="header-anchor" href="#_4、vue-微应用接入"><span>4、Vue 微应用接入</span></a></h1><h3 id="_4-1、安装-icestark-依赖" tabindex="-1"><a class="header-anchor" href="#_4-1、安装-icestark-依赖"><span>4.1、安装 icestark 依赖</span></a></h3><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">npm i @ice/stark @ice/stark-app -S</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_4-2、安装-vite-plugin-index-html" tabindex="-1"><a class="header-anchor" href="#_4-2、安装-vite-plugin-index-html"><span>4.2、安装 vite-plugin-index-html</span></a></h3><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">npm i vite-plugin-index-html  -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>通过插件配置使打包生成支持 import 格式的文件，由于使用 <code>vite-plugin-index-html</code> 替换 <code>vite-plugin-html</code> 导致打包不能配置变量，也就不能配置环境变量，需要将子站的环境变量统一放到主站里面</p><p>在 vit.config.js 里面新增配置</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">import htmlPlugin from &quot;vite-plugin-index-html&quot;;</span>
<span class="line"></span>
<span class="line">export default defineConfig({</span>
<span class="line">  plugins: [</span>
<span class="line">    htmlPlugin({</span>
<span class="line">      input: &quot;./src/main.js&quot;,</span>
<span class="line">      preserveEntrySignatures: &quot;exports-only&quot;,</span>
<span class="line">    })</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3、应用入口适配" tabindex="-1"><a class="header-anchor" href="#_4-3、应用入口适配"><span>4.3、应用入口适配</span></a></h3><p>在 main.js 中进行调整，支持 <code>umd</code> 格式导出 <code>mount/unmount</code> 方法进行挂载和卸载，兼容非 icestark 环境的情况下执行 vue 的挂载</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">import { createApp } from &quot;vue&quot;;</span>
<span class="line">import App from &quot;~/App.vue&quot;;</span>
<span class="line">import router from &quot;~/router&quot;;</span>
<span class="line">import { isInIcestark } from &quot;@ice/stark-app&quot;;</span>
<span class="line"></span>
<span class="line">let app = null;</span>
<span class="line"></span>
<span class="line">export function mount ({ container }) {</span>
<span class="line">  app = createApp(App);</span>
<span class="line">  app.use(router);</span>
<span class="line">  app.mount(container);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export function unmount () {</span>
<span class="line">  app.unmount();</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 非 icestark 环境下进行默认注册，注：挂载的元素 id 不能重复</span>
<span class="line">if (!isInIcestark()) {</span>
<span class="line">  createApp(App).use(router).mount(&quot;#apps&quot;);</span>
<span class="line">} else {</span>
<span class="line">  const mountedNode = getMountNode();</span>
<span class="line">  mountedNode.innerHTML = &quot;&quot;;</span>
<span class="line">  createApp(App).use(router).mount(mountedNode);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4、定义基准路由" tabindex="-1"><a class="header-anchor" href="#_4-4、定义基准路由"><span>4.4、定义基准路由</span></a></h3><p>vue-router base 路径兼容处理支持 icestark 环境运行和默认环境运行</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">import { createRouter, createWebHistory } from &quot;vue-router&quot;;</span>
<span class="line">import routers from &quot;./router&quot;;</span>
<span class="line">import { getBasename } from &quot;@ice/stark-app&quot;;</span>
<span class="line">import isInIcestark from &quot;@ice/stark-app/lib/isInIcestark&quot;;</span>
<span class="line"></span>
<span class="line">// 返回一个函数，重复进入 vue 应用的时候，重置 routes 实例</span>
<span class="line">const genRoute = () =&gt; {</span>
<span class="line">    const router = createRouter({</span>
<span class="line">      history: createWebHistory(),</span>
<span class="line">      routes: routers,</span>
<span class="line">      base: isInIcestark() ? getBasename() : &quot;/sme&quot;,</span>
<span class="line">    });</span>
<span class="line">    </span>
<span class="line">    return router;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">export default router;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5、定义基准路由" tabindex="-1"><a class="header-anchor" href="#_4-5、定义基准路由"><span>4.5、定义基准路由</span></a></h3><p>在 vite.config.js 中配置 base 地址， base 地址和域名后缀以及主站加载子站的 name 相同</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">import { defineConfig } from &quot;vite&quot;;</span>
<span class="line"></span>
<span class="line">export default defineConfig({</span>
<span class="line">  base: &quot;/sme/&quot;,</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5、项目模板" tabindex="-1"><a class="header-anchor" href="#_5、项目模板"><span>5、项目模板</span></a></h1><h3 id="_5-1、应用技术" tabindex="-1"><a class="header-anchor" href="#_5-1、应用技术"><span>5.1、应用技术</span></a></h3>`,57)),s("p",null,[n[4]||(n[4]=e("vite + vue + ")),s("a",u,[n[2]||(n[2]=e("ant-design-vue")),i(a)]),n[5]||(n[5]=e(" + ")),s("a",o,[n[3]||(n[3]=e("icestark")),i(a)])]),n[8]||(n[8]=l(`<h3 id="_5-2、模板内容" tabindex="-1"><a class="header-anchor" href="#_5-2、模板内容"><span>5.2、模板内容</span></a></h3><p>主应用（使用红色主题） + 子应用（默认蓝色主题）</p><h1 id="_6、常见问题解决" tabindex="-1"><a class="header-anchor" href="#_6、常见问题解决"><span>6、常见问题解决</span></a></h1><h3 id="_6-1、在主应用和子应用多次切换时-主应用会出现样式丢失问题" tabindex="-1"><a class="header-anchor" href="#_6-1、在主应用和子应用多次切换时-主应用会出现样式丢失问题"><span>6.1、在主应用和子应用多次切换时，主应用会出现样式丢失问题</span></a></h3><p>这个问题是由于子应用运行在 <code>boostrap</code> 阶段，此时加载的样式会被 <code>patch</code> 记录，并在 <code>rebuild</code> 阶段还原。 懒加载组件运行在 <code>mounting</code> 阶段，此时加载的样式只会被记录一次。 所以在第一次切换时，会被 <code>rebuild</code> 还原，但是此时记录将被清空。 在超过两次的切换后，组件样式不再加载，无法添加新的记录，导致无法进行 <code>rebuild</code>，最终导致样式丢失。</p><p>解决方案：主应用加载组件，不使用路由懒加载</p><h3 id="_6-2、子站图片地址加载失败" tabindex="-1"><a class="header-anchor" href="#_6-2、子站图片地址加载失败"><span>6.2、子站图片地址加载失败</span></a></h3><p>图片地址是相对地址，导致 dom 节点图片真实地址指向主站，导致图片加载失败</p><p>解决方案：在子站配置 server 的 origin 是图片在地址显示为完整的路径地址</p><p>在vite.config.js 中新增配置如下</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">  server: {</span>
<span class="line">    host: &quot;sme.ruijienetwork.com.cn&quot;,</span>
<span class="line">    port: 8088,</span>
<span class="line">    origin: &quot;http://sme.ruijienetwork.com.cn:8088/&quot;,</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3、主站和子站使用统一组件库-不同主题导致样式污染" tabindex="-1"><a class="header-anchor" href="#_6-3、主站和子站使用统一组件库-不同主题导致样式污染"><span>6.3、主站和子站使用统一组件库，不同主题导致样式污染</span></a></h3><p>主站和子站同时使用 rj-ant-design-vue 主站使用 红色主题的，其中一子站使用，蓝色主题色，导致子站样式影响主站样式</p><p>解决方案：主站或子站配置， rj-ant-design-vue 的样式前缀</p><p>以主站配置为例</p><p>1、在 app.vue 中，配置前缀别名</p><div class="language-HTML line-numbers-mode" data-highlighter="prismjs" data-ext="HTML" data-title="HTML"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div id=&quot;app&quot;&gt;</span>
<span class="line">    &lt;a-config-provider prefix-cls=&quot;partenrs-ant&quot;&gt;</span>
<span class="line">      &lt;router-view /&gt;</span>
<span class="line">    &lt;/a-config-provider&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在 vite.config.js 中配置 less 变量</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">  css: {</span>
<span class="line">    preprocessorOptions: {</span>
<span class="line">      less: {</span>
<span class="line">        modifyVars: {</span>
<span class="line">          &quot;@ant-prefix&quot;: &quot;partenrs-ant&quot;</span>
<span class="line">        },</span>
<span class="line">        javascriptEnabled: true,</span>
<span class="line">      },</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4、频繁切换主应用界面和子应用界面-子应用不显示" tabindex="-1"><a class="header-anchor" href="#_6-4、频繁切换主应用界面和子应用界面-子应用不显示"><span>6.4、频繁切换主应用界面和子应用界面，子应用不显示</span></a></h3><p>在切换主站界面和子站界面时，子站跳转主站界面会执行 unmount 进行卸载，在次访问子站时数据存在缓存，contaniner 存在 dom 结构，导致子站执行 mount 失败</p><p>解决方案：在 vue 挂在的时候通过 id 值进行挂载</p><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">let app = null;</span>
<span class="line"> </span>
<span class="line">export function mount ({ container }) {</span>
<span class="line">  app = createApp(App);</span>
<span class="line">  app.use(router);</span>
<span class="line">  app.mount(\`#\${container.getAttribute(&quot;id&quot;)}\`);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5、子站下载本地的静态文件" tabindex="-1"><a class="header-anchor" href="#_6-5、子站下载本地的静态文件"><span>6.5、子站下载本地的静态文件</span></a></h3><div class="language-JavaScript line-numbers-mode" data-highlighter="prismjs" data-ext="JavaScript" data-title="JavaScript"><pre><code><span class="line">import templateXlsx from &#39;@/assets/文件.xlsx&#39;;</span>
<span class="line"></span>
<span class="line">const fileDownload = () =&gt; {</span>
<span class="line">  state.downloadLoading = true;</span>
<span class="line">  const link = document.createElement(&#39;a&#39;);</span>
<span class="line">  link.href = templateXlsx;</span>
<span class="line">  link.style.display = &#39;none&#39;;</span>
<span class="line">  link.setAttribute(&#39;download&#39;, &#39;文件.xlsx&#39;);</span>
<span class="line">  link.click();</span>
<span class="line">  state.downloadLoading = false;</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25))])}const g=d(t,[["render",m],["__file","icestark.html.vue"]]),f=JSON.parse('{"path":"/blogs/vue/icestark.html","title":"微前端 icestark 教程、规范、常见问题","lang":"en-US","frontmatter":{"title":"微前端 icestark 教程、规范、常见问题","date":"2024-06-30T00:00:00.000Z","tags":["vue","icestark"],"categories":["vue"]},"headers":[{"level":3,"title":"1.1、介绍","slug":"_1-1、介绍","link":"#_1-1、介绍","children":[]},{"level":3,"title":"1.2、项目结构","slug":"_1-2、项目结构","link":"#_1-2、项目结构","children":[]},{"level":3,"title":"2.1、项目结构图","slug":"_2-1、项目结构图","link":"#_2-1、项目结构图","children":[]},{"level":3,"title":"3.1、主应用框架目录规范","slug":"_3-1、主应用框架目录规范","link":"#_3-1、主应用框架目录规范","children":[]},{"level":3,"title":"3.2、安装 icestark 依赖","slug":"_3-2、安装-icestark-依赖","link":"#_3-2、安装-icestark-依赖","children":[]},{"level":3,"title":"3.3、配置微应用加载方式和地址","slug":"_3-3、配置微应用加载方式和地址","link":"#_3-3、配置微应用加载方式和地址","children":[]},{"level":3,"title":"3.4、子站地址配置环境变量","slug":"_3-4、子站地址配置环境变量","link":"#_3-4、子站地址配置环境变量","children":[]},{"level":3,"title":"3.5、定义基准路由","slug":"_3-5、定义基准路由","link":"#_3-5、定义基准路由","children":[]},{"level":3,"title":"3.6、配置微应用路由","slug":"_3-6、配置微应用路由","link":"#_3-6、配置微应用路由","children":[]},{"level":3,"title":"3.7、在导航组件，注册微应用","slug":"_3-7、在导航组件-注册微应用","link":"#_3-7、在导航组件-注册微应用","children":[]},{"level":3,"title":"4.1、安装 icestark 依赖","slug":"_4-1、安装-icestark-依赖","link":"#_4-1、安装-icestark-依赖","children":[]},{"level":3,"title":"4.2、安装 vite-plugin-index-html","slug":"_4-2、安装-vite-plugin-index-html","link":"#_4-2、安装-vite-plugin-index-html","children":[]},{"level":3,"title":"4.3、应用入口适配","slug":"_4-3、应用入口适配","link":"#_4-3、应用入口适配","children":[]},{"level":3,"title":"4.4、定义基准路由","slug":"_4-4、定义基准路由","link":"#_4-4、定义基准路由","children":[]},{"level":3,"title":"4.5、定义基准路由","slug":"_4-5、定义基准路由","link":"#_4-5、定义基准路由","children":[]},{"level":3,"title":"5.1、应用技术","slug":"_5-1、应用技术","link":"#_5-1、应用技术","children":[]},{"level":3,"title":"5.2、模板内容","slug":"_5-2、模板内容","link":"#_5-2、模板内容","children":[]},{"level":3,"title":"6.1、在主应用和子应用多次切换时，主应用会出现样式丢失问题","slug":"_6-1、在主应用和子应用多次切换时-主应用会出现样式丢失问题","link":"#_6-1、在主应用和子应用多次切换时-主应用会出现样式丢失问题","children":[]},{"level":3,"title":"6.2、子站图片地址加载失败","slug":"_6-2、子站图片地址加载失败","link":"#_6-2、子站图片地址加载失败","children":[]},{"level":3,"title":"6.3、主站和子站使用统一组件库，不同主题导致样式污染","slug":"_6-3、主站和子站使用统一组件库-不同主题导致样式污染","link":"#_6-3、主站和子站使用统一组件库-不同主题导致样式污染","children":[]},{"level":3,"title":"6.4、频繁切换主应用界面和子应用界面，子应用不显示","slug":"_6-4、频繁切换主应用界面和子应用界面-子应用不显示","link":"#_6-4、频繁切换主应用界面和子应用界面-子应用不显示","children":[]},{"level":3,"title":"6.5、子站下载本地的静态文件","slug":"_6-5、子站下载本地的静态文件","link":"#_6-5、子站下载本地的静态文件","children":[]}],"git":{"createdTime":1719739332000,"updatedTime":1719739332000,"contributors":[{"name":"motioliang","email":"1398814154@qq.com","commits":1}]},"filePathRelative":"blogs/vue/icestark.md"}');export{g as comp,f as data};
