<template>
  <div>
    <ProjectContainer>
      <!-- project name -->
      <template slot="projectName">
        {{ $t("message.project5Name") }}
      </template>

      <!-- project profio -->
      <template slot="projectDescLabel">
        {{ $t("message.projectDescLabel") }}
      </template>
      <template slot="projectDescDetail">
        {{ $t("message.project5Description") }}
      </template>

      <!-- my duty -->
      <template slot="myDutyLabel">
        {{ $t("message.dutyLabel") }}
      </template>
      <template slot="myDutyDetail">
        <div class="myDutyMargin">
          <ul id="project-1">
            <li v-for="(item, index) in $t('message.project5Duty')" :key="index" >
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
        {{ $t("message.project5TechStack") }}
      </template>
    </ProjectContainer>
  </div>
</template>

<script>
import ProjectContainer from "../common/ProjectContainer.vue";

export default {
  name: "Project5",
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