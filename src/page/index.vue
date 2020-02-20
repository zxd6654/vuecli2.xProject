<template>
    <div>
        <!--我们不是说把代码包裹在 <template></template> 中就可以了，而是必须在里面放置一个 html 标签来包裹所有的代码 比如div-->
        <Header></Header>
        <div>
            <router-link :to="'/element'">element 常用组件</router-link>
            <br/>
            <br/>
            <router-link :to="'/setSelectOpt'">setSelectOpt 下拉菜单中的选项按上次一的选择排序</router-link>
            <br/>
            <br/>
            <router-link :to="'/dhtmlGantt'">dhtmlGantt 甘特图</router-link>
            <br/>
            <br/>
            <router-link :to="'/menu'">menu 多级菜单</router-link>
            <br/>
            <br/>
            <router-link :to="'/lists'">lists 数据列表-详情</router-link>
            <br/>
            <br/>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'

  export default {
    components: {Header, Footer},
    data () {
      return {
        list: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('topics', null, r => {
          this.list = r.data
        })
      }
    }
  }
</script>
<style>
</style>
