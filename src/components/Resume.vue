<template>
  <div class="resume">
    <h1>{{ msg }}</h1>
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
