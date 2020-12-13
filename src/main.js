import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueQrCodeReader from 'vue-qrcode-reader'
import "./assets/css/normalize.css"


Vue.config.productionTip = false
Vue.use(VueQrCodeReader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
