<template>
  <div class="alignCenter">
    <Header />

    <Experiences7 />

    <Experiences6 />

    <Experiences5 />

    <Experiences4 />

    <Experiences3 />

    <Experiences2 />

    <Experiences1 />
  </div>
</template>

<script>
import Header from "../components/common/Header.vue"
import Experiences1 from "../components/projects/Experiences1.vue"
import Experiences2 from "../components/projects/Experiences2.vue"
import Experiences3 from "../components/projects/Experiences3.vue"
import Experiences4 from "../components/projects/Experiences4.vue"
import Experiences5 from "../components/projects/Experiences5.vue"
import Experiences6 from "../components/projects/Experiences6.vue"
import Experiences7 from "../components/projects/Experiences7.vue"

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
    Experiences5,
    Experiences6,
    Experiences7
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