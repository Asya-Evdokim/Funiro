import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueSplide from '@splidejs/vue-splide';

//Просмотр галереи npm install --save vue-easy-lightbox@vue2
import VueEasyLightbox from 'vue-easy-lightbox';



Vue.use(VueEasyLightbox)
Vue.use( VueSplide );

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
