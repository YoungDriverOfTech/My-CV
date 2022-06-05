<template>
  <div>
    <ContentsContainer>
      <template slot="title">
        {{ $t("message.personalInfo") }}
      </template>
      <template slot="contents">
        <strong>{{ $t("message.nameLabel") }}: </strong>{{ $t("message.nameValue") }}
        <br>
        <strong>{{ $t("message.birthdayLabel") }}: </strong>{{ $t("message.birthdayValue") }}
        <br>
        <strong>{{ $t("message.locationLabel") }}: </strong>{{ $t("message.locationValue") }}
        <br>
        <strong>{{ $t("message.currentStatusLabel") }}: </strong>{{ $t("message.currentStatusValue") }}
        <br>
        <strong>{{ $t("message.emailLabel") }}: </strong>xiaoleliang045@gmail.com
        <br>
        <strong>{{ $t("message.githubLabel") }}: </strong><el-link type="success" href="https://github.com/YoungDriverOfTech" target="_blank">YoungDriverOfTech</el-link>
        <br>
        <strong>{{ $t("message.blogLabel") }}: </strong><el-link type="success" href="https://www.yuque.com/lexiao-1kmgg" target="_blank">Leaining Blog</el-link>
        <br>
        <strong>{{ $t("message.workPeriodLabel") }}: </strong>{{ $t("message.workPeriodValue") }}
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "PersonalInfo",
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
</style>