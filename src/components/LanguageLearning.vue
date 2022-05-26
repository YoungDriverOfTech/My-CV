<template>
  <div>
    <ContentsContainer>
      <template slot="title"> 我的语言学习经历 </template>
      <template slot="contents">
        从大学毕业进公司的第一天起，就开始自学日语。利用上下班的通勤时间背单词，晚上会去看日语的教学视频。自己也做了很多的题目，经过一年的学习，终于靠到了日语N2，得到了137分。
        然后来了日本一年以后，有通过了日语N1的考试，最终得到了121分。

        <br />
        疫情爆发以后，公司业务受损，没有工作，也没有薪水来源，觉得自己不能以后不能再继续在派遣里面耗着了，外加朋友点拨，最终决定去外企。然后就开始学习托叶，练习英语。经过半年的学习，
        考到了托业820分

        <div class="block">
          <el-image style="width: 100px; height: 100px" :src="require('../assets/images/bplus.jpg')"></el-image>
        </div>
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "./common/ContentsContainer.vue";

export default {
  name: "LanguageLearning",
  data() {
    return {
      url: '../assets/images/bplus.jpg'
      // require('@/assets/images/bplus.jpg')
    };
  },
  components: {
    ContentsContainer,
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>