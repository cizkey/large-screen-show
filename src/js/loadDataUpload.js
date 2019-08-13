$(function() {
  let option1 = {
    // backgroundColor: "blue",
    tooltip: {
      formatter: "{a} <br/>{c} {b}"
    },
    grid: {
      left: "1%",
      right: "1%",
      bottom: "1%",
      top: "1%",
      containLabel: true
    },
    series: [
      {
        name: "数据上传总量",
        type: "gauge",
        // min: 0,
        // max: 220,
        // splitNumber: 11,
        radius: "100%",
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: [[0.09, "lime"], [0.82, "#1e90ff"], [1, "#ff4500"]],
            width: 3,
            shadowColor: "#fff", //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {
          // 坐标轴小标记
          textStyle: {
            // 属性lineStyle控制线条样式
            fontWeight: "bolder",
            // color: "",
            shadowColor: "#fff", //默认透明
            shadowBlur: 10
          }
        },
        axisTick: {
          // 坐标轴小标记
          length: 15, // 属性length控制线长
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: "auto",
            shadowColor: "#fff",
            shadowBlur: 10
          }
        },
        splitLine: {
          // 分隔线
          length: 55, // 属性length控制线长
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: "#fff",
            shadowColor: "#fff", //默认透明
            shadowBlur: 10
          }
        },
        pointer: {
          // 分隔线
          shadowColor: "#fff", //默认透明
          shadowBlur: 5
        },
        title: {
          textStyle: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: "bolder",
            fontSize: 20,
            fontStyle: "italic",
            color: "#fff",
            shadowColor: "#fff", //默认透明
            shadowBlur: 10
          }
        },
        detail: {
          // backgroundColor: "#06BAFF",
          borderWidth: 0,
          borderColor: "#fff",
          shadowColor: "#fff", //默认透明
          shadowBlur: 5,
          offsetCenter: [0, "85%"], // x, y，单位px
          textStyle: {
            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: "bolder",
            // fontSize: "24",
            color: "#06BAFF"
          }
        },
        data: [{ value: 87668, name: "累计上传条数(万条)" }]
      }
    ]
  };

  var myChart = echarts.init(document.getElementById("dataUpload1"));
  myChart.setOption(option1);
});


$(function() {
  let dataX = ["0501", "0502", "0503", "0504", "0505", "0506", "0507"];
  let dataY = [504, 340, 736, 61, 328, 49, 920, 407];

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
    // legend: {
    //   data: ["就诊人次"]
    // },
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
        data: dataX,
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
        name: "数据量:万条",
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
        name: "上传数据总量",
        type: "line",
        // symbol: "circle",
        symbolSize: 10,
        data: dataY
      }
    ]
  };

  var myChart = echarts.init(document.getElementById("dataUpload2"));
  myChart.setOption(option2);
});