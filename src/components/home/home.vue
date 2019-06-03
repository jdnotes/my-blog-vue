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
            <i v-if="item.imgUrl != ''"><a href="javascript: void(0)" @click="back(item)">
              <img :src="item.imgUrl"></a></i>
            <h3><a href="javascript: void(0)" @click="back(item)">{{item.title}}</a></h3>
            <p>{{item.shortText}}</p>
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
        articles: [{
          'id': '1001',
          'title': '你是什么人便会遇上什么人',
          'shortText': '有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。',
          'imgUrl': ''
        }, {
          'id': '1002',
          'title': '爱情没有永远，地老天荒也走不完',
          'shortText': '也许，爱情没有永远，地老天荒也走不完，生命终结的末端，苦短情长。站在岁月的边端，那些美丽的定格，心伤的绝恋，都被四季的掩埋，一去不返。徒剩下这荒芜的花好月圆，一路相随，流离天涯背负了谁的思念？',
          'imgUrl': 'https://dpic.tiankong.com/tj/e7/QJ6154513335.jpg?x-oss-process=style/shows'
        }, {
          'id': '1003',
          'title': '擦肩而过',
          'shortText': '《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
          'imgUrl': 'https://dpic.tiankong.com/82/9f/QJ6333551457.jpg?x-oss-process=style/670ws'
        }, {
          'id': '1004',
          'title': '擦肩而过',
          'shortText': '《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
          'imgUrl': 'https://dpic.tiankong.com/82/9f/QJ6333551457.jpg?x-oss-process=style/670ws'
        }, {
          'id': '1005',
          'title': '擦肩而过',
          'shortText': '《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
          'imgUrl': 'https://dpic.tiankong.com/82/9f/QJ6333551457.jpg?x-oss-process=style/670ws'
        }, {
          'id': '1006',
          'title': '擦肩而过',
          'shortText': '《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
          'imgUrl': 'https://dpic.tiankong.com/82/9f/QJ6333551457.jpg?x-oss-process=style/670ws'
        }, {
          'id': '1007',
          'title': '擦肩而过',
          'shortText': '《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
          'imgUrl': 'https://dpic.tiankong.com/82/9f/QJ6333551457.jpg?x-oss-process=style/670ws'
        }, {
          'id': '1008',
          'title': '擦肩而过',
          'shortText': '《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
          'imgUrl': 'https://dpic.tiankong.com/82/9f/QJ6333551457.jpg?x-oss-process=style/670ws'
        }, {
          'id': '1009',
          'title': '擦肩而过',
          'shortText': '《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
          'imgUrl': 'https://dpic.tiankong.com/82/9f/QJ6333551457.jpg?x-oss-process=style/670ws'
        }, {
          'id': '1010',
          'title': '擦肩而过',
          'shortText': '《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
          'imgUrl': 'https://dpic.tiankong.com/82/9f/QJ6333551457.jpg?x-oss-process=style/670ws'
        }
        ]
      }
    },
    mounted() {
      this.getGoodsList()
    },
    methods: {
      getGoodsList() {
        this.$http.get('http://localhost:8080/static/ceshi.json').then((res) => {
          //用axios的方法引入地址
          this.res = res;
          //赋值
          console.log(res);
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
