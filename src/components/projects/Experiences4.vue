<template>
  <div>
    <ContentsContainer>
      <template slot="title">
        <span>
          {{ $t("message.project4Name") }}
        </span>
        
      </template>
      <template slot="contents">

        <!-- project description -->
        <div>
          <span class="boldFont">{{ $t("message.projectDescLabel") }} </span>: 
          {{ $t("message.project4Description") }} 
        </div>

        <!-- project period -->
        <div>
          <span class="boldFont">{{ $t("message.projectPeriodLabel") }} </span>: 
          {{ $t("message.project4Period") }} 
        </div>

        <!-- my duty -->
        <div>
          <span class="boldFont">{{ $t("message.dutyLabel") }}</span> :
          <ul id="project-1">
            <li v-for="item,index in $t('message.project4Duty')" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- tech stack -->
        <div>
          <span class="boldFont">{{ $t("message.projectStackLabel") }}</span>: 
          {{ $t("message.project4TechStack") }} 
        </div>
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "Experiences4",
  data() {
    return {};
  },
  components: {
    ContentsContainer,
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