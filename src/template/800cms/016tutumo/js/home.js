
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
    'Verify': {
        'Init': function(){
            MAC.Verify.Focus();
            MAC.Verify.Click();
        },
        'Focus': function(){//验证码框焦点
            $('body').on("focus", ".mac_verify", function(){
                $(this).removeClass('mac_verify').after(MAC.Verify.Show());
                $(this).unbind();
            });
        },
        'Click': function(){//点击刷新
            $('body').on('click', 'img.mac_verify_img', function(){
                $(this).attr('src', maccms.path +'/index.php/verify/index.html?r='+Math.random());
            });
        },
        'Refresh':function(){
            $('.mac_verify_img').attr('src', maccms.path +'/index.php/verify/index.html?r='+Math.random());
        },
        'Show':function(){
            return '<img class="mac_verify_img" src="'+ maccms.path +'/index.php/verify/index.html?"  title="看不清楚? 换一张！">';
        }
    },
    'PageGo':{
        'Init':function() {
            $('.mac_page_go').click(function () {
                var that =$(this);
                var url = that.attr('data-url');
                var total = that.attr('data-total');
                var sp = that.attr('data-sp');
                var page= $('#page').val();

                if(page>0&&(page<=total)){
                    url=url.replace(sp + 'PAGELINK',page).replace('PAGELINK',page);
                    location.href=url;
                }
                return false;
            });
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
    },
    'User':{
        'BoxShow':0,
        'IsLogin':0,
        'UserId':'',
        'UserName':'',
        'GroupId':'',
        'GroupName':'',
        'Portrait':'',
        // 'Init':function(){
        //     if($('.mac_user').length >0){
        //         $('body').on('click', '.mac_user', function(e){
        //             MAC.User.Login();
        //         });

        //         $('.mac_user').hover(function(e){
        //             $('.mac_user_box').show();
        //         }, function(){
        //             $('.mac_user_box').hover(function(){
        //                 MAC.User.BoxShow = 1;
        //             }, function(){
        //                 MAC.User.BoxShow = 0;
        //                 $('.mac_user_box').hide();
        //             });
        //         });
        //     }

        //     if(MAC.Cookie.Get('user_id') !=undefined && MAC.Cookie.Get('user_id')!=''){
        //         var url = maccms.path + '/index.php/user';
        //         MAC.User.UserId = MAC.Cookie.Get('user_id');
        //         MAC.User.UserName = MAC.Cookie.Get('user_name');
        //         MAC.User.GroupId = MAC.Cookie.Get('group_id');
        //         MAC.User.GroupName = MAC.Cookie.Get('group_name');
        //         MAC.User.Portrait = MAC.Cookie.Get('user_portrait');
        //         MAC.User.IsLogin = 1;

        //         if($('.mac_user').length >0) {
        //             if ($('.mac_user').prop("outerHTML").substr(0, 2) == '<a') {
        //                 $('.mac_user').attr('href', url);
        //                 $('.mac_user').text(MAC.User.UserName);
        //             }
        //             else {
        //                 //$('.mac_user').html('<a class="mac_text" href="'+ url +'">'+ name +'</a>');
        //             }

        //             var html = '<div class="mac_drop_box mac_user_box" style="display: none;">';
        //             html += '<ul class="logged"><li><a target="_blank" href="' + url + '">用户中心</a></li><li class="logout"><a class="logoutbt" href="javascript:;" onclick="MAC.User.Logout();" target="_self"><i class="user-logout"></i>退出</a></li></ul>'

        //             $('.mac_user').after(html);
        //             var h = $('.mac_user').height();
        //             var position = $('.mac_user').position();
        //             $('.mac_user_box').css({'left': position.left, 'top': (position.top + h)});
        //         }

        //     }
        //     else{

        //     }

        // },
        'CheckLogin':function(){
            if(MAC.User.IsLogin == 0){
                MAC.User.Login();
            }
        },
        'Login':function(){
            var ac='ajax_login';
            if(MAC.Cookie.Get('user_id') !=undefined && MAC.Cookie.Get('user_id')!=''){
                ac= 'ajax_info';
            }
            MAC.Pop.Show(400,380,'用户登录',maccms.path+'/index.php/user/'+ac,function($r){
                $('body').on('click', '.login_form_submit', function(e){
                    $.ajax({
                        type: 'POST',
                        url: maccms.path + '/index.php/user/login',
                        data: $('.mac_login_form').serialize(),
                        success:function($r){
                            alert($r.msg);
                            if($r.code == 1){
                                location.reload();
                            }
                        }
                    });
                });
            });
        },
        'Logout':function(){
            $.ajax({
                type: 'post',
                url: maccms.path + '/index.php/user/logout',
                success:function($r){
                    MAC.Pop.Msg(100,20,$r.msg,1000);
                    if($r.code == 1){
                        location.reload();
                    }
                }
            });
        },
        'PopedomCallBack':function(trysee,h) {
            window.setTimeout(function(){
                $(window.frames["player_if"].document).find(".MacPlayer").html(h);
            },1000*10*trysee);
        },
        'BuyPopedom':function(o){
            var $that = $(o);
            if($that.attr("data-id")){
                if (confirm('您确认购买此条数据播放权限吗？')) {
                    $.ajax({
                        url: maccms.path + '/index.php/user/ajax_buy_popedom.html?id=' + $that.attr("data-id") + '&sid=' + $that.attr("data-sid") + '&nid=' + $that.attr("data-nid") + '&type=' + $that.attr("data-type"),
                        cache: false,
                        dataType: 'json',
                        success: function ($r) {
                            $that.addClass('disabled');
                            MAC.Pop.Msg(300, 50, $r.msg, 2000);
                            if ($r.code == 1) {
                                top.location.reload();
                            }
                        },
                        complete: function () {
                            $that.removeClass('disabled');
                        }
                    });
                }
            }
        }
    },
    'AdsWrap':function(w,h,n){
        document.writeln('<img width="'+w+'" height="'+h+'" alt="'+n+'" style="background-color: #CCCCCC" />');
    },
    'Css':function($url){
        $("<link>").attr({ rel: "stylesheet",type: "text/css",href: $url}).appendTo("head");
    },
    'Js':function($url){
        $.getScript($url, function(response, status) {

        });
    },
    'Desktop':function(s){
        location.href= maccms.path + '/index.php/ajax/desktop?name='+encodeURI(s)+'&url=' + encodeURI(location.href);
    },
    'Timming':function(){

    },
    'Error':function(tab,id,name){

    },
    'AddEm':function(obj,i){
        var oldtext = $(obj).val();
        $(obj).val( oldtext + '[em:' + i +']' );
    },
    'Remaining':function(obj,len,show){
        var count = len - $(obj).val().length;
        if(count < 0){
            count = 0;
            $(obj).val($(obj).val().substr(0,200));
        }
        $(show).text(count);
    }
}

$(function(){
    //异步加载图片初始化
    MAC.Image.Lazyload.Show();
    //定时任务初始化
    //MAC.Timming();

    //自动跳转手机和pc网页地址
    // MAC.Adaptive();
    //验证码初始化
    MAC.Verify.Init();
    //分页跳转初始化
    MAC.PageGo.Init();
    //用户部分初始化
    // MAC.User.Init();

    //二维码初始化
    // MAC.Qrcode.Init();

    //顶和踩初始化
    // MAC.Digg.Init();
    //评分初始化
    // MAC.Score.Init();
    //星星评分初始化
    // MAC.Star.Init();
    //点击数量
    // MAC.Hits.Init();

    //历史记录初始化
    // MAC.History.Init();
    //用户访问记录初始化
    // MAC.Ulog.Init();

    //联想搜索初始化
    // MAC.Suggest.Init('.mac_wd',1,'');

	//搜索事件
	$(".search_ctl").click(function(){
		$(this).hide().next(".search_form").show();
	});
	$(".search_close").click(function(){
		$(this).parent(".search_form").hide().prev(".search_ctl").show();
	});
	//菜单展开
	var flag=0;
	$('body').on('click','.opennav', function(event){
		event.stopPropagation()
		if (flag === 0) {
			$(".allnav").fadeIn();
			$(this).addClass("closenav");
			flag = 1;
		} else {
			$(".allnav").fadeOut();
			$(this).removeClass("closenav");
			flag = 0
		}
	})
	$(".subnavfoot").on("click",function(){
		$(".allnav").fadeOut();
		$(".opennav").removeClass("closenav");
		flag = 0;
	});
	//公告条
	if(!localStorage.showNotice || localStorage.showNotice!=1){
		$("header.itopbar").after('<div class="notice"><div class="noticeClose">X</div><marquee direction="left" behavior="scroll">重要提示：本站域名随时可能受到扫黄办的清理，老司机们请收藏我们的发布页地址 <a style="color:red;" href="https://www.tutufabu.com" target="_blank">tutufabu.com</span> 收藏方式为 ctrl + D</marquee></div>');
	}
	$('body').on('click', '.noticeClose', function(){
        $(this).parent(".notice").remove();
        localStorage.showNotice = 1;;
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

	//视频详情展开
	if($.trim($(".introduction-content").html())==""){$(".introduction-content").html('<p>小编很懒，什么也没留下，狼友们请直接视频观战吧~！</p>');}
	$(".toggle").hover(function(){$(this).children(".toggle-content").show();},function(){$(this).children(".toggle-content").hide();});

	//TAG迁移
	$(".list-video-tags").append($(".subnavcon .tag-videos").html());

	//APP二维码展开
	$("#appLink").on("click",function(){
		if($(".appCode").attr("display") == "block"){$(".appCode").slideUp().remove();$(".appMask").hide();}
		var appimgLink = "http://rgwyz.com/images/fu2d.jpg";
		var appHtml = '<div class="appCode"><p>小优APP</p><img src="'+appimgLink+'" style="width:150px; height:150px;"></div>';
		$(this).append(appHtml);
		$(".appCode").slideDown();
		$(".appMask").show();
	})
	$(".appMask").click(function(){$(".appCode").slideUp().remove();$(this).hide();})

	//ajax异步加载
	var ajaxObj = {};
	$(".aj_control").click(function(){
		var colBody = $(this).parent().next(".col_body");
		colBody.find(".v_pic").append('<div class="aj_loading"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>');
		var ajData = $(this).attr("data-ajax").split(",");
		var ajIdx = ajData[0];
		ajaxObj[ajIdx] = {
			ajtarget:$(".aj-obj-"+ajIdx),
			ajfrom:ajData[1],
			ajnum:ajData[2],
			ajby:ajData[3],
			ajpageCurr:MAC.Cookie.Get("cookiepage_"+ajData[0])>0 ? MAC.Cookie.Get("cookiepage_"+ajData[0]) : 2,
			ajlevel:ajData[4] ? ajData[4] : "",
		}
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
				if(nowCookiePage>=data.pagecount){nowCookiePage=1;}
				MAC.Cookie.Set("cookiepage_"+ajData[0],nowCookiePage);
				console.log(nowCookiePage);
				console.log(data);
				//插入DOM
				var dataList = data.list;
				var ajItems = $(".aj_item_"+ajData[0]).find(".aj_item");
				var actionNum = Math.min(dataList.length,ajItems.length);
				console.log(actionNum);
				var eachIdx = 0;
				ajItems.each(function(){
					//console.log(eachIdx+"***"+actionNum);
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


	});

	//ajax异步加载2
	$(".aj_plus").click(function(){
		var ajData = $(this).attr("data-ajax").split(",");
		//console.log(ajData);
		var ajIdx = ajData[0];
		ajaxObj[ajIdx] = {
			ajtarget:$(".aj_item_"+ajIdx),
			ajfrom:ajData[1],
			ajnum:ajData[2],
			ajby:ajData[3],
			ajpageCurr:MAC.Cookie.Get("cookiepage_"+ajData[0])>0 ? MAC.Cookie.Get("cookiepage_"+ajData[0]) : 2,
			ajlevel:ajData[4] ? ajData[4] : "",
		}
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
				if(nowCookiePage>=data.pagecount){nowCookiePage=1;}
				MAC.Cookie.Set("cookiepage_"+ajData[0],nowCookiePage);
				//console.log(nowCookiePage);
				//.log(data);
				//插入DOM
				var dataList = data.list;
				var ajItemStr = $(".aj_item_"+ajData[0]+" .aj_item:first").prop("outerHTML");
				var ajItem = $(ajItemStr);
				var actionNum = Math.min(dataList.length,ajaxObj[ajIdx].ajnum);
				//console.log(ajaxObj[ajIdx].ajtarget);
				var ajWrapStr = "";
				for(var i=0; i< actionNum; i++){
					var ajItemTmp = ajItem;
					ajItemTmp.find(".aj_img").attr({"src":dataList[i].vod_pic,"alt":dataList[i].vod_name});
					ajItemTmp.find(".aj_tit").text(dataList[i].vod_name);
					ajItemTmp.find(".aj_link").attr({"href":"/vodplay/"+dataList[i].vod_id+"-1-1.html","title":dataList[i].vod_name,});
					ajItemTmp.find(".aj_view").text(dataList[i].vod_hits);
					ajWrapStr += ajItemTmp.prop("outerHTML");
				}
				var ajWrap = $(ajWrapStr);
				ajaxObj[ajIdx].ajtarget.append(ajWrap);


			},
			error:function(err){
				console.log(err)
			}
		})
	})
});


