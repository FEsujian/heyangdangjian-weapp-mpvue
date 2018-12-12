<template>
  <div class="container">
    <newsCard v-for="item in articleList" :key="item.id" :newsData="item"></newsCard>
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
      articleList: []
    };
  },
  mounted() {
    wx.setNavigationBarTitle({
      title: this.$root.$mp.query.title
    });
    this.$axios
      .get({
        url: `/findArticleByClassId?id=${this.$root.$mp.query.id}`
      })
      .then(res => {
        this.articleList = res.result;
        console.log(this.articleList);
      });
  }
};
</script>

<style scoped>
newsCard {
  margin-top: 20px;
}
</style>
