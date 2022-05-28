<template>
  <div class="marginTop">
    <Header />

    <Resume />
  </div>
</template>

<script>
import Header from "../components/common/Header.vue"
import Resume from "../components/resume/Resume.vue"

export default {
  name: "ResumePage",
  data() {
    return {};
  },
  components: {
    Header,
    Resume
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

.marginTop {
  margin-top: 150px;
}
</style>