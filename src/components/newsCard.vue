<template>
  <div class="newsCard" @click="toDetails">
    <img :src="newsData.imgUrl" class="cardThumbnail">
    <div class="cardDetails">
      <div class="cardTitle">{{newsData.title}}</div>
      <div class="cardAbstract">{{newsData.abstract}}</div>
      <div class="carTtime" v-if="newsData.isShowTime">{{getTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newsData: {
      required: true
    }
  },
  computed: {
    getTime(date) {
      return this.$axios.timeFormat(this.newsData.createTime);
    }
  },
  methods: {
    toDetails() {
      wx.navigateTo({
        url: `/pages/news/main?id=${this.newsData.id}`
      });
    }
  }
};
</script>

<style scoped>
.newsCard {
  width: 100%;
  height: 100px;
  padding: 1px 0;
  margin-top: 10px;
  background-color: #fff;
  display: flex;
}
.cardThumbnail {
  flex: 0 0 120px;
  height: 80px;
  border-radius: 5px;
  margin: 10px 20px;
}
.cardDetails {
  height: 100px;
}

.cardTitle {
  margin: 7px 10px 1px 0;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  max-width: 205px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cardAbstract {
  height: 40px;
  line-height: 20px;
  font-size: 12px;
  margin: 10px 10px 5px 0;
  color: #4a4a4a;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.carTtime {
  height: 14px;
  line-height: 14px;
  font-size: 10px;
  color: #9b9b9b;
}
</style>
