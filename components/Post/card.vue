<template>
  <div class="flex columns-2 justify-between w-full place-items-center"
  :class="{marginClass: index }"
  >
    <div class="flex w-full flex-col pr-20">
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
        <p class="name">{{ post.user?.user_name }} {{ post.user?.user_surname }}</p>
      </div>
      <NuxtLink :to="`/post/${post.id}`">
        <h2>{{ post.title }}</h2>
      </NuxtLink>
      <p class="post-abstract">{{ post.body }}</p>
      <div class="flex justify-between mt-4">
        <NuxtLink :to="`/kategoria/${post.category?.toLowerCase()}`">
          <p class="category-button-text">{{ post.category }}</p>
        </NuxtLink>
        <div class="grid grid-cols-2 gap-5">
          <!-- <div class="flex place-items-center">
              odwiedzin
            <p>123</p>
              <Icon name="ph:eye-light" class="w-full" size="22"/>
            </div> -->
          <div class="flex place-items-center">
            <!-- komentarze -->
            <p class="text-des-view">{{ dataLength(post?.id, comments) }}</p>
            <Icon
              name="ph:chat-circle-dots-light"
              class="ml-[5px]"
              size="21"
              color="#a7a2a2"
            />
          </div>
          <div class="flex place-items-center">
            <!-- zapisane  -->
            <p class="text-des-view">{{ dataLength(post?.id, saved_post) }}</p>
            <Icon
              name="ph:bookmark-simple-light"
              class="ml-[2px]"
              size="21"
              color="#a7a2a2"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- image hero single post -->
    <div class="w-[250px]">
      <div v-if="post?.image">jest zdjęcie</div>
      <div v-else>
        <PostNoHeroImage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Posts } from "@/utils/types";
defineProps<{ post: Posts, index: number }>();
const supabase = useSupabase();
let { data: saved_post } = (await supabase.from("saved_post").select("*")) as any;
let { data: comments } = (await supabase.from("comments").select("*")) as any;
const visitCount = ref(0);
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
$gary-hover: rgb(105, 101, 101);
h2 {
  margin-top: 4px;
  margin-bottom: 12px;
  font-family: $family-h2;
  line-height: 30px;
  font-size: 24px;
}
h2:hover {
  text-decoration: underline;
  color: rgb(71, 71, 71);
  cursor: pointer;
}
.marginClass{
  margin-top: 120px;
}
.text-des-view {
  color: $text-gray;
  font-weight: 400;
  font-size: 16px;
}
.name {
  color: $text-gray;
  font-weight: 400;
  font-size: 14px;
}
.name:hover {
  color: $gary-hover;
}
.post-abstract {
  color: $text-black;
  font-family: $family;
  font-weight: 400;
  font-size: 16px;
}
.category-button-text {
  letter-spacing: 0.05em;
  font-size: 13px;
  font-weight: 500;
  color: rgb(146, 139, 139);
  padding: 5px 15px 6px 15px;
  background-color: $border;
  border-radius: 50px;
}
</style>
