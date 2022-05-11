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
            <div class="el-icon-user-solid parentTitle">Contact</div>
            <div class="subTitle">Address</div>
            <span>Tokyo edogawa koiwa</span><br><br>

            <div class="subTitle">Github</div>
            <span>23333333333</span><br><br>

            <div class="subTitle">Email</div>
            <span>23333333333@gmail.com</span><br><br>

            <div class="subTitle">LinkedIn</div>
            <span>23333333333@gmail.com</span><br><br>

            <div class="subTitle">My Blog</div>
            <span>23333333333@gmail.com</span>
          </div><br>

          <!-- language -->
          <div>
            <div class="el-icon-user-solid parentTitle">Language</div>
            <div class="subTitle">English</div>
            <span>TOEIC:820(Listening And Reading)</span><br><br>

            <div class="subTitle">Japanese</div>
            <span>JLPT N1:121</span><br>
            <span>JLPT N2:137</span><br><br>

            <div class="subTitle">Chinese</div>
            <span>Native Speaker</span>
          </div><br>

          <!-- skill -->
          <div>
            <div class="el-icon-user-solid parentTitle">Skills</div>
            <div id="skill-area" style="width: 200px; height: 200px"></div>
          </div>
        </div>

        <!-- experiences and education -->
        <div class="inlineBlock textLeft">
          <!-- experience -->
          <div class="el-icon-user-solid parentTitle">Experience</div>
          <div>
            <h3>
              <span>株式会社Q And F</span>
              <br />
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
            <div class="el-icon-user-solid parentTitle">Education</div>
            <h3>
              <span>Bachelor: Financial Management</span>
              <br />
              <span>2013 - 2017</span>
              <br />
              <span>YunCheng University</span>
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
          { name: "Vue/React", max: 100 },
          { name: "HTML/CSS/JS", max: 100 },
          { name: "Database", max: 100 },
          { name: "Language", max: 100 },
        ],
      },
      series: [
        {
          name: "skill level",
          type: "radar",
          data: [
            {
              value: [100, 80, 70, 70, 80, 90],
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
</style>
