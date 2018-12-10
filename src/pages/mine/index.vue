<template>
  <div class="container">
    <img src="../../../static/asset/image/mine-background@3x.png" class="mineTop mineBackground">
    <div class="mineTop mineInfo">
      <img class="avatar" src>
      <p class="nickName">苏健</p>
    </div>
    <div class="width100 container">
      <div class="setButton" style="margin-top:10px;">
        <img src="../../../static/asset/icon/suggest@2x.png" class="icon">
        <div class="inline">意见反馈</div>
      </div>
      <div class="setButton">
        <img src="../../../static/asset/icon/setting@2x.png" class="icon">
        <div class="inline">设置</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  methods: {}
};
</script>

<style scoped>
.mineTop {
  width: 100%;
  height: 240px;
}
.mineInfo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.avatar {
  background-color: #000;
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
}
.nickName {
  text-align: center;
  margin: 20px;
  color: #fff;
}
.mineBackground {
  width: 100%;
  position: absolute;
  z-index: -1;
}
.setButton {
  width: 80%;
  height: 38px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 5px;
  margin: 5px;
  line-height: 38px;
}
.icon {
  display: inline-block;
  vertical-align: middle;
  margin: 10px;
  height: 18px;
  width: 18px;
}
</style>
