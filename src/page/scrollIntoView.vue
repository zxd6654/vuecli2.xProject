<template>
  <div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in title_list" :key="index">
<!--          <a :href="item.href"><span ref="spans" :style="{color: activeStep === index ? '#1987e1' : '#000000'}"-->
<!--          >-->
<!--        {{item.title}}-->
<!--        </span></a>-->
        <span ref="spans" :style="{color: activeStep === index ? '#1987e1' : '#000000'}" @click="jump(index)">
        {{item.title}}
        </span>
        </li>
      </ul>
    </div>
    <div class="result" @scroll="onScroll" >
      <div id="1" class="scroll-item"><span>第一</span></div>
      <div id="2" class="scroll-item"><span>第二</span></div>
      <div id="3" class="scroll-item"><span>第三</span></div>
      <div id="4" class="scroll-item"><span>第四</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scrollIntoView',
    data() {
      return {
        activeStep :0,
        title_list:[
          {title:'第一',href:'#1'},
          {title:'第二',href:'#2'},
          {title:'第三',href:'#3'},
          {title:'第四',href:'#4'},
        ]
      }
    },
    methods:{
      jump(index) {
        var re=document.getElementsByClassName('result')[0];
        let items = document.querySelectorAll(".scroll-item");
        for (let i = 0; i < items.length; i++) {
          if (index === i) {
            // items[i].scrollIntoView({
            //   block: "start",//默认跳转到顶部
            //   behavior: "smooth"//滚动的速度
            // });
            re.scrollTop=items[i].offsetTop-50;

          }
        }

      },
      onScroll(e) {
        let scrollItems = document.querySelectorAll(".scroll-item");
        for (let i = scrollItems.length - 1; i >= 0; i--) {
          // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
          let judge =
            e.target.scrollTop >=
            scrollItems[i].offsetTop - scrollItems[0].offsetTop;
          if (judge) {
            this.activeStep = i;
            break;
          }
        }
      },
    },
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  list {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    background: pink;
  }
  ul {
    width: 100%;
    height: 40px;
    line-height: 40px;
    list-style: none;
  }
  li {
    float: left;
    width: 20%;
    font-size: 30px;
  }

  li span{
    cursor: pointer;
  }
  li a {
   color: #000;
    text-decoration: none;
  }
  .result {
    width: 100%;
    height: 500px;
    overflow: scroll;
  }
  .scroll-item {
    width: 100%;
    height: 500px;
    margin-top:20px;
    background: yellow;
  }
  .scroll-item>span {
    font-size: 40px;
  }
  .scroll-item:first-child {
    margin-top: 0;
  }
  .scroll-item:last-child {
    height: 500px;
  }
  /*  最后一个元素的最小高度要大于等于父元素的高度，如果scroll-item为高度自适应的话，那么最后一个scroll-item就得设置min-height：100%*/
</style>
