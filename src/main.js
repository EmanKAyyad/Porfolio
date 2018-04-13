// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//  dependencies
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

//  components
import App from './App'
import Navigation from './components/Header'

//  css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/styles.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
    Navigation
  }
})
