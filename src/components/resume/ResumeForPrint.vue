<template>
  <div class="parent">
    <article>
      <header class="headerStyle">
        <div>
          <span class="nameFont">{{ $t("message.nameValue") }}</span>
        </div>

        <p class="basicInfoFlexLayout">
          <img src="../../assets/images/phone.png" />
          <span class="basicInfoBottomMargin">090-6746-0742</span
          >&nbsp;&nbsp;&nbsp;

          <img src="../../assets/images/email.png" />
          <span><el-link type="primary" href="mailto:xiaoleliang045@gmail.com" target="_blank">xiaoleliang045@gmail.com</el-link></span>&nbsp;&nbsp;&nbsp;

          <img src="../../assets/images/location.png" />
          <span>{{ $t("message.locationValue") }}</span
          >&nbsp;&nbsp;&nbsp;

          <img src="../../assets/images/github.png" />
          <span><el-link type="primary" href="https://github.com/YoungDriverOfTech" target="_blank">YoungDriverOfTech</el-link></span>
        </p>
      </header>

      <div class="flexLayout">
        <div class="inlineBlock"></div>

        <!-- basic information -->
        <div class="inlineBlock textLeft">
          <div>
            <div class="el-icon-user-solid parentTitle underLine">
              {{ $t("message.personalInfo") }}
            </div>
            <br /><br />

            <div class="subTitle">{{ $t("message.currentStatusLabel") }}</div>
            <div class="marginOfItem">
              {{ $t("message.currentStatusValue") }}
            </div>

            <div class="subTitle">{{ $t("message.blogLabel") }}</div>
            <div class="marginOfItem"><el-link type="primary" href="https://www.yuque.com/lexiao-1kmgg" target="_blank">https://www.yuque.com/lexiao-1kmgg</el-link></div>

            <div class="subTitle">{{ $t("message.workPeriod") }}</div>
            <div class="marginOfItem">{{ $t("message.year3") }}</div>
          </div>
          <br />

          <!-- language -->
          <div>
            <div class="el-icon-info parentTitle underLine">
              {{ $t("message.chooseLanguage") }}
            </div>
            <br /><br />

            <div class="subTitle">{{ $t("message.english") }}</div>
            <div class="marginOfItem">{{ $t("message.toeic") }}:820</div>

            <div class="subTitle">{{ $t("message.japanese") }}</div>
            <div class="marginOfItem">
              <span>{{ $t("message.jlptN1") }}:121</span><br />
              <span>{{ $t("message.jlptN2") }}:137</span>
            </div>

            <div class="subTitle">{{ $t("message.chinese") }}</div>
            <div class="marginOfItem">{{ $t("message.chineseScore") }}</div>
          </div>
          <br />

          <!-- skill -->
          <div>
            <div class="el-icon-s-opportunity parentTitle underLine">
              {{ $t("message.skills") }}
            </div>
            <br /><br />
            <!-- <div id="skill-area" style="width: `160px; height: 200px"></div> -->

            <div class="subTitle">{{ $t("message.programmingLanguages") }}</div>
            <div class="marginOfItem">
              Java, JavaScript, TypeScript, HTML, CSS, SQL
            </div>

            <div class="subTitle">{{ $t("message.framework") }}</div>
            <div class="marginOfItem">
              Spring, Spring Boot, MyBatis, Vue, React
            </div>

            <div class="subTitle">{{ $t("message.software") }}</div>
            <div class="marginOfItem">Git, SVN, Linux, Vim, Node.js</div>

            <div class="subTitle">{{ $t("message.db") }}</div>
            <div class="marginOfItem">
              MySQL, Oracle, PostgreSQL, SQL Server, HIRDB
            </div>
          </div>
        </div>

        <!-- experiences and education -->
        <div class="inlineBlock textLeft">
          <!-- experience -->
          <div class="el-icon-s-data parentTitle underLine">
            {{ $t("message.workExperiences") }}
          </div>
          <div>
            <h3>
              <span>{{ $t("message.fullStackEngineer") }}</span>
              <br />
              <span>
                <el-link type="primary" href="http://www.qf-japan.com/index.html" target="_blank">{{ $t("message.companyQAndF") }}</el-link>
              </span>
            </h3>
            <ul>
              <li>{{ $t("message.qfDuty1") }}</li>
              <li>{{ $t("message.qfDuty2") }}</li>
              <li>{{ $t("message.qfDuty3") }}</li>
              <li>{{ $t("message.qfDuty4") }}</li>
            </ul>
          </div>

          <div>
            <h3>
              <span>{{ $t("message.backendEngineer") }}</span>
              <br />
              <span>
                <el-link type="primary" href="http://www.g-s-d.co.jp/index.php" target="_blank">{{ $t("message.companyGSD") }}</el-link>
              </span>
            </h3>
            <ul>
              <li>{{ $t("message.gsdDuty1") }}</li>
              <li>{{ $t("message.gsdDuty2") }}</li>
              <li>{{ $t("message.gsdDuty3") }}</li>
            </ul>
          </div>

          <div>
            <h3>
              <span>{{ $t("message.backendEngineer") }}</span>
              <br />
              <span>
                <el-link type="primary" href="http://www.cps-soft.co.jp/" target="_blank">{{ $t("message.companyCPS") }}</el-link>
              </span>
            </h3>
            <ul>
              <li>{{ $t("message.cpsDuty1") }}</li>
              <li>{{ $t("message.cpsDuty2") }}</li>
              <li>{{ $t("message.cpsDuty3") }}</li>
            </ul>
          </div>

          <!-- Education -->
          <div>
            <div class="el-icon-s-order parentTitle underLine">{{ $t("message.education") }}</div>
            <br><br>

            <span class="subTitle">{{ $t("message.bachelor") }}:</span> {{ $t("message.major") }}
            <br>
            <span class="subTitle">{{ $t("message.universityPeriod") }}:</span> {{ $t("message.universityPeriodValue") }}
            <br>
            <span class="subTitle">{{ $t("message.university") }}:</span> {{ $t("message.universityName") }}
          </div>
        </div>

        <div class="inlineBlock"></div>
      </div>
    </article>

    <!-- projects -->
    <article>
      <div class="textLeft">
        <ResumeProject7></ResumeProject7>
        <ResumeProject6></ResumeProject6>
        <ResumeProject5></ResumeProject5>
      </div>
    </article>

    <article>
      <div class="textLeft">
        <ResumeProject4></ResumeProject4>
        <ResumeProject3></ResumeProject3>
        <ResumeProject2></ResumeProject2>
        <ResumeProject1></ResumeProject1>
      </div>
    </article>
  </div>
</template>

<script>
import ResumeProject1 from "../resumeprojects/Project1.vue";
import ResumeProject2 from "../resumeprojects/Project2.vue";
import ResumeProject3 from "../resumeprojects/Project3.vue";
import ResumeProject4 from "../resumeprojects/Project4.vue";
import ResumeProject5 from "../resumeprojects/Project5.vue";
import ResumeProject6 from "../resumeprojects/Project6.vue";
import ResumeProject7 from "../resumeprojects/Project7.vue";
export default {
  name: "ResumeForPrint",
  data() {
    return {};
  },
  components: {
    ResumeProject1,
    ResumeProject2,
    ResumeProject3,
    ResumeProject4,
    ResumeProject5,
    ResumeProject6,
    ResumeProject7,
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

article {
  width: 21cm;
  min-height: 28cm;
  background-color: white;
  margin: 0 auto;
  overflow: auto;
  padding: 1em;
  /* border: 1px solid green; */
  margin-top: 30px;
}

.flexLayout {
  display: flex;
  justify-content: space-between;
}

.parent {
  background-color: white;
  margin: 20px 0;
}

.inlineBlock {
  display: inline-block;
  vertical-align: top;
}

.textLeft {
  text-align: left;
}

.nameFont {
  font-size: 2.5em;
  font-weight: 700;
}

.subTitle {
  font-size: 1.2em;
  font-weight: 600;
}

.parentTitle {
  font-size: 1.6em;
  font-weight: 700;
}

.marginOfItem {
  margin: 5px 0;
}

.underLine {
  border-bottom: 2px solid black;
}

img {
  width: 25px;
  height: 25px;
}

.basicInfoFlexLayout {
  display: flex;
  justify-content: center;
}

.headerStyle {
  margin-bottom: 50px;
}
</style>
