<template>
  <div class="alignCenter">
    <Header />

    <Experiences1 />

    <Experiences2 />

    <Experiences3 />

    <Experiences4 />
  </div>
</template>

<script>
import Header from "./common/Header.vue"
import Experiences1 from "./projects/Experiences1.vue"
import Experiences2 from "./projects/Experiences2.vue"
import Experiences3 from "./projects/Experiences3.vue"
import Experiences4 from "./projects/Experiences4.vue"

export default {
  name: "ProjectExperiences",
  data() {
    return {};
  },
  components: {
    Header,
    Experiences1,
    Experiences2,
    Experiences3,
    Experiences4,
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