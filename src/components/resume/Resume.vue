<template>
  <div class="parent">
    <article>
      <header class="textLeft">
        <h1>XIAOLE LIANG</h1>
        <p>
          Motivated Sales Associate with 5 years of experience boosting sales
          and customer loyalty through individualized service. Resourceful
          expert at learning customer needs, directing to desirable merchandise
          and upselling to meet sales quotas. Committed to strengthening
          customer experiences with positivity and professionalism when
        </p>
      </header>

      <div class="flexLayout">
        <div class="inlineBlock"></div>

        <!-- basic information -->
        <div class="inlineBlock textLeft">
          <!-- contact -->
          <div>
            <div class="el-icon-user-solid parentTitle underLine">Contact</div>
            <br><br>

            <div class="subTitle">Address</div>
            <div class="marginOfItem">Tokyo edogawa koiwa</div>

            <div class="subTitle">Github</div>
            <div class="marginOfItem">23333333333</div>

            <div class="subTitle">Email</div>
            <div class="marginOfItem">23333333333@gmail.com</div>

            <div class="subTitle">LinkedIn</div>
            <div class="marginOfItem">23333333333@gmail.com</div>

            <div class="subTitle">My Blog</div>
            <div class="marginOfItem">23333333333@gmail.com</div>
          </div>
          <br />

          <!-- language -->
          <div>
            <div class="el-icon-info parentTitle underLine">Language</div>
            <br><br>

            <div class="subTitle">English</div>
            <div class="marginOfItem">TOEIC:820(Listening And Reading)</div>

            <div class="subTitle">Japanese</div>
            <div class="marginOfItem">
              <span>JLPT N1:121</span><br />
              <span>JLPT N2:137</span>
            </div>

            <div class="subTitle">Chinese</div>
            <div class="marginOfItem">Native Speaker</div>
          </div>
          <br />

          <!-- skill -->
          <div>
            <div class="el-icon-s-opportunity parentTitle underLine">Skills</div>
            <div id="skill-area" style="width: `160px; height: 200px"></div>
          </div>
        </div>

        <!-- experiences and education -->
        <div class="inlineBlock textLeft">
          <!-- experience -->
          <div class="el-icon-s-data parentTitle underLine">Experience</div>
          <div>
            <h3>
              <span>株式会社Q And F</span>
              <br>
              <span>2021/4 - current</span>
            </h3>
            <ul>
              <li>Effectively upsold products by introducing .</li>
              <li>Generated brand awareness and positi.</li>
              <li>Used consultative sales approach t.</li>
              <li>Generated brand awareness and positi.</li>
              <li>Used consultative sales approach t.</li>
            </ul>
          </div>

          <div>
            <h3>
              <span>株式会社GSD</span>
              <br />
              <span>2020/4 - 2021/3</span>
            </h3>
            <ul>
              <li>Effectively upsold products by introducing .</li>
              <li>Generated brand awareness and positi.</li>
              <li>Used consultative sales approach t.</li>
              <li>Generated brand awareness and positi.</li>
              <li>Used consultative sales approach t.</li>
            </ul>
          </div>

          <div>
            <h3>
              <span>株式会社CPS</span>
              <br />
              <span>2019/2 - 2020/3</span>
            </h3>
            <ul>
              <li>Effectively upsold products by introducing.</li>
              <li>Generated brand awareness and positi.</li>
              <li>Used consultative sales approach t.</li>
              <li>Generated brand awareness and positi.</li>
              <li>Used consultative sales approach t.</li>
            </ul>
          </div>

          <!-- Education -->
          <div>
            <div class="el-icon-s-order parentTitle underLine">Education</div>
            <h3>
              <span>Bachelor: Financial Management</span>
              <br>
              <span>Period: 2013 - 2017</span>
              <br>
              <span>University: YunCheng University</span>
            </h3>
          </div>
        </div>

        <div class="inlineBlock"></div>
      </div>
    </article>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Resume",
  data() {
    return {};
  },
  components: {},

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
    initRadarMap() {},
  },
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
</style>
