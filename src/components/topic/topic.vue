<template>
  <div class="form" @click="toDetails">
    <div class="roundred">
      <div class="roundf"></div>
      <div class="line"></div>
    </div>
    <div class="triangle"></div>
    <div class="topicbox">
      <div class="title">{{topic.title}}</div>
      <div class="number">共{{topic.abstract}}题</div>
      <div class="time">{{getTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topic: {
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    getTime(date) {
      return this.$axios.timeFormat(this.topic.createTime);
    }
  },
  methods: {
    toDetails() {
      wx.navigateTo({
        url: `/pages/news/main?id=${this.topic.id}`
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.form {
  margin-bottom: 20rpx;
}
.form > div {
  float: left;
}
.roundred,
.roundf {
  border-radius: 50%;
  margin-right: 5rpx;
}
.roundred {
  background: rgba(255, 47, 22, 1);
  width: 36rpx;
  height: 36rpx;
  margin-top: 75rpx;
}
.roundf {
  background: #fff;
  width: 16rpx;
  height: 16rpx;
  margin: auto;
  margin-top: 10rpx;
}
.triangle {
  border-width: 20rpx 40rpx 20rpx 20rpx;
  border-style: solid;
  border-color: transparent #fff transparent transparent; /*透明 灰 透明 透明 */
  position: relative;
  margin-top: 70rpx;
}

.topicbox {
  width: 520rpx;
  min-height: 160rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4rpx 0px rgba(155, 155, 155, 0.3);
  border-radius: 8px;
  padding: 16rpx;
}
.topicbox div {
  margin: 16rpx;
  overflow: hidden;
}
.title {
  font-size: 28rpx;
  color: #240d0d;
  /* overflow: hidden; */
  /* height: 60rpx; */
}
.number {
  font-size: 24rpx;
  color: #4a4a4a;
}
.time {
  font-size: 20rpx;
  color: #9b9b9b;
}
.line {
  margin-left: 17rpx;
  display: block;
  height: 250rpx;
  width: 100%;
  border-left: 5rpx solid #ff2f16;
}
</style>
