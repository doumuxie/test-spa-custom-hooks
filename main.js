import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from "uview-ui";
Vue.config.productionTip = false
Vue.use(uView);
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

//第二步，入口文件里注册插件：
Vue.prototype.$store = store
import CustomHook from 'spa-custom-hooks';
const diyHooks = {
  'TokenLoad':{
    name:'TokenLoad',
    watchKey: ['token'],
    deep: true,
    onUpdate(val){
      //userinfo里的nickName非空则表示命中此钩子
      return !!val;
    }
  }
}
//1.vue架构的注册方式
import store from  './store'
Vue.use(CustomHook ,diyHooks,store)

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif