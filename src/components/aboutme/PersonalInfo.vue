<template>
  <div>
    <ContentsContainer>
      <template slot="title">
        个人信息
      </template>
      <template slot="contents">
        <strong>姓名:</strong>梁小乐
        <br>
        <strong>出生于:</strong>1993/10/31
        <br>
        <strong>地点:</strong>东京
        <br>
        <strong>目前状态:</strong>在职
        <br>
        <strong>邮箱:</strong>xiaoleliang045@gmail.com
        <br>
        <strong>gitHub:</strong>https://github.com/YoungDriverOfTech
        <br>
        <strong>博客:</strong>https://www.yuque.com/lexiao-1kmgg
        <br>
        <strong>经验:</strong>3.5年
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "PersonalInfo",
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