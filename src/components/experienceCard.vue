<template>
  <div class="experience" :style="{height:experienceHeight}">
    <div class="left">
      <img class="avatar" :src="experienceData.avatarUrl">
    </div>
    <div class="right">
      <div class="name">{{experienceData.nickName}}</div>
      <div class="content">{{experienceData.content}}</div>
      <div class="imgs">
        <div class="imgItem">
          <img
            v-for="imgUrl in experienceData.imgUrl"
            :key="imgUrl.index"
            class="xdImg"
            :src="imgUrl"
            @click="previewImg(imgUrl)"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experienceData: {
      required: true
    }
  },
  methods: {
    previewImg(imgUrl) {
      wx.previewImage({
        current: imgUrl,
        urls: this.experienceData.imgUrl
      });
    }
  },
  mounted() {
    this.experienceData.imgUrl = this.experienceData.imgUrl.split(",");
  },
  computed: {
    experienceHeight() {
      return this.experienceData.imgUrl.length > 3 ? "280px" : "180px";
    }
    // getTime(date) {
    //   return this.$axios.timeFormat(this.experienceData.createTime);
    // }
  }
};
</script>

<style scoped>
.experience {
  width: 100%;
  display: flex;
  padding-top: 10px;
  background-color: #f6f6f6;
}

.left {
  width: 55px;
  background-color: #fff;
}
.right {
  flex: 1;
  background-color: #fff;
}

.name {
  margin-top: 5px;
  margin-left: 5px;
  color: #240d0d;
  font-size: 16px;
}

.avatar {
  width: 50px;
  height: 50px;
  margin: 10px 5px;
  border-radius: 50%;
}

.imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.xdImg {
  width: 80px;
  height: 80px;
  margin: 5px 12px;
}
.content {
  height: 50px;
  line-height: calc(50px / 3);
  font-size: 12px;
  margin: 1px 10px 2px 5px;
  color: #4a4a4a;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.carTtime {
  height: 14px;
  line-height: 14px;
  font-size: 10px;
  color: #9b9b9b;
}
</style>
