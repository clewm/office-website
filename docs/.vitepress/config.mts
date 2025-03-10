import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "狐闹HuLab",
  description: "A VitePress Site",
  head:[
    ['link', { rel: 'icon', href: '/logo-circle.svg' }], // 设置网站图标,
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '软件一览', link: '/my-app-list' }
    ],

     outlineTitle:"导航",
  
    logo: "/logo-hz.svg",
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },

    sidebar: [
      {
        text: '📱 App清单',
        items: [
          { text: '软件一览', link: '/my-app-list' },
        ]
      },
      {
        text: '🌻 已发布的软件',
        items: [
          { text: '#1 集梦盒', link: '/app-jmh' },
  
        ]
      },
      {
        text: '🍎 正在开发中的软件',
        items: [
          { text: '#1 一款关于情侣互动的App', link: '/app-qlb' }
        ]
      }
    ],

    socialLinks: [
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#FFC107" d="M17.5,44c-3.6,0-6.5-1.6-6.5-3.5s2.9-3.5,6.5-3.5s6.5,1.6,6.5,3.5S21.1,44,17.5,44z M37,40.5c0-1.9-2.9-3.5-6.5-3.5S24,38.6,24,40.5s2.9,3.5,6.5,3.5S37,42.4,37,40.5z"></path><path fill="#37474F" d="M37.2,22.2c-0.1-0.3-0.2-0.6-0.3-1c0.1-0.5,0.1-1,0.1-1.5c0-1.4-0.1-2.6-0.1-3.6C36.9,9.4,31.1,4,24,4S11,9.4,11,16.1c0,0.9,0,2.2,0,3.6c0,0.5,0,1,0.1,1.5c-0.1,0.3-0.2,0.6-0.3,1c-1.9,2.7-3.8,6-3.8,8.5C7,35.5,8.4,35,8.4,35c0.6,0,1.6-1,2.5-2.1C13,38.8,18,43,24,43s11-4.2,13.1-10.1C38,34,39,35,39.6,35c0,0,1.4,0.5,1.4-4.3C41,28.2,39.1,24.8,37.2,22.2z"></path><path fill="#ECEFF1" d="M14.7,23c-0.5,1.5-0.7,3.1-0.7,4.8C14,35.1,18.5,41,24,41s10-5.9,10-13.2c0-1.7-0.3-3.3-0.7-4.8H14.7z"></path><path fill="#FFF" d="M23,13.5c0,1.9-1.1,3.5-2.5,3.5S18,15.4,18,13.5s1.1-3.5,2.5-3.5S23,11.6,23,13.5z M27.5,10c-1.4,0-2.5,1.6-2.5,3.5s1.1,3.5,2.5,3.5s2.5-1.6,2.5-3.5S28.9,10,27.5,10z"></path><path fill="#37474F" d="M22,13.5c0,0.8-0.4,1.5-1,1.5s-1-0.7-1-1.5s0.4-1.5,1-1.5S22,12.7,22,13.5z M27,12c-0.6,0-1,0.7-1,1.5s0.4-0.5,1-0.5s1,1.3,1,0.5S27.6,12,27,12z"></path><path fill="#FFC107" d="M32,19.5c0,0.8-3.6,2.5-8,2.5s-8-1.7-8-2.5s3.6-1.5,8-1.5S32,18.7,32,19.5z"></path><path fill="#FF3D00" d="M38.7,21.2c-0.4-1.5-1-2.2-2.1-1.3c0,0-5.9,3.1-12.5,3.1v0.1l0-0.1c-6.6,0-12.5-3.1-12.5-3.1c-1.1-0.8-1.7-0.2-2.1,1.3c-0.4,1.5-0.7,2,0.7,2.8c0.1,0.1,1.4,0.8,3.4,1.7c-0.6,3.5-0.5,6.8-0.5,7c0.1,1.5,1.3,1.3,2.9,1.3c1.6-0.1,2.9,0,2.9-1.6c0-0.9,0-2.9,0.3-5c1.6,0.3,3.2,0.6,5,0.6l0,0v0c7.3,0,13.7-3.9,13.9-4C39.3,23.3,39,22.8,38.7,21.2z"></path><path fill="#DD2C00" d="M13.2,27.7c1.6,0.6,3.5,1.3,5.6,1.7c0-0.6,0.1-1.3,0.2-2c-2.1-0.5-4-1.1-5.5-1.7C13.4,26.4,13.3,27.1,13.2,27.7z"></path></svg>'
      }, link: 'https://link3.cc/hulab' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#1e88e5" d="M36.5,12h-7.086l3.793-3.793c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L26.586,12 h-5.172l-5.207-5.207c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L18.586,12H12.5C9.467,12,7,14.467,7,17.5v15 c0,3.033,2.467,5.5,5.5,5.5h2c0,0.829,0.671,1.5,1.5,1.5s1.5-0.671,1.5-1.5h14c0,0.829,0.671,1.5,1.5,1.5s1.5-0.671,1.5-1.5h2 c3.033,0,5.5-2.467,5.5-5.5v-15C42,14.467,39.533,12,36.5,12z M39,32.5c0,1.378-1.122,2.5-2.5,2.5h-24c-1.378,0-2.5-1.122-2.5-2.5 v-15c0-1.378,1.122-2.5,2.5-2.5h24c1.378,0,2.5,1.122,2.5,2.5V32.5z"></path><rect width="2.75" height="7.075" x="30.625" y="18.463" fill="#1e88e5" transform="rotate(-71.567 32.001 22)"></rect><rect width="7.075" height="2.75" x="14.463" y="20.625" fill="#1e88e5" transform="rotate(-18.432 17.998 21.997)"></rect><path fill="#1e88e5" d="M28.033,27.526c-0.189,0.593-0.644,0.896-1.326,0.896c-0.076-0.013-0.139-0.013-0.24-0.025 c-0.013,0-0.05-0.013-0.063,0c-0.341-0.05-0.745-0.177-1.061-0.467c-0.366-0.265-0.808-0.745-0.947-1.477 c0,0-0.29,1.174-0.896,1.49c-0.076,0.05-0.164,0.114-0.253,0.164l-0.038,0.025c-0.303,0.164-0.682,0.265-1.086,0.278 c-0.568-0.051-0.947-0.328-1.136-0.821l-0.063-0.164l-1.427,0.656l0.05,0.139c0.467,1.124,1.465,1.768,2.74,1.768 c0.922,0,1.667-0.303,2.209-0.909c0.556,0.606,1.288,0.909,2.209,0.909c1.856,0,2.55-1.288,2.765-1.843l0.051-0.126l-1.427-0.657 L28.033,27.526z"></path></svg>'
      }, link: 'https://link3.cc/hulab' },
    ]
  }
})
