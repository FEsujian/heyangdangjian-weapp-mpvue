<template>
  <div class="container">
    <img src="../../../static/asset/image/mine-background@3x.png" class="mineTop mineBackground">
    <div class="mineTop mineInfo">
      <img v-if="userInfo.id" class="avatar" :src="userInfo.customAvatar||userInfo.avatarUrl">
      <p v-if="userInfo.id" class="nickName">{{userInfo.customName||userInfo.nickName}}</p>
      <button v-else open-type="getUserInfo" @getuserinfo="userInfoClick">请登陆</button>
    </div>
    <div class="width100 container">
      <div class="setButton" style="margin-top:10px;" @click="opinionClick">
        <img src="../../../static/asset/icon/suggest@2x.png" class="icon">
        <div class="inline">意见反馈</div>
      </div>
      <div class="setButton" @click="settingClick">
        <img src="../../../static/asset/icon/setting@2x.png" class="icon">
        <div class="inline">设置</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  computed: {},
  mounted() {
    this.userInfo = this.$store.state.userInfo;
  },
  methods: {
    async userInfoClick(e) {
      if (e.mp.detail.rawData) {
        // 用户按了允许授权按钮
        await this.$store.dispatch("getUserInfo");
        this.userInfo = this.$store.state.userInfo;
      } else {
        // 用户按了拒绝按钮
        wx.showModal({
          title: "警告",
          content: "您点击了拒绝授权，无法登陆，请授权之后再试!",
          showCancel: false,
          confirmText: "返回授权"
        });
      }
    },
    opinionClick() {
      wx.navigateTo({
        url: "/pages/mine/opinion/main"
      });
    },
    settingClick() {
      wx.navigateTo({
        url: "/pages/mine/setting/main"
      });
    }
  }
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
  background-color: #ccc;
  width: 180rpx;
  height: 180rpx;
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
