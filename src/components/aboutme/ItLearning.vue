<template>
  <div>
    <ContentsContainer>
      <template slot="title">
        我的It学习经历
      </template>
      <template slot="contents">
        毕业以后，因为不想从事本专业的工作，而选择一份可以用到英语的工作。开始工作以后，工作上要求处理热线的时候必须控制接线时长，越快越好，所以英语说来说去也只有几句，对自己的能力
        并没有多少提高，所以干了8个月以后果断辞职，寻找下一份工作。

        但是找工作其实并不顺利，除了销售就是销售，没有任何别的选择，找工作找到崩溃。后来网上无意间看到，有人在招聘日本的程序员，所以就开始自学Java，准备来日本当程序员。
        <br>
        学习java并不容易，因为是自学，没有人指点，只能网上找一些视频来看，学习时候也饶过不少的弯路。并且学习的时候还有一些趣事，因为不太懂怎么在网上做笔记，我的java笔记全部写在了笔记本上
        经过8个月的学习我觉得已经可以足够应付工作了，然后随便找了一家派遣公司，就来到了日本。
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "ItLearning",
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