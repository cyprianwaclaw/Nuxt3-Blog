<template>
    <div>
      <ClientOnly>
        <div v-for="single in categories" :key="single.id" class="test">
          <h1 class="ml-10 text-blue-500">Kategoria: {{ single.name }}</h1>
        </div>
      </ClientOnly>
    </div>
  </template>
  <script setup lang="ts">
  const supabase = useSupabase()
  let { data: categories, error } = await supabase.from("categories").select("*");
    console.log(supabase)


  </script>
  <style lang="scss" scoped>
  @import "@/assets/style/variables.scss";
  $underlineColor: #c4d3f0;
  $underlineHeight: 5px;
  .test {
    background-color: $error-backgrund;
  }
  .auth-form {
    display: flex;
    // centering along main axis - X axis - Horizontal
    // justify-content: center;
    margin-left: 16%;
    // centering along cross axis - Y axis - Vertical
    align-items: center;
  }
  .line {
    color: $input-border;
  }
  .border-hr{
    margin-top: 12px;
    border-top: 2px solid #C1C5CC;
  }
  .width-form {
    width: 350px;
  }
  .text-or{
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
      content: '';
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
  