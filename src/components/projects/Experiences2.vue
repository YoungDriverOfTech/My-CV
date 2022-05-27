<template>
  <div>
    <ContentsContainer>
      <template slot="title">
        B2B Online shop system
      </template>
      <template slot="contents">
        该项目是由于日本消费税由8%上升到10%，需要对原有的系统进行改修，要在画面上表示10%，以及轻减8%税率，并且要在服务器端，对逻辑进行对应的修改。
        我的职责是： 设计书的修改，coding，单体测试，bug修正，QA回答
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "Experiences2",
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