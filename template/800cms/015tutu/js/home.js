
String.prototype.replaceAll  = function(s1,s2){ return this.replace(new RegExp(s1,"gm"),s2); }
String.prototype.trim=function(){ return this.replace(/(^\s*)|(\s*$)/g, ""); }
var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(str){var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&0x3)<<4);out+="==";break}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt((c2&0xF)<<2);out+="=";break}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=base64EncodeChars.charAt(c3&0x3F)}return out}function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c1==-1);if(c1==-1)break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff]}while(i<len&&c2==-1);if(c2==-1)break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)return out;c3=base64DecodeChars[c3]}while(i<len&&c3==-1);if(c3==-1)break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)return out;c4=base64DecodeChars[c4]}while(i<len&&c4==-1);if(c4==-1)break;out+=String.fromCharCode(((c3&0x03)<<6)|c4)}return out}function utf16to8(str){var out,i,len,c;out="";len=str.length;for(i=0;i<len;i++){c=str.charCodeAt(i);if((c>=0x0001)&&(c<=0x007F)){out+=str.charAt(i)}else if(c>0x07FF){out+=String.fromCharCode(0xE0|((c>>12)&0x0F));out+=String.fromCharCode(0x80|((c>>6)&0x3F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}else{out+=String.fromCharCode(0xC0|((c>>6)&0x1F));out+=String.fromCharCode(0x80|((c>>0)&0x3F))}}return out}function utf8to16(str){var out,i,len,c;var char2,char3;out="";len=str.length;i=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out+=str.charAt(i-1);break;case 12:case 13:char2=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x1F)<<6)|(char2&0x3F));break;case 14:char2=str.charCodeAt(i++);char3=str.charCodeAt(i++);out+=String.fromCharCode(((c&0x0F)<<12)|((char2&0x3F)<<6)|((char3&0x3F)<<0));break}}return out}

var MAC={
    'Url': document.URL,
    'Title': document.title,
    'UserAgent' : function(){
        var ua = navigator.userAgent;//navigator.appVersion
        return {
            'mobile': !!ua.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            'ios': !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            'android': ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, //android终端或者uc浏览器
            'iPhone': ua.indexOf('iPhone') > -1 || ua.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            'iPad': ua.indexOf('iPad') > -1, //是否iPad
            'trident': ua.indexOf('Trident') > -1, //IE内核
            'presto': ua.indexOf('Presto') > -1, //opera内核
            'webKit': ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            'gecko': ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
            'weixin': ua.indexOf('MicroMessenger') > -1 //是否微信 ua.match(/MicroMessenger/i) == "micromessenger",
        };
    }(),
    'Copy': function(s){
        if (window.clipboardData){ window.clipboardData.setData("Text",s); }
        else{
            if( $("#mac_flash_copy").get(0) ==undefined ){ $('<div id="mac_flash_copy"></div>'); } else {$('#mac_flash_copy').html(''); }
            $('#mac_flash_copy').html('<embed src='+SitePath+'"images/_clipboard.swf" FlashVars="clipboard='+escape(s)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>');
        }
        MAC.Pop.Msg(100,20,'复制成功',1000);
    },
    'Image':{
        'Lazyload':{
            'Show': function(){
                try { $("img.lazy").lazyload(); }catch(e){};
            },
            'Box': function($id){
                $("img.lazy").lazyload({
                    container: $("#"+$id)
                });
            }
        }
    },
    'Search':{
        'Init':function(){
            $('.mac_search').click(function(){
                var that=$(this);
                var url = that.attr('data-href') ? that.attr('data-href') : maccms.path + '/index.php/vod/search.html';
                location.href = url + '?wd='+ encodeURIComponent($("#wd").val());
            });
        },
        'Submit':function(){

            return false;
        }
    }
}

$(function(){
    //异步加载图片初始化
    MAC.Image.Lazyload.Show();
    MAC.Image.Lazyload.Box("ttest");

    //定时任务初始化
    //MAC.Timming();

    // //自动跳转手机和pc网页地址
    // MAC.Adaptive();
    // //验证码初始化
    // MAC.Verify.Init();
    // //分页跳转初始化
    // MAC.PageGo.Init();
    // //用户部分初始化
    // MAC.User.Init();

    // //二维码初始化
    // MAC.Qrcode.Init();

    // //顶和踩初始化
    // MAC.Digg.Init();
    // //评分初始化
    // MAC.Score.Init();
    // //星星评分初始化
    // MAC.Star.Init();
    // //点击数量
    // MAC.Hits.Init();

    // //历史记录初始化
    // MAC.History.Init();
    // //用户访问记录初始化
    // MAC.Ulog.Init();

    // //联想搜索初始化
    // MAC.Suggest.Init('.mac_wd',1,'');

	//菜单收缩
	var myNav;
	$(".mainnav .item").hover(function(){
		var currId = $(this).attr("data-id");
		$(this).addClass("show");
		$(".subnav"+currId).css({"display":"block","opacity":1});
		//$(".subnav"+currId).fadeIn();
	},function(){
		var currId = $(this).attr("data-id");
		$(this).removeClass("show");
		$(".subnav"+currId).css({"display":"none","opacity":0});
		//$(".subnav"+currId).fadeOut();
	})
	$(".sitenav").hover(function(){
		var currId = $(this).attr("data-id");
		$(".mainnav"+currId).addClass("show");
		$(this).css({"display":"block","opacity":1});
		//$(this).fadeIn();
	},function(){
		var currId = $(this).attr("data-id");
		$(".mainnav"+currId).removeClass("show");
		$(this).css({"display":"none","opacity":0});
		//$(this).fadeOut();
	})


	//关闭底部悬浮
    $('body').on('click', '.ffclose', function(){
        $(".adwrap_bm").remove();
        MAC.Cookie.Set("adBmShow", 1, 0.007);
    })
	//关闭对联
    $('body').on('click', '.close-ed', function(){
        $(this).parents('.couplet-ed').remove();
		if($(this).hasClass("close-ed-left")){MAC.Cookie.Set("ed-left", 0, 0.003);}
		if($(this).hasClass("close-ed-right")){MAC.Cookie.Set("ed-right", 0, 0.003);}
    })

    $('body').on('click', '.close-ad-right', function(){
        $(this).parents('.ad-content').remove()
        MAC.Cookie.Set("ad-right", 1, 0.007);
    })

	// //视频详情展开
	// if($.trim($(".introduction-content").html())==""){$(".introduction-content").html('<p>小编很懒，什么也没留下，狼友们请直接视频观战吧~！</p>');}
	// $(".toggle").hover(function(){$(this).children(".toggle-content").show();},function(){$(this).children(".toggle-content").hide();})

	//ajax异步加载
	var ajaxObj = {};
	$(".aj_control").click(function(){
		var colBody = $(this).parent().parent().next(".col_body");
		colBody.find(".v_pic").append('<div class="aj_loading"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>');
		var ajData = $(this).attr("data-ajax").split(",");
		var ajIdx = ajData[0];
		console.log(ajData);
		ajaxObj[ajIdx] = {
			//ajtarget:$(".aj-obj-"+ajIdx),
			ajfrom:ajData[1],
			ajnum:ajData[2],
			ajby:ajData[3],
			ajpageCurr:MAC.Cookie.Get("cookiepage_"+ajData[0])>0 ? MAC.Cookie.Get("cookiepage_"+ajData[0]) : 2,
			ajlevel:ajData[4] ? ajData[4] : "",
		}
		console.log(ajaxObj[ajIdx]);
		$.ajax({
			type:"get",
			url:"/index.php/ajax/data.html",
			data:{
				mid:1,
				page:ajaxObj[ajIdx].ajpageCurr,
				limit:ajaxObj[ajIdx].ajnum,
				tid:ajaxObj[ajIdx].ajfrom,
				by:ajaxObj[ajIdx].ajby,
				level:ajaxObj[ajIdx].ajlevel,
			},
			success:function(data){
				var nowCookiePage = ajaxObj[ajIdx].ajpageCurr;
				nowCookiePage++;
				console.log(data.pagecount);
				if(nowCookiePage>=data.pagecount){nowCookiePage=1;}
				MAC.Cookie.Set("cookiepage_"+ajData[0],nowCookiePage);
				console.log(nowCookiePage);
				console.log(data);
				//插入DOM
				var dataList = data.list;
				var ajItems = $(".aj_item_"+ajData[0]).find(".aj_item");
				console.log(ajItems);
				var actionNum = Math.min(dataList.length,ajItems.length);
				console.log(actionNum);
				var eachIdx = 0;
				ajItems.each(function(){
					console.log(eachIdx+"***"+actionNum);
					if(eachIdx>=actionNum){return;}
					$(this).find(".aj_img").attr({"src":dataList[eachIdx].vod_pic,"alt":dataList[eachIdx].vod_name});
					$(this).find(".aj_tit").text(dataList[eachIdx].vod_name);
					$(this).find(".aj_link").attr({"href":"/vodplay/"+dataList[eachIdx].vod_id+"-1-1.html","title":dataList[eachIdx].vod_name});
					//$(this).find(".aj_typename").text(dataList[eachIdx].vod_class);
					$(this).find(".aj_view").text(dataList[eachIdx].vod_hits);
					$(this).find(".aj_loading").remove();
					eachIdx++;
				})
			},
			error:function(err){
				console.log(err)
			}
		})


	})
});


