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
            <h2 class="el-icon-user-solid">Contact</h2>
            <h3>Address</h3>
            <p>Tokyo edogawa koiwa</p>

            <h3>Phone</h3>
            <p>23333333333</p>

            <h3>Address</h3>
            <p>23333333333@gmail.com</p>
          </div>

          <!-- skill -->
          <div>
            <h2 class="el-icon-s-opportunity">Skills</h2>
            <div id="skill-area" style="width: 200px; height: 200px"></div>
          </div>
        </div>

        <!-- experiences and education -->
        <div class="inlineBlock">
          <!-- experience -->
          <h2 class="el-icon-user-solid">Experience</h2>
          <div>
            <h3>
              May 2015 - current 株式会社CPS
              <br />
              <span>May 2016 - current</span>
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
              May 2015 - current 株式会社GSD
              <br />
              <span>May 2016 - current</span>
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
              May 2015 - current 株式会社GSD
              <br />
              <span>May 2016 - current</span>
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
            <h2 class="el-icon-user-solid">Education</h2>
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
  min-height: 29.7cm;
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
</style>
