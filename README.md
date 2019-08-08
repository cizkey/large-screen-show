# 大屏展示  

## large-screen-show
纯CSS3使用vw和vh视口单位实现h5页面自适应，gulp自动监听sass改动并保存到css中

当修改了sass里面的代码后，gulp会自动监听修改内容并同名保存到css文件夹中（如果没有css文件夹，将自动创建一个）

## 运行并使用

**首先确保安装了node环境**
node自带npm,不过使用npm下载缓慢且容易出错，建议全局安装淘宝镜像cnpm
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
获取到cnpm以后，我们需要升级一下，输入下面的命令
```bash
cnpm install cnpm -g
```

**其次确保全局安装了gulp**
```bash
cnpm install gulp -g
```

**下载依赖到本地**
```bash
cnpm install  
```

**在本地服务器运行**
```bash
gulp
```
然后打开浏览器，输入 http://localhost:8181 查看页面。

## 布局的适应：视口单位(Viewport units)

在桌面端，视口指的是在桌面端，指的是浏览器的可视区域；而在移动端，它涉及3个视口：Layout Viewport（布局视口），Visual Viewport（视觉视口），Ideal Viewport（理想视口）。

视口单位中的“视口”，桌面端指的是浏览器的可视区域；移动端指的就是Viewport中的Layout Viewport。

![Image text](https://images2017.cnblogs.com/blog/1210235/201709/1210235-20170918162531150-539160393.jpg)

根据CSS3规范，视口单位主要包括以下4个：
>* 1.vw：1vw等于视口宽度的1%。
>* 2.vh：1vh等于视口高度的1%。
>* 3.vmin：选取vw和vh中最小的那个。
>* 4.vmax：选取vw和vh中最大的那个。

 >vh and vw: 相对于视口的高度和宽度，而不是父元素的（CSS百分比是相对于包含它的最近的父元素的高度和宽度）。1vh 等于1/100的视口高度，1vw 等于1/100的视口宽度。

> 比如：浏览器高度950px，宽度为1920px, 1 vh = 950px/100 = 9.5 px，1vw = 1920px/100 =19.2 px。
> vmax相对于视口的宽度或高度中较大的那个。其中最大的那个被均分为100单位的vmax。
> vmin相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为100单位的vmin。

![Image text](https://images2017.cnblogs.com/blog/1210235/201709/1210235-20170918162831821-1344168854.jpg)

> 兼容性问题:

![Image text](https://images2017.cnblogs.com/blog/1210235/201709/1210235-20170918164116462-239899595.png)


