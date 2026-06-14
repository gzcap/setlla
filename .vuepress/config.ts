import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
import { removePwaPlugin } from '@vuepress/plugin-remove-pwa'
import {pwaPlugin} from "@vuepress/plugin-pwa";

export default defineUserConfig({
  base: '/setlla/',
  title: "Java",
  description: "编码见闻录",
  bundler: viteBundler(),
  // head: [
  //   ['link', { rel: 'icon', href: '/images/logo.png' }],
  //   ['link', { rel: 'manifest', href: '/manifest.json' }],
  //   ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  //   ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  //   ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  //   ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
  //   ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
  //   ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
  //   ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  // ],
  // bundler: webpackBundler(),
  theme: recoTheme({

    // style: "@vuepress-reco/style-default",
    logo: "/icon.svg",
    author: "gzc",
    authorAvatar: "/icon.svg",
    docsRepo: "https://github.com/gzcap/setlla",
    docsBranch: "main",
    docsDir: "./",
    lastUpdatedText: "上次更新时间",
    // series 为原 sidebar 左侧边栏 - 匹配上路径就显示
    series: {
      // "/docs/theme-reco/": [
      //   {
      //     text: "module one",
      //     children: ["home", "theme"],
      //   },
      //   {
      //     text: "module two",
      //     children: ["api", "plugin"],
      //   },
      // ],
      "/blogs/docs/Java/": [
        {
          text: '基础',
          icon: 'Document',
          children: [
            { text: '基础', link: '/blogs/docs/Java/base/base01' },
            { text: "注释_关键字_字面量_变量_数据类型_标识符_输入输出_运算符", link: "/blogs/docs/Java/base/base02" },
            { text: "流程控制_数组_字符串", link: "/blogs/docs/Java/base/base03" },
            { text: "集合_包装类_方法_四种引用", link: "/blogs/docs/Java/base/base04" },
            { text: "面向对象", link: "/blogs/docs/Java/base/base05" },
            { text: "泛型|函数编程", link: "/blogs/docs/Java/base/base06" },
            { text: "异常|注解", link: "/blogs/docs/Java/base/base07" },
          ],
        },
        {
          text: '集合体系',
          children: [
            { text: "集合体系结构", link: "/blogs/docs/Java/collections/base08" },
          ],
        },
        {
          text: '集合体系',
          children: [
            { text: "JavaIO", link: "/blogs/docs/Java/IO/base09" },
          ],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: '导航',
        icon: 'AddLocationAltFilled',
        children: [
          {
            text: '工具',
            icon: 'CalendarTools',
            link: '/blogs/docs/guide/tools' ,
          },
          {
            text: '知识体系',
            icon: 'Map',
            link: '/blogs/docs/guide/map' ,
          },
        ],
      },
      {
        text: 'Java',
        icon: 'Document',
        children: [
          {
            text: '基础',
            children: [
              { text: '基础', link: '/blogs/docs/Java/base/base01' },
              { text: "注释_关键字_字面量_变量_数据类型_标识符_输入输出_运算符", link: "/blogs/docs/Java/base/base02" },
              { text: "流程控制_数组_字符串", link: "/blogs/docs/Java/base/base03" },
              { text: "集合_包装类_方法_四种引用", link: "/blogs/docs/Java/base/base04" },
              { text: "面向对象", link: "/blogs/docs/Java/base/base05" },
              { text: "泛型|函数编程", link: "/blogs/docs/Java/base/base06" },
              { text: "异常|注解", link: "/blogs/docs/Java/base/base07" },
            ],
          },
          {
            text: '集合体系',
            children: [
              { text: "集合体系结构", link: "/blogs/docs/Java/collections/base08" },
            ],
          },
          {
            text: '集合体系',
            children: [
              { text: "JavaIO", link: "/blogs/docs/Java/IO/base09" },
            ],
          },
        ],
      },
      // { text: "Categories", link: "/blogs/Java/092101" },
      // { text: "Tags", link: "/tags/tag1/1/" },
      // {
      //   text: "Docs",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
    ],
    // 公告
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // 评论
    commentConfig: {
      type: 'giscus',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        repo: 'gzcap/setlla',
        repoId: 'R_kgDOM4br1Q',
        category: 'Announcements',
        categoryId: 'DIC_kwDOM4br1c4Ci4E_',
        mapping: 'pathname',
        lang: "zh-CN",
        strict: "0",
        reactionsEnabled: "1",
        emitMetadata: "0",
        inputPosition: "top",
        theme: "preferred_color_scheme",
        hideComments: true // 隐藏评论
      },
    },
    tip: '提示',
    info: '信息',
    danger: '危险',
    warning: '警告',
    details: '详情',
    backToHome: '返回首页',
    catalogTitle: '页面导航',
    editLinkText: '编辑当前页面',
    notFound: '哇哦，没有发现这个页面！',
    selectLanguageText: '语言',
    selectLanguageName: '简体中文',
  }),
  // debug: true,

  plugins: [
    pwaPlugin({
      // 选项
      // showInstall: true,
      manifest: {
        name: "Java中文文档",
        short_name: "JAVADocs",
        display: "standalone",
        background_color: "#fff",
        start_url: "/setlla/",
        scope: "/setlla/",
        description: "Java 中文文档",
        icons: [{
          "src": "logo52.png",
          "sizes": "52x52",
          "type": "image/png"
        },{
          "src": "logo288.png",
          "sizes": "288x288",
          "type": "image/png"
        }]
      },
      favicon: '/logo.png',
      cacheImage: true,
      update: 'hint'
    }),
    removePwaPlugin({
      // 选项
    }),
  ],
});
