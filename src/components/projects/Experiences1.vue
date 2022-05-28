<template>
  <div class="marginTop">
    <ContentsContainer>
      <template slot="title">
        Windows Batch自动化项目
      </template>
      <template slot="contents">
        该项目是日本的基盘项目，主要的工作流程是：根据别的系统发来的Log日志，抽离出重要的部分，并且格式化日志文件，然后转发给其他的系统。
        我的职责是： 负责和客户沟通，写设计式样书，确定式样，和coding team沟通，说明式样，做结合测试
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