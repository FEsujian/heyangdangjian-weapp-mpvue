<script>
export default {
  created() {
    wx.getSetting({
      success: res => {
        // 如果用户已经授权，则直接获取用户信息，不用提示授权信息
        if (res.authSetting["scope.userInfo"]) {
          // 获取用户信息
          wx.getUserInfo({
            success: res => {
              // 设置全局userInfo
              this.$store.commit("SET_USER_INFO", res.userInfo);
            }
          });
        }
      }
    });
  }
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
page {
  background-color: #f6f6f6;
}

.width100 {
  width: 100%;
}
.inline {
  display: inline;
}
.icon10 {
  height: 10px;
  width: 10px;
}
</style>
