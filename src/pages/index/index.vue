<template>
  <div class="container">
    <div class="width100 top">
      <img src="../../../static/asset/image/banner@3x.png" class="banner">
      <div class="topButton">
        <div class="topButtonItem" @click="heyangjianjie">
          <img src="../../../static/asset/icon/heyangjianjie@3x.png" class="icon30">
          <div class="buttonTitle">合阳简介</div>
        </div>
        <div class="topButtonItem">
          <img src="../../../static/asset/icon/heyangdongtai@3x.png" class="icon30">
          <div class="buttonTitle">合阳动态</div>
        </div>
        <div class="topButtonItem">
          <img src="../../../static/asset/icon/dangjianyaowen@3x.png" class="icon30">
          <div class="buttonTitle">党建要闻</div>
        </div>
        <div class="topButtonItem">
          <img src="../../../static/asset/icon/dangjianhuodong@3x.png" class="icon30">
          <div class="buttonTitle">党建活动</div>
        </div>
      </div>
    </div>
    <div class="content dangjiangaikuang" @click="dangjiangaikuang">
      <div class="title">
        <div class="inline" style="font-size:16px;margin-left: 20px;">党建概况</div>
        <div class="inline" style="font-size:12px;color:#9B9B9B;float:right;">
          查看详情
          <img
            src="../../../static/asset/icon/gengduo@3x.png"
            class="icon10"
            style="margin-right: 10px;"
          >
        </div>
        <!-- <newsCard :newsData="dangjiangaikuangData"></newsCard> -->
      </div>
    </div>
    <div class="content heyangdongtai">
      <div class="title">
        <div class="inline" style="font-size:16px;margin-left: 20px;">合阳动态</div>
        <div class="inline" style="font-size:12px;color:#9B9B9B;float:right;">
          更多
          <img
            src="../../../static/asset/icon/gengduo@3x.png"
            class="icon10"
            style="margin-right: 10px;"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newsCard from "../../components/newsCard.vue";
export default {
  data() {
    return {
      dangjiangaikuangData: {
        imgUrl:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544503933316&di=d924751d86766b77ac08e82135664f43&imgtype=0&src=http%3A%2F%2Fbig5.taiwan.cn%2Fxwzx%2FPoliticsNews%2F201712%2FW020171226350972179329.jpg",
        title: `"金色名片"永不退色`,
        subhead:
          "2012年12月4日，习近平总书记主持中央政治局会议，审议2012年12月4日，习近平总书记主持中央政治局会议，审议2012年12月4日，习近平总书记主持中央政治局会议，审议2012年12月4日，习近平总书记主持中央政治局会议，审议…",
        time: "2018/6/14",
        isShowTime: false
      },
      indexConfig: {
        xindeId: 1
      }
    };
  },

  components: {
    newsCard
  },

  methods: {
    heyangjianjie() {
      this.toDetails(1);
    },
    dangjiangaikuang() {
      this.toDetails(2);
    },
    toDetails(id) {
      wx.navigateTo({
        url: `/pages/news/main?id=${id}`
      });
    }
  },

  created() {}
};
</script>

<style scoped>
.banner {
  height: 130px;
  border-radius: 5px;
  margin: 20px;
}
.topButton {
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
  height: 280px;
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
  height: 132px;
}
.heyangdongtai {
  height: 500px;
}
.content .title {
  height: 35px;
  line-height: 35px;
}
</style>
