import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "motioliang",
  description: "A bold attempt is half success.",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    tip: '提示',
    info: '信息',
    danger: '危险',
    warning: '警告',
    details: '详情',
    tagsText: '标签',
    backToHome: '返回首页',
    categoriesText: '分类',
    catalogTitle: '页面导航',
    editLinkText: '编辑当前页面',
    lastUpdatedText: '最后更新时间',
    selectLanguageName: '简体中文',
    notFound: '哇哦，没有发现这个页面！',
    inputPasswordText: '请输入密码',
    unlockSucessText: '密码正确，玩得开心！',
    unlockFailuerText: '密码错误，请重新输入！',

    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "motioliang",
    authorAvatar: "/head.png",
    navbar: [
      { text: "首页", link: "/", icon: 'IconHome' },
      { text: '时间线', link: '/timeline' },
      {
        text: '链接',
        children: [
          { text: 'V2EX', link: 'https://www.v2ex.com/' },
          { text: 'videvo', link: 'https://www.videvo.net/search/keyboard/' },
          { text: '优设导航', link: 'https://hao.uisdc.com/' },
          { text: '创造狮导航', link: 'http://www.chuangzaoshi.com/' },
          { text: 'dowebok', link: 'https://www.dowebok.com/code' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'IconGitHub', link: 'https://github.com/motioliang' }
    ],

    // 自动设置分类
    autoSetBlogCategories: true,
    autoAddCategoryToNavbar: {
      location: 1, // 插入位置，默认 0
      showIcon: true, // 展示图标，默认 false
    },
  }),
});
