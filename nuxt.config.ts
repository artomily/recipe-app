// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  features: {
    inlineStyles: true
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  image: {
    domains : ['https://cdn.dummyjson.com'],
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});