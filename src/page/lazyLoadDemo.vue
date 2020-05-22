<template>
  <div id="lazyload">
    <!-- img中使用图片懒加载。 v-lazy代替v-bind:src -->
    <ul class="img">
      <li v-for="(item,index) in imgList">
        <img v-lazy="item" :key="item" src="" alt="">
      </li>
    </ul>

    <!-- 背景图中使用图片懒加载。 v-lazy:background-image = "" -->
    <!--<ul class="bgImg">-->
    <!--<li v-for="(item,index) in imgList" v-lazy:background-image="item"></li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  export default {
    name: 'lazyLoadDemo',
    data () {
      return {
        imgList: [
          '../../static/img/3DF91CB4-0A60-444F-971D-88A58C4EDBFD.png',
          '../../static/img/854D114E-7319-45ED-9458-606548235CAC.png',
          '../../static/img/code-wallpaper-2.jpeg',
          '../../static/img/code-wallpaper-8.jpeg',
          '../../static/img/code-wallpaper-16.jpeg',
          '../../static/img/code-wallpaper-18.jpeg',
          '../../static/img/code-wallpaper-22.jpeg',
          '../../static/img/giFnui8.jpg',
          '../../static/img/life-code-typography-hd-wallpaper-1920x1080-7168.jpg',
          '../../static/img/maxresdefault.jpg',
          '../../static/img/phpWVg9UN.jpeg',
          '../../static/img/plief.jpg',
          '../../static/img/programmer_1920.png',
          '../../static/img/rfwDB3L.png',
          '../../static/img/wallpaper.png',
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  ul,li{
    list-style: none;
  }
  #lazyload {
    width: 768px;
    margin: 0 auto;

    .img {
      width: 768px;
    }

    .img img{
      width: 100%;
    }

    .bgImg {
      li {
        width: 768px;
        height: 522px;
        margin-bottom: 10px;
        background-repeat: no-repeat; //注意图片大小哦，否则可以显示不全
        background-size: cover;
      }
    }
  }

</style>
