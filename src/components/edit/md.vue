<template>
  <div id="container">
    <div id="header">
      <div>
        <strong>标题:</strong><input v-model="title" placeholder="请输入标题">
        <br>
        <strong>二级标题:</strong><input v-model="secondTitle" placeholder="请输入二级标题">
        <br>
        <strong>logo:</strong><input v-model="logo" placeholder="请输入logo地址">
      </div>
      <div>
        <strong>标签:</strong><span v-for="firstTag in tags">
          <input type="radio" :value="firstTag.code" v-model="tagValue">
          <label>{{firstTag.tagName}}</label>
        </span>
      </div>
      <div>
        <strong>标签列表:</strong><span v-for="firstTag in tags">
          <input type="checkbox" :value="firstTag.code" v-model="tagsValue">
          <label>{{firstTag.tagName}}</label>
        </span>
      </div>
      <div>
        <strong>类型:</strong><span v-for="at in articleTypeArr">
          <input type="radio" :value="at.id" v-model="articleTypeValue">
          <label>{{at.name}}</label>
        </span>
      </div>
      <div>
        <strong>级别:</strong><span v-for="at in levelArr">
          <input type="radio" :value="at.id" v-model="level">
          <label>{{at.name}}</label>
        </span>
      </div>
      <div>
        <strong>段落:</strong>
        <textarea class="remark" placeholder="请输入段落" v-model="articleSection"/>
      </div>
      <div>
        <strong>备注:</strong>
        <textarea class="remark" placeholder="请输入备注" maxlength="500" @input="descInput" v-model="remark"/>
        <span class="numberV">{{textVal}}/500</span>
        <br>
      </div>
    </div>
    <div>
      <strong>word:</strong><input v-model="word" placeholder="请输入">
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
        word: "",
        secondTitle: "",
        logo: "",
        level: "",
        remark: "",
        articleSection: "",
        textVal: 0,
        mdText: "# Hello World",
        tags: [],
        tagValue: '',
        tagsValue: [],
        articleTypeValue: '',
        articleTypeArr: [{id: 1, name: '原创'}, {id: 2, name: '整理'}, {id: 3, name: '转载'}],
        levelArr: [{id: 1, name: '等级一'},
          {id: 2, name: '等级二'},
          {id: 3, name: '等级三'},
          {id: 4, name: '等级四'},
          {id: 5, name: '等级五'}]
      };
    },
    mounted() {
      this.loadAll();
    },
    watch: {
      firstTagValue: function (newVal, oldVal) {
        //console.log("当前应取到的值：" + newVal, "这是之前的值：" + oldVal);
      }
    },
    methods: {
      loadAll() {
        this.http.post(this.ports.tag.cloud, {}, res => {
          if (res.success) {
            let datas = res.data.results;
            this.tags = datas;
          } else {
            this.tags = [];
          }
        })
        let code = this.getUrlKey("id");
        if (code) {
          this.http.post(this.ports.articleBack.get, {
            code: this.getUrlKey("id")
          }, res => {
            if (res.success) {
              let datas = res.data.results;
              if (datas != null) {
                this.title = datas.title;
                this.secondTitle = datas.secondTitle;
                this.logo = datas.logo;
                this.level = datas.level;
                this.remark = datas.remark;
                this.articleSection = datas.articleSection;
                this.mdText = datas.articleMarkdown;
                this.articleTypeValue = datas.articleType;
                this.tagValue = datas.tag;
                this.tagsValue = datas.tags;
                this.descInput();
              }
            }
          })
        }
      },
      save(value, render) {
        this.http.post(this.ports.articleBack.save, {
          code: this.getUrlKey("id"),
          title: this.title,
          secondTitle: this.secondTitle,
          logo: this.logo,
          tag: this.tagValue,
          tags: this.tagsValue,
          articleType: this.articleTypeValue,
          articleSection: this.articleSection,
          remark: this.remark,
          level: this.level,
          articleMarkdown: value,
          articleHtml: render,
          word: this.word
        }, res => {
          if (res.success) {
            //let datas = res.data.results;
            //console.log(datas);
          } else {
            console.log(res.message);
          }
        })
      },
      changeMdEditor(value, render) {
        //console.log("change value:" + value);
        //console.log("change render:" + render);
      },
      descInput() {
        this.textVal = this.remark.length;
      },
      getUrlKey: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href)
          || [, ""])[1].replace(/\+/g, '%20')) || null;
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

  .remark {
    width: 500px;
    height: 100px;
  }
</style>
