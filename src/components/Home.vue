<template>
  <div class="alignCenter">
    <!-- header -->
    <div class="header">
      <div class="titleFontStyle el-icon-star-on">Liang's Online Resume</div>
      <div class="navStyle">
        <el-row>
          <el-button type="primary" round>About me</el-button>
          <el-button type="success" round>My Resume</el-button>
          <el-button type="warning" round>My Project Experiences</el-button>
        </el-row>
      </div>
    </div>

    <!-- main -->
    <div class="mainContentsStyle">
      dfsfdsfds
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
  margin-top: 15px;
}

.navStyle {
  /* display: flex; */
  margin-top: 18px;
  text-align: center;
  color: white;
  font-size: 1.2em;
  font-weight: 500;
}

.mainContentsStyle {
  width: 70%;
  border: 1px solid red;
  margin: 1% 15%;
  /* height: 800px; */
}

</style>