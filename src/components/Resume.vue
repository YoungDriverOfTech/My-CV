<template>
  <div class="resume">
    <h1>{{ msg }}</h1>
    <el-row>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      msg: 'My Resume'
    }
  }
}
</script>

<style scoped>
.resume {
  color: red;
}
</style>
