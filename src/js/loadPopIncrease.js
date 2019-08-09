$(function loadOrg() {
  let dataX = [2015, 2016, 2017, 2018, 2019];
  let data = [2, 3, 4, 5, 8];
  let data1 = [3, 5, 6, 2, 4];
  let data2 = [4, 2, 3, 6, 5];
  let data3 = [6, 4, 3, 2, 4];

  let optionGroup = {
    tooltip: {
      trigger: "axis"
      // formatter: "name : {b} <br/>grade: {c} "
    },
    color: ["#E549DB", "#22D41E", "#FCAB1C", "#F76041"],
    legend: {
      right: 0,
      // height: "40px",
      orient: "horizontal",
      textStyle: {
        color: "#fff"
      },
      data: ["出生率", "自然增长率", "婴儿死亡率", "孕妇死亡率"]
    },
    dataZoom: [
      {
        startValue: "2000"
      },
      {
        type: "inside"
      }
    ],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "1%",
      top: "3%",
      containLabel: true
    },
    xAxis: {
      name: "年",
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#03B6F0"
        }
      },
      axisTick: {
        show: false
      },
      data: dataX
    },
    yAxis: {
      name: "十万分之一",
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#03B6F0"
        }
      },
      splitLine: {
        lineStyle: {
          color: "#054872"
        }
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        data: data,
        type: "line",
        smooth: true,
        barCategoryGap: 25,
        barWidth: "10%",
        symbol: "circle",
        label: {
          normal: {
            show: true
          }
        },
        lineStyle: {
          normal: {
            width: 3,
            shadowColor: "#4BC795",
            shadowBlur: 10
            // shadowOffsetY: 10
          }
        },
        name: "出生率"
      },
      {
        data: data1,
        type: "line",
        smooth: true,
        barCategoryGap: 25,
        barWidth: "10%",
        symbol: "circle",
        label: {
          normal: {
            show: true
          }
        },
        lineStyle: {
          normal: {
            width: 3,
            shadowColor: "#04BDF6",
            shadowBlur: 10
            // shadowOffsetY: 10
          }
        },
        name: "自然增长率"
      },
      {
        data: data2,
        type: "line",
        smooth: true,
        barCategoryGap: 25,
        barWidth: "10%",
        symbol: "circle",
        label: {
          normal: {
            show: true
          }
        },
        lineStyle: {
          normal: {
            width: 3,
            shadowColor: "#FCAB1C",
            shadowBlur: 10
            // shadowOffsetY: 10
          }
        },
        name: "婴儿死亡率"
      },
      {
        data: data3,
        type: "line",
        smooth: true,
        barCategoryGap: 25,
        barWidth: "10%",
        symbol: "circle",
        label: {
          normal: {
            show: true
          }
        },
        lineStyle: {
          normal: {
            width: 3,
            shadowColor: "#F76041",
            shadowBlur: 10
            // shadowOffsetY: 10
          }
        },
        name: "孕妇死亡率"
      }
    ]
  };

  let org_echart = echarts.init(document.getElementById("popIncrease"));
  org_echart.setOption(optionGroup);
})();
