<template>
  <NuxtLayout>
    <Header />
    <p>{{ pending ? "Loading" : productCount }}</p>
    <button @click="refresh">Refresh</button>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const { sayHello } = useUtils();
const { $sayHello } = useNuxtApp();
sayHello("99");
$sayHello("Hello from plugin");
const res = await $fetch("/api/hello");
const res2 = await $fetch("/hello");
console.log(res, "res", res2, "res2");
const { data: productCount, pending } = await useLazyAsyncData("product", () =>
  $fetch("/api/product"),
);
const refresh = () => {
  refreshNuxtData("product");
};
</script>
