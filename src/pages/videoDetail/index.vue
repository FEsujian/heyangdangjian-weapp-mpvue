<template>
  <div class="container">
    <video v-if="videoUrl" class="video" :src="videoUrl" autoplay title></video>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      videoUrl: null
    };
  },
  methods: {},
  onLoad() {
    // 数据初始化
    const query = this.$root.$mp.query;
    this.videoUrl = query.videoUrl;
  },
  mounted() {
    const query = this.$root.$mp.query;
    // 动态设置小程序标题
    wx.setNavigationBarTitle({
      title: query.title
    });
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  background-color: black;
  position: relative;
}
.video {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
</style>
