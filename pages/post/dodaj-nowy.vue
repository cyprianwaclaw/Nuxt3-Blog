<template>
  <NuxtLayout name="inverted">
    <template #sidebar>
      <p class="bg-gray-200 h-20 w-full">test</p>
      <div class="w-full bg-blue-300 border rounded-2xl">
        <div class="grid grid-cols-2 grid-rows-2 content-center w-full gap-7 p-7">
          <div class="w-full grid bg-blue-800 place-items-center">
            <p>test</p>
          </div>
          <div class="w-full grid bg-blue-800 place-items-center h-20">
            <p>test</p>
          </div>
          <div class="w-full grid bg-blue-800 place-items-center">
            <p>test</p>
          </div>
          <div class="w-full grid bg-blue-800 place-items-center">
            <p>test</p>
          </div>
        </div>
      </div>

      <InputBase
        name="mail"
        label="E-mail"
        id="mail"
        type="text"
        class="pr-5"
        v-model="title"
      />
      <div>
        <draggable
          :list="newList"
          :disabled="!enabled"
          handle=".handle"
          :animation="150"
          item-key="name"
          class="list-group"
          ghost-class="ghost"
        >
          <template #item="{ element }">
            <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
              <Icon
                name="ph:dots-six-vertical"
                size="21"
                color="gray-icon"
                class="cursor-move handle"
              />
              <input class="base-input" v-model="element.name"/>
              <!-- {{ element.name }} -->
            </div>
          </template>
        </draggable>
        <button @click="alertNewList()">Click me</button>
      </div>
      {{ list2 }}
      <!-- {{ newList }} -->
    </template>






    <template #contentPage>
        {{ comments?.[1]?.body }}
      <h1 class="w-[600px]">Tutaj napisz tytuł wpisu...</h1>
      <div class="flex columns-2">
      <div>
  <h3>Draggable 1</h3>
      <draggable
        class="dragArea list-group"
        :list="list1"
        :clone="cloneDog"
        :group="{ name: 'people', pull: 'clone', put: null }"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
           <input
           :v-model="element.name"
           />
          </div>
        </template>
      </draggable>
      </div>
      </div>
      <div v-for="single in post" :key="single.id">
<!-- {{ single }} -->
<div v-for="paragraph in single.paragraph" :key="paragraph?.id">

    <!-- {{ paragraph?.name }} -->
</div>
</div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
const title = ref();

const supabase = useSupabase();
let { data: post } = (await supabase.from("posts").select("*").match({ id: 2 })) as any;

const enabled = ref(true);
const newList = ref(post?.[0].paragraph)

const alertNewList = async ()=>{
  // let { data: allPost } = await supabase.from("posts").update({paragraph:JSON.stringify(newList) }).eq('id', record_id);
  const { data, error } = await supabase
    .from('posts')
    .update({ paragraph: newList.value})
    .match({id: 2})
    .select()

  if (error) {
    console.error(error)
  } else {
    console.log('Record updated successfully:', data?.[0])
  }
}
const idGlobal = ref(8);
const  list1 = ref([
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ])

const  list2 = ref([
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ])

      const cloneDog = (item:any) => ({
  id: idGlobal.value ++,
 name: `element.name`
});

const embedCode = '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fv7k91ydau54hnDhKQ2MN4n%2FProject%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3D8RNapD4RNM9YppfK-1" allowfullscreen></iframe>'
const { data, error } = await supabase
  .from('comments')
  .insert({ body: embedCode })


  const { data:comments} = await supabase
  .from('comments')
  .select('*')
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.clear {
  font-family: $family;
  font-style: normal;
  font-weight: 600;
  color: #ececec;
  font-size: 45px;
}
h1 {
    width: 600px;
    font-family: $family-h2;
    line-height: 56px;
    color: #ececec;
    font-size: 46px;
  }
  .h1 {
    width: 600px;
    font-family: $family-h2;
    color: #ececec;
    line-height: 56px;
    font-size: 46px;
  }
</style>
