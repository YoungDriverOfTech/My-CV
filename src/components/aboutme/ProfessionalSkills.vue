<template>
  <div>
    <ContentsContainer>
      <template slot="title"> {{ $t("message.skills") }} </template>
      <template slot="contents">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <!-- IT skills -->
          <el-tab-pane label="Tech" name="first">
            <strong>{{ $t("message.dataSkill") }}: </strong
            >{{ $t("message.datafamiliarity")
            }}<el-progress :percentage="75"></el-progress>
            <br />

            <strong>{{ $t("message.javaSkill") }}: </strong
            >{{ $t("message.javaFamiliarity")
            }}<el-progress :percentage="90"></el-progress>
            <br />

            <strong>{{ $t("message.springSkill") }}: </strong
            >{{ $t("message.springFamiliarity")
            }}<el-progress :percentage="80"></el-progress>
            <br />

            <strong>{{ $t("message.dbSkill") }}: </strong
            >{{ $t("message.dbFamiliarity")
            }}<el-progress :percentage="75"></el-progress>
            <br />

            <strong>{{ $t("message.linuxSkill") }}: </strong
            >{{ $t("message.linuxFamiliarity")
            }}<el-progress :percentage="60"></el-progress>
            <br />

            <strong>{{ $t("message.frontSkill") }}: </strong
            >{{ $t("message.frontFamiliarity")
            }}<el-progress :percentage="70"></el-progress>
            <br />

            <strong>{{ $t("message.frongtFrameworkSkill") }}: </strong
            >{{ $t("message.frongtFrameworkFamiliarity")
            }}<el-progress :percentage="70"></el-progress>
            <br />
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