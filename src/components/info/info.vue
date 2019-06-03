<template>
  <div class="app">
    <Nav></Nav>
    <article>
      <aside class="l_box">
        <AboutMe></AboutMe>
        <Classify></Classify>
        <my-recommend></my-recommend>
        <links></links>
        <concern></concern>
      </aside>
      <main>
        <div class="infosbox">
          <div class="newsview">
            <h3 class="news_title">{{articleTitle}}</h3>
            <div class="bloginfo">
              <ul>
                <li class="article_type">{{articleTypeText}}</li>
                <li class="author">作者: {{author}}</li>
                <li class="timer">时间：{{articleDate}}</li>
                <li class="view">{{readNum}} 人已阅读</li>
              </ul>
            </div>
            <div class="tags">
              <span v-for="tag in tags">
                <a href="/" target="_blank">{{tag.name}}</a>
              </span>
            </div>
            <div class="ps_about">
              <strong></strong>
              <span>{{remark}}</span>
            </div>
            <div class="news_about">
              <strong></strong>
              <span>{{mind}}</span>
            </div>
            <div class="news_con">
              <mavon-editor v-html="mdHtml"/>
            </div>
          </div>
          <div class="share">
            <p class="diggit"><a href="JavaScript:void(0);"> 赞一个！ </a>(<b id="diggnum">13</b>)</p>
          </div>
          <div class="nextinfo">
            <p>上一篇：<a href="/info/1005">如何坚持自己的原则</a></p>
            <p>下一篇：<a href="/home">返回列表</a></p>
          </div>
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
  </div>
</template>

<script>
  import Nav from '../section/nav';
  import AboutMe from "../section/aboutMe";
  import Classify from "../section/classify";
  import MyRecommend from "../section/recommends";
  import Links from "../section/links";
  import Concern from "../section/concern";
  import Foot from "../section/foot";

  export default {
    name: 'myInfo',
    components: {
      Nav,
      Foot,
      Concern,
      Links,
      MyRecommend,
      Classify,
      AboutMe
    },
    data() {
      return {
        title: '简单笔记',
        aboutMe: '新的起点,新的征途',
        aboutUrl: 'https://dpic.tiankong.com/r1/pj/QJ6609096149.jpg?x-oss-process=style/670ws',
        recommends: [{'id': '1001', 'title': '你是什么人便会遇上什么人'}, {'id': '1001', 'title': '个人博客模板'}],
        remark: 'ps:本篇内容由站长网路整理汇总,如有雷同,请留言 or 微信联系me.',
        mind: '人生，不要被安逸所控制，决定成功的，是奋斗。人生，不要被他人所控制，决定命运的，是自己。静悄悄的努力，活成自己想要的模样。',
        tags: [
          {'id': 1001, 'name': 'JavaSE', 'num': '16'},
          {'id': 1002, 'name': 'Spring', 'num': '21'},
          {'id': 1003, 'name': 'JVM', 'num': '34'}
        ],
        articleTitle: '为什么阿里巴巴禁止开发人员使用isSuccess作为变量名',
        articleTypeText: '整理',
        author: '张三',
        articleDate: '2019-05-27 10:34:56',
        readNum: '300',
        articleContent: '20岁时，我担心别人如何看我；40岁时，我不在乎别人怎么看我；60岁时，我发现他们根本不看我。请记住：有两种事我们应该尽量少干，一是用自己的嘴干扰别人的人生，二是靠别人的脑子思考自己的人生。',
        mdHtml: '<p>在fastjson和jackson的结果中，原来类中的isSuccess字段被序列化成success，并且其中还包含hollis值。而Gson中只有isSuccess字段。</p>\n' +
          '<p>我们可以得出结论：fastjson和jackson在把对象序列化成json字符串的时候，是通过反射遍历出该类中的所有getter方法，得到getHollis和isSuccess，然后根据JavaBeans规则，他会认为这是两个属性hollis和success的值。直接序列化成json:</p>\n' +
          '<pre><code class="java">{“hollis”:”hollischuang”,”success”:true}\n' +
          '</code></pre>\n' +
          '<p>但是Gson并不是这么做的，他是通过反射遍历该类中的所有属性，并把其值序列化成json:</p>\n' +
          '<pre><code>{“isSuccess”:true}\n' +
          '</code></pre>\n' +
          '<p><strong>可以看到，由于不同的序列化工具，在进行序列化的时候使用到的策略是不一样的，所以，对于同一个类的同一个对象的序列化结果可能是不同的。</strong></p>\n' +
          '<p>前面提到的关于对getHollis的序列化只是为了说明fastjson、jackson和Gson之间的序列化策略的不同，我们暂且把他放到一边，我们把他从Model3中删除后，重新执行下以上代码，得到结果：</p>\n' +
          '<pre><code class="java">Serializable Result With fastjson :{"success":true}\n' +
          'Serializable Result WithGson :{"isSuccess":true}\n' +
          'Serializable Result With jackson :{"success":true}\n' +
          '</code></pre>\n' +
          '<p>现在，不同的序列化框架得到的json内容并不相同，如果对于同一个对象，我使用fastjson进行序列化，再使用Gson反序列化会发生什么？</p>\n' +
          '<pre><code>public class BooleanMainTest {\n' +
          '   public static void main(String[] args) throws IOException {\n' +
          '       Model3 model3 = new Model3();\n' +
          '       model3.setSuccess(true);\n' +
          '       Gson gson =new Gson();\n' +
          '       System.out.println(gson.fromJson(JSON.toJSONString(model3),Model3.class));\n' +
          '   }\n' +
          '}\n' +
          '\n' +
          'class Model3 implements Serializable {\n' +
          '   private static final long serialVersionUID = 1836697963736227954L;\n' +
          '   private boolean isSuccess;\n' +
          '   public boolean isSuccess() {\n' +
          '       return isSuccess;\n' +
          '   }\n' +
          '   public void setSuccess(boolean success) {\n' +
          '       isSuccess = success;\n' +
          '   }\n' +
          '   @Override\n' +
          '   public String toString() {\n' +
          '       return new StringJoiner(", ", Model3.class.getSimpleName() + "[","]")\n' +
          '           .add("isSuccess=" + isSuccess)\n' +
          '           .toString();\n' +
          '   }\n' +
          '}\n' +
          '\n' +
          '</code></pre>\n' +
          '<p>以上代码，输出结果：</p>\n' +
          '<pre><code>Model3[isSuccess=false]\n' +
          '</code></pre>\n' +
          '<p>这和我们预期的结果完全相反，原因是因为JSON框架通过扫描所有的getter后发现有一个isSuccess方法，然后根据JavaBeans的规范，解析出变量名为success，把model对象序列化城字符串后内容为<code>{"success":true}</code>。</p>\n' +
          '<p>根据<code>{"success":true}</code>这个json串，Gson框架在通过解析后，通过反射寻找Model类中的success属性，但是Model类中只有isSuccess属性，所以，最终反序列化后的Model类的对象中，isSuccess则会使用默认值false。</p>\n' +
          '<p>但是，<strong>一旦以上代码发生在生产环境，这绝对是一个致命的问题。</strong></p>\n' +
          '<p>所以，作为开发者，我们应该想办法尽量避免这种问题的发生，对于POJO的设计者来说，只需要做简单的一件事就可以解决这个问题了，那就是把isSuccess改为success。</p>\n' +
          '<p>这样，该类里面的成员变量时success，getter方法是isSuccess，这是完全符合JavaBeans规范的。无论哪种序列化框架，执行结果都一样。就从源头避免了这个问题。</p>'
      }
    },
    mounted() {
      this.getGoodsList();
    },
    methods: {
      getGoodsList() {
        console.log("接受的参数:" + this.$route.params.id);
      },
      back(obj) {
        console.log('back method:' + obj);
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
