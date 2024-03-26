<script setup lang="ts">
// const route = useRoute()
const articles = ref();
definePageMeta({
  layout: "home",
});
//   onMounted(async() => {
//   try {
//     const res = await  useFetch(`/api/articles?page=1`);
//     // const q = useFetch(`/api/user/1`);
//     console.log(res)
//   }catch(e) {
// console.error(e)
//   }
//   // articles.value = data
//   })

const onC = async () => {
  try {
    const res = await useFetch(
      `/api/articles/7e612b94-ab0f-46ca-9626-572d86494fe0`
    ); // id
    // const ress = await  useFetch(`/api/articles`);
    // const q = useFetch(`/api/user/1`);
    console.log(res);
  } catch (e) {
    console.error(e);
  }
  // articles.value = data
};
</script>
<template>
  <div>測試！</div>
</template>
