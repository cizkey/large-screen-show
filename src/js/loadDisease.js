$(function() {
  let dataY = ["感冒", "糖尿病", "高血压", "鼻炎", "上呼吸道感染"];
  let dataX = [504, 340, 736, 61, 328];

  let option1 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56"
        }
      }
    },
    color: ["#E1A40B"],
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
        type: "value",
        scale: true,
        name: "数量:人",
        min: 0,
        boundaryGap: [0.2, 0.2],
        axisLine: {
          lineStyle: {
            color: "#03B6F0"
          }
        },
        splitLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: dataY,
        axisLine: {
          lineStyle: {
            color: "#03B6F0"
          }
        }
      }
    ],
    series: [
      {
        name: "疾病感染数量",
        type: "bar",
        data: dataX,
        label: {
          normal: {
            show: true,
            position: "right"
          }
        },

        // itemStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
        //       { offset: 0, color: "#E1A40B" },
        //       { offset: 1, color: "#947817" }
        //     ])
        //   }
        // }
      }
    ]
  };

  var myChart = echarts.init(document.getElementById("disease1"));
  myChart.setOption(option1);
});

$(function() {
  let dataY = ["鼻炎", "糖尿病", "皮肤病", "上呼吸道感染", "感冒"];
  let dataX = [0.41, 0.2, 0.3, 0.4, 0.5];

  let option2 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#283b56"
        }
      }
    },
    color: ["#04BDF6"],
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
        type: "value",
        scale: true,
        name: "影响影响:%",
        min: 0,
        boundaryGap: [0.2, 0.2],
        axisLine: {
          lineStyle: {
            color: "#03B6F0"
          }
        },
        splitLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: dataY,
        axisLine: {
          lineStyle: {
            color: "#03B6F0"
          }
        }
      }
    ],
    series: [
      {
        name: "死因和经济负担",
        type: "bar",
        data: dataX,
        label: {
          normal: {
            show: true,
            position: "right"
          }
        },
        
        // 柱状列的渐变颜色效果
        // itemStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
        //       { offset: 0, color: "#04BDF6" },
        //       { offset: 1, color: "#1687A9" }
        //     ])
        //   }
        // }
      }
    ]
  };

  var myChart = echarts.init(document.getElementById("disease2"));
  myChart.setOption(option2);
});
