<template>
  <div class="alignCenter">
    <Header />

    <BasicInfo />

    <PersonalInfo />

    <ProfessionalSkills />
  </div>
</template>

<script>
import Header from "../components/common/Header.vue"
import BasicInfo from "../components/aboutme/BasicInfo.vue"
import PersonalInfo from "../components/aboutme/PersonalInfo.vue"
import ProfessionalSkills from "../components/aboutme/ProfessionalSkills.vue"

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    BasicInfo,
    PersonalInfo,
    ProfessionalSkills,
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