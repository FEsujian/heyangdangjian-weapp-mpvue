<template>
  <div class="container">
    <scroll-view class="scrollViewFull" scroll-y="true" @scrolltolower="lower">
      <experienceCard
        v-for="experience in experienceList"
        :key="experience.id"
        :experienceData="experience"
      ></experienceCard>
      <div
        v-if="isLower"
        style="font-size:12px;color:#ccc;text-align:center;margin-top:10px;"
      >----没有更多内容了----</div>
    </scroll-view>
  </div>
</template>

<script>
import experienceCard from "../../components/experienceCard.vue";
export default {
  components: {
    experienceCard
  },
  data() {
    return {
      experienceList: [],
      page: 1,
      isLower: false
    };
  },
  methods: {
    lower() {
      if (this.isLower) {
        return;
      }
      this.page++;
      this.getExperience(this.page);
    },
    getExperience(page = 1) {
      // 获取心得列表
      this.$axios
        .get({
          url: `/experience/findAllExperience?page=${page}`
        })
        .then(res => {
          this.experienceList = this.experienceList.concat(res.data);
          if (res.data.length < 6) {
            this.isLower = true;
          }
        });
    }
  },
  onLoad() {
    // 数据初始化
    this.experienceList = [];
    this.page = 1;
    this.isLower = false;
  },
  mounted() {
    // 获取心得体会列表
    this.getExperience();
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
newsCard {
  margin-top: 20px;
}
</style>
