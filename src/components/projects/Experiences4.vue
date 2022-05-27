<template>
  <div>
    <ContentsContainer>
      <template slot="title">
        Tourism B2B Hotel Reservation System
      </template>
      <template slot="contents">
        该项目是B2B旅游酒店预定项目，主要的负责商业公司的组团旅行的酒店预定。
        我的职责是：coding，设计书改修，bug修正（可以适当提一下google地图的事儿）
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