<template>
  <div class="marginTop">
    <ContentsContainer>
      <template slot="title">
        {{ $t("message.self") }}
      </template>
      <template slot="contents">
        {{ $t("message.selfIntroduction1") }}
        <br>
        {{ $t("message.selfIntroduction2") }}
        <br>
        {{ $t("message.selfIntroduction3") }}
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "BasicInfo",
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