<template>
  <div class="container">
    <img src="../../../static/asset/icon/shangchuanxinde@3x.png" class="uploadButton">
    <div class="topButton">
      <div class="topButtonItem">
        <img src="../../../static/asset/icon/dangzhangdanggui@3x.png" class="icon30">
        <div class="buttonTitle">党章党规</div>
      </div>
      <div class="topButtonItem">
        <img src="../../../static/asset/icon/gongkaike@3x.png" class="icon30">
        <div class="buttonTitle">公开课</div>
      </div>
      <div class="topButtonItem">
        <img src="../../../static/asset/icon/zaixiankaoshi@3x.png" class="icon30">
        <div class="buttonTitle">在线考试</div>
      </div>
      <div class="topButtonItem">
        <img src="../../../static/asset/icon/xindetihui@3x.png" class="icon30">
        <div class="buttonTitle">心得体会</div>
      </div>
    </div>
    <img src="../../../static/asset/image/tiananmen@3x.png" class="tiananmen">
    <div class="xindetuijian">
      <div class="title">
        <div class="inline" style="font-size:16px;margin-left: 20px;">心得推荐</div>
        <div class="inline" style="font-size:12px;color:#9B9B9B;float:right;">
          更多
          <img
            src="../../../static/asset/icon/gengduo@3x.png"
            class="icon10"
            style="margin-right: 10px;"
          >
        </div>
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
.topButton {
  background-color: #fff;
  display: flex;
  height: 150px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}
.topButtonItem {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  margin-top: 30px;
}
.icon10 {
  height: 10px;
  width: 10px;
}
.icon30 {
  height: 30px;
  width: 30px;
}
.buttonTitle {
  margin-top: 20px;
}
.tiananmen {
  width: 335px;
  height: 60px;
  margin: 10px 20px;
}
.uploadButton {
  position: fixed;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  bottom: 16px;
  right: 16px;
}
.xindetuijian {
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  background-color: #fff;
}
.xindetuijian .title {
  height: 35px;
  line-height: 35px;
}
</style>
