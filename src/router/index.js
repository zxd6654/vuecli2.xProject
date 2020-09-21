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
import multiselect from '../page/multiselect.vue'
import tinymce from '../page/tinymce.vue'
import highlight from '../page/highlight.vue'

//require.context() 
const path=require('path');
const files=require.context('../page',false,/\.vue$/);
const modules={};
files.keys().forEach(key => {
  const name=path.basename(key,'.vue');
  console.log(name)
  modules[name]=files(key).default||files(key)
});

console.log(files,files.keys(),modules)

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
    },
    {
      path:'/multiselect',
      name:'multiselect',
      component:multiselect
    },
    {
      path:'/tinymce',
      name:'tinymce',
      component:tinymce
    },
    {
      path:'/highlight',
      name:'highlight',
      component:highlight
    }
  ]
})
