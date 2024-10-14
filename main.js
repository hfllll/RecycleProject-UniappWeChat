
// #ifndef VUE3
import Vue from 'vue'
import uvUI from '@/uni_modules/uv-ui-tools'
import App from './App'

import uvUI from '@/uni_modules/uv-ui-tools'
// #ifndef VUE3
Vue.use(uvUI);
// #endif
// #ifdef VUE3
app.use(uvUI);
// #endif


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif