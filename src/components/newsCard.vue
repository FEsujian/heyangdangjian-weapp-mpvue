<template>
  <div class="newsCard" @click="toDetails">
    <img :src="newsData.imgUrl" class="thumbnail">
    <div class="details">
      <div class="title">{{newsData.title}}</div>
      <div class="abstract">{{newsData.abstract}}</div>
      <div class="time" v-if="newsData.isShowTime">{{getTime}}</div>
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
.thumbnail {
  flex: 0 0 120px;
  height: 80px;
  border-radius: 5px;
  margin: 10px 20px;
}
.details {
  height: 100px;
}

.title {
  margin: 10px 10px 1px 0;
  font-size: 14px;
  max-width: 205px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.abstract {
  height: 51px;
  font-size: 12px;
  margin: 1px 10px 2px 0;
  color: #4a4a4a;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.time {
  font-size: 10px;
  color: #9b9b9b;
}
</style>
