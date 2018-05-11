// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import { Pagination } from 'element-ui'
import './css/element-variables.scss'
import axios from 'axios';
import Velocity from 'velocity-animate';

Vue.config.productionTip = false;
Vue.use(Pagination);

Vue.prototype.$axios = axios;
Vue.prototype.$Velocity = Velocity;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app');
