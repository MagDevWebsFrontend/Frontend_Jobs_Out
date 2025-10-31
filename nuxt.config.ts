// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // CSS global con tus colores
  css: ['~/assets/css/global.css'],
  
  // Configuración para auto-imports
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ]
})