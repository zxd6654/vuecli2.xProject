<template>
  <div class="vue-app">
<!--    <panel :title="title">-->
<!--    <cars :data="data"></cars>-->
<!--    </panel>-->
<!--    <panel :title="'Lorem Ipsum'">-->
<!--      <loremipsum></loremipsum>-->
<!--    </panel>-->
  </div>
</template>

<script>
  import panel from '../components/statelessComponent'
  import cars from '../components/cars'
  import loremipsum from '../components/lorem-ipsum'

  export default {
    name: 'statelessComponentDemo',
    components: {panel, cars, loremipsum},
    render(createElement){
      return createElement('div','sss')
    },
    computed: {
      title () {
        return 'Cars Manufacturers'
      },
      data(){
        return ['Mazda', 'Ford', 'Mercedes']
      }
    }
  }
</script>

<style scoped>
  body {
    padding: .5rem
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>
