<template>
  <div class="marginTop">
    <ContentsContainer>
      <template slot="title">
        {{ $t("message.project1Name") }}
      </template>
      <template slot="contents">

        <!-- project description -->
        <div>
          {{ $t("message.projectDescLabel") }} : {{ $t("message.project1Description") }} 
        </div>

        <!-- tech stack -->
        <div>
          {{ $t("message.projectStackLabel") }} : {{ $t("message.project1TechStack") }} 
        </div>

        <!-- my duty -->
        <div>
          {{ $t("message.dutyLabel") }} : {{ $t("message.project1Duty") }} 
        </div>
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "Experiences1",
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
.marginTop {
  margin-top: 150px;
}
</style>