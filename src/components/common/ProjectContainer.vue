<template>
  <div class="parentMargin">
    <div class="parentTitle underLine inlineBlock">
      <slot name="projectName"></slot>
    </div>
    <div>
      <span class="subTitle">
        <slot name="projectDescLabel"></slot> : 
      </span>
      <slot name="projectDescDetail"></slot>
      
      <br>
      <span class="subTitle">
        <slot name="projectPeriodLabel"></slot> : 
      </span>
      <slot name="projectPeriodDetail"></slot>

      <br>
      <span class="subTitle">
        <slot name="myDutyLabel"></slot> : 
      </span>
      <br>
      <slot name="myDutyDetail"></slot>

      <span class="subTitle"> 
        <slot name="techStackLabel"></slot> : 
      </span>
      <slot name="techStackDetail"></slot>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "ProjectContainer",
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
  margin: 0;
  padding: 0;
}

.parentMargin {
  margin: 0 0 0 5%;
}

.parentTitle {
  font-size: 1.6em;
  font-weight: 700;
}

.underLine {
  border-bottom: 2px solid black;
}

.inlineBlock {
  display: inline-block;
}

.subTitle {
  font-size: 1.2em;
  font-weight: 600;
}
</style>