<template>
  <div>
    <!--我们不是说把代码包裹在 <template></template> 中就可以了，而是必须在里面放置一个 html 标签来包裹所有的代码 比如div-->
    <Header></Header>
    <div>
      <router-link :to="'/element'">element-常用组件</router-link>
      <br/>
      <br/>
      <router-link :to="'/setSelectOpt'">setSelectOpt-下拉菜单中的选项按上次一的选择排序</router-link>
      <br/>
      <br/>
      <router-link :to="'/dhtmlGantt'">dhtmlGantt-甘特图</router-link>
      <br/>
      <br/>
      <router-link :to="'/menu'">menu-多级菜单</router-link>
      <br/>
      <br/>
      <router-link :to="'/lists'">lists 数据列表-详情</router-link>
      <br/>
      <br/>
      <router-link :to="'/recyclescrollerdemo'">recycleScrollerDemo-大数据长列表虚拟滚动</router-link>
      <br/>
      <br/>
      <router-link :to="'/lazyloaddemo'">lazyLoadDemo-图片懒加载</router-link> 
      <br/>
      <br/>
      <router-link :to="'/statelesscomponentdemo'">statelessComponentDemo-无状态组件(函数式组件)</router-link>
      <br/>
      <br/>
      <router-link :to="'/scrollIntoView'">vue中实现锚点跳转以及滚动监听跳转到相应标签的方法</router-link>
      <br/>
      <br/>
      <router-link :to="'/multiselect'">vue-multiselect选择器</router-link>
      <br/>
      <br/>
      <router-link :to="'/tinymce'">tinymce富文本编辑器</router-link>
      <br/>
      <br/>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'

  export default {
    components: {Header, Footer},
    data () {
      return {}
    },
    created () {

    },
    methods: {}
  }
</script>
<style>
</style>
