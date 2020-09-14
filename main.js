import Vue from 'vue'
import App from './App'
import { myRequest } from './network/request.js'

import store from './store'


Vue.prototype.$myRequest = myRequest
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
