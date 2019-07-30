<template>
    <div>  <!--我们不是说把代码包裹在 <template></template> 中就可以了，而是必须在里面放置一个 html 标签来包裹所有的代码 比如div-->
        <Header></Header>
        <div>
            <router-link :to="'/element'">element</router-link>
            <router-link :to="'/setSelectOpt'">setSelectOpt</router-link>
        </div>
        <div class="article_list">
            <ul>
                <li v-for="i in list">
                    <time v-text="$utils.goodTime(i.create_at)"></time>  <!--我们在 script 区域，引用一个函数是使用 this.getData 或者 this.list 这样的代码引用的。但是在 template 中，我们是不加 this 的。-->
                    <router-link :to="'/content/'+i.id">
                        {{i.title}}
                    </router-link>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '../components/header.vue';
    import Footer from '../components/footer.vue';

    export default {
        components: {Header, Footer},
        data() {
            return {
                list: []
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                this.$api.get('topics', null, r => {
                   this.list=r.data
                })
            }
        }
    }
</script>
<style>

</style>
