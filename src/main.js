// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//  dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import vueSmoothScroll from 'vue-smooth-scroll'

//  components
import App from './App'
import Navigation from './components/Header'
import wordCounter from './components/wordCounter'
import myFooter from './components/Footer'
import cryptocurrency from './components/cryptocurrency'

//  css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/styles.scss'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(vueSmoothScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App,
    Navigation,
    wordCounter,
    cryptocurrency,
    myFooter
  }
})
