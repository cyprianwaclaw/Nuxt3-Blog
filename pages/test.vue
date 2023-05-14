<template>
  <div class="col-7">
    <button class="btn btn-secondary button" @click="add()">Add</button>
    <h3>Draggable</h3>

    <draggable
      tag="ul"
      :list="list"
      :animation="150"
      item-key="name"
      class="list-group"
      ghost-class="ghost"
      handle=".handle"
    >
      <template #item="{ element, index }">
        <li class="list-group-item">
          <i class="fa fa-align-justify handle">x</i>

          <span class="text"> </span>

          <input type="text" class="basic-input" :class="element.class" v-model="element.text" />

          <i class="fa fa-times close" @click="removeAt(index)"></i>
        </li>
      </template>
    </draggable>
    {{ list }}
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import draggable from 'vuedraggable';
  const id = ref(3)
  const list = ref([
        { name: "John", text: "", id: 0, class: "h1" },
        { name: "Joao", text: "", id: 1, class: "h1" },
        { name: "Jean", text: "", id: 2, class: "h1" }
      ]);
 const  add=()=> {
      id.value ++;
      list.value.push({ name: "Juan ", id, text: "", class: "bg-red-200 ml-20" });
    }
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/style/variables.scss";
  .no-drop {
    opacity: 0.5;
    pointer-events: none;
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
  .h2 {
    width: 600px;
    font-family: $family-h2;
    color: #ececec;
    line-height: 56px;
    font-size: 16px;
  }
  </style>
  