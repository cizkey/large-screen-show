$(function() {
  //加载地图
  var displayArea = "main";
  var chart, cur_region, cur_title;

  var dotData = [
    {
      name: "白银市白银区水川镇人口计划生育服务中心",
      value: [104.23355, 36.366, 290]
    },
    {
      name: "白银区工农路街道长通社区卫生服务站",
      value: [104.16596, 36.55149, 120]
    },
    { name: "白银区水川镇中心卫生院", value: [104.24708, 36.36636, 142] },
    {
      name: "白银区公园路街道社区卫生服务中心",
      value: [104.18071, 36.53677, 142]
    },
    {
      name: "白银区公园路街道建银社区卫生服务站",
      value: [104.183, 36.53797, 342]
    },
    {
      name: "白银市会宁县老君坡乡计生服务站",
      value: [105.42073, 35.75056, 142]
    },
    {
      name: "会宁县会师镇社区卫生服务中心",
      value: [105.0417, 35.69631, 142]
    },
    {
      name: "会宁县中医医院",
      value: [105.04898, 35.69495, 142]
    },
    {
      name: "会宁县西京医院",
      value: [105.04719, 35.69082, 142]
    },
    {
      name: "会宁县会师镇卫生院",
      value: [105.06364, 35.67407, 142]
    },
    {
      name: "景泰县草窝滩镇卫生院",
      value: [104.10351, 37.26926, 90]
    },
    {
      name: "景泰县红水卫生院",
      value: [104.13127, 37.17816, 120]
    },
    {
      name: "景泰县中医医院",
      value: [104.05933, 37.19574, 142]
    },
    {
      name: "景泰县正路卫生院",
      value: [103.69275, 36.8965, 142]
    },
    {
      name: "景泰县上沙沃镇卫生院",
      value: [104.13127, 37.17816, 142]
    },
    {
      name: "靖远县北滩镇中心卫生院",
      value: [104.87042, 37.02676, 142]
    },
    {
      name: "白银市靖远县糜滩乡计生办",
      value: [104.67151, 36.59503, 142]
    },
    {
      name: "靖远县糜滩镇卫生院",
      value: [104.67893, 36.59156, 142]
    },
    {
      name: "靖远县东升镇卫生院",
      value: [104.97439, 37.01589, 142]
    },
    {
      name: "白银市靖远县三滩乡计划生育服务中心",
      value: [104.67622, 36.69502, 142]
    },
    {
      name: "白银市平川区红会路社区服务机构",
      value: [105.0339, 36.66992, 142]
    },
    { name: "白银市平川区水泉镇中心卫生院", value: [104.9119, 36.66252, 142] },
    { name: "白银市平川区黄峤乡卫生院", value: [104.9119, 36.66252, 142] },
    {
      name: "白银市平川区兴平路街道新建社区卫生服务站",
      value: [104.86246, 36.71745, 142]
    },
    { name: "白银市平川区种田乡中心卫生院", value: [105.32683, 36.44727, 142] },
    { name: "白银市第一人民医院", value: [104.180903, 36.557772, 888] }
  ];
  switchArea("lib/echarts/baiyinshi.json", "白银市", "map_echart", dotData);

  //加载地图
  function switchArea(mapName, area, div, dot) {
    displayArea = div;
    $.get(mapName, function(getJSON) {
      echarts.registerMap(area, getJSON);
      chart = echarts.init(document.getElementById(div));
      cur_title;

      var option_city = {
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            let name = params.data && params.data.name ? params.data.name : '';
            let value = params.data && params.data.value && params.data.value[2] ? params.data.value[2] : 0;
            return name + ":" + value;
          }
        },
        // 圈点颜色
        dataRange: {
        //   min : 0,
        //   max : 800,
          calculable: true,
          // color: ['#F4FF29', 'orange', '#F4FF29','lime','aqua'],
          color: ["#ff3333", "orange", "yellow", "lime", "aqua"],
          textStyle: {
            color: "#fff"
          },
          show: false
        },
        geo: {
          map: area,
          zoom: 1.25,
          roam: true,
          itemStyle: {
            // 定义样式
            normal: {
              // 普通状态下的样式
              show: false,
              areaColor: "#1471E8",
              borderColor: "#FFFFFF"
            },
            emphasis: {
              // 高亮状态下的样式
              show: true,
              areaColor: "#0A9FE2",
              color: "#ffffff"
            }
          },
          label: {
            // 标签的显示
            emphasis: {
              show: false
            },
            normal: {
              show: true,
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 15
            }
          }
        },
        backgroundColor: "transparent", // 图表背景色
        series: [
          {
            roam: "true",
            type: "effectScatter",
            coordinateSystem: "geo",
            // showEffectOn: 'render',
            data: dot,
            // blurSize: 20,
            symbolSize: 10,
            symbol: "circle",
            rippleEffect: {
              brushType: "stroke",
              period: 2,
              scale: 4
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "top",
                //offset: [1, -3],
                show: false,
                textStyle: {
                  color: "#000"
                }
              }
            },
            //markpoinent color
            itemStyle: {
              normal: {
                show: true,
                color: "#F4FF29"
              }
            }
            // minOpacity: 0.5,
            // maxOpacity: 1
          },
          {
            name: "汇聚中心",
            type: "lines",
            coordinateSystem: "geo",
            // 是否是直线
            // polyline:true,
            // symbol: ["none", "triangle"],
            symbol: ["none", "none"],
            zlevel: 2,
            effect: {
              show: true,
              symbol: "roundRect",
              scaleSize: 1,
              color: "#fff",
              shadowBlur: 10,
              // 速度
              period: 2.5,
              delay: 100
              //流动线的宽度
              // trailLength: 0.3,
              // symbolSize: 5
            },
            lineStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0.2,
                  y: 0.2,
                  x2: 0.8,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#00FFAB"
                    },
                    {
                      offset: 1,
                      color: "#cbb0e3"
                    }
                  ],
                  globalCoord: false
                },
                width: 1,
                opacity: 0.8,
                //type: 'dotted',
                curveness: 0.2
              }
            },
            smooth: true,
            itemStyle: {
              normal: {
                label: { show: false },
                borderWidth: 0,
                lineStyle: {
                  type: "solid",
                  shadowBlur: 0
                }
              }
            },
            data: [
              {
                coords: [[104.23355, 36.366], [104.180903, 36.557772]]
              },
              {
                coords: [[104.16596, 36.55149], [104.180903, 36.557772]]
              },
              {
                coords: [[104.24708, 36.36636], [104.180903, 36.557772]]
              },
              {
                coords: [[104.18071, 36.53677], [104.180903, 36.557772]]
              },
              {
                coords: [[104.183, 36.53797, 142], [104.180903, 36.557772]]
              },
              {
                coords: [[105.42073, 35.75056], [104.180903, 36.557772]]
              },
              {
                coords: [[105.0417, 35.69631], [104.180903, 36.557772]]
              },
              {
                coords: [[105.04898, 35.69495], [104.180903, 36.557772]]
              },
              {
                coords: [[105.04719, 35.69082], [104.180903, 36.557772]]
              },
              {
                coords: [[105.06364, 35.67407], [104.180903, 36.557772]]
              },
              {
                coords: [[104.10351, 37.26926], [104.180903, 36.557772]]
              },
              {
                coords: [[104.13127, 37.17816], [104.180903, 36.557772]]
              },
              {
                coords: [[104.05933, 37.19574], [104.180903, 36.557772]]
              },
              {
                coords: [[103.69275, 36.8965], [104.180903, 36.557772]]
              },
              {
                coords: [[104.13127, 37.17816], [104.180903, 36.557772]]
              },
              {
                coords: [[104.87042, 37.02676], [104.180903, 36.557772]]
              },
              {
                coords: [[104.67151, 36.59503], [104.180903, 36.557772]]
              },
              {
                coords: [[104.67893, 36.59156], [104.180903, 36.557772]]
              },
              {
                coords: [[104.97439, 37.01589], [104.180903, 36.557772]]
              },
              {
                coords: [[104.67622, 36.69502], [104.180903, 36.557772]]
              },
              {
                coords: [[105.0339, 36.66992], [104.180903, 36.557772]]
              },
              {
                coords: [[104.9119, 36.66252], [104.180903, 36.557772]]
              },
              {
                coords: [[104.9119, 36.66252], [104.180903, 36.557772]]
              },
              {
                coords: [[104.86246, 36.71745], [104.180903, 36.557772]]
              },
              {
                coords: [[105.32683, 36.44727], [104.180903, 36.557772]]
              },
            ]
          },
          {
            name: "白银市第一人民医院平台",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: 20,
            symbolOffset: [0, 0],
            //symbolRotate:30,
            label: {
              normal: {
                show: true,
                //rotate: 30,
                position: "top",
                //distance: 3,
                backgroundColor: "#fff",
                borderColor: "#aaa",
                fontWeight: 200,
                borderWidth: 1,
                borderRadius: 4,
                formatter: ["{a|白银市第一人民医院平台}"].join("\n"),
                rich: {
                  a: {
                    align: "center",
                    color: "red",
                    padding: 5,
                    fontSize: 15,
                    textShadowBlur: 1,
                    //textShadowColor: '#7A67EE',
                    textBorderColor: "#E8E8E8",
                    textBorderWidth: 1
                  }
                }
              },
              emphasis: {
                show: true,
                //rotate: 30,
                backgroundColor: "#fff",
                borderColor: "#aaa",
                fontWeight: 200,
                borderWidth: 1,
                borderRadius: 4,
                formatter: ["{a|白银市第一人民医院平台}"].join("\n"),
                rich: {
                  a: {
                    align: "center",
                    color: "red",
                    padding: 5,
                    fontSize: 18,
                    textShadowBlur: 1,
                    //textShadowColor: '#7A67EE',
                    textBorderColor: "#E8E8E8",
                    textBorderWidth: 1
                  }
                }
              }
            },
            zlevel: 15,
            itemStyle: {
              normal: {
                //color: '#f58f98',
                color: "#EE00EE",
                borderWidth: 1,
                borderColor: "#EE00EE"
              }
            },
            data: [
              {
                name: "白银市第一人民医院",
                value: [104.180903, 36.557772]
              }
            ]
          }
        ]
      };

      chart.setOption(option_city);
    });
  }
});
