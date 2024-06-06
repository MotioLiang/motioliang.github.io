import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "motioliang",
  description: "A bold attempt is half success.",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "motioliang",
    authorAvatar: "/head.png",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    // docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      { text: '时间线', link: '/timeline' },
      {
        text: '链接',
        icon: 'reco-message',
        children: [
          { text: 'V2EX', link: 'https://www.v2ex.com/' },
          { text: 'videvo', link: 'https://www.videvo.net/search/keyboard/' },
          { text: '优设导航', link: 'https://hao.uisdc.com/' },
          { text: '创造狮导航', link: 'http://www.chuangzaoshi.com/' },
          { text: '前端导航平台', link: 'https://docs.pfan123.com/' },
          { text: 'dowebok', link: 'https://www.dowebok.com/' },
          { text: 'Vue 插件库', link: 'https://www.vue365.cn/' }
        ]
      }
      // { text: "Categories", link: "/categories/reco/1/" },
      // { text: "Tags", link: "/tags/tag1/1/" },
      // {
      //   text: "Docs",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
    ],
    // 自动设置分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 1, // 默认 0
      categoryText: '分类', // 默认 categories
      tagText: '标签' // 默认 tags
    },
  }),
  // debug: true,
});
