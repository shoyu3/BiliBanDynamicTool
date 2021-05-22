# BiliBanDynamicTool
B站动态屏蔽助手，项目开始于2021-5-18

目前因技术限制只能往其中放入完整jQuery，如有各路来的大佬能给一个精简方案完善将不胜感激

## ✨介绍
这是一个浏览器用户脚本，支持 油猴/暴力猴/Via浏览器/Alook浏览器，可以很方便地按条件过滤动态，目前支持：

|用户黑名单|用户白名单|关键字匹配|抽奖动态过滤|
|---------|---------|---------|-----------|

## 🛠使用方式

<b>可安装扩展程序的浏览器（Chrome，Edge，Firefox，Safari，Opera，或安卓端yandex，kiwi等）：</b>

1.在对应浏览器扩展程序商店搜索“Tampermonkey”（此教程以油猴作为演示），选择第一项后下载并安装  
2.点击扩展程序栏中（或位于其他位置）的油猴图标，选择“管理面板”并进入  
3.在弹出的标签页的上方导航栏点击“实用工具”  
4.在页面下方的“从URL安装”右侧的输入框粘贴以下网址并点击安装：https://github.com/shoyu3/BiliBanDynamicTool/raw/main/bilibandyntool.user.js （也可直接点击这条链接安装）  
注：如因国内网络受阻导致无法正常打开可使用此链接：https://acg.cash/userjs/bandyn/  
5.将弹出新标签页询问是否安装，点击“安装”  
6.安装完成后在已安装脚本列表中找到此脚本，点击右侧的“编辑”按钮  
7.在弹出的标签页点击“编辑器”选项卡右侧的“设置”  
8.将运行时期改为“document-body”即可生效

<b>Via浏览器：</b><!--，Alook浏览器（或支持用户脚本的浏览器，此教程以Via浏览器作为演示）-->

1.前往https://github.com/shoyu3/BiliBanDynamicTool/raw/main/bilibandyntool.min.user.js ，全选并复制其中的代码以备用  
注：如因国内网络受阻导致无法正常打开可使用此链接：https://acg.cash/userjs/bandyn/?min=1  
2.在Via浏览器中打开设置页面，选择“脚本”并进入  
3.点击右上角的“+”按钮，选择“添加脚本”  
4.在“域名”输入框中输入```t.bilibili.com```，接着在“代码”输入框中粘贴刚才复制的代码  
5.点击“确定”并保存即可生效

<b>Alook浏览器：</b>
1.前往https://github.com/shoyu3/BiliBanDynamicTool/raw/main/bilibandyntool.min.user.js ，全选并复制其中的代码以备用  
注：如因国内网络受阻导致无法正常打开可使用此链接：https://acg.cash/userjs/bandyn/?min=1  
2.在Alook浏览器中打开设置页面，选择“自定义设置”-“JavaScript扩展”并进入  
3.点击右上角的“+”按钮，选择“被动扩展”  
4.名称可随意填写，匹配类型选择“域名”，匹配值输入```t.bilibili.com```，运行时间保持默认，接着在“JavaScript代码”输入框中粘贴刚才复制的代码  
5.点击右上角的“保存”按钮即可生效

## 🚧已知Bug

暂未发现严重或较严重的Bug，欢迎在本项目提Issue

## 🧭TODO

（暂无）
