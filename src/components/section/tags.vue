<template>
  <div id="tags">
    <div class="cloud">
      <h2>标签云</h2>
      <ul>
        <a href="javascript: void(0)" v-for="item in tags" @click="goHome(item.code)">{{item.tagName}}</a>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tags',
    inject: ['reload'],
    data() {
      return {
        title: '标签云',
        tags: []
      }
    },
    mounted() {
      this.getInitList()
    },
    methods: {
      getInitList() {
        //console.log('tags init method');
        this.http.post(this.ports.tag.cloud, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.tags = datas;
          } else {
            this.tags = [];
          }
        })
      },
      goHome(code) {
        let tags = code;
        this.$parent.search(1, tags, '');
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
