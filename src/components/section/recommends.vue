<template>
  <div id="recommend">
    <div class="tuijian">
      <h2>最新推荐</h2>
      <ul v-for="item in recommends">
        <li><a href="javascript: void(0)" @click="goInfo(item)"> {{ item.title }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recommend',
    inject: ['reload'],
    data() {
      return {
        recommends: []
      }
    },
    mounted() {
      this.getInitList()
    },
    methods: {
      getInitList() {
        this.http.post(this.ports.article.recommends, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.recommends = datas;
          } else {
            this.recommends = [];
          }
        })
      },
      goInfo(obj) {
        let id = obj.id;
        this.reload();
        this.$router.push({path:'/info/' + id});
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
