<template>
  <div class="parent">
    <article>
      <header>
        <h1>XIAOLE LIANG</h1>
        <p>
          Motivated Sales Associate with 5 years of experience boosting sales
          and customer loyalty through individualized service. Resourceful
          expert at learning customer needs, directing to desirable merchandise
          and upselling to meet sales quotas. Committed to strengthening
          customer experiences with positivity and professionalism when
          answering requests and processing sales.
        </p>
      </header>

      <main>
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
            <h3>May 2015 - current 株式会社CPS</h3>
            <p>Tokyo edogawa koiwa</p>
        </div>
      </main>
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
            }
          ],
        },
      ],
    };
    option && myChart.setOption(option);
  },

  methods: {
    initRadarMap() {

    },
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
}

.parent {
  background-color: white;
  margin: 20px 0;
}

.inlineBlock {
  display: inline-block;
}

.textLeft {
  text-align: left;
}
</style>
