<template>
    <div class="h-16 w-full grid content-center px-7 z-10 relative">
      <div>
         {{ current }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
useHead({
  title: 'My Page',
  })
  const route = useRoute()
  const current = bigLetter(route.params.name)
</script>
  
  <style lang="scss" scoped>
  @import "@/assets/style/variables.scss";
  </style>
  