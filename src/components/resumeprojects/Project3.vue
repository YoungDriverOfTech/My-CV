<template>
  <div>
    <ProjectContainer>
      <!-- project name -->
      <template slot="projectName">
        {{ $t("message.project3Name") }}
      </template>

      <!-- project profio -->
      <template slot="projectDescLabel">
        {{ $t("message.projectDescLabel") }}
      </template>
      <template slot="projectDescDetail">
        {{ $t("message.project3Description") }}
      </template>

      <!-- my duty -->
      <template slot="myDutyLabel">
        {{ $t("message.dutyLabel") }}
      </template>
      <template slot="myDutyDetail">
        <div class="myDutyMargin">
          <ul id="project-1">
            <li v-for="(item, index) in $t('message.project3Duty')" :key="index" >
              {{ item }}
            </li>
          </ul>
        </div>
      </template>

      <!-- tech stack -->
      <template slot="techStackLabel">
        {{ $t("message.projectStackLabel") }}
      </template>
      <template slot="techStackDetail">
        {{ $t("message.project3TechStack") }}
      </template>
    </ProjectContainer>
  </div>
</template>

<script>
import ProjectContainer from "../common/ProjectContainer.vue";

export default {
  name: "Project3",
  data() {
    return {};
  },
  components: {
    ProjectContainer,
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.boldFont {
  font-weight: 550;
}

.myDutyMargin {
  margin-left: 5%;
}
</style>