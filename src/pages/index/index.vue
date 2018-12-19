<template>
  <div class="container">
    <div class="width100 top">
      <!-- <img src="../../../static/asset/image/banner@3x.png" class="banner"> -->
      <div class="banner">
        <swiper :images="banner"></swiper>
      </div>
      <div class="topButton">
        <div class="topButtonItem" @click="heyangjianjie">
          <img src="../../../static/asset/icon/heyangjianjie@3x.png" class="icon30">
          <div class="buttonTitle">合阳简介</div>
        </div>
        <div class="topButtonItem" @click="heyangdongtai">
          <img src="../../../static/asset/icon/heyangdongtai@3x.png" class="icon30">
          <div class="buttonTitle">合阳动态</div>
        </div>
        <div class="topButtonItem" @click="dangjianyaowen">
          <img src="../../../static/asset/icon/dangjianyaowen@3x.png" class="icon30">
          <div class="buttonTitle">党建要闻</div>
        </div>
        <div class="topButtonItem" @click="dangjianhuodong">
          <img src="../../../static/asset/icon/dangjianhuodong@3x.png" class="icon30">
          <div class="buttonTitle">党建活动</div>
        </div>
      </div>
    </div>
    <div class="content dangjiangaikuang">
      <div class="newstitle">
        <div class="inline" style="font-size:16px;font-weight:bold;margin-left: 20px;">党建概况</div>
        <div
          class="inline"
          style="font-size:12px;color:#9B9B9B;float:right;"
          @click="dangjiangaikuang"
        >
          查看详情
          <img
            src="../../../static/asset/icon/gengduo@3x.png"
            class="icon10"
            style="margin-right: 10px;"
          >
        </div>
      </div>
      <div class="gaikuang">
        <newsCard :newsData="dangjiangaikuangData"></newsCard>
      </div>
    </div>
    <div class="content heyangdongtai">
      <div class="newstitle">
        <div class="inline" style="font-size:16px;font-weight:bold;margin-left: 20px;">合阳动态</div>
        <div
          class="inline"
          style="font-size:12px;color:#9B9B9B;float:right;"
          @click="heyangdongtai"
        >
          更多
          <img
            src="../../../static/asset/icon/gengduo@3x.png"
            class="icon10"
            style="margin-right: 10px;"
          >
        </div>
        <div class="dongtai">
          <newsCard v-for="article in heyangdongtaiList" :key="article.id" :newsData="article"></newsCard>
        </div>
      </div>
    </div>
    <div style="font-size:12px;color:#ccc;margin-top:15px;">----没有更多内容了----</div>
  </div>
</template>

<script>
import newsCard from "../../components/newsCard.vue";
import swiper from "../../components/swiper/swiper";

export default {
  data() {
    return {
      heyangdongtaiList: [],
      dangjiangaikuangData: {},
      banner: []
    };
  },

  components: {
    newsCard,
    swiper
  },

  methods: {
    heyangjianjie() {
      this.toDetails(1);
    },
    dangjiangaikuang() {
      this.toDetails(2);
    },
    heyangdongtai() {
      this.toNewsList("合阳动态", 3);
    },
    dangjianyaowen() {
      this.toNewsList("党建要闻", 4);
    },
    dangjianhuodong() {
      this.toNewsList("党建活动", 5);
    },
    toDetails(id) {
      wx.navigateTo({
        url: `/pages/news/main?id=${id}`
      });
    },
    toNewsList(title, id) {
      wx.navigateTo({
        url: `/pages/newsList/main?title=${title}&id=${id}`
      });
    }
  },

  mounted() {
    // 获取首页banner
    this.$axios
      .get({
        url: `/user/getBanner`
      })
      .then(res => {
        this.banner = res.data;
      });
    // 获取文章列表
    this.$axios
      .get({
        url: `/findArticleByClassId?id=2`
      })
      .then(res => {
        this.dangjiangaikuangData = res.data[0];
      });
    // 获取文章列表
    this.$axios
      .get({
        url: `/findArticleByClassId?id=3&pageSize=3`
      })
      .then(res => {
        this.heyangdongtaiList = res.data;
      });
  }
};
</script>

<style scoped>
.banner {
  height: 130px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.topButton {
  margin-top: 30px;
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
.topButtonItem {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
}
.buttonTitle {
  margin-top: 10px;
}
.top {
  height: 260px;
  background-color: #fff;
  text-align: center;
}
.icon30 {
  height: 30px;
  width: 30px;
}
.content {
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  background-color: #fff;
}
.dangjiangaikuang {
  height: 140px;
}
.heyangdongtai {
  height: 360px;
  box-sizing: border-box;
}
.content .newstitle {
  height: 30px;
  line-height: 30px;
}
.gaikuang {
  height: 120px;
}
.dongtai {
  background-color: #f6f6f6;
}
</style>
