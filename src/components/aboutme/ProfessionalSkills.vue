<template>
  <div>
    <ContentsContainer>
      <template slot="title"> 职业技能 </template>
      <template slot="contents">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <!-- IT skills -->
          <el-tab-pane label="Tech" name="first">
            <el-table
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName"
            >
              <el-table-column prop="skill" label="技能" width="180">
              </el-table-column>
              <el-table-column prop="familiarity" label="熟练度" width="180">
              </el-table-column>
            </el-table>
          </el-tab-pane>

          <!-- Languages -->
          <el-tab-pane label="Languages" name="second">
            <strong>英语Toeic: </strong>820<el-progress
              :percentage="83"
            ></el-progress>
            <br />

            <strong>日语N1: </strong>121<el-progress
              :percentage="67"
            ></el-progress>
            <br />

            <strong>日语N2: </strong>137<el-progress
              :percentage="76"
            ></el-progress>
            <br />

            <strong>中文: </strong>母语者<el-progress
              :percentage="100"
            ></el-progress>

            <!-- certificate picture -->
            <br>
            <el-link type="success"><strong>Click picture to preview.</strong></el-link>
            <div class="demo-image__preview">
              <el-image
                style="width: 100px; height: 100px"
                :src="N1url"
                :preview-src-list="N1srcList"
              >
              </el-image>

              <el-image
                style="width: 100px; height: 100px"
                :src="N2url"
                :preview-src-list="N2srcList"
              >
              </el-image>

              <el-image
                style="width: 100px; height: 100px"
                :src="Toeicurl"
                :preview-src-list="ToeicsrcList"
              >
              </el-image>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </ContentsContainer>
  </div>
</template>

<script>
import ContentsContainer from "../common/ContentsContainer.vue";

export default {
  name: "ProfessionalSkills",
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          skill: "数据结构和算法",
          familiarity: "熟悉",
        },
        {
          skill: "Java",
          familiarity: "精通",
        },
        {
          skill: "Spring Framework",
          familiarity: "熟悉",
        },
        {
          skill: "数据库",
          familiarity: "熟悉",
        },
        {
          skill: "Linux",
          familiarity: "熟悉",
        },
        {
          skill: "HTML/CSS/JS",
          familiarity: "熟悉",
        },
        {
          skill: "Vue/React",
          familiarity: "熟悉",
        },
      ],

      // picture address
      N1url: require("../../assets/images/N1.jpg"),
      N1srcList: [require("../../assets/images/N1.jpg")],

      N2url: require("../../assets/images/N2.jpg"),
      N2srcList: [require("../../assets/images/N2.jpg")],

      Toeicurl: require("../../assets/images/Toeic.jpg"),
      ToeicsrcList: [require("../../assets/images/Toeic.jpg")],
    };
  },
  components: {
    ContentsContainer,
  },

  mounted() {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>