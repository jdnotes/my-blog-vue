<template>
  <div class="app">
    <Nav></Nav>
    <article>
      <aside class="l_box">
        <AboutMe></AboutMe>
        <tags></tags>
        <my-recommend></my-recommend>
        <links></links>
        <concern></concern>
      </aside>
      <main class="r_box">
        <div v-for="item in articles">
          <li>
            <i v-if="item.logo != ''"><a href="javascript: void(0)" @click="goInfo(item)">
              <img :src="item.logo"></a></i>
            <h3><a href="javascript: void(0)" @click="goInfo(item)">{{item.title}}</a></h3>
            <p>{{item.articleSection}}</p>
          </li>
        </div>
        <page :totalRecords="total" :currentPage='currentPage' @pageChange="pageChange"></page>
      </main>
    </article>
    <foot></foot>
  </div>
</template>

<script>
  //import section components
  import Nav from '../section/nav';
  import AboutMe from "../section/aboutMe";
  import MyRecommend from "../section/recommends";
  import Links from "../section/links";
  import Concern from "../section/concern";
  import Foot from "../section/foot";
  import Tags from "../section/tags";
  import Page from "../section/page";

  export default {
    name: 'myHome',
    components: {
      Page,
      Tags,
      Foot,
      Concern,
      Links,
      MyRecommend,
      AboutMe,
      Nav
    },
    data() {
      return {
        currentPage: 1,
        pageRows: 10,
        total: 0,
        keywords: '',
        tags: '',
        articles: []
      }
    },
    mounted() {
      this.getInitList()
    },
    methods: {
      getInitList() {
        //console.log('getGoodsList method');
        this.http.post(this.ports.article.search, {
          currentPage: this.currentPage,
          tags: this.tags
        }, res => {
          if (res.success) {
            //console.log(JSON.stringify(res.data.results));
            let datas = res.data.results;
            this.articles = datas.records;
            this.currentPage = datas.currentPage;
            this.total = datas.totalRecords;
          } else {
            this.articles = [];
          }
        })
      },
      goInfo(obj) {
        //console.log('goInfo method param:' + JSON.stringify(obj));
        let id = obj.id;
        this.$router.push({path: '/info/' + id});
      },
      pageChange(curPage) {
        this.http.post(this.ports.article.search, {
          currentPage: curPage,
          tag: this.tags
        }, res => {
          if (res.success) {
            let datas = res.data.results;
            this.currentPage = datas.currentPage;
            this.articles = datas.records;
          } else {
            this.articles = [];
          }
        })
      },
      search(keyword) {
        console.log("home search:" + keyword);
        //获取后台数据
        this.articles = [{
          'id': '1111',
          'title': '擦肩而过111',
          'shortText': '《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
          'imgUrl': 'https://dpic.tiankong.com/82/9f/QJ6333551457.jpg?x-oss-process=style/670ws'
        }
        ];
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/m.css";
</style>
