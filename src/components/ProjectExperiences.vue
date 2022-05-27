<template>
  <div class="alignCenter">
    <Header />

    <Experiences1 />

  </div>
</template>

<script>
import Header from "./common/Header.vue"
import Experiences1 from "./projects/Experiences1.vue"

export default {
  name: "ProjectExperiences",
  data() {
    return {};
  },
  components: {
    Header,
    Experiences1,

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