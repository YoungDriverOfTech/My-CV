<template>
  <div>
    <ContentsContainer>
      <template slot="title">
        Order Mock System
      </template>
      <template slot="contents">
        该项目是AU OnLine Shop的一部分的子系统，主要服务于AU Online shop系统的测试。AU会退出很多促销活动，此系统是用来生成Mock订单的系统。
        还有一些其他的辅助功能。

        我主要负责：与客户沟通式样，写设计书，coding，bug修正，测试
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "Experiences7",
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