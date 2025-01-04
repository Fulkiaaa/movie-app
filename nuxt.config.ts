export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      apiBaseUrl: "https://api.themoviedb.org/3",
      apiKey: process.env.TMDB_API_KEY,
    },
  },

  compatibilityDate: "2025-01-04",
});