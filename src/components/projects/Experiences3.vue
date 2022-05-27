<template>
  <div>
    <ContentsContainer>
      <template slot="title">
        Game Check System
      </template>
      <template slot="contents">
        该项目是索尼PS5关联项目，主要负责游戏加密审查流程的相关流程。游戏本体加密完以后，会产生一个加密的信息文件包，这个包会被发送到此系统上，系统会解压这个加密包，然后对加密的信息
        进行逐项检查，并且随时更新其检查状态。如果审查通过，则证明加密没有问题，以及对游戏惊醒publish以及后续的操作。如果审查不通过，会给出原因。
        我的职责是：写设计书，coding，写单元测试，修改bug
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "Experiences3",
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