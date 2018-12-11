<template>
  <div class="container" style="background-color:#fff">
    <div class="title">大型广播纪实文学《哈哈哈》大型广播纪实文学《哈哈哈》</div>
    <div class="subheading">大型广播纪实文学《哈哈哈》的副标题</div>
    <div class="releaseTime">发布时间: 2018-06-04 8:56:03</div>
    <video
      class="newsVideo"
      src="https://vdse.bdstatic.com//15d597b0383eeea6bf98e6152f7cc583?authorization=bce-auth-v1/fb297a5cc0fb434c971b8fa103e8dd7b/2017-05-11T09:02:31Z/-1//259f896fef1cb8854516b1f8c22f8dc5b21714a5c7d0ae7030adb394b10c18e4.mp4"
    ></video>
    <div style="width:90%;">
      <wxParse :content="article"/>
    </div>
  </div>
</template>

<script>
import wxParse from "mpvue-wxparse";
export default {
  components: {
    wxParse
  },
  data() {
    return {
      article: `
<p style="font-weight: 400;"><span style="color: #ff0000;"><img src="http://h.hiphotos.baidu.com/image/pic/item/6d81800a19d8bc3ec6ff1a808f8ba61ea9d34580.jpg" width="350" height="233" /></span></p>
<p style="font-weight: 400;"><span style="color: #ff0000;">合阳古称&ldquo;有莘国&rdquo;，位于渭南市东北部、黄河西岸。辖11个镇1个街道办事处，215个行政村（社区），总面积1437平方公里，总人口51万。是国家扶贫开发工作重点县、国家生态示范县、国家卫生县城、国家园林县城、全国文明城市提名城市、省级文明县城、省级环保模范县。</span></p>
<p style="font-weight: 400;"><span style="background-color: #00ccff;">合阳文化积淀深厚，有&ldquo;伊尹故里&middot;诗经合阳&rdquo;的美誉。这里安寝着&ldquo;三皇五帝&rdquo;之一的帝喾，《关雎》等30篇《诗经》佳作皆出自或描述合阳，孕育了烹饪始祖伊尹、近代佛教大师印光法师等历史文化名人，出土了汉隶精品《合阳令&middot;曹全碑》，提线木偶、跳戏、面花、秋千等31项民间艺术列入国家和省市非物质文化遗产保护名录。被誉为中国爱情诗之源、中国民间文化之乡、中国黄河生态美食名城。</span></p>
<p style="font-weight: 400;"><strong>合阳旅游资源丰富，有黄河流域面积最大的温泉湖泊型湿地、国家AAAA景区&mdash;&mdash;洽川;有全国唯一以帝王命名的武帝山国家森林公园；有融涵养水源、栖息珍禽、田园风光于一体的徐水河国家湿地公园；有儒、释、道三教合一，天赐福地、秀夺终南的福山景区。现代农业条件优越，被命名为中国红提之乡、国家无公害水果生产基地县、国家标准化水产养殖示范县、陕西现代畜牧业奶牛核心区，全县果业面积52万亩，奶牛存栏4.6万头，水产品产量4.5万吨，是国家电子商务进农村示范县、国家农村集体产权制度改革示范县。自然生态环境优美，森林覆盖率35.61%，空气优良天数达222天以上，是中国美丽乡村建设示范县、陕西省改善农村人居环境工作先进县。境内能源丰富，已探明矿产资源40多种，煤炭储量50亿吨，被确定为陕西光伏基地示范县。合阳教育驰名三秦，近年向北大、清华输送学生29名，是国家义务教育发展基本均衡县、国家农村职业教育和成人教育示范县、陕西省教育强县。2017年，全县生产总值完成92.45亿元，增长8%；地方财政收入完成1.86亿元，同口径增长9.4%；社会消费品零售总额完成42.5亿元，增长13.8%；城乡居民人均可支配收入分别达到27600元和9122元，分别增长8.3%和9.8%。荣获陕西省县域经济发展争先进位奖、陕西省脱贫攻坚优秀县。</strong></p>
<p style="font-weight: 400; text-align: left;"><span style="text-decoration: underline;">合阳县委、县政府将以习近平新时代中国特色社会主义思想为指导，以建设黄河旅游核心区、现代农业先行区、清洁能源聚集区、生态文明示范区、品牌教育引领区和社会治理首善区为目标，奋力加快追赶超越，坚决打赢脱贫攻坚战，以奋斗新姿态谱写全面建成小康合阳新篇章。</span></p>
<p style="font-weight: 400;">&nbsp;</p>`
    };
  }
};
</script>

<style scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
.title {
  margin: 0 20px;
  font-size: 18px;
  font-weight: 700;
}
.subheading {
  padding: 5px;
  font-size: 15px;
  color: #aaa;
}
.newsVideo {
  width: 92%;
}
.releaseTime {
  padding: 5px;
  font-size: 12px;
}
</style>
