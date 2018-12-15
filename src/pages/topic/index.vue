<template>
  <div class="container">
    <wxtopic v-for="topic in topics" :key="topic.id" :topic="topic"></wxtopic>
    <div style="font-size:12px;color:#ccc;text-align:center;margin-top:10px;">--- 没有更多内容了---</div>
  </div>
</template>

<script>
import wxtopic from "../../components/topic/topic";
export default {
  data() {
    return {
      id: 0,
      topics: []
    };
  },
  computed: {},
  methods: {
    getArticle(id, page = 1) {
      // 获取试题列表
      this.$axios
        .get({
          url: `/findArticleByClassId?id=${id}&page=${page}&pageSize=6`
        })
        .then(res => {
          this.topics = res.result;
        });
    }
  },
  mounted() {
    const query = this.$root.$mp.query;
    wx.setNavigationBarTitle({
      title: query.title
    });
    this.id = query.id;
    this.$axios
      .get({
        url: `/findClassById?id=${query.id}`
      })
      .then(res => {
        this.getArticle(this.id);
      });
  },
  components: {
    wxtopic
  }
};
</script>

<style scoped>
.container {
  margin-top: 20rpx;
}
</style>
