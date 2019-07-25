import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import Content from '../page/content.vue'
import ElementUi from '../page/element.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/content/:id',
      name: 'content',
      component: Content
    } ,
    {
      path: '/element',
      name: 'element',
      component: ElementUi
    }
  ]
})
