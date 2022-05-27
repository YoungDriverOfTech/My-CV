<template>
  <div>
    <ContentsContainer>
      <template slot="title">
        Bank Check System
      </template>
      <template slot="contents">
        该项目是银行的交易的Batch监控系统，用来监控那些人那些ATM机有可以的交易，这些交易满足一定的条件以后，就会把交易ID取出来，存入到一张可以的交易信息表里面，
        我主要负责：与客户沟通式样，写设计书，coding，bug修正，测试
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "Experiences4",
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