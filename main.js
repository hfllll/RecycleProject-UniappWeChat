// #ifndef VUE3
import Vue from 'vue'
import App from './App'

// 引入第三方库 uvUI
import uvUI from '@/uni_modules/uv-ui-tools'
// 注册 uvUI 插件
Vue.use(uvUI);

// 引入 Pinia
import { PiniaVuePlugin, createPinia } from 'pinia';
import request from './common/request';  // 引入封装的请求库

// 使用 Pinia Vue 插件
Vue.use(PiniaVuePlugin);

// 将 request 挂载到 Vue 原型上，方便全局使用
Vue.prototype.$get = request.get;
Vue.prototype.$post = request.post;
Vue.prototype.$put= request.put;

// 创建 Pinia 实例
const pinia = createPinia();

Vue.config.productionTip = false

App.mpType = 'app'

// 实例化 Vue，并注入 Pinia
const app = new Vue({
  pinia, // 将 pinia 注入 Vue 实例
  ...App
})
app.$mount()
// #endif


// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
import uvUI from '@/uni_modules/uv-ui-tools'

// 引入 Pinia
import { createPinia } from 'pinia';
import request from './common/request';  // 引入封装的请求库

export function createApp() {
  const app = createSSRApp(App);

  // 使用 uvUI 插件
  app.use(uvUI);

  // 创建 Pinia 实例并注入
  const pinia = createPinia();
  app.use(pinia);

  // 将请求库挂载到全局
  app.config.globalProperties.$get = request.get;
  app.config.globalProperties.$post = request.post;
  app.config.globalProperties.$put = request.put;
  


  return {
    app
  }
}
// #endif