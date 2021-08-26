import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)


export default new Router ({   // передается объект
    mode: 'history', // слеш в путях
    routes: [      //массив со страницами
        {
            path: '/',
            component: Home
        },
        {
            path: '/galleryPage',
            component: () => import ('./views/GalleryPage.vue')
        },
        {
            path: '/ourProducts',
            component: () => import ('./views/OurProducts.vue')
        }
    ]
})