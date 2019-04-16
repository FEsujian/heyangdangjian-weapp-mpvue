<template>
  <div class="container">
    <scroll-view class="scrollViewFull" scroll-y="true" @scrolltolower="lower">
      <videoCard
        v-for="item in videoList "
        :key="item.id"
        :videoData="item"
        @play="playVideo(item)"
      ></videoCard>
      <div
        v-if="isLower"
        style="font-size:12px;color:#ccc;text-align:center;margin-top:10px;clear:both;"
      >----没有更多内容了----</div>
    </scroll-view>
  </div>
</template>

<script>
import videoCard from "../../components/videoCard";
export default {
  components: {
    videoCard
  },
  data() {
    return {
      videoData: null,
      videoList: [],
      page: 1,
      isLower: false
    };
  },
  methods: {
    playVideo(item) {
      this.videoData = item;
      wx.navigateTo({
        url: `/pages/videoDetail/main?title=${item.title}&videoUrl=${
          item.videoUrl
        }`
      });
    },
    lower() {
      if (this.isLower) {
        return;
      }
      this.page++;
      this.getVideoList(this.page);
    },
    getVideoList(page = 1) {
      // 获取文章列表
      this.$axios
        .get({
          url: `/getVideoList?page=${page}&pageSize=10`
        })
        .then(res => {
          this.videoList = this.videoList.concat(res.data);
          if (res.data.length < 10) {
            this.isLower = true;
          }
        });
    }
  },
  onLoad() {
    // 数据初始化
    this.videoList = [];
    this.page = 1;
    this.isLower = false;
  },
  mounted() {
    const query = this.$root.$mp.query;
    // 动态设置小程序标题
    wx.setNavigationBarTitle({
      title: query.title
    });
    this.getVideoList();
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  overflow: hidden;
}
.scrollView {
  width: 100%;
  height: calc(100vh - 44px);
}
.scrollViewFull {
  width: 100%;
  height: 100vh;
}
.mask {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000;
}
.mask button {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 50rpx;
  color: #fff;
  border: none;
  background-color: #000;
  bottom: 100rpx;
  left: 0;
  right: 0;
  margin: auto;
}
.videoToast {
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
