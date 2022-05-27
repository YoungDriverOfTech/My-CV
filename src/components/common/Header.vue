<template>
  <!-- header -->
  <div class="header">
    <div class="titleFontStyle">Liang's Online Resume</div>
    <div class="navStyle">
      <el-row>
        <el-button type="primary" round>
          <router-link to="/">About me</router-link>
        </el-button>

        <el-button type="success" round>
          <router-link to="/resumepage">Resume</router-link>
        </el-button>

        <el-button type="warning" round>
          <router-link to="/project">Experiences</router-link>
        </el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  components: {},

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

.header {
  height: 130px;
  background-color: #4050b5;
}

.titleFontStyle {
  color: white;
  font-size: 1.6em;
  font-weight: 700;
  margin-top: 0px;
  padding-top: 10px;
}

.navStyle {
  /* display: flex; */
  margin-top: 18px;
  text-align: center;
  color: white;
  font-size: 1.2em;
  font-weight: 500;
}
</style>