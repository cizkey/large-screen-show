$(function test() {
  let data1 = [2016, 2017, 2018, 2019, 2010, 2011, 2012, 2013, 2014, 2015];
  let datay1 = [504, 340, 736, 61, 328, 49, 920, 407, 312, 399];
  let datay2 = [2016, 2017, 2018, 2019, 2010, 2011, 2012, 2013, 2014, 2015];

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56"
        }
      }
    },
    color: ["#4BC795", "#04BDF6", "#FCAB1C", "#F76041"],
    legend: {
      data: ["均次门诊费用", "平均住院费用"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "1%",
      top: "1%",
      containLabel: true
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: data1,
        axisLine: {
          lineStyle: {
            color: "#03B6F0"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
        name: "总价:元",
        min: 0,
        boundaryGap: [0.2, 0.2],
        axisLine: {
          lineStyle: {
            color: "#03B6F0"
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed"
          }
        }
      }
    ],
    series: [
      {
        name: "均次门诊费用",
        type: "bar",
        data: datay1
      },
      {
        name: "平均住院费用",
        type: "bar",
        data: datay2
      }
    ]
  };

  var myChart = echarts.init(document.getElementById("runChart"));
  myChart.setOption(option);
})();
