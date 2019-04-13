<template>
  <div class="container">
    <van-tabs
      v-if="classify.length"
      animated
      :active="active"
      @change="tabChange"
      style="width:100%;"
    >
      <van-tab v-for="(item,key) in classify" :key="key" :title="item.className">
        <scroll-view class="scrollView" scroll-y="true" @bindscrolltolower="lower">
          <newsCard v-for="article in articleList" :key="article.id" :newsData="article"></newsCard>
          <div
            v-if="isLower"
            style="font-size:12px;color:#ccc;text-align:center;margin-top:10px;"
          >----没有更多内容了----</div>
        </scroll-view>
      </van-tab>
    </van-tabs>
    <scroll-view v-else class="scrollViewFull" scroll-y="true" @scrolltolower="lower">
      <newsCard v-for="article in articleList" :key="article.id" :newsData="article"></newsCard>
      <div
        v-if="isLower"
        style="font-size:12px;color:#ccc;text-align:center;margin-top:10px;"
      >----没有更多内容了----</div>
    </scroll-view>
  </div>
</template>

<script>
import newsCard from "../../components/newsCard.vue";
export default {
  components: {
    newsCard
  },
  data() {
    return {
      active: 0,
      articleId: "",
      classify: [],
      articleList: [],
      page: 1,
      isLower: false
    };
  },
  methods: {
    lower() {
      if (this.isLower) {
        return;
      }
      this.page++;
      this.getArticle(this.articleId, this.page);
    },
    tabChange(event) {
      this.active = event.target.index;
      this.articleId = this.classify[this.active].id;
      this.articleList = [];
      this.page = 1;
      this.isLower = false;
      this.getArticle(this.articleId);
    },
    getArticle(id, page = 1) {
      // 获取文章列表
      this.$axios
        .get({
          url: `/findArticleByClassId?id=${id}&page=${page}&pageSize=6`
        })
        .then(res => {
          this.articleList = this.articleList.concat(res.data);
          if (res.data.length < 6) {
            this.isLower = true;
          }
        });
    }
  },
  onLoad() {
    // 数据初始化
    this.active = 0;
    this.articleId = "";
    this.classify = [];
    this.articleList = [];
    this.page = 1;
    this.isLower = false;
  },
  mounted() {
    const query = this.$root.$mp.query;
    // 动态设置小程序标题
    wx.setNavigationBarTitle({
      title: query.title
    });
    // 获取文章分类
    this.$axios
      .get({
        url: `/findClassById?id=${query.id}`
      })
      .then(res => {
        if (res.data.length) {
          this.classify = res.data;
          this.articleId = this.classify[0].id;
        } else {
          this.articleId = query.id;
        }
        this.getArticle(this.articleId);
      });
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  overflow: hidden;
}
.scrollView {
  width: 100%;
  height: calc(100vh - 44px);
}
.scrollViewFull {
  width: 100%;
  height: 100vh;
}
newsCard {
  margin-top: 20px;
}
</style>
