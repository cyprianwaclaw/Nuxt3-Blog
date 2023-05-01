<template>
  <div>
    <!-- {{ currentUser.value }} -->
    <Form @submit="login" :validation-schema="schema">
      <InputBase name="mail" label="E-mail" id="mail" type="text" />
      <InputBase
        class="mt-5"
        name="password"
        label="Hasło"
        id="password"
        :type="currentType"
      />

      <p @click="clickType()" class="change absolute mt-[-37px] ml-[308px]">
        <Icon class="icon" v-if="currentType == 'password'" name="ph:eye" size="23" />
        <Icon class="icon" v-else name="ph:eye-slash" size="23" />
      </p>

      <button id="submit" type="submit" class="w-full primary mt-5 bg-blue-200">Wyślij</button>
    </Form>
    <p @click="logout()">logout</p>
  </div>
</template>
<script setup lang="ts">
import * as Yup from "yup";
import { Form } from "vee-validate";

const supabase = useSupabase()
const currentType = ref("password")
const clickType = ()=>{
if(currentType.value == "password"){
  currentType.value = "text"
  return "password"
}
else if(currentType.value == "text"){
  currentType.value = "password"
}
}

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/, "Imię nie może zawiarać cyfr")
    .max(20, "Imię nie może być dłuższe niż 20 znaków"),
});
const login = async ()=>{
  let { data:user, error:errorLogin } = await supabase.auth.signInWithPassword({
    email: 'cyprianwaclaw@gmail.com',
    password: 'test123456'
  })
  window.location.reload()
  console.log(user)
}
const { data: { user } } = await supabase.auth.getUser()
console.log(user)

const logout= async()=>{
  const { error } = await supabase.auth.signOut()
  window.location.reload()
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.icon{
  color:$icon;
}
</style>