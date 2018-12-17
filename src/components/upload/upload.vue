<template>
  <div class="j-pic-upload">
    <img
      @click="previewImg(index)"
      v-for="(src,index) in urls"
      :key="src"
      :src="src"
      :style="{'width':width || '120rpx','height':height || '120rpx'}"
      class="img"
    >
    <div
      class="j-upload-btn"
      @click="uploadImg()"
      :style="{'width':width || '120rpx','height':height || '120rpx'}"
    >
      <span class="j-upload-add">+</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["width", "height", "max", "srcs"],
  data() {
    return {
      urls: []
    };
  },
  mounted() {
    this.urls = this.srcs || [];
  },
  methods: {
    uploadImg() {
      let that = this;
      wx.chooseImage({
        count: that.max || 3,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: function(res) {
          res.tempFilePaths.forEach(v => {
            that.urls.push(v);
          });
          that.$emit("choosed", {
            all: that.urls,
            currentUpload: res.tempFilePaths
          });
        }
      });
    },
    previewImg(index) {
      let that = this;
      wx.showActionSheet({
        itemList: ["预览", "删除"],
        success: function(res) {
          if (res.tapIndex === 0) {
            wx.previewImage({
              current: that.urls[index],
              urls: that.urls
            });
          } else {
            that.urls.splice(index, 1);
            that.$emit("delete", that.urls);
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.j-pic-upload {
  padding: 10rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.j-upload-btn {
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  margin: 15rpx;
  color: #fff;
  background: rgba(246, 246, 246, 1);
  border-radius: 5px;
}
.j-upload-add {
  font-size: 80rpx;
  font-weight: 500;
  color: rgba(216, 216, 216, 1);
}
.img {
  margin: 15rpx;
}
</style>
