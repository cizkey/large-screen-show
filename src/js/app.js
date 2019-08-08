/*!
 * version: v1.0.0; author : Wangpq;
 * Date: 2017-05-09T09:08Z
 * upDate: 2017-05-23T14:00Z
 */
var app={
    init : function(){
        this._init();
        this.controls();
    },
    _init : function(){
        this.dialog=$(".yd-pop-box");
        this.dialogBtn=this.dialog.find(".btn");
        this.dialogBd=this.dialog.find(".bd");
        this.dialogText=this.dialog.find(".text");
        this.ajaxSrc=config.path+"/lotteryProject/lottery/fetchPhoneCharge.action";
    },
    wpAnimate : function(node,name,fn){
        node.addClass('animated '+name).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            node.removeClass('animated '+name);
            fn && fn(node);
        })
    },
    controls : function(){
        var self=this;

        self.dialogBtn.bind("click",function(){
          self.wpAnimate(self.dialog,"bounceOutUp",function(){
              self.dialog.hide();
          });
        })

        $(".yd-hd a.back").unbind("click").bind("click",function(){
            self.historyBack();
        })

        $("#yaohao").unbind("click").bind("click",function(){
            self.yaohao();
        })

        $(".clickme").unbind("click").bind("click",function(){
            self.chickMe();
        })
    },
    chickMe : function(){
        var self=this;
        $.ajax({
            type: 'post',
            url: self.ajaxSrc,
            success: function(data){
                var data=JSON.parse(data);
                if(data && data.hint!==""){
                    self.autoReadText(data.hint);
                }
            },
            error: function(xhr, type){
                self.dialogShow(function(){
                    self.dialogText.html("<span>对不起出错啦</span>");
                    self.dialogBd.removeClass().addClass("bd c0");
                })
            }
        })
    },
    // 修改摇号的地址
    yaohao : function(){
        var url="http://xkczd.gz163.cn/gzt/ident"
         ,  username =this.getAddressItem("username")
         ,  result= window.gztObj.get3DESCipher("",username);
         window.gztObj.openOtherHtml("摇号",url+"?ac="+result);
    },
    // 返回并刷新
    historyBack : function(){
         window.history.go(-1);
    },
    autoReadText : function(x){
        var self=this;
        if(x==1){  // 您申领的是孟关小客车专段号牌，不能领取话费礼包哦！
            self.dialogShow(function(){
                self.dialogBd.removeClass().addClass("bd c4");
            })
        }
        else if(x==2){  // 已超过活动时间，不能领取！
            self.dialogShow(function(){
                self.dialogText.html("<span>已超过活动时间</br>不能领取!</span>");
                self.dialogBd.removeClass().addClass("bd c0");
            })
        }
        //else if(x==3){  // 该手机不支持充值！
        //}
        else if(x.indexOf("4_")>-1){  // 恭喜，您的手机号" + mobileTel + "已获得300元话费！请于5分钟后查询！
            self.dialogShow(function(){
                $(".yd-pop-box .text strong").text(x.substr(2));
                self.dialogBd.removeClass().addClass("bd c1");
            })
        }
        else if(x==5){  // 您已经领取过了哦！
            self.dialogShow(function(){
                self.dialogBd.removeClass().addClass("bd c2");
            })
        }
        else if(x==6){  // 您还未中签，中签之后才可领取哦！
            self.dialogShow(function(){
                self.dialogBd.removeClass().addClass("bd c3");
            })
        }
        else if(x==7){  // 还没摇号
            self.dialogShow(function(){
                self.dialogText.html("<span>还没摇号</span>");
                self.dialogBd.removeClass().addClass("bd c0");
            })
        }
        else if(x==8){  // 其他错误
            self.dialogShow(function(){
                self.dialogText.html("<span>对不起出错啦</span>");
                self.dialogBd.removeClass().addClass("bd c0");
            })
        }
        else{
            self.dialogShow(function(){
                self.dialogText.html("<span>对不起出错啦</span>");
                self.dialogBd.removeClass().addClass("bd c0");
            })
        }
    },
    dialogShow: function(fn){
        fn && fn();
        this.dialog.show();
        this.wpAnimate(this.dialog,"bounceInDown");
    },
    /**
     * 获取地址栏参数数组
     */
    getAddressArray : function(){
        var arr=[];
        var arr2=window.location.search.substr(1).split("&");
        for(var i=0,l=arr2.length;i<l;i++){
            var x=arr2[i].split("=");
            arr.push({
                name : x[0],
                value : x[1]
            })
        }
        return arr;
    },
    /**
     * 获取某个地址栏参数
     */
    getAddressItem : function(name){
        var arr=this.getAddressArray();
        for(var i=0,l=arr.length;i<l;i++){
            if(arr[i].name===name){
                return arr[i].value;
            }    
        }
    }
}


app.init();