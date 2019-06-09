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
            <i v-if="item.logo != ''"><a href="javascript: void(0)" @click="back(item)">
              <img :src="item.logo"></a></i>
            <h3><a href="javascript: void(0)" @click="back(item)">{{item.title}}</a></h3>
            <p>{{item.articleSection}}</p>
          </li>
        </div>
        <div class="pagelist">
          <a href="javascript: void(0)" @click="page(0)">上一页</a>
          <a href="javascript: void(0)" @click="page(1)" class="curPage">1</a>&nbsp;&nbsp;
          <a href="javascript: void(0)" @click="page(2)">2</a>&nbsp;&nbsp;
          <a href="javascript: void(0)" @click="page(3)">3</a>&nbsp;&nbsp;
          <a href="javascript: void(0)" @click="page(4)">4</a>&nbsp;&nbsp;
          <a href="javascript: void(0)" @click="page(5)">5</a>&nbsp;&nbsp;
          <a href="javascript: void(0)" @click="page(0)">下一页</a>
        </div>
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

  export default {
    name: 'myHome',
    components: {
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
        currentPage: '1',
        pageRows: '10',
        tags: '',
        articles: []
      }
    },
    mounted() {
      this.getGoodsList()
    },
    methods: {
      getGoodsList() {
        //console.log('getGoodsList method');
        this.http.post(this.ports.article.search, {
          currentPage: this.currentPage,
          tags: '1001'
        }, res => {
          if (res.success) {
            //console.log(JSON.stringify(res.data.results));
            let datas = res.data.results;
            this.currentPage = datas.currentPage;
            this.articles = datas.records;
          } else {
            this.articles = [];
          }
        })
      },
      back(obj) {
        console.log('back method param:' + JSON.stringify(obj));
        var id = obj.id;
        console.log('back method id:' + id);
        this.$router.push({path: '/info/' + id});
      },
      page(curPage) {
        console.log('curPage:' + curPage);
        this.http.post(this.ports.article.list, {
          currentPage: '2',
          tag: '1001'
        }, res => {
          if (res.success) {
            // 返回正确的处理
          } else {
            // 返回错误的处理
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
