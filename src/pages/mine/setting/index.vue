<template>
  <div class="container">
    <van-cell-group class="box">
      <van-cell title="头像">
        <img class="avatar" :src="userInfo.customAvatar||userInfo.avatarUrl">
      </van-cell>
      <van-cell title="用户名" :value="userInfo.customName||userInfo.nickName"/>
    </van-cell-group>
    <!-- <button @click="submit">保存</button> -->
  </div>
</template>

<script>
import upload from "../../../components/upload/upload";
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  computed: {},
  methods: {
    bindDateChangeStart(index) {
      this.checktype = index.target.value;
    },
    choosed(data) {
      this.urls = data.all;
    },
    submit() {
      console.log(this.type[this.checktype]);
    }
  },
  mounted() {
    this.userInfo = this.$store.state.userInfo;
  },
  components: {
    upload
  }
};
</script>

<style scoped>
.avatar {
  background-color: #ccc;
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
}
.box {
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
}
.select {
  width: 80%;
  height: 30px;
  line-height: 30px;
  margin: 5px auto 20px;
  text-indent: 2em;
  font-size: 14px;
  box-shadow: 0px 0px 4px 0px rgba(155, 155, 155, 0.2);
  border-radius: 15px;
}
button {
  width: 80%;
  height: 50px;
  background: linear-gradient(
    180deg,
    rgba(255, 115, 98, 1) 0%,
    rgba(255, 47, 22, 1) 100%
  );
  box-shadow: 0px 2px 4px 0px rgba(255, 47, 22, 0.5);
  border-radius: 5px;
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  line-height: 50px;
  text-indent: 2em;
  text-align: center;
}
textarea {
  margin: 0 auto;
  font-size: 14px;
  line-height: 25px;
}
.upload {
  width: 80%;
  margin: 0 auto;
}
</style>
