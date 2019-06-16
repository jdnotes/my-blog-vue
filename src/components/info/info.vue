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
      <main>
        <div class="infosbox">
          <div class="newsview">
            <h3 class="news_title">{{details.title}}</h3>
            <div class="bloginfo">
              <li class="article_type">{{details.articleTypeText}}</li>
              <li class="author">作者: {{details.author}}</li>
              <li class="timer">时间：{{details.createDate}}</li>
              <li class="view">{{details.readNum}} 人已阅读</li>
            </div>
            <div class="tags">
              <span v-for="tag in details.tags">
                <a href="/" target="_blank">{{tag.tagName}}</a>
              </span>
            </div>
            <div class="ps_about">
              <strong></strong>
              <span>{{details.remark}}</span>
            </div>
            <div class="news_about">
              <strong></strong>
              <span>{{details.mind}}</span>
            </div>
            <div class="news_con">
              <mavon-editor v-html="details.articleHtml"/>
            </div>
          </div>
          <div class="share">
            <p class="diggit"><a href="JavaScript:void(0);"> 赞一个！ </a>(<b id="diggnum">{{details.likeNum}}</b>)</p>
          </div>
          <!--
          <div class="nextinfo">
            <p>上一篇：<a href="/info/1005">如何坚持自己的原则</a></p>
            <p>下一篇：<a href="/home">返回列表</a></p>
          </div>
          -->
          <div class="news_pl">
            <h2>文章评论</h2>
            <!--
            <div class="gbko">
              <div class="fb">
                <ul>
                  <p class="fbtime"><span>2018-07-24 11:52:38</span>dancesmile</p>
                  <p class="fbinfo">这才是我要的朋友圈</p>
                </ul>
              </div>
              <div class="fb">
                <ul>
                  <p class="fbtime"><span>2018-07-24 08:52:48</span> 卜野</p>
                  <p class="fbinfo"></p>
                  <div class="ecomment"><span class="ecommentauthor">网友 家蚂蚁 的原文：</span>
                    <p class="ecommenttext">坚持哟!看你每天都有写，请继续加油，再接再厉哦</p>
                  </div>
                </ul>
              </div>
            </div>
            -->
          </div>
        </div>
      </main>
    </article>
    <foot></foot>
    <top></top>
  </div>
</template>

<script>
  import Nav from '../section/nav';
  import AboutMe from "../section/aboutMe";
  import MyRecommend from "../section/recommends";
  import Links from "../section/links";
  import Concern from "../section/concern";
  import Foot from "../section/foot";
  import Top from "../section/top";
  import Tags from "../section/tags";

  export default {
    name: 'myInfo',
    components: {
      Tags,
      Top,
      Nav,
      Foot,
      Concern,
      Links,
      MyRecommend,
      AboutMe
    },
    data() {
      return {
        details: {}
      }
    },
    mounted() {
      this.getInitList();
    },
    methods: {
      getInitList() {
        //console.log("接受的参数:" + this.$route.params.id);
        let id = this.$route.params.id;
        this.http.post(this.ports.article.details, {
          id: id
        }, res => {
          if (res.success) {
            let datas = res.data.results;
            this.details = datas;
          } else {
            this.articles = [];
          }
        })
      },
      search(keyword) {
        console.log("info search:" + keyword);
        this.$router.push({path: '/'});
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @import "../../assets/css/index.css";
  @import "../../assets/css/info.css";
  @import "../../assets/css/m.css";

  .article_type {
    color: #3399FF;
  }

  .ps_about {
    color: #C0C0C0;
  }

</style>
