<template>
  <div id="classify">
    <div class="fenlei">
      <h2>文章分类</h2>
      <ul v-for="item in classifies">
        <li><a href="javascript: void(0)" @click="goHome(item)"> {{ item.tagName }} ({{item.num}})</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'classify',
    data() {
      return {
        classifies: []
      }
    },
    mounted() {
      this.getInitList()
    },
    methods: {
      getInitList() {
        //console.log('classify init method');
        this.http.post(this.ports.tag.tags, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.classifies = datas;
          } else {
            this.classifies = [];
          }
        })
      },
      goHome(obj) {
        let tags = obj.code;
        this.$router.push({name: 'list', params: {tags: tags, currentPage: 1, keywords: ''}})
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
