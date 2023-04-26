export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  runtimeConfig: {
    // The private keys which are only available within server-side
    // Keys within public, will be also exposed to the client-side
    public: {
      supabse_key: process.env.SUPABASE_KEY,
      supabse_url: process.env.SUPABASE_URL,
    }
  }
})
