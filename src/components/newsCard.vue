<template>
  <div class="newsCard">
    <img :src="newsData.imgUrl" class="thumbnail">
    <div class="details">
      <div class="title">{{newsData.title}}</div>
      <div class="subhead">{{newsData.subhead}}</div>
      <div class="time" v-if="newsData.isShowTime">{{newsData.time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newsData: {
      required: true
    }
  }
};
</script>

<style>
.newsCard {
  width: 100%;
  height: 100px;
  padding: 10px 0;
  margin-top: 10px;
  background-color: #fff;
  display: flex;
}
.thumbnail {
  flex: 0 0 120px;
  height: 80px;
  border-radius: 5px;
  margin: 10px 20px;
}
.details {
  height: 100px;
}

.title {
  margin: 5px 10px 5px 0;
  font-size: 14px;
  max-width: 205px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.subhead {
  font-size: 12px;
  margin: 5px 10px 5px 0;
  color: #4a4a4a;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.time {
  font-size: 10px;
  color: #9b9b9b;
}
</style>
