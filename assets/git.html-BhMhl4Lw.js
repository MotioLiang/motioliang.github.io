import{_ as s,c as a,e,o as p}from"./app-DKLT9RiB.js";const l={};function i(t,n){return p(),a("div",null,n[0]||(n[0]=[e(`<blockquote><ol><li>master: 默认开发分支</li><li>origin: 默认远程版本库</li><li>Index / Stage：暂存区</li><li>Workspace：工作区</li><li>Repository：仓库区（或本地仓库）</li><li>Remote：远程仓库</li></ol></blockquote><h2 id="一、新建代码库" tabindex="-1"><a class="header-anchor" href="#一、新建代码库"><span>一、新建代码库</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 在当前目录新建一个Git代码库</span></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"><span class="token comment"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、配置" tabindex="-1"><a class="header-anchor" href="#二、配置"><span>二、配置</span></a></h2><blockquote><p>Git 的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 显示当前的Git配置</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--list</span></span>
<span class="line"><span class="token comment"># 编辑Git配置文件</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">-e</span> <span class="token punctuation">[</span>--global<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 设置提交代码时的用户信息</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;[name]&quot;</span></span>
<span class="line"><span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;[email address]&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、增加-删除-修改文件" tabindex="-1"><a class="header-anchor" href="#三、增加-删除-修改文件"><span>三、增加/删除/修改文件</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment">#查看状态</span></span>
<span class="line">$ <span class="token function">git</span> status</span>
<span class="line"><span class="token comment">#查看变更内容</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">diff</span></span>
<span class="line"><span class="token comment"># 添加指定文件到暂存区</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.</span>
<span class="line"><span class="token comment"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token comment"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span class="token comment"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-p</span></span>
<span class="line"><span class="token comment"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.</span>
<span class="line"><span class="token comment"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、代码提交" tabindex="-1"><a class="header-anchor" href="#四、代码提交"><span>四、代码提交</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 提交暂存区到仓库区</span></span>
<span class="line">$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line">$ <span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>. <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line">$ <span class="token function">git</span> commit <span class="token parameter variable">-a</span></span>
<span class="line"><span class="token comment"># 提交时显示所有diff信息</span></span>
<span class="line">$ <span class="token function">git</span> commit <span class="token parameter variable">-v</span></span>
<span class="line"><span class="token comment"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span class="token comment"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line">$ <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line">$ <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、分支" tabindex="-1"><a class="header-anchor" href="#五、分支"><span>五、分支</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment">#显示所有本地分支</span></span>
<span class="line">$ <span class="token function">git</span> branch</span>
<span class="line"><span class="token comment"># 列出所有远程分支</span></span>
<span class="line">$ <span class="token function">git</span> branch <span class="token parameter variable">-r</span></span>
<span class="line"><span class="token comment"># 列出所有本地分支和远程分支</span></span>
<span class="line">$ <span class="token function">git</span> branch <span class="token parameter variable">-a</span></span>
<span class="line"><span class="token comment"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line">$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line">$ <span class="token function">git</span> branch <span class="token parameter variable">--track</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 删除分支</span></span>
<span class="line">$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 删除远程分支</span></span>
<span class="line">$ <span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span></span>
<span class="line">$ <span class="token function">git</span> branch <span class="token parameter variable">-dr</span> <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 新建一个分支，并切换到该分支</span></span>
<span class="line">$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 切换到指定分支，并更新工作区</span></span>
<span class="line">$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 切换到上一个分支</span></span>
<span class="line">$ <span class="token function">git</span> checkout -</span>
<span class="line"><span class="token comment"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line">$ <span class="token function">git</span> branch --set-upstream <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 合并指定分支到当前分支</span></span>
<span class="line">$ <span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">#衍合指定分支到当前分支</span></span>
<span class="line">$ <span class="token function">git</span> rebase <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># 选择一个commit，合并进当前分支</span></span>
<span class="line">$ <span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、标签" tabindex="-1"><a class="header-anchor" href="#六、标签"><span>六、标签</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"> <span class="token comment">#列出所有本地标签</span></span>
<span class="line">$ <span class="token function">git</span> tag</span>
<span class="line"><span class="token comment">#基于最新提交创建标签</span></span>
<span class="line">$ <span class="token function">git</span> tag <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token comment">#删除标签</span></span>
<span class="line">$ <span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># 删除远程tag</span></span>
<span class="line">$ <span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 查看tag信息</span></span>
<span class="line">$ <span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 提交指定tag</span></span>
<span class="line">$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 提交所有tag</span></span>
<span class="line">$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--tags</span></span>
<span class="line"><span class="token comment"># 新建一个分支，指向某个tag</span></span>
<span class="line">$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、查看信息" tabindex="-1"><a class="header-anchor" href="#七、查看信息"><span>七、查看信息</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 显示有变更的文件</span></span>
<span class="line">$ <span class="token function">git</span> status</span>
<span class="line"><span class="token comment"># 显示当前分支的版本历史</span></span>
<span class="line">$ <span class="token function">git</span> log</span>
<span class="line"><span class="token comment"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line">$ <span class="token function">git</span> log <span class="token parameter variable">--stat</span></span>
<span class="line"><span class="token comment"># 搜索提交历史，根据关键词</span></span>
<span class="line">$ <span class="token function">git</span> log <span class="token parameter variable">-S</span> <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line">$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:%s</span>
<span class="line"><span class="token comment"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line">$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--grep</span> feature</span>
<span class="line"><span class="token comment"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line">$ <span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line">$ <span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 显示指定文件相关的每一次diff</span></span>
<span class="line">$ <span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 显示过去5次提交</span></span>
<span class="line">$ <span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--pretty</span> <span class="token parameter variable">--oneline</span></span>
<span class="line"><span class="token comment"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line">$ <span class="token function">git</span> shortlog <span class="token parameter variable">-sn</span></span>
<span class="line"><span class="token comment"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line">$ <span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 显示暂存区和工作区的差异</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">diff</span></span>
<span class="line"><span class="token comment"># 显示暂存区和上一个commit的差异</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">diff</span> HEAD</span>
<span class="line"><span class="token comment"># 显示两次提交之间的差异</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 显示今天你写了多少行代码</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--shortstat</span> <span class="token string">&quot;@{0 day ago}&quot;</span></span>
<span class="line"><span class="token comment"># 显示某次提交的元数据和内容变化</span></span>
<span class="line">$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 显示某次提交发生变化的文件</span></span>
<span class="line">$ <span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 显示某次提交时，某个文件的内容</span></span>
<span class="line">$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 显示当前分支的最近几次提交</span></span>
<span class="line">$ <span class="token function">git</span> reflog</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、远程操作" tabindex="-1"><a class="header-anchor" href="#八、远程操作"><span>八、远程操作</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 下载远程仓库的所有变动</span></span>
<span class="line">$ <span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line">$ <span class="token function">git</span> pull <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 显示所有远程仓库</span></span>
<span class="line">$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span></span>
<span class="line"><span class="token comment"># 显示某个远程仓库的信息</span></span>
<span class="line">$ <span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 增加一个新的远程仓库，并命名</span></span>
<span class="line">$ <span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 上传本地指定分支到远程仓库</span></span>
<span class="line">$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line">$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--force</span></span>
<span class="line"><span class="token comment"># 推送所有分支到远程仓库</span></span>
<span class="line">$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--all</span></span>
<span class="line"><span class="token comment">#删除远程分支或标签</span></span>
<span class="line">$ <span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> :<span class="token operator">&lt;</span>branch/tag-name<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment">#上传所有标签</span></span>
<span class="line">$ <span class="token function">git</span> push <span class="token parameter variable">--tags</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、撤销" tabindex="-1"><a class="header-anchor" href="#九、撤销"><span>九、撤销</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment">#撤销工作目录中所有未提交文件的修改内容</span></span>
<span class="line">$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD</span>
<span class="line"><span class="token comment">#撤销指定的未提交文件的修改内容</span></span>
<span class="line">$ <span class="token function">git</span> checkout HEAD <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token comment">#撤销指定的提交</span></span>
<span class="line">$ <span class="token function">git</span> revert <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span></span>
<span class="line"> <span class="token comment">#退回到之前1天的版本</span></span>
<span class="line">$ <span class="token function">git</span> log <span class="token parameter variable">--before</span><span class="token operator">=</span><span class="token string">&quot;1 days&quot;</span></span>
<span class="line"><span class="token comment"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line">$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 恢复某个commit的指定文件到暂存区和工作区</span></span>
<span class="line">$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line">$ <span class="token function">git</span> checkout <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token comment"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line">$ <span class="token function">git</span> reset <span class="token punctuation">[</span>file<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line">$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span></span>
<span class="line"><span class="token comment"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line">$ <span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line">$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line">$ <span class="token function">git</span> reset <span class="token parameter variable">--keep</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span class="token comment"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line">$ <span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line">$ <span class="token function">git</span> stash</span>
<span class="line">$ <span class="token function">git</span> stash pop</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、其他" tabindex="-1"><a class="header-anchor" href="#十、其他"><span>十、其他</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 生成一个可供发布的压缩包</span></span>
<span class="line">$ <span class="token function">git</span> archive</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一、常用" tabindex="-1"><a class="header-anchor" href="#十一、常用"><span>十一、常用</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 初始化版本库</span></span>
<span class="line">$ <span class="token function">git</span> init</span>
<span class="line"><span class="token comment"># 你的远程库地址  // 把本地库与远程库关联</span></span>
<span class="line">$ <span class="token function">git</span> remote <span class="token function">add</span> origin</span>
<span class="line"><span class="token comment"># 切换到基础分支，如主干</span></span>
<span class="line">$ <span class="token function">git</span> checkout master</span>
<span class="line"><span class="token comment"># 创建并切换到新分支[panda]</span></span>
<span class="line">$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> panda</span>
<span class="line"><span class="token comment"># 添加文件到版本库（只是添加到缓存区），.代表添加文件夹下所有文件</span></span>
<span class="line">$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token comment"># 把添加的文件提交到版本库，并填写提交备注</span></span>
<span class="line">$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span></span>
<span class="line"><span class="token comment"># 推送到远程仓库[panda]</span></span>
<span class="line">$ <span class="token function">git</span> push origin panda</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const o=s(l,[["render",i],["__file","git.html.vue"]]),u=JSON.parse('{"path":"/blogs/git/git.html","title":"git 常用命令速查表","lang":"en-US","frontmatter":{"title":"git 常用命令速查表","date":"2019-4-25","tags":["git"],"categories":["git"]},"headers":[{"level":2,"title":"一、新建代码库","slug":"一、新建代码库","link":"#一、新建代码库","children":[]},{"level":2,"title":"二、配置","slug":"二、配置","link":"#二、配置","children":[]},{"level":2,"title":"三、增加/删除/修改文件","slug":"三、增加-删除-修改文件","link":"#三、增加-删除-修改文件","children":[]},{"level":2,"title":"四、代码提交","slug":"四、代码提交","link":"#四、代码提交","children":[]},{"level":2,"title":"五、分支","slug":"五、分支","link":"#五、分支","children":[]},{"level":2,"title":"六、标签","slug":"六、标签","link":"#六、标签","children":[]},{"level":2,"title":"七、查看信息","slug":"七、查看信息","link":"#七、查看信息","children":[]},{"level":2,"title":"八、远程操作","slug":"八、远程操作","link":"#八、远程操作","children":[]},{"level":2,"title":"九、撤销","slug":"九、撤销","link":"#九、撤销","children":[]},{"level":2,"title":"十、其他","slug":"十、其他","link":"#十、其他","children":[]},{"level":2,"title":"十一、常用","slug":"十一、常用","link":"#十一、常用","children":[]}],"git":{"createdTime":1639637702000,"updatedTime":1639637702000,"contributors":[{"name":"王浩亮","email":"wanghaoliang@epatient.cn","commits":1}]},"filePathRelative":"blogs/git/git.md"}');export{o as comp,u as data};
