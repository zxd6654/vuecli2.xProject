<template>
  <ul>
    <li v-for="car in data" :key="car">{{car}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'cars',
    props: {
      data: Array
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
  }

  ul > li {
    padding: .5rem .2rem
  }
</style>
