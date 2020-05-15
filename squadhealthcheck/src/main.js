import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/global.css';
import vuetify from './plugins/vuetify';
import { i18n } from '@/plugins/i18n';
import { store } from './store/store'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app');