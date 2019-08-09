$(function() {

  $.get("./data/baiyin-map/620400.json", function(geoJson) {

    echarts.registerMap("baiYin", geoJson);

    let myChart = echarts.init(document.getElementById("map_echart"));
    myChart.setOption(
      (option = {
        title: {
          // text: "香港18区人口密度 （2011）",
          // subtext: "人口密度数据来自Wikipedia"
          // sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/>{c} (p / km2)"
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 800,
          max: 50000,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"]
          }
        },
        series: [
          {
            name: "白银市地图",
            type: "map",
            mapType: "baiYin", // 自定义扩展图表类型
            itemStyle: {
              normal: { label: { show: true } },
              emphasis: { label: { show: true } }
            },
            data: [
              { name: "平川区", value: 20057.34 },
              { name: "白银区", value: 15477.48 },
              { name: "会宁县", value: 31686.1 },
              { name: "景泰县", value: 6992.6 },
              { name: "靖远县", value: 39045.49 }
            ],
            // 自定义名称映射
            nameMap: {
              // "Central and Western": "中西区",
              // Eastern: "东区"
            }
          }
        ]
      })
    );
  });
});
