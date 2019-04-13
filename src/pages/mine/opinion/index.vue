<template>
  <div class="container">
    <div class="box">
      <div class="select">
        <picker :value="type" @change="bindDateChangeStart($event)" :range="type">
          <div>
            <div>当前选择类型：{{type[checktype]}}</div>
          </div>
        </picker>
      </div>
      <textarea name id cols="50" rows="10" placeholder="请输入问题描述，20-500个字符 感谢您的意见反馈" v-model="text"></textarea>
      <div class="upload">
        <upload
          width="150rpx"
          height="150rpx"
          max="6"
          @choosed="choosed"
          @delete="deleteImg"
          :srcs="urls"
        ></upload>
      </div>
    </div>
    <button @click="submit">提交反馈</button>
  </div>
</template>

<script>
import upload from "../../../components/upload/upload";
export default {
  data() {
    return {
      type: ["内容错误", "功能相关", "意见建议", "其他问题"],
      checktype: 0,
      text: "",
      urls: []
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
      wx.showToast({
        title: "反馈成功,感谢！",
        icon: "success",
        duration: 2500
      });
      setTimeout(() => {
        this.text = "";
        this.urls = [];
        this.checktype = 0;
        wx.navigateBack();
      }, 3000);
    }
  },
  mounted() {
    // 设置时间
  },
  components: {
    upload
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  min-height: 300px;
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
