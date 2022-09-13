import colors from 'vuetify/es5/util/colors'
import fa from 'vuetify/lib/locale/fa'
export default {
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - coin-kade',
        title: 'coin-kade',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    loading: '~/components/PreLoading.vue',
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/global.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/mixins', '~/plugins/staticTexts.js', '~/plugins/globalComponent.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        rtl: true,
        lang: {
            locales: { fa },
            current: 'fa',
        },
        defaultAssets: {
            font: {
                family: 'iranYekan'
            }
        },
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#1b98f5',
                    secondary: '#EFF5FE',
                    tertiary: '#daebf9',
                    quaternary: '#f2f2f2',
                    quinary: '#858585',
                    senary: '#f0f9fd',
                    accent: '#e7f0fb',
                    error: '#FF5252',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                },
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
