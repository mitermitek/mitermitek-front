// filepath: /Users/kmitermite/Developer/mitermitek-front/src/main.js
import './assets/styles/main.css'

import { createApp } from 'vue'
import VueMatomo from 'vue-matomo'
import App from './App.vue'

createApp(App)
  .use(VueMatomo, {
    host: import.meta.env.VITE_MATOMO_URL,
    siteId: import.meta.env.VITE_MATOMO_SITEID,
  })
  .mount('#app')

window._paq.push(['trackPageView'])
