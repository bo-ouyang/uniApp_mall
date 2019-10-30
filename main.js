import Vue from 'vue'
import App from './App'
import store from './store'
import api from '@/common/vmeitime-http/'
Vue.config.productionTip = false

App.mpType = 'app'


Vue.prototype.$store = store
Vue.prototype.$api = api
const app = new Vue({
	store,
    ...App
})
app.$mount()
