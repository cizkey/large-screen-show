$(function test() {

  let data1 = [504, 340, 736, 61, 328, 49, 920, 407, 312, 399];
  let data2 = [504, 340, 736, 61, 328, 49, 920, 407, 312, 399];
  let data3 = [10.2, 10.6, 12.3, 7.2, 12.3, 10.3, 14.7, 10.5, 10.1, 6.3];

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
    color: ["#FAA526", "#3DC69A", "#05B4ED"],
    legend: {
      data: ["城乡人口", "城镇人口", "可支配收入"]
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '1%',
      top: '3%',
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
        data: [
          "9:04:32 AM",
          "9:04:34 AM",
          "9:04:36 AM",
          "9:04:38 AM",
          "9:04:40 AM",
          "9:04:42 AM",
          "9:04:44 AM",
          "9:04:46 AM",
          "9:04:48 AM",
          "9:04:50 AM"
        ]
      },
      {
        type: "category",
        boundaryGap: true,
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
        name: "人口:万人",
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: "value",
        scale: true,
        name: "收入:万元",
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: "城乡人口",
        type: "bar",
        stack: "人口",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data1
      },
      {
        name: "城镇人口",
        stack: "人口",
        type: "bar",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: data2
      },
      {
        name: "可支配收入",
        type: "line",
        data: data3
      }
    ]
  };

  var myChart = echarts.init(document.getElementById("popluation"));
  myChart.setOption(option);
})();
