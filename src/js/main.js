// 全局常量
const globalConst = {
  timeFormatSytle: "HH:mm:ss",
  dayFormatSytle: "YYYY年MM月DD日 dddd"
};

$(function() {
  // 使用中文语言日期
  moment.locale('zh-cn'); 
  let momObj = moment();
  let timeDom = $("#time");
  timeDom.text(momObj.format(globalConst.timeFormatSytle));
  let dataDom = $("#day");
  dataDom.text(momObj.format(globalConst.dayFormatSytle));

  let timer = setInterval(function() {
    momObj = moment();
    timeDom.text(momObj.format(globalConst.timeFormatSytle));
    dataDom.text(momObj.format(globalConst.dayFormatSytle));
  }, 1000);
});
