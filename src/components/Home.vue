<template>
  <div class="alignCenter">
    <!-- header -->
    <Header />

    <!-- BasicInfo -->
    <BasicInfo />
  </div>
</template>

<script>
import Header from "./Header.vue"
import BasicInfo from "./BasicInfo.vue"

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header,
    BasicInfo
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