<template>
  <div class="container" style="background-color:#fff">
    <div class="title">{{article.title}}</div>
    <div class="subheading" v-if="article.subhead">{{article.subhead}}</div>
    <div class="releaseTime" v-if="article.isShowTime">发布时间: {{getTime}}</div>
    <video class="newsVideo" v-if="article.videoUrl" :src="article.videoUrl"></video>
    <div style="width:90%;">
      <wxParse :content="article.content"/>
    </div>
    <div style="font-size:12px;color:#ccc;text-align:center;margin-top:10px;">----没有更多内容了----</div>
  </div>
</template>

<script>
import wxParse from "mpvue-wxparse";
export default {
  components: {
    wxParse
  },
  data() {
    return {
      article: {}
    };
  },
  computed: {
    getTime(date) {
      return this.$axios.timeFormat(this.article.createTime);
    }
  },
  onLoad() {
    // 数据初始化
    this.article = {};
  },
  mounted() {
    this.$axios
      .get({
        url: `/findArticleById?id=${this.$root.$mp.query.id}`
      })
      .then(res => {
        this.article = res.result[0];
      });
  }
};
</script>

<style scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
.title {
  margin: 0 20px;
  font-size: 18px;
  font-weight: 700;
}
.subheading {
  padding: 5px;
  font-size: 15px;
  color: #aaa;
}
.newsVideo {
  width: 92%;
}
.releaseTime {
  padding: 5px;
  font-size: 12px;
}
</style>
