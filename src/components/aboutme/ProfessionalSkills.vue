<template>
  <div>
    <ContentsContainer>
      <template slot="title"> {{ $t("message.skills") }} </template>
      <template slot="contents">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <!-- IT skills -->
          <el-tab-pane label="Tech" name="first">
            <!-- skill -->
            <div>
              <div id="skill-area" style="width: `450px; height: 450px"></div>
            </div>
          </el-tab-pane>

          <!-- Languages -->
          <el-tab-pane label="Languages" name="second">
            <strong>{{ $t("message.englishToeic") }}: </strong
            >{{ $t("message.toeicScore")
            }}<el-progress :percentage="83"></el-progress>
            <br />

            <strong>{{ $t("message.jlptN1") }}: </strong
            >{{ $t("message.n1Score")
            }}<el-progress :percentage="67"></el-progress>
            <br />

            <strong>{{ $t("message.jlptN2") }}: </strong
            >{{ $t("message.n2Score")
            }}<el-progress :percentage="76"></el-progress>
            <br />

            <strong>{{ $t("message.chinese") }}: </strong
            >{{ $t("message.chineseScore")
            }}<el-progress :percentage="100"></el-progress>

            <!-- certificate picture -->
            <br />
            <el-link type="success"
              ><strong>{{ $t("message.preViewMessage") }}</strong></el-link
            >
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
import * as echarts from "echarts";

export default {
  name: "ProfessionalSkills",
  data() {
    return {
      activeName: "first",
      tableData: this.$t("message.skillTableData"),

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

  mounted() {
    // init skill map
    let chartDom = document.getElementById("skill-area");
    let myChart = echarts.init(chartDom);
    let option;
    option = {
      radar: {
        indicator: [
          { name: "Java", max: 100 },
          { name: "Spring", max: 100 },
          { name: "JS", max: 100 },
          { name: "CSS", max: 100 },
          { name: "HTML", max: 100 },
          { name: "Vue", max: 100 },
          { name: "DB", max: 100 },
          { name: "React", max: 100 },
        ],
      },
      series: [
        {
          name: "skill level",
          type: "radar",
          data: [
            {
              value: [90, 90, 80, 70, 90, 80, 80, 80],
              name: "skill score",
            },
          ],
        },
      ],
    };
    option && myChart.setOption(option);
  },

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