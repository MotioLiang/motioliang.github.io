module.exports = {
    title: 'motioliang',
    description: 'A bold attempt is half success.',
    dest: 'public',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico'
            }
        ],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no'
            }
        ]
    ],
    theme: 'reco',
    themeConfig: {
        valineConfig: {
            appId: 'ngkgv0wTzVLdBQpxPxPrRJCj-MdYXbMMI', // your appId
            appKey: '1uf5O4756PRtEcD7VHTGOurM', // your appKey
            placeholder: '填写邮箱可以收到回复提醒哦！',
            verify: true,
            visitor: true,
            avatar: 'retro'
        },
        subSidebar: 'auto',
        nav: [
            {
                text: '主页',
                link: '/',
                icon: 'reco-home'
            },
            {
                text: '归档',
                link: '/timeline/',
                icon: 'reco-date'
            },
            {
                text: 'GitHub',
                icon: 'reco-github',
                link: 'https://github.com/MotioLiang'
            },
            {
                text: '链接',
                icon: 'reco-message',
                items: [
                    { text: 'V2EX', link: 'https://www.v2ex.com/', icon: 'reco-v2ex' },
                    { text: 'videvo', link: 'https://www.videvo.net/search/keyboard/', icon: 'reco-eye' },
                    { text: '优设导航', link: 'https://hao.uisdc.com/', icon: 'reco-eye' },
                    { text: '创造狮导航', link: 'http://www.chuangzaoshi.com/', icon: 'reco-eye' },
                    { text: '前端导航平台', link: 'https://docs.pfan123.com/', icon: 'reco-eye' },
                    { text: 'dowebok', link: 'https://www.dowebok.com/', icon: 'reco-eye' },
                    { text: 'Vue 插件库', link: 'https://www.vue365.cn/', icon: 'reco-eye' }
                ]
            }
        ],
        // sidebar: {
        //     '/docs/theme-reco/': ['', 'theme', 'plugin', 'api']
        // },
        type: 'blog',
        blogConfig: {
            category: {
                location: 2,
                text: '分类'
            },
            tag: {
                location: 3,
                text: '标签'
            }
        },
        friendLink: [
            {
                title: 'BookChat',
                desc: '分享知识，共享智慧',
                link: 'https://www.bookstack.cn'
            },
            {
                title: '冴羽的博客',
                desc: '冴羽的博客',
                link: 'https://github.com/mqyqingfeng/Blog'
            }
        ],
        // logo: '/logo.png',
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
        author: 'motioliang',
        authorAvatar: '/avatar.png',
        // record: 'xxxx',
        startYear: '2018'
    },
    markdown: {
        lineNumbers: true
    }
}
