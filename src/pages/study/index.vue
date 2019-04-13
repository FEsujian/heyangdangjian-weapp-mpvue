<template>
  <div class="container">
    <!-- <img
      src="../../../static/asset/icon/shangchuanxinde@3x.png"
      class="uploadButton"
      @click="Toexperience"
    >-->
    <div class="topButton">
      <div class="topButtonItem" @click="toNewsList('党章党规',6)">
        <img src="../../../static/asset/icon/dangzhangdanggui@3x.png" class="icon30">
        <div class="buttonTitle">党章党规</div>
      </div>
      <div class="topButtonItem" @click="toNewsList('公开课',7)">
        <img src="../../../static/asset/icon/gongkaike@3x.png" class="icon30">
        <div class="buttonTitle">公开课</div>
      </div>
      <div class="topButtonItem" @click="toNewsListtopic('在线考试',8)">
        <img src="../../../static/asset/icon/zaixiankaoshi@3x.png" class="icon30">
        <div class="buttonTitle">在线考试</div>
      </div>
    </div>
    <img src="../../../static/asset/image/tiananmen@3x.png" class="tiananmen">
    <div class="xindetuijian">
      <div class="title">
        <div class="inline" style="font-size:16px;margin-left: 20px;">党章党规</div>
        <div
          class="inline"
          style="font-size:12px;color:#9B9B9B;float:right;"
          @click="toNewsList('党章党规',6)"
        >
          更多
          <img
            src="../../../static/asset/icon/gengduo@3x.png"
            class="icon10"
            style="margin-right: 10px;"
          >
        </div>
      </div>
      <div style="box-sizing: border-box;">
        <newsCard v-for="article in articleList" :key="article.id" :newsData="article"></newsCard>
      </div>
      <div style="font-size:12px;color:#ccc;margin-top:15px;text-align:center;">----没有更多内容了----</div>
    </div>
  </div>
</template>

<script>
import newsCard from "../../components/newsCard.vue";
export default {
  components: {
    newsCard
  },
  data: {
    userInfo: {},
    articleList: []
  },
  mounted() {
    this.userInfo = this.$store.state.userInfo;
    // 获取文章列表
    this.$axios
      .get({
        url: `/findArticleByClassId?id=6&page=1&pageSize=5`
      })
      .then(res => {
        this.articleList = res.data;
      });
  },
  methods: {
    Toexperience() {
      if (!this.$store.getters.isLogin) {
        wx.showModal({
          title: "警告",
          content: "未登陆，请登陆之后再上传!",
          showCancel: false,
          success() {
            wx.switchTab({
              url: "/pages/mine/main"
            });
          }
        });
      } else {
        wx.navigateTo({
          url: `/pages/experience/main`
        });
      }
    },
    toNewsList(title, id) {
      wx.navigateTo({
        url: `/pages/newsList/main?title=${title}&id=${id}`
      });
    },
    toNewsListtopic(title, id) {
      wx.navigateTo({
        url: `/pages/topic/main?title=${title}&id=${id}`
      });
    }
  }
};
</script>

<style scoped>
.topButton {
  background-color: #fff;
  display: flex;
  height: 150px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
.topButtonItem {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  margin-top: 30px;
}
.icon10 {
  height: 10px;
  width: 10px;
}
.icon30 {
  height: 30px;
  width: 30px;
}
.buttonTitle {
  margin-top: 20px;
}
.tiananmen {
  width: 335px;
  height: 60px;
  margin: 10px 20px;
}
.uploadButton {
  position: fixed;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  bottom: 16px;
  right: 16px;
}
.xindetuijian {
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  background-color: #fff;
}
.xindetuijian .title {
  height: 35px;
  line-height: 35px;
  margin-bottom: -10px;
}
</style>
