<script lang="ts" setup>
  const sha = () => {
    if (!navigator?.share) return
    navigator.share({
      title: document.title,
      text: 'Hello World',
      url: 'https://developer.mozilla.org'
    })
  }
</script>
<template>
  <div class="md:pt-[112px]">
    <NavBar />

    <!-- <div class="border border-main rounded-lg mx-auto max-w-screen-2xl w-full h-[300px]"></div> -->
    <div class="min-h-screen px-5 md:px-0">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>
