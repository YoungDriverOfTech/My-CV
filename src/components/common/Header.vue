<template>
  <!-- header -->
  <div class="header">
    <div class="titleFontStyle">
      <div>Liang's Online Resume</div>
      <el-dropdown>
        <span class="el-dropdown-link">
          Language<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu v-on:click.native="changeLang" slot="dropdown">
          <el-dropdown-item value=0>English</el-dropdown-item>
          <el-dropdown-item value=1>日本語</el-dropdown-item>
          <el-dropdown-item value=2>中文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="navStyle">
      <el-row class="">
        <router-link to="/">
          <el-button type="primary" plain> About me </el-button>
        </router-link>

        <router-link to="/resumepage">
          <el-button type="success" plain> Resume </el-button>
        </router-link>

        <router-link to="/project">
          <el-button type="warning" plain> Experiences </el-button>
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

  methods: {
    // change language
    changeLang: function (event) {
      const itemValue = event.target.value;
      if (itemValue === 0) {
        this.$i18n.locale = "en";
        console.log("aaaa")
      } else if (itemValue === 1) {
        this.$i18n.locale = "ja";
        console.log("bbbb")
      } else {
        this.$i18n.locale = "zh";
        console.log("cccc")
      }
    },
  },
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