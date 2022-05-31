<template>
  <div class="parent">
    <article>
      <header class="headerStyle">
        <div>
          <span class="nameFont">{{ $t("message.nameValue") }}</span>
        </div>

        <p class="basicInfoFlexLayout">
          <img src="../../assets/images/phone.png" />
          <span class="basicInfoBottomMargin">090-0000-0000</span
          >&nbsp;&nbsp;&nbsp;

          <img src="../../assets/images/email.png" />
          <span>xiaoleliang045@gmail.com</span>&nbsp;&nbsp;&nbsp;

          <img src="../../assets/images/location.png" />
          <span>{{ $t("message.locationValue") }}</span
          >&nbsp;&nbsp;&nbsp;

          <img src="../../assets/images/github.png" />
          <span>YoungDriverOfTech</span>
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
            <div class="marginOfItem">https://www.yuque.com/lexiao-1kmgg</div>

            <div class="subTitle">Work Experiences</div>
            <div class="marginOfItem">4 years(2019-present)</div>
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

            <div class="subTitle">Programming Languages</div>
            <div class="marginOfItem">
              Java, JavaScript, TypeScript, HTML, CSS, SQL
            </div>

            <div class="subTitle">Framework</div>
            <div class="marginOfItem">
              Spring, Springboot, Mybatis, Vue, React
            </div>

            <div class="subTitle">Software</div>
            <div class="marginOfItem">Git, SVN, Linux, Vim, Node.js</div>

            <div class="subTitle">Database</div>
            <div class="marginOfItem">
              Mysql, Oracle, Postgre, SqlServer, Hirdb
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
              <span>株式会社Q&F (2021/4 - current)</span>
              <br />
              <span>Fullstack Software Engineer</span>
            </h3>
            <ul>
              <li>Developed order management system</li>
              <li>Developed file store system</li>
              <li>Reconstructed frontend source code</li>
            </ul>
          </div>

          <div>
            <h3>
              <span>株式会社GSD (2020/4 - 2021/3)</span>
              <br />
              <span>Backend Software Engineer</span>
            </h3>
            <ul>
              <li>Upgraded tourism reservation platform</li>
              <li>Developed bank transaction monitor</li>
              <li>Developed order management system</li>
            </ul>
          </div>

          <div>
            <h3>
              <span>株式会社CPS (2019/2 - 2020/3)</span>
              <br />
              <span>Backend Software Engineer</span>
            </h3>
            <ul>
              <li>Developed log format system</li>
              <li>Upgreded Online shop system</li>
              <li>Developed game check system</li>
            </ul>
          </div>

          <!-- Education -->
          <div>
            <div class="el-icon-s-order parentTitle underLine">Education</div>
            <h3>
              <span>Bachelor: Financial Management</span>
              <br />
              <span>Period: 2013 - 2017</span>
              <br />
              <span>University: YunCheng University</span>
            </h3>
          </div>
        </div>

        <div class="inlineBlock"></div>
      </div>
    </article>

    <!-- projects -->
    <article>
      <div class="textLeft">
        <!-- <ProjectContainer></ProjectContainer> -->
        <ResumeProject1> </ResumeProject1>
      </div>
    </article>
  </div>
</template>

<script>
import ProjectContainer from "../common/ProjectContainer.vue";
import ResumeProject1 from "../resumeprojects/Project1.vue"

export default {
  name: "Resume",
  data() {
    return {};
  },
  components: { ProjectContainer, ResumeProject1},

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
  border: 1px solid green;
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
