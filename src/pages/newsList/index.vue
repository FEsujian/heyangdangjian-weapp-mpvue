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
        <newsCard v-for="article in articleList" :key="article.id" :newsData="article"></newsCard>
      </van-tab>
    </van-tabs>
    <div v-else style="width:100%;">
      <newsCard v-for="article in articleList" :key="article.id" :newsData="article"></newsCard>
    </div>
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
      classify: [],
      articleList: []
    };
  },
  methods: {
    tabChange(event) {
      this.active = event.target.index;
      this.getArticle(this.classify[this.active].id);
    },
    getArticle(id) {
      // 获取文章列表
      this.$axios
        .get({
          url: `/findArticleByClassId?id=${id}`
        })
        .then(res => {
          this.articleList = res.result;
        });
    }
  },
  onLoad() {
    // 数据初始化
    this.active = 0;
    this.classify = [];
    this.articleList = [];
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
        if (res.result.length) {
          this.classify = res.result;
          this.getArticle(this.classify[0].id);
        } else {
          this.getArticle(query.id);
        }
      });
  }
};
</script>

<style scoped>
newsCard {
  margin-top: 20px;
}
</style>
