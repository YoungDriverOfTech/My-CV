<template>
  <div class="alignCenter">
    <Header />

    <BasicInfo />

    <LanguageLearning />

    <ItLearning />
  </div>
</template>

<script>
import Header from "./Header.vue"
import BasicInfo from "./BasicInfo.vue"
import LanguageLearning from "./LanguageLearning.vue"
import ItLearning from "./ItLearning.vue"

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    BasicInfo,
    LanguageLearning,
    ItLearning
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>