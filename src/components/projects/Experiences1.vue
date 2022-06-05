<template>
  <div>
    <ExperienceContainer>
      <template slot="title">
        <span>
          {{ $t("message.project1Name") }}
        </span>
        
      </template>
      <template slot="contents">

        <!-- project description -->
        <div>
          <span class="boldFont">{{ $t("message.projectDescLabel") }} </span>: 
          {{ $t("message.project1Description") }} 
        </div>

        <!-- project period -->
        <div>
          <span class="boldFont">{{ $t("message.projectPeriodLabel") }} </span>: 
          {{ $t("message.project1Period") }} 
        </div>

        <!-- my duty -->
        <div>
          <span class="boldFont">{{ $t("message.dutyLabel") }}</span> :
          <ul id="project-1">
            <li v-for="item,index in $t('message.project1Duty')" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- tech stack -->
        <div>
          <span class="boldFont">{{ $t("message.projectStackLabel") }}</span>: 
          {{ $t("message.project1TechStack") }} 
        </div>
      </template>
    </ExperienceContainer>
  </div>
</template>

<script>
import ExperienceContainer from "../common/ExperienceContainer.vue";

export default {
  name: "Experiences1",
  data() {
    return {};
  },
  components: {
    ExperienceContainer,
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.boldFont {
  font-weight: 550;
}
</style>