---
home: true
modules:
  - BannerBrand
  - Blog
  - MdContent
  - Footer
  
bannerBrand:
  bgImage: '/bg.svg'
  title: Setlla 编程之路
  description: 编程见闻录。
  tagline: 剑术已成君把去，有蛟龙处斩蛟龙。
  buttons:
    - { text: 导航, link: '/docs/guide/tools' }
    - { text: 知识体系, link: '/docs/guide/map', type: 'plain' }
  socialLinks:
#    - { icon: 'LogoGithub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
blog:
  socialLinks:
#    - { icon: 'LogoGithub', link: 'https://github.com/recoluan' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about

footer: # 底部模块的配置
#  record: 域名备案文案
#  recordLink: 域名备案地址
#  cyberSecurityRecord: 公安备案文案
#  cyberSecurityLink: 公安备案地址
  startYear: 2018
---

## 快速开始

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```
