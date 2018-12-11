<template>
  <div class="container">
    <newsCard :newsData="newsData"></newsCard>
    <newsCard :newsData="newsData"></newsCard>
    <newsCard :newsData="newsData"></newsCard>
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
      newsData: {
        imgUrl:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544503933316&di=d924751d86766b77ac08e82135664f43&imgtype=0&src=http%3A%2F%2Fbig5.taiwan.cn%2Fxwzx%2FPoliticsNews%2F201712%2FW020171226350972179329.jpg",
        title: `"金色名片"永不退色`,
        subhead:
          "2012年12月4日，习近平总书记主持中央政治局会议，审议2012年12月4日，习近平总书记主持中央政治局会议，审议2012年12月4日，习近平总书记主持中央政治局会议，审议2012年12月4日，习近平总书记主持中央政治局会议，审议…",
        time: "2018/6/14",
        isShowTime: true
      }
    };
  }
};
</script>

<style scoped>
</style>
