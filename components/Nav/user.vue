<template>
  <div class="h-16 w-full grid content-center px-7 z-10 relative">
    <div class="flex w-full content-center">
      <NuxtLink to="/">
        <NavLogoDesktop />
      </NuxtLink>
      <div class="flex justify-end w-full gap-7">
        <div class="flex gap-2 place-items-center">
          <NuxtLink
            to="/post/dodaj-nowy"
            class="flex gap-2 place-items-center color-add"
            :class="{ active: isActive }"
          >
            <Icon name="ph:note-pencil" size="22" color="" />
            <p class="">Nowy post</p>
          </NuxtLink>
        </div>
        <div class="flex gap-2 place-items-center color-add">
          <Icon name="ph:note-pencil" size="22" color="text-gray" />
          <p class="add-new">Nowy post</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const result = () => {
  if (route.name == "post-dodaj-nowy") {
    return true;
  } else {
    return false;
  }
};
result();
const isActive = result();
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.color-add {
  font-family: $family;
  font-weight: 500;
  color: #989898;
  font-size: 17px;
}
.active {
  color: #c90d0d;
}
.color-add:hover {
  color: #424242;
  cursor: pointer;
}
</style>
