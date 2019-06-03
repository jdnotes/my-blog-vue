<template>
  <div id="aboutMe">
    <div class="about_me">
      <h2>关于我</h2>
      <ul>
        <i><img :src="aboutUrl"></i>
        <p>{{ aboutMe }}</p>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'aboutMe',
    data() {
      return {
        aboutMe: '新的起点,新的征途',
        aboutUrl: 'https://dpic.tiankong.com/r1/pj/QJ6609096149.jpg?x-oss-process=style/670ws'
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
