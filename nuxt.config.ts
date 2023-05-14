export default defineNuxtConfig({
  ssr:true,
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    // Keys within public, will be also exposed to the client-side
    public: {
      supabse_key: process.env.SUPABASE_KEY,
      supabse_url: process.env.SUPABASE_URL,
    }
  },
  css: ['@/assets/style/tailwind.css', '@/assets/style/style.scss', '@/assets/style/_variables.scss'],
})
