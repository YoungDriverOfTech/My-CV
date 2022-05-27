<template>
  <!-- header -->
  <div class="header">
    <div class="titleFontStyle">
      <div>Liang's Online Resume</div>
      <el-dropdown>
        <span class="el-dropdown-link">
          Language<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>English</el-dropdown-item>
          <el-dropdown-item>日本語</el-dropdown-item>
          <el-dropdown-item>中文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="navStyle">
      <el-row  class="">
        <router-link to="/">
          <el-button type="primary" round> About me </el-button>
        </router-link>

        <router-link to="/resumepage">
          <el-button type="success" round> Resume </el-button>
        </router-link>

        <router-link to="/project">
          <el-button type="warning" round> Experiences </el-button>
        </router-link>

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
  display: flex;
  justify-content: space-around;
}

.navStyle {
  margin-top: 18px;
  color: white;
  font-size: 1.2em;
  font-weight: 500;
}

.flexLayout {
  display: flex;
  justify-content: space-around;
}

.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>