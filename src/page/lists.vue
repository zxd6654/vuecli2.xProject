<template>
    <div class="article_list">
        <ul>
            <li v-for="i in list">
                <time v-text="$utils.goodTime(i.create_at)"></time>
                <!--我们在 script 区域，引用一个函数是使用 this.getData 或者 this.list 这样的代码引用的。但是在 template 中，我们是不加 this 的。-->
                <router-link :to="'/content/'+i.id">{{i.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        list: []
      };
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.$api.get("topics", null, r => {
          this.list = r.data;
        });
      }
    }
  }
</script>

<style scoped>

</style>
