<template>
  <div id="container">
    <div id="header">顶部（header）</div>
    <div id="main">主体部分（main）</div>
    <div id="footer">底部（footer）</div>
  </div>
</template>

<script>
  export default {
    name: "myMd",
    data() {
      return {
        title: 'MD'
      }
    }
  }
</script>

<style scoped>
  /*主面板样式*/
  #container {
    width: 100%;
    margin: 0px auto; /*主面板DIV居中*/
  }

  /*顶部面板样式*/
  #header {
    width: 100%;
    min-height: 140px;
    height: 10%;
    border: 1px #F00 solid;
  }

  /*中间部分面板样式*/
  #main {
    width: 100%;
    min-height: 690px;
    height: 80%;
    border: 1px #F00 solid;
  }

  /*底部面板样式*/
  #footer {
    width: 100%;
    min-height: 100px;
    height: 10%;
    border: 1px #F00 solid;
  }
</style>
