<template>
  <div class="container">
    <div class="box">
      <textarea name id cols="50" rows="10" placeholder="请输入问题描述，20-500个字符 感谢您的意见反馈"></textarea>
      <div class="upload"></div>
    </div>
    <button>上传心得</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    // 设置时间
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
}
textarea {
  margin: 10px auto;
  font-size: 14px;
  line-height: 25px;
}
.upload {
  width: 100px;
  height: 100px;
  background: rgba(246, 246, 246, 1);
  border-radius: 5px;
  margin: 10px 10%;
}
</style>
