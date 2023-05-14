<template>
  <NuxtLayout name="defaults">
    <template #fullContent> </template>
    <template #contentPage>
      <div v-for="(post, index) in mapPost(posts, categories, users)" :key="index">
        <PostCard :post="post" :index="index" />
      </div>
    </template>
    <template #sidebar>
      <p class="bg-gray-200 h-20 w-full">test</p>
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
const supabase = useSupabase();
const cookie = useCookie("cookies");
let { data: posts } = (await supabase.from("posts").select("*")) as any;
let { data: categories } = (await supabase.from("categories").select("*")) as any;
let { data: users } = (await supabase.from("profiles").select("*")) as any;
</script>
<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
$underlineColor: #c4d3f0;
$underlineHeight: 5px;
.auth-form {
  display: flex;
  margin-left: 16%;
  align-items: center;
}
.line {
  color: $input-border;
}
.border-hr {
  margin-top: 12px;
  border-top: 2px solid #c1c5cc;
}
.width-form {
  width: 350px;
}
.text-or {
  font-size: 16px;
  color: $input-border;
  font-weight: 500;
  margin-top: 1px;
}
.register {
  position: relative;
  padding: 0px 8px 0px 8px;
  text-decoration: none;
  display: inline-block;
  color: black;
  font-weight: 500;
  transition: color ease 0.3s;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: $underlineHeight;
    left: 0;
    bottom: 0;
    background-color: $underlineColor;
    transition: all ease 0.3s;
  }

  &:hover {
    // color: white;

    &::after {
      height: 100%;
    }
  }
}
</style>
