export default defineNuxtConfig({
  routeRules: {
    '/**': { isr: 15 }
  }
})
