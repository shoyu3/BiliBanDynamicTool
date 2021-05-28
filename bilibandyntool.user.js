// ==UserScript==
// @name         B站动态屏蔽助手
// @namespace    https://bili.fan/
// @version      1.4
// @description  在动态页根据条件屏蔽动态
// @author       Bili.fan
// @match        https://t.bilibili.com/*
// @icon         https://bili.fan/favicon.ico
// @grant        none
// ==/UserScript==
var version = 1.4;

//使用前注意：请在这个脚本的设置页面（即上方选项卡选择"设置"）▶运行时期选择"document-body"

//ajaxhoox.js
!function(t,e){for(var n in e)t[n]=e[n]}(window,function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)n[r]=t[r];return n.target=n.currentTarget=e,n}function o(t){function e(e){return function(){var n=this.hasOwnProperty(e+"_")?this[e+"_"]:this.xhr[e],r=(t[e]||{}).getter;return r&&r(n,this)||n}}function n(e){return function(n){var o=this.xhr,i=this,u=t[e];if("on"===e.substring(0,2))i[e+"_"]=n,o[e]=function(u){u=r(u,i),t[e]&&t[e].call(i,o,u)||n.call(i,u)};else{var s=(u||{}).setter;n=s&&s(n,i)||n,this[e+"_"]=n;try{o[e]=n}catch(t){}}}}function o(e){return function(){var n=[].slice.call(arguments);if(t[e]){var r=t[e].call(this,n,this.xhr);if(r)return r}return this.xhr[e].apply(this.xhr,n)}}return window[s]=window[s]||XMLHttpRequest,XMLHttpRequest=function(){var t=new window[s];for(var r in t){var i="";try{i=u(t[r])}catch(t){}"function"===i?this[r]=o(r):Object.defineProperty(this,r,{get:e(r),set:n(r),enumerable:!0})}var a=this;t.getProxy=function(){return a},this.xhr=t},window[s]}function i(){window[s]&&(XMLHttpRequest=window[s]),window[s]=void 0}Object.defineProperty(e,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.configEvent=r,e.hook=o,e.unHook=i;var s="_rxhr"},function(t,e,n){"use strict";function r(t){if(h)throw"Proxy already exists";return h=new f(t)}function o(){h=null,(0,d.unHook)()}function i(t){return t.replace(/^\s+|\s+$/g,"")}function u(t){return t.watcher||(t.watcher=document.createElement("a"))}function s(t,e){var n=t.getProxy(),r="on"+e+"_",o=(0,d.configEvent)({type:e},n);n[r]&&n[r](o);var i;"function"==typeof Event?i=new Event(e,{bubbles:!1}):(i=document.createEvent("Event"),i.initEvent(e,!1,!0)),u(t).dispatchEvent(i)}function a(t){this.xhr=t,this.xhrProxy=t.getProxy()}function c(t){function e(t){a.call(this,t)}return e[b]=Object.create(a[b]),e[b].next=t,e}function f(t){function e(t,e){var n=new P(t);if(!f)return n.resolve();var r={response:e.response,status:e.status,statusText:e.statusText,config:t.config,headers:t.resHeader||t.getAllResponseHeaders().split("\r\n").reduce(function(t,e){if(""===e)return t;var n=e.split(":");return t[n.shift()]=i(n.join(":")),t},{})};f(r,n)}function n(t,e,n){var r=new H(t),o={config:t.config,error:n};h?h(o,r):r.next(o)}function r(){return!0}function o(t,e){return n(t,this,e),!0}function a(t,n){return 4===t.readyState&&0!==t.status?e(t,n):4!==t.readyState&&s(t,w),!0}var c=t.onRequest,f=t.onResponse,h=t.onError;return(0,d.hook)({onload:r,onloadend:r,onerror:o,ontimeout:o,onabort:o,onreadystatechange:function(t){return a(t,this)},open:function(t,e){var r=this,o=e.config={headers:{}};o.method=t[0],o.url=t[1],o.async=t[2],o.user=t[3],o.password=t[4],o.xhr=e;var i="on"+w;e[i]||(e[i]=function(){return a(e,r)});var u=function(t){n(e,r,(0,d.configEvent)(t,r))};if([x,y,g].forEach(function(t){var n="on"+t;e[n]||(e[n]=u)}),c)return!0},send:function(t,e){var n=e.config;if(n.withCredentials=e.withCredentials,n.body=t[0],c){var r=function(){c(n,new m(e))};return!1===n.async?r():setTimeout(r),!0}},setRequestHeader:function(t,e){return e.config.headers[t[0].toLowerCase()]=t[1],!0},addEventListener:function(t,e){var n=this;if(-1!==l.indexOf(t[0])){var r=t[1];return u(e).addEventListener(t[0],function(e){var o=(0,d.configEvent)(e,n);o.type=t[0],o.isTrusted=!0,r.call(n,o)}),!0}},getAllResponseHeaders:function(t,e){var n=e.resHeader;if(n){var r="";for(var o in n)r+=o+": "+n[o]+"\r\n";return r}},getResponseHeader:function(t,e){var n=e.resHeader;if(n)return n[(t[0]||"").toLowerCase()]}})}Object.defineProperty(e,"__esModule",{value:!0}),e.proxy=r,e.unProxy=o;var h,d=n(0),l=["load","loadend","timeout","error","readystatechange","abort"],v=l[0],p=l[1],y=l[2],x=l[3],w=l[4],g=l[5],b="prototype";a[b]=Object.create({resolve:function(t){var e=this.xhrProxy,n=this.xhr;e.readyState=4,n.resHeader=t.headers,e.response=e.responseText=t.response,e.statusText=t.statusText,e.status=t.status,s(n,w),s(n,v),s(n,p)},reject:function(t){this.xhrProxy.status=0,s(this.xhr,t.type),s(this.xhr,p)}});var m=c(function(t){var e=this.xhr;t=t||e.config,e.withCredentials=t.withCredentials,e.open(t.method,t.url,!1!==t.async,t.user,t.password);for(var n in t.headers)e.setRequestHeader(n,t.headers[n]);e.send(t.body)}),P=c(function(t){this.resolve(t)}),H=c(function(t){this.reject(t)})},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ah=void 0;var r=n(0),o=n(1);e.ah={proxy:o.proxy,unProxy:o.unProxy,hook:r.hook,unHook:r.unHook}}]));

//cookie
/*
BanDynamicSettings=
{'ban_uids':'','ban_nouids':'','ban_keywords':'','ban_other_rep_b':true,'ban_raffle':true}
*/

//Initial Page
var Bbtn=document.createElement('button');
//Bbtn.onclick=
Bbtn.style="position:absolute;right:17px;margin-top: 9px;";
Bbtn.innerHTML='动态屏蔽设置';

var Bdiv1=document.createElement('div');
Bdiv1.id='fade_border';
Bdiv1.className='black_overlay';

var Bdiv2=document.createElement('div');
Bdiv2.id='SettingDiv';
Bdiv2.className='white_content';
Bdiv2.innerHTML='<div class="Ban_SettingPanel" style="text-align: right; cursor: default; /*height: 40px;*/" id="move">\
<span style="font-size: 16px;cursor:pointer;" onclick="document.getElementById(\'SettingDiv\').style.display=\'none\';document.getElementById(\'fade_border\').style.display=\'none\';">关闭</span>\
</div><center>\
<span><nobr>如未生效请在这个脚本的设置页面▶运行时期<wbr>选择"document-body"后重试！</nobr></span><br><br>\
<span>屏蔽用户组（输入UID并用 , 隔开）</span><br>\
<input id="Ban_UID_in" type="text" s="Ban" style="width:70%"><br><br>\
<span>永不屏蔽用户组（输入UID并用 , 隔开，优先级最高）</span><br>\
<input id="Ban_noUID_in" type="text" s="Ban" style="width:70%"><br><br>\
<span>屏蔽关键字（用 , 隔开）</span><br>\
<input id="Ban_keyword_in" type="text" s="Ban" style="width:70%"><br><br>\
<!--<label>屏蔽其他人转发的抽奖动态 <input id="Ban_raffle_in" type="checkbox" /></label>-->\
<input type="checkbox" name="Ban_other_rep_b_in"  id="Ban_other_rep_b_in" style="cursor:pointer;vertical-align:middle;"/>\
<label s="Ban" style="cursor:pointer;" for="Ban_other_rep_b_in">&nbsp;屏蔽用户组也包括其他人转发的动态</label><br><br>\
<input type="checkbox" name="Ban_raffle_in"  id="Ban_raffle_in" style="cursor:pointer;vertical-align:middle;"/>\
<label s="Ban" style="cursor:pointer;" for="Ban_raffle_in">&nbsp;屏蔽转发的抽奖动态</label>\
<br><br>\
<button id="Ban_save">保存设定</button><br><br><span id="Btip"></span>\
</center>\
<span style="left:0;right:0;bottom:0px;position:absolute;text-align:center;">©2021 <a href="//bili.fan" style="color:#178bcf;" target="_blank">Bili.fan</a> | 本项目以 GPL v3 开源 | 版本 '+version+'</span>\
'

var Bstyle=document.createElement('style');
Bstyle.innerHTML='.black_overlay{\
display: none;\
position: absolute;\
top: 0%;\
left: 0%;\
width: 100%;\
height: 100%;\
background-color: black;\
z-index:1001;\
-moz-opacity: 0.8;\
opacity:.80;\
filter: alpha(opacity=80);\
}\
.white_content {\
display: none;\
position: absolute;\
top: 50px;\
left: 15%;\
width: 70%;\
height: 530px;\
font-size: 1.2rem;\
border: 6px solid rgba(102,175,233);\
border-radius: 10px;\
background-color: white;\
z-index:1002;\
overflow: auto;\
}\
label[s=Ban]{vertical-align:middle;display:inline-block;}\
input[s=Ban] {\
text-align:center;\
width: 100%;\
border-radius: 3px;\
font-size: 1.2rem;\
border: 1px solid #D8D8D8;\
transition: box-shadow 0.5s, border 0.5s;\
-webkit-appearance: none;\
height: 25px;\
padding:2px\
}\
input[s=Ban]:focus {\
border-color: #66afe9;\
outline: 0;\
-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\
box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)\
}\
#Ban_save { /* 按钮美化 */\
width: 150px; /* 宽度 */\
height: 40px; /* 高度 */\
border-width: 0px; /* 边框宽度 */\
border-radius: 4px; /* 边框半径 */\
background: #1E90FF; /* 背景颜色 */\
cursor: pointer; /* 鼠标移入按钮范围时出现手势 */\
outline: none; /* 不显示轮廓线 */\
color: white; /* 字体颜色 */\
font-size: 1.2em; /* 字体大小 */\
}\
#Ban_save:hover { /* 鼠标移入按钮范围时改变颜色 */\
opacity: 0.8;\
}#BanSettingBtn { /* 按钮美化 */\
width: 120px; /* 宽度 */\
height: 30px; /* 高度 */\
border-width: 0px; /* 边框宽度 */\
border-radius: 4px; /* 边框半径 */\
background: #00a1d6; /* 背景颜色 */\
cursor: pointer; /* 鼠标移入按钮范围时出现手势 */\
outline: none; /* 不显示轮廓线 */\
color: white; /* 字体颜色 */\
/*font-size: 1.1em; /* 字体大小 */\
}\
#BanSettingBtn:hover { /* 鼠标移入按钮范围时改变颜色 */\
opacity: 0.8;\
}'

setTimeout(function(){
    document.body.appendChild(Bstyle);
    document.body.appendChild(Bdiv1);
    document.body.appendChild(Bdiv2);
    Bbtn.id='BanSettingBtn';
    //('div.tab:nth-child(4)')
    document.querySelector("div.tab:nth-child(4)").appendChild(Bbtn);
    document.getElementById('BanSettingBtn').onclick=function(){ShowDiv('SettingDiv','fade_border')};
},3000);
//弹出隐藏层
function ShowDiv(show_div,bg_div){
    ReadSettings();
    document.getElementById('Btip').innerText='';
    document.getElementById(show_div).style.display='block';
    document.getElementById(bg_div).style.display='block' ;
    var bgdiv = document.getElementById(bg_div);
    bgdiv.style.width = '100%';//document.body.scrollWidth;
    document.getElementById(bg_div).style.height='100%';
    document.getElementById('Ban_save').onclick=function(){
        document.getElementById('Btip').innerText='';
        var Aa=document.getElementById('Ban_UID_in').value;
        var Ad=document.getElementById('Ban_noUID_in').value;
        var Ab=document.getElementById('Ban_keyword_in').value;
        var Ae=document.getElementById('Ban_other_rep_b_in').checked;
        var Ac=document.getElementById('Ban_raffle_in').checked;
        var A={}
        A['ban_uids']=Aa;
        A['ban_nouids']=Ad;
        A['ban_keywords']=Ab;
        A['ban_raffle']=Ac;
        A['ban_other_rep_b']=Ae;
        var setti=JSON.stringify(A);
        //var resu=
        localStorage.setItem('BanDynamicSettings',setti);
        //if (resu){
        document.getElementById('Btip').innerHTML='屏蔽设定保存成功，<a href="javascript:location.reload();" style="color:#178bcf;">刷新页面</a>即可完全生效';
        //}else{alert('屏蔽设置保存失败')}});
    };
}

function ReadSettings(){
    try{
        var sett=localStorage.getItem('BanDynamicSettings');
        var Ban_Settings=JSON.parse(sett);
        document.getElementById('Ban_UID_in').value=Ban_Settings['ban_uids'];
        document.getElementById('Ban_noUID_in').value=Ban_Settings['ban_nouids'];
        document.getElementById('Ban_keyword_in').value=Ban_Settings['ban_keywords'];
        document.getElementById('Ban_raffle_in').checked=Ban_Settings['ban_raffle'];
        document.getElementById('Ban_other_rep_b_in').checked=Ban_Settings['ban_other_rep_b'];
    }catch(e){}
}//else if (a=='save'){

//关闭弹出层
/*function CloseDiv(show_div,bg_div)
{
    document.getElementById(show_div).style.display='none';
    document.getElementById(bg_div).style.display='none';
};*/
function report_reason(z, a, b, c) {
    var reason1;
    if (c == 1) {
        reason1 = '用户位于预设屏蔽列表内'
    } else if (c == 2) {
        reason1 = '这是一条抽奖动态'
    } else if (c == 3) {
        reason1 = '关键字匹配过滤'
    } else if (c == 4) {
        reason1 = '5.20限定-单身狗友好屏蔽关键字'
    }
    var reason2 = 'NO.' + (z+1) + ' ' + b + '(UID:' + a + ')的动态已被屏蔽\n原因：' + reason1;
    console_log(reason2);
}

function report_reason2(z, a, b, c, d, e) {
    var reason1;
    if (c == 5) {
        reason1 = '用户位于预设屏蔽列表内'
    }
    var reason2 = 'NO.' + (z+1) + ' ' + b + '(UID:' + a + ')转发的动态因原用户'+ e + '(UID:' + d + ')位于屏蔽组已被隐藏'//\n原因：' + reason1;
    console_log(reason2);
}

function console_log(a) {
    console.log("%c"+a,"color:#00a1d6")
}

function RemoveUser(v, xhr) {
    var BanSettings;
    try{
        BanSettings=JSON.parse(localStorage.getItem('BanDynamicSettings'));
    }catch(e){BanSettings=JSON.parse('{"ban_uids":"","ban_keywords":"","ban_nouids":"","ban_other_rep_b":false,"ban_raffle":false}')}
    if (!BanSettings){BanSettings=JSON.parse('{"ban_uids":"","ban_keywords":"","ban_nouids":"","ban_other_rep_b":false,"ban_raffle":false}')}
    //console.log(BanSettings);
    //var Ban_UIDs = [229778960, 385455384, 14135892];
    var Ban_UIDs=BanSettings['ban_uids'].replace(/\n/,'').split(',');
    var Ban_noUIDs=BanSettings['ban_nouids'].replace(/\n/,'').split(',');
    var Ban_KeyWords = BanSettings['ban_keywords'];
    //var Ban_KeyWords2 = '爱,单身,520';
    //console_log(xhr.responseURL);
    if (xhr.responseURL.indexOf('api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new') != -1 || xhr.responseURL.indexOf('api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_history') != -1) {
        console_log('成功拦截到动态数据，处理中…');
        console_log('屏蔽用户组：'+BanSettings['ban_uids'].replace(/\n/,'')+'\n屏蔽白名单：'+BanSettings['ban_nouids'].replace(/\n/,'')+'\n屏蔽关键字：'+Ban_KeyWords+'\n隐藏转发屏蔽用户组动态：'+BanSettings['ban_other_rep_b']+'\n屏蔽抽奖动态：'+BanSettings['ban_raffle'])
        try {
            var ResJson = JSON.parse(v);
        } catch(e) {
            return;
        }
        //console_log(ResJson);
        for (var i = 0; i < ResJson['data']['cards'].length; i++) {
            // 处理动态ID
            ResJson['data']['cards'][i]['desc']['dynamic_id']=ResJson['data']['cards'][i]['desc']['dynamic_id_str'];
            ResJson['data']['cards'][i]['desc']['orig_dy_id']=ResJson['data']['cards'][i]['desc']['orig_dy_id_str'];
            ResJson['data']['cards'][i]['desc']['pre_dy_id']=ResJson['data']['cards'][i]['desc']['pre_dy_id_str'];
            //console_log(Ban_UIDs.indexOf(ResJson['data']['cards'][i]['desc']['uid'])!=-1);
            //
            //console_log(Ban_UIDs);
            if (Ban_noUIDs.indexOf(ResJson['data']['cards'][i]['desc']['uid'].toString()) == -1) {
                // 1.屏蔽用户
                if (Ban_UIDs.indexOf(ResJson['data']['cards'][i]['desc']['uid'].toString()) != -1) {
                    report_reason(i, ResJson['data']['cards'][i]['desc']['uid'], ResJson['data']['cards'][i]['desc']['user_profile']['info']['uname'], 1);
                    delete ResJson['data']['cards'][i];
                    continue;
                }
                // 1.1.屏蔽转发源用户
                if (BanSettings['ban_other_rep_b']){
                    try{
                        //console_log(ResJson['data']['cards'][i]['desc']['origin']['uid']);
                        if (Ban_UIDs.indexOf(ResJson['data']['cards'][i]['desc']['origin']['uid'].toString()) != -1) {
                            report_reason2(i, ResJson['data']['cards'][i]['desc']['uid'], ResJson['data']['cards'][i]['desc']['user_profile']['info']['uname'], 5, ResJson['data']['cards'][i]['desc']['origin']['uid'], JSON.parse(ResJson['data']['cards'][i]['card'])['origin_user']['info']['uname']);
                            var nowDynCard=JSON.parse(ResJson['data']['cards'][i]['card']);
                            ResJson['data']['cards'][i]['desc']['origin']['status']=0;
                            ResJson['data']['cards'][i]['desc']['origin']['acl']=128;
                            ResJson['data']['cards'][i]['desc']['orig_type']=1024;
                            delete ResJson['data']['cards'][i]['displsy'];
                            delete nowDynCard['origin'];delete nowDynCard['origin_extend_json'];delete nowDynCard['origin_user'];
                            nowDynCard['item']['orig_type']=1024;
                            nowDynCard['item']['miss']=1;
                            nowDynCard['item']['tips']="源动态发送者位于屏蔽用户组中";
                            ResJson['data']['cards'][i]['card']=JSON.stringify(nowDynCard);
                            //console.log(ResJson['data']['cards'][i])
                            //console.log(nowDynCard);
                            continue;
                        }
                    }catch(e){/*console_log(e);console.log(ResJson['data']['cards'][i])*/}
                }
                // 2.屏蔽转发的抽奖动态
                var dycont = JSON.parse(ResJson['data']['cards'][i]['card']);
                if (BanSettings['ban_raffle']){
                    var dyrepcont = '(Empty)';
                    try {
                        dyrepcont = JSON.parse(dycont['origin'])['item']['description'];
                        if (dyrepcont == undefined) {
                            dyrepcont = JSON.parse(dycont['origin'])['item']['content'];
                        }
                    } catch(e) {
                        dyrepcont = '(Empty)';
                    }
                    if (dyrepcont == undefined) {
                        dyrepcont = '(Empty)';
                    }
                    if (CHKCJDT(dyrepcont)) {
                        report_reason(i, ResJson['data']['cards'][i]['desc']['uid'], ResJson['data']['cards'][i]['desc']['user_profile']['info']['uname'], 2);
                        delete ResJson['data']['cards'][i];
                        continue;
                    }
                }
                // 3.屏蔽关键字
                var needConti=false;
                var kwlist1=Ban_KeyWords.split(',');
                var dytcont='(Empty)';
                dytcont = dycont['item']['description'];
                if (dytcont == undefined) {
                    dytcont = dycont['item']['content'];
                    if (dytcont == undefined) {
                        try{
                            dytcont = dycont['vest']['content'];
                        }catch(e){}
                        if (dytcont == undefined) {
                            dytcont = '(Empty)';
                        }
                        //console_log(dycont);
                    }
                }
                //console_log(dytcont);
                for (var j=0;j<kwlist1.length;j++){
                    var kwMatch;
                    if (kwlist1[j]!=''){
                        //eval('kwMatch=/'+kwlist1[j]+'/g');//放弃eval
                        kwMatch=new RegExp(kwlist1[j],"g")
                        //console_log(kwMatch,dytcont);
                        if (kwMatch.test(dytcont)) {
                            report_reason(i, ResJson['data']['cards'][i]['desc']['uid'], ResJson['data']['cards'][i]['desc']['user_profile']['info']['uname'], 3);
                            delete ResJson['data']['cards'][i];
                            needConti=true;
                            break;
                        }
                    }
                }
                if (needConti){continue;}
                // 4.(5.20限定-屏蔽关键字)
                /*
            needConti=false;
            var kwlist2=Ban_KeyWords2.split(',');
            for (var k=0;k<kwlist2.length;k++){
                var kwMatch2;
                eval('kwMatch2=/'+kwlist2[k]+'/g');
                if (kwMatch2.test(dytcont)) {
                    report_reason(i, ResJson['data']['cards'][i]['desc']['uid'], ResJson['data']['cards'][i]['desc']['user_profile']['info']['uname'], 4);
                    delete ResJson['data']['cards'][i];
                    needConti=true;
                    break;
                }
            }
            if (needConti){continue;}*/
            }else{
                console_log('NO.' + (i+1) + ' ' + ResJson['data']['cards'][i]['desc']['user_profile']['info']['uname'] + '(UID:' + ResJson['data']['cards'][i]['desc']['uid'] + ')位于白名单，跳过识别')
            }
        }
        ResJson['code'] = 0;
        v = ResJson;
        //v=JSON.stringify(ResJson);
        //console_log(xhr);
        //console_log(v);
        console_log('处理完成，返回处理好的数据');
        return v;
    }
}
function CHKCJDT(dycont0) {
    dycont0 = dycont0.replace(/\n/g, '');
    var cjkwall = dycont0.search(/(?=.*抽)(?=.*奖)^.*|(?=.*抽)(?=.*送)^.*|(?=.*关)(?=.*转)^.*|(?=.*转)(?=.*评)^.*|(?=.*转)(?=.*抽)^.*|(?=.*转)(?=.*留言)^.*|(?=.*转)(?=.*抽)^.*|(?=.*评)(?=.*抽)^.*|(?=.*赞)(?=.*抽)^.*|(?=.*转)(?=.*送)^.*|(?=.*评)(?=.*送)^.*|(?=.*赞)(?=.*送)^.*|(?=.*揪)(?=.*送)^.*/g);
    if (cjkwall == -1) {
        cjkwall = false
    } else {
        cjkwall = true
    }
    //console_log(cjkwall)
    return cjkwall
}

(function() {
    //'use strict';
    console_log('B站屏蔽动态 From Bili.fan 版本 ' + version);
    setTimeout(function() {
        ah.hook({
            responseText: {
                getter: RemoveUser
            },
            response: {
                getter: RemoveUser
            }
        })
    },
               1000)
    // Your code here...
})();
