// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    link: [
        { rel: 'icon', type: 'image/x-icon',  href: '/favico.ico' }
      ],
    },
  },
  devtools: { enabled: true },
  typescript: {
    typeCheck: false
  },
  nitro: {
    plugins: [
      '@/server/index',
    ],
  },
  site: {
    // production URL
    url: 'https://touching-development.vercel.app',
  },
  // vite: {
  //   css:{
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `@use "~/assets/css/element.scss" as *;`,
  //       },
  //   }
  //   },
  // },
  css: ['~/assets/css/main.scss'],
  modules: [  '@nuxtjs/tailwindcss', '@element-plus/nuxt', 'nuxt-og-image', '@pinia/nuxt', '@nuxt/devtools'],
  ogImage: {
    fonts: ['Noto+Sans+TC:700']
  },
  alias: {
    '@/interface': "/<rootDir>/interface",
  }
  // modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt', '@nuxtjs/sitemap'],
  // sitemap: {
  //   urls: ['touching-development.vercel.app']
  // }
})
