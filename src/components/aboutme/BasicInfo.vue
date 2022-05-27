<template>
  <div>
    <ContentsContainer>
      <template slot="title">
        自我介绍
      </template>
      <template slot="contents">
        我是一名java后端程序员，现在任职于一家派遣IT公司。国内大学财务管理专业本科毕业后，从事的是英文客服工作。后来感到职业生涯不明朗，自学了日语和IT来到日本成为了一名JAVA后端程序员。
        来到日本后辗转于中国人开的派遣公司，被坑了很多次后，决定跳到外资企业。随即考取了托业，练习了英语口语，和准备面试，希望能寻求到一份正社员的工作。
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "BasicInfo",
  data() {
    return {};
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