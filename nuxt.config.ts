export default defineNuxtConfig({
  routeRules: {
    '/**': { isr: 15 }
  },
  modules: ['@nuxtjs/tailwindcss', "@pinia/nuxt", '@nuxtjs/apollo', '@nuxt/image', '@pinia-plugin-persistedstate/nuxt', 'nuxt-speedkit'],
  components: [
    {
      path: '~/components/',
      extensions: ['.vue'],
    },
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.SHOPIFY_STOREFRONT_HOST || '',
        httpLinkOptions: {
          headers: {
            'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || ''
          },
        }
      }
    },
  },
  image: {
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    domains: ['cdn.shopify.com'],
    presets: {
      productMiniature: {
        modifiers: {
          format: 'webp',
          quality: 100,
        }
      }
    }
  },
  speedkit: {
    detection: {
      performance: true,
      browserSupport: true
    },
    componentAutoImport: true,

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },
  }
})
