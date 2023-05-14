<template>
  <NuxtLayout name="defaults" v-for="post in singlePost" :key="post.id">
    <template #contentPage>
      <div class="flex w-full gap-[7px] place-items-center cursor-pointer">
        <div v-if="post.user?.avatar_url.length">
          <!-- jest avatar -->
          <p>jest zdjęcie</p>
        </div>
        <div v-else>
          <!-- brak avatara -->
          <Icon
            name="ph:user-circle-light"
            class="w-full mb-[2px]"
            size="21"
            color="#a7a2a2"
          />
        </div>
        <p class="name">{{ post.user.user_name }} {{ post.user.user_surname }}</p>
      </div>
      <div class="flex mt-[10px]">
        <div class="w-full flex">
          <h1>{{ post.title }}</h1>
        </div>
        <div class="flex w-full gap-5 justify-end items-start">
          <!-- <div class="flex place-items-center">
                odwiedzin
              <p>123</p>
                <Icon name="ph:eye-light" class="w-full" size="22"/>
              </div> -->
          <!-- <div class="flex place-items-center">
              komentarze
              <p class="text-des-view">{{ dataLength(post.id, comments) }}</p>
              <Icon
                name="ph:chat-circle-dots-light"
                class="ml-[5px]"
                size="2"
                color="#a7a2a2"
              />
            </div> -->
          <div class="flex place-items-center">
            <!-- zapisane  -->
            <p class="text-des-view">{{ dataLength(post.id, saved_post) }}</p>
            <Icon
              name="ph:bookmark-simple-light"
              class="ml-[5px]"
              size="27"
              color="#a7a2a2"
            />
          </div>
        </div>
      </div>
      <!-- content post -->
      <div>
        <!-- image hero single post -->
        <div class="mt-[60px]">
          <div v-if="post.image">jest zdjęcie</div>
          <div v-else>
            <PostNoHeroImageFull />
          </div>
        </div>
        <div v-for="paragraph in post.paragraph" :key="paragraph?.id">
        <p :class="paragraph.class">{{ paragraph?.name }}</p>
      </div>
      </div>
    </template>
    <template #sidebar>
      <p class="bg-gray-200 h-20 w-full">test</p>
      {{ post.user }}
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Posts } from "@/utils/types";

const supabase = useSupabase();
useHead({
  title: "My Page",
});
const route = useRoute();
const current = route.params.name;
let { data: post } = (await supabase
  .from("posts")
  .select("*")
  .match({ id: route.params.name })) as any
let { data: categories } = (await supabase.from("categories").select("*")) as any;
let { data: users } = (await supabase.from("profiles").select("*")) as any;
let { data: allPost } = (await supabase.from("posts").select("paragraph")) as any;
let { data: saved_post } = (await supabase.from("saved_post").select("*")) as any;
let { data: comments } = (await supabase.from("comments").select("*")) as any;
const singlePost: Posts = mapPost(post, categories, users);


</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
$gary-hover: rgb(105, 101, 101);
h1 {
  width: 600px;
  font-family: $family-h2;
  line-height: 56px;
  font-size: 46px;
}
.h1 {
  width: 600px;
  font-family: $family-h2;
  line-height: 56px;
  font-size: 46px;
}
.name:hover {
  color: $gary-hover;
}
.text-des-view {
  color: $text-gray;
  font-weight: 400;
  font-size: 20px;
}
.name {
  color: $text-gray;
  font-weight: 400;
  font-size: 14px;
}
.name:hover {
  color: $gary-hover;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
