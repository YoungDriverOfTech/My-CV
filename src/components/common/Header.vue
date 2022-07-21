<template>
  <!-- header -->
  <div class="header">
    <div class="titleFontStyle">
      <div>{{ $t("message.whoResume") }}</div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <span class="language-text-color">{{ $t("message.chooseLanguage") }}</span><i class="el-icon-arrow-down el-icon--right"></i>
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
          <el-button type="primary" plain>{{ $t("message.aboutMe") }}</el-button>
        </router-link>

        <router-link to="/project">
          <el-button type="warning" plain>{{ $t("message.experiences") }}</el-button>
        </router-link>

        <router-link to="/resumepage">
          <el-button type="success" plain>{{ $t("message.resume") }}</el-button>
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
      } else if (itemValue === 1) {
        this.$i18n.locale = "ja";
      } else {
        this.$i18n.locale = "zh";
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
  position: fixed;
  z-index: 999;
  top:0;
  left:0;
  width: 100%;
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

.language-text-color {
  color: #E6A23C;
}
</style>