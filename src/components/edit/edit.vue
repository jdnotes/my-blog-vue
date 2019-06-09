<template>
  <div id="edit">
    <div class="edit-main-right">
      <mavon-editor v-model="mdText" @change="changeMdEditor" @save="save"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "myEditor",
    data() {
      return {
        cities: ["上海", "北京", "广州", "深圳"],
        checkboxGroup2: ["上海"],
        restaurants: [],
        state: "",
        timeout: null,
        list: [],
        title: "简单笔记",
        mdText: "# 我的世界"
      };
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    methods: {
      loadAll() {
        return [
          {value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号"},
          {
            value: "Hot honey 首尔炸鸡（仙霞路）",
            address: "上海市长宁区淞虹路661号"
          },
          {value: "阳阳麻辣烫", address: "天山西路389号"},
          {
            value: "南拳妈妈龙虾盖浇饭",
            address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
          }
        ];
      },
      save(value, render) {
        console.log("save value:");
        console.log(value);
        console.log("save render:");
        console.log(render);
      },
      changeMdEditor(value, render) {
        //console.log("change value:" + value);
        //console.log("change render:" + render);
      }
    }
  };
</script>

<style scoped>

</style>
