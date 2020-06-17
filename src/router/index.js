import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import Content from '../page/content.vue'
import ElementUi from '../page/element.vue'
import SetSelectOpt from '../page/setSelectOpt.vue'
import DhtmlGantt from '../page/dhtmlGantt.vue'
import Menu from '../page/menu.vue'
import Lists from '../page/lists.vue'
import Children from '../page/children.vue'
import recycleScrollerDemo from '../page/recycleScrollerDemo'
import lazyLoadDemo from '../page/lazyLoadDemo'
import statelessComponentDemo from '../page/StatelessComponentDemo'
import scrollIntoView from '../page/scrollIntoView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'children',
          name: 'children',
          component: Children
        }
      ]
    },
    {
      path: '/content/:id',
      name: 'content',
      component: Content
    },
    {
      path: '/element',
      name: 'element',
      component: ElementUi
    },
    {
      path: '/setSelectOpt',
      name: 'setSelectOpt',
      component: SetSelectOpt
    },
    {
      path: '/dhtmlGantt',
      name: 'dhtmlGantt',
      component: DhtmlGantt
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/lists',
      name: 'lists',
      component: Lists
    },
    {
      path: '/recyclescrollerDemo',
      name: 'recyclescrollerDemo',
      component: recycleScrollerDemo
    },
    {
      path: '/lazyloaddemo',
      name: 'lazyloaddemo',
      component: lazyLoadDemo
    },
    {
      path: '/statelesscomponentdemo',
      name: '/statelesscomponentdemo',
      component: statelessComponentDemo
    },
    {
      path: '/scrollIntoview',
      name: '/scrollIntoview',
      component: scrollIntoView
    }
  ]
})
