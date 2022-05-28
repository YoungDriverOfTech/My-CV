<template>
  <div class="alignCenter">
    <Header />

    <BasicInfo />

    <LanguageLearning />

    <ItLearning />
  </div>
</template>

<script>
import Header from "../components/common/Header.vue"
import BasicInfo from "../components/aboutme/BasicInfo.vue"
import LanguageLearning from "../components/aboutme/LanguageLearning.vue"
import ItLearning from "../components/aboutme/ItLearning.vue"
import ChooseLang from "../components/common/ChooseLang.vue"

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    BasicInfo,
    LanguageLearning,
    ItLearning,
    ChooseLang
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