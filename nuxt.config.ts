import { defineNuxtConfig } from "nuxt/config";
import config from "./config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  apollo: {
    clients: {
      default: {
        httpEndpoint: config.graphqlUrl,
      },
    },
  },
  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: config.baseUrl,
    baseURL: "http://localhost:3000/api/auth",
    provider: {
      type: "authjs",
      trustHost: false,
      defaultProvider: "github",
      addDefaultCallbackUrl: true,
      // domain: config.domain,
      // clientId: config.clientId,
      // clientSecret: config.clientSecret,
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
  },
  compatibilityDate: "2024-04-03",
  components: true,
  css: [
    "@/assets/css/index.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "codemirror/lib/codemirror.css",
    "codemirror/addon/scroll/simplescrollbars.css",
    "@kangc/v-md-editor/lib/style/preview.css",
    "@kangc/v-md-editor/lib/style/codemirror-editor.css",
  ],
  devtools: { enabled: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:nuxt/recommended",
  ],
  // fontawesome: {
  //   component: "fa",
  //   icons: {
  //     solid: [
  //       "faArrowsRotate",
  //       "faCircleCheck",
  //       "faComment",
  //       "faEye",
  //       "faEyeSlash",
  //       "faFaceSmile",
  //       "faFlag",
  //       "faSun",
  //       "faMoon",
  //       "faChevronDown",
  //       "faDesktop",
  //       "faTicket",
  //       "faFire",
  //       "faImage",
  //       "faUserLock",
  //       "faUserMinus",
  //       "faUserPlus",
  //       "faXmark",
  //       "faArrowUpRightFromSquare",
  //     ],
  //   },
  // },
  imports: {
    autoImport: true,
  },
  modules: [
    "@nuxtjs/apollo",
    "@sidebase/nuxt-auth",
    // "@nuxtjs/fontawesome",
    // "@nuxtjs/vuetify",
  ],
  plugins: [
    { src: "@/plugins/sentry", mode: "client" },
    { src: "@/plugins/google-maps", mode: "client" },
    { src: "@/plugins/apollo", mode: "client" },
    "@typescript-eslint",
  ],
  runtimeConfig: {
    auth0: {
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      domain: config.domain,
    },
    // Public config, available on both client and server
    public: {
      googleMapsApiKey: config.googleMapsApiKey,
      auth0Domain: config.domain,
    },
  },
  // sentry: {
  //   dsn: config.sentryDsn,
  //   tracing: true,
  //   config: {}, // Sentry configuration options
  // },
  ssr: true,
  vite: {
    resolve: {
      alias: {
        "#app": "/.nuxt/app",
      },
    },
  },
});
