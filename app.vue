<script setup lang="ts">
useSeoMeta({
  ogTitle: "雪莉鵝鵝的歐居抬頭",
  ogSiteName: "雪莉鵝鵝",
});

const obj = useHead({
  htmlAttrs: {
    lang: "zh",
  },
  // charset: 'utf-8',
  title: "雪莉鵝鵝的抬頭",
  meta: [
    // {
    //   name: 'description',
    //   content:
    //     '協助居民處理都市更新、危老重建、土地開發、土地整合，提供社區進駐都更顧問服務，協助區段徵收土地整合的專業平台。歡迎洽詢：02-66375178'
    // },
    // { name: 'facebook-domain-verification', content: '245tkp8la2bmcfnqqt5pmo23ykf8f3' },
    // { name: 'google-site-verification', content: 'xXe3FAbfzIH1D02LiopS5Fwlz0nzoEeYqrJ8s4uxeEU' },
    // { name: 'google-site-verification', content: 'YUOI5Nu19bHgAHFM0KsBdja-bNSr-_rkaRMF2aN' },
    // { name: 'google-adsense-account', content: 'ca-pub-9283303256171890' },
    // {
    //   name: 'google-signin-client_id',
    //   content: '741352649001-hodgqcrbp3ha1r2vasetio5jl494m4nl.apps.googleusercontent.com'
    // }
    // { name: 'twitter:card', content: 'summary_large_image' },
    // { name: 'twitter:site', content: '@nuxt_js' },
    // { name: 'twitter:creator', content: '@nuxt_js' },
  ],
  script: [
    // Google API
    //       {
    //         src: 'https://apis.google.com/js/api:client.js'
    //       },
    //       {
    //         src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9283303256171890',
    //         async: true,
    //         crossorigin: 'anonymous'
    //       },
    //       {
    //         src: 'https://kit.fontawesome.com/74750ae8b3.js',
    //         type: 'text/javascript',
    //         crossorigin: 'anonymous'
    //       },
    //       // Google Adsense
    //       {
    //         src: 'https://www.googletagmanager.com/gtag/js?id=G-M7D4W5N6L0',
    //         async: true
    //       },
    //       // fb login btn
    //       {
    //         src: 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v19.0&appId=933964164937455',
    //         async: true,
    //         defer: true,
    //         nonce: 'jyjB8TXa',
    //         crossorigin: 'anonymous'
    //       },
    //       // Facebook Login
    //       {
    //         innerHTML: `
    //         (function(d, s, id){
    //                               var js, fjs = d.getElementsByTagName(s)[0];
    //                               if (d.getElementById(id)) {return;}
    //                               js = d.createElement(s); js.id = id;
    //                               js.src = "https://connect.facebook.net/en_US/sdk.js";
    //                               fjs.parentNode.insertBefore(js, fjs);
    //                             }(document, 'script', 'facebook-jssdk')
    //         );
    //         window.fbAsyncInit = function() {
    //             <!-- Initialize the SDK with your app and the Graph API version for your app -->
    //             FB.init({
    //                       appId            : '933964164937455',
    //                       xfbml            : true,
    //                       version          : 'v19.0'
    //                     });
    //         };`
    //       },
    //       // GA init
    //       { src: '/js/ga.js' },
    //       // GTM init
    //       {
    //         innerHTML: `
    //         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    // })(window,document,'script','dataLayer','GTM-N535KL9Z');`
    //       },
    //       {
    //         type: 'application/ld+json',
    //         children: JSON.stringify(orgSchema)
    //         // 这里使用 JSON.stringify 是因为我们需要将 JSON 对象转换为字符串
    //       }
  ],
});
</script>
<template>
  <div id="fb-root"></div>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
