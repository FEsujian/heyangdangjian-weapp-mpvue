<template>
  <swiper
    class="swiper"
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :interval="interval"
    :duration="duration"
    :circular="true"
  >
    <block v-for="(item, index) in images" :key="index">
      <swiper-item>
        <img :src="item.imgUrl" class="slide-image" mode="widthFix">
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    }
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.slide-image {
  width: 675rpx;
  height: 380rpx;
}
</style>
