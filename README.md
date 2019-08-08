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


