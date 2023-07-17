import{_ as s,o as n,c as a,a as e}from"./app-31c067ee.js";const i={},t=e(`<h3 id="git-回退到某个-commit" tabindex="-1"><a class="header-anchor" href="#git-回退到某个-commit" aria-hidden="true">#</a> git 回退到某个 commit</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>回退命令：
$ git reset <span class="token operator">--</span>hard <span class="token constant">HEAD</span><span class="token operator">^</span>         回退到上个版本

$ git reset <span class="token operator">--</span>hard <span class="token constant">HEAD</span><span class="token operator">~</span><span class="token number">3</span>        回退到前<span class="token number">3</span>次提交之前，以此类推，回退到n次提交之前

$ git reset <span class="token operator">--</span>hard commit_id     退到<span class="token operator">/</span>进到 指定commit的sha码


强推到远程：
$ git push origin <span class="token constant">HEAD</span> <span class="token operator">--</span>force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[t];function r(o,l){return n(),a("div",null,c)}const p=s(i,[["render",r],["__file","gitcommit.html.vue"]]);export{p as default};
