<template>
  <div class="toTop" @click="toTop" v-show="toTopIsShow">
    <span class="toTop-txt"></span>
  </div>
</template>

<script>
  export default {
    name: "top",
    data() {
      return {
        toTopIsShow: false //控制回到顶部按钮是否显示
      }
    }
    ,
    methods: {
      toTop() {
        if (document.documentElement.scrollTop > 0) {
          document.documentElement.scrollTop = 0;
        }
      }
    },
    created() {
      var _this = this;
      window.onscroll = function () {
        //鼠标滚轮滚动距离超过10像素时，回到顶部按钮才显示
        if (document.documentElement.scrollTop > 10) {
          _this.toTopIsShow = true;
        } else {
          _this.toTopIsShow = false;
        }
      }
    }
  }
</script>

<style scoped>
  .toTop {
    width: 50px;
    height: 68px;
    position: fixed;
    right: 400px;
    bottom: 100px;
    cursor: pointer;
    background: url("../../assets/images/top.gif") no-repeat;
    overflow: hidden;

      .toTop-txt {
        color: #fff;
        font-size: 12px;
        position: relative;
        top: 70px;
        transition: all .2s linear;
      }

  }
  .toTop:hover .toTop-txt {
    top: 52px;
  }

  .toTop:hover {
    background: url("../../assets/images/top.gif") no-repeat;
  }
</style>
