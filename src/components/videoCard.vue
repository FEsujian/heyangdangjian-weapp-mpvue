<template>
  <div class="videoCard">
    <img :src="videoData.imgUrl" class="coverImg" @click="play">
    <div class="title">{{videoData.title}}</div>
    <div class="createTime">
      <img src="../../static/asset/icon/time.png" class="timeIcon">
      <span>{{getTime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoData: {
      required: true
    }
  },
  computed: {
    getTime() {
      return this.$axios.timeFormat(
        this.videoData.createTime,
        "yyyy年MM月dd日"
      );
    }
  },
  methods: {
    play() {
      this.$emit("play");
    }
  }
};
</script>

<style scoped>
.videoCard {
  width: 50%;
  min-height: 140px;
  float: left;
}
.videoCard .coverImg {
  display: block;
  margin: 10px auto 0 auto;
  width: 95%;
  height: 180rpx;
  border-radius: 5px;
}
.videoCard .title {
  padding-left: 10rpx;
  font-size: 32rpx;
}
.videoCard .createTime {
  height: 20px;
  line-height: 20px;
  padding-left: 10rpx;
  font-size: 20rpx;
  color: #ccc;
}
.timeIcon,
.createTime span,
.videoCard .createTime::after {
  display: inline-block;
  vertical-align: middle;
}
.timeIcon {
  width: 10px;
  height: 10px;
}
.timeIcon::after,
.createTime span::after {
  content: "";
  height: 100%;
}
</style>
