<template>
  <div id="container">
    <div id="header">
      <div class="">
        标题:<input v-model="title" placeholder="请输入标题">
        <br>
        logo:<input v-model="logo" placeholder="请输入logo地址">
      </div>
      <div>
        一级标签:<span v-for="firstTag in firstTags">
          <input type="radio" :value="firstTag.code" v-model="firstTagValue">
          <label>{{firstTag.tagName}}</label>
        </span>
      </div>
      <div>
        标签列表:<span v-for="firstTag in firstTags">
          <input type="checkbox" :value="firstTag.code" v-model="tagsValue">
          <label>{{firstTag.tagName}}</label>
        </span>
      </div>
      <div>
        二级标签:<span v-for="secondTag in secondTags">
          <input type="checkbox" :value="secondTag.code" v-model="secondTagValue">
          <label>{{secondTag.tagName}}</label>
        </span>
      </div>
    </div>
    <div id="main">
      <div class="edit-main-right">
        <mavon-editor v-model="mdText" @change="changeMdEditor" @save="save"/>
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script>
  export default {
    name: "myMd",
    data() {
      return {
        title: "",
        logo: "",
        mdText: "# 我的世界",
        firstTags: [],
        secondTags: [],
        firstTagValue: '',
        secondTagValue: [],
        tagsValue: []
      };
    },
    mounted() {
      this.loadAll();
    },
    watch: {
      firstTagValue: function (newVal, oldVal) {
        //console.log("当前应取到的值：" + newVal, "这是之前的值：" + oldVal);
        this.getSecondTags(newVal);
      }
    },
    methods: {
      loadAll() {
        this.http.post(this.ports.tag.cloud, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.firstTags = datas;
          } else {
            this.firstTags = [];
          }
        })
      },
      getSecondTags(value) {
        console.log('secondTags:' + value);
        if (value == null || value == 0) {
          return;
        }
        this.http.post(this.ports.tag.secondTags, {
          parentCode: value
        }, res => {
          if (res.success) {
            let datas = res.data.results;
            this.secondTags = datas;
          } else {
            this.secondTags = [];
          }
        })
      },
      save(value, render) {
        console.log("save value:");
        console.log(value);
        console.log("save render:");
        console.log(render);
        console.log(this.title);
        console.log(this.logo);
        console.log(this.firstTagValue);
        console.log(this.secondTagValue);
      },
      changeMdEditor(value, render) {
        //console.log("change value:" + value);
        //console.log("change render:" + render);
      }
    }
  }
</script>

<style scoped>
  #container {
    width: 100%;
    margin: 0px auto;
  }

  #header {
    width: 100%;
    min-height: 140px;
    height: 10%;
    border: 1px #F4FFFC solid;
  }

  #main {
    width: 100%;
    min-height: 690px;
    height: 80%;
    border: 1px #F4FFFC solid;
  }

  #footer {
    width: 100%;
    min-height: 10px;
    height: 5%;
    border: 1px #F4FFFC solid;
  }
</style>
