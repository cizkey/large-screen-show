$(function() {
  $.get("./data/baiyin-map/620400.json", function(geoJson) {
    let sanData = [
      // 散点数据
      { name: "散点1", value: 7 },
      { name: "散点2", value: 8 },
      { name: "散点3", value: 8 },
      { name: "散点4", value: 8 },
      { name: "散点5", value: 8 },
      { name: "散点6", value: 8 }
    ];

    let geoCoordMap = {
      // 散点坐标
      散点1: [104.154666777344, 37.1537062812501],
      散点2: [104.621883574219, 36.2883803535157],
      散点3: [105.292967558594, 36.2157062812501],
      散点4: [105.072547636719, 36.7482326484376],
      散点5: [105.193856230469, 36.288843],
      散点6: [104.279631621094, 36.5251308417969]
    };

    let convertData = function(data) {
      // 处理数据函数
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    };

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
        grid: {
          left: "2%",
          right: "1%",
          bottom: "1%",
          top: "1%",
          containLabel: true
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
        geo: {
          // 地图配置
          show: true,
          map: "baiYin",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#348EFC",
              borderColor: "#3B5077"
            },
            emphasis: {
              areaColor: "#496BE7"
            }
          },
          zoom: 1.2
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
              { name: "平川区", value: 8057.34 },
              { name: "白银区", value: 25477.48 },
              { name: "会宁县", value: 31686.1 },
              { name: "景泰县", value: 3992.6 },
              { name: "靖远县", value: 1045.49 }
            ],
            // 自定义名称映射
            nameMap: {
              // "Central and Western": "中西区",
              // Eastern: "东区"
            }
          },
          // 散点配置
          {
            name: "数量",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(sanData),
            symbolSize: function(val) {
              return val[2];
            },
            showEffectOn: "emphasis",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            symbolSize: 25,
            symbol: "pin",
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#ff8003"
              }
            }
          }
        ]
      })
    );
  });
});
