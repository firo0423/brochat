import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueSocketIO from "vue-socket.io";

Vue.config.productionTip = false
Vue.use(ElementUI);
// 配置socket.io
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:4000",
    options:{autoConnect:false}
  })
);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
