// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store.js'
import fontawesome from '@fortawesome/fontawesome'
import faCheckCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle'
// import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
fontawesome.library.add(faCheckCircle)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
