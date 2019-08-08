// 加载机构概况的图标
$(function loadOrg() {
  var data = [2, 3, 4, 5, 8];
  var data1 = [3, 5, 6, 2, 4];
  var data2 = [4, 2, 3, 6, 5];
  var data3 = [6, 4, 3, 2, 4];
  var org_echart = echarts.init(document.getElementById('org_echart'));
  // 指定图表的配置项和数据
  optionGroup = {
      tooltip: {
          trigger: 'axis',
          // formatter: "name : {b} <br/>grade: {c} "
      },
      color: ['#4BC795', '#04BDF6', '#FCAB1C', '#F76041'],
      legend: {
          right: 0,
          height: '40px',
          orient: 'vertical',
          textStyle: {
              color: '#fff'
          },
          data: ['每千人拥有床位', '每千人卫生技术人员', '每千人执业(助理)医师', '每千人注册护士']
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '1%',
          top: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          axisLine: {
              lineStyle: {
                  color: '#03B6F0'
              }
          },
          axisTick: {
              show: false
          },
          data: ['市', '省', '全国']
      },
      yAxis: {
          name: '%',
          type: 'value',
          axisLine: {
              lineStyle: {
                  color: '#03B6F0'
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#054872'
              }
          },
          axisTick: {
              show: false
          },
      },
      series: [{
          data: data,
          type: 'bar',
          smooth: true,
          barCategoryGap: 25,
          barWidth: '10%',
          label: {
              normal: {
                  show: true,
              }
          },
          lineStyle: {
              normal: {
                  width: 3,
                  shadowColor: '#4BC795',
                  shadowBlur: 10,
                  // shadowOffsetY: 10
              }
          },
          name: '每千人拥有床位',
      }, {
          data: data1,
          type: 'bar',
          smooth: true,
          barCategoryGap: 25,
          barWidth: '10%',
          label: {
              normal: {
                  show: true,
              }
          },
          lineStyle: {
              normal: {
                  width: 3,
                  shadowColor: '#04BDF6',
                  shadowBlur: 10,
                  // shadowOffsetY: 10
              }
          },
          name: '每千人卫生技术人员',
      }, {
          data: data2,
          type: 'bar',
          smooth: true,
          barCategoryGap: 25,
          barWidth: '10%',
          label: {
              normal: {
                  show: true,
              }
          },
          lineStyle: {
              normal: {
                  width: 3,
                  shadowColor: '#FCAB1C',
                  shadowBlur: 10,
                  // shadowOffsetY: 10
              }
          },
          name: '每千人执业(助理)医师',
      }, {
          data: data3,
          type: 'bar',
          smooth: true,
          barCategoryGap: 25,
          barWidth: '10%',
          label: {
              normal: {
                  show: true,
              }
          },
          lineStyle: {
              normal: {
                  width: 3,
                  shadowColor: '#F76041',
                  shadowBlur: 10,
                  // shadowOffsetY: 10
              }
          },
          name: '每千人注册护士',
      }],
  };
  // 使用刚指定的配置项和数据显示图表。
  org_echart.setOption(optionGroup);
})();