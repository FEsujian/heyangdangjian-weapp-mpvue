import Vue from 'vue'
import App from './App'
import store from "./store";
import WXrequest from './utils/index'

Vue.prototype.$store = store
Vue.prototype.$axios = WXrequest
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
