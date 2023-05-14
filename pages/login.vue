<template>
  <div>
    <div class="grid grid-cols-2">
      <div class="h-screen w-full bg-blue-600"></div>
      <div class="auth-form">
        <div class="width-form">
          <h2 class="text-4xl mb-7">Zaloguj się</h2>
          <!-- <ClientOnly> -->
          <AuthLoginForm />
          <!-- </ClientOnly> -->
          <div class="flex flex-row w-full mt-[64px]">
            <div class="border-hr w-full"></div>
            <div>
              <p class="px-3 text-or">LUB</p>
            </div>
            <div class="border-hr w-full"></div>
          </div>
          <!-- <ClientOnly> -->
          <authIcon />
          <!-- </ClientOnly> -->
          <div class="mt-[64px]">
            <p class="mt-[64px]">
              Nie nasz konta ?
              <NuxtLink to="/rejestracja" class="register">Zarejestruj się</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
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
.border-hr {
  margin-top: 12px;
  border-top: 2px solid #c1c5cc;
}
.width-form {
  width: 300px;
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
