<template>
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <NavQuest v-if="!user" />
      <NavUser v-else />
    </ClientOnly>
    <div class="flex columns-2 own-container">
        <div class="w-[360px] pr-12 mt-[100px]">
          <div class="sticky top-[48px]">
            <slot name="sidebar" />
          </div>
        </div>
      <div class="w-[840px] border-own pl-20 mt-[100px]">
        <slot name="contentPage" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const supabase = useSupabase();
  
  const { user } = useAuth();
  onMounted(async () => {});
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/style/variables.scss";
  @media (min-width: 1280px) {
    .own-container {
      width: 1160px;
      margin: auto;
      display: flex;
    }
  }
  @media (max-width: 1280px) {
    .own-container {
      //max-width: 1200px;
      margin-left: 40px;
      display: flex;
    }
  }
  .border-own {
    border-left: 1px solid $border;
  }
  </style>
  