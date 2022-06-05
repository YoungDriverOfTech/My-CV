<template>
  <div class="parentStyle">
    <el-container>
      <el-header class="titleFontStyle">
        <slot name="title"></slot>
      </el-header>
      <el-main>
        <slot name="contents"></slot>
      </el-main>
    </el-container>
    <br>
  </div>
</template>

<script>
export default {
  name: "ContentsContainer",
  data() {
    return {};
  },
  components: {},

  mounted() {},

  methods: {},
};
</script>

<style scoped>

.parentStyle {
  /* margin: 0 15%; */
}

.titleFontStyle {
  color: white;
  font-size: 1.2em;
  font-weight: 4300;
  margin-top: 15px;
}

.el-header {
  margin: 0 15%;
  width: 70%;
  background-color: #ecf3ff;
  color: #333;
  text-align: left;
  line-height: 60px;
  border-left: 4px solid #448aff;
  
}

.el-main {
  margin: 0 15%;
  width: 70%;
  background-color: while;
  color: #333;
  text-align: left;
  line-height: 30px;
  border-left: 4px solid #448aff;
}
</style>