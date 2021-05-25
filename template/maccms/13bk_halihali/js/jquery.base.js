islogin=0;
function checkcookie(){
	if(document.cookie.indexOf('auth=')>=0){
		islogin=1;
		return true;
	}
	return false;
}
checkcookie();



$(function($){
    $.fn.changeList = function(options){	
        var defaults = {
                    tag : 'li', // tab name
                    subName : '.utilTabSub', // sub class name
                    eventType : 'click', // event type
                    num : 4,
                    showType : 'show' // show effect type
                },
                opts = $.extend({}, defaults, options),
                that = $(this),
                subUl = that.find(opts.subName),
                subItems = subUl.find('li'),
                size = subItems.length,
                liW = subItems.outerWidth(true),
                ulW = liW * size,
                page = size + 1,
                n = opts.num,
                randNum = 0,
                m = 0;

        if(size > n){
            that.find(opts.tag)[opts.eventType](function() {
                randNum = mathRand(n, size);
                subItems.hide();
                $.each(randNum, function (i, el) {
                    subItems.eq(el).fadeIn(800);
                });
            });
        }
    };
}(jQuery));
$(document).ready(function(){			   
		$(window).on('scroll',function(){
		var st = $(document).scrollTop();
		if( st>0 ){
			if( $('#main-container').length != 0  ){
				var w = $(window).width(),mw = $('#main-container').width();
				if( (w-mw)/2 > 70 )
					$('#index-top').css({'left':(w-mw)/2+mw+20});
				else{
					$('#index-top').css({'left':'auto'});
				}
			}
			$('#index-top').fadeIn(function(){
				$(this).removeClass('wmin');
			});
		}else{
			$('#index-top').fadeOut(function(){
				$(this).addClass('wmin');
			});
		}	
	});
	$('#index-top .top').on('click',function(){
		$('html,body').animate({'scrollTop':0},500);
	});
	$('#index-top .qrcode_box').hover(function(){
		$('#index-top .qrcode').removeClass('wmin');
	},function(){
		$('#index-top .qrcode').addClass('wmin');
	});
   timer2 = null;
   $(".qr-code-ico").hover(function(){
        clearTimeout(timer2);
        $(this).addClass("qr-code-ico-hover");
        $(".qr-code").show();
    },function(){
        $(this).removeClass("qr-code-ico-hover");
        timer2 = setTimeout($.proxy(function() {
            $(".qr-code").hide();
        }, this),100);
    });
	$(".qr-code").hover(function(){
		clearTimeout(timer2);
		$(this).show();
	},function(){
		$(this).hide();
	});	
	var prevpage=$("#pre").attr("href"); 
    var nextpage=$("#next").attr("href"); 
    $("body").keydown(function(event){ 
      if(event.keyCode==37 && prevpage!=undefined) location=prevpage; 
      if(event.keyCode==39 && nextpage!=undefined) location=nextpage; 
    }); 					   
	//列表页面收缩展开
	if($(".list-f-mod").length > 0)
	{
		if($(".list-f-mod")[0].scrollHeight>205)
		{
			$("#list-url-more").show();
			$(".list-f-mod").height(125);
			$("#list-url-more").click(function(e){
			if($(this).hasClass('ss')){
			$(this).removeClass('ss').addClass('zk').text('更多');
		}else{
			$(this).removeClass('zk').addClass('ss').text('收起');
		}						
				if($(".list-f-mod").height()>205)
				{
					var h = $(".list-f-mod")[0].scrollHeight;
					$(".list-f-mod").height(125);
					
				}
				else
				{
					var h = $(".list-f-mod")[0].scrollHeight;
					$(".list-f-mod").height(h);
				}
				e.preventDefault(); 
			});
		}
	};
	// 下载展开收缩
		if($("#downul").length > 0)
	{
		if($("#downul")[0].scrollHeight>305)
		{
			$("#downzk").show();
			$("#downul").height(220);
			$("#downzk").click(function(e){
			if($(this).hasClass('ss')){
			$(this).removeClass('ss').addClass('zk').text('展开全部');
		}else{
			$(this).removeClass('zk').addClass('ss').text('收缩部分');
		}						
				if($("#downul").height()>305)
				{
					var h = $("#downul")[0].scrollHeight;
					$("#downul").height(220);
					
				}
				else
				{
					var h = $("#downul")[0].scrollHeight;
					$("#downul").height(h);
				}
				e.preventDefault(); 
			});
		}
	}
	if($("#actorall").length > 0)
	{
		if($("#actorall")[0].scrollHeight>310)
		{
			$("#downzk").show();
			$("#actorall").height(290);
			$("#downzk").click(function(e){
			if($(this).hasClass('ss')){
			$(this).removeClass('ss').addClass('zk').html('展开全部角色<span>&darr;</span>');
		}else{
			$(this).removeClass('zk').addClass('ss').html('收缩部分角色<span>&uarr;</span>');
		}						
				if($("#actorall").height()>290)
				{
					var h = $("#actorall")[0].scrollHeight;
					$("#actorall").height(290);
					
				}
				else
				{
					var h = $("#actorall")[0].scrollHeight;
					$("#actorall").height(h);
				}
				e.preventDefault(); 
			});
		}
	}
	if($(".star-data,.special-txt").length > 0)
	{
		if($(".star-data,.special-txt")[0].scrollHeight>210)
		{
			$("#star-infozk,#special-txt").show();
			$(".star-data,.special-txt").height(190);
			$("#star-infozk,#special-txt").click(function(e){
			if($(this).hasClass('ss')){
			$(this).removeClass('ss').addClass('zk').html('展开更多资料<em>&darr;</em>');
		}else{
			$(this).removeClass('zk').addClass('ss').html('收起部分资料<em>&uarr;</em>');
		}						
				if($(".star-data,.special-txt").height()>190)
				{
					var h = $(".star-data,.special-txt")[0].scrollHeight;
					$(".star-data,.special-txt").height(190);
					
				}
				else
				{
					var h = $(".star-data,.special-txt")[0].scrollHeight;
					$(".star-data,.special-txt").height(h);
				}
				e.preventDefault(); 
			});
		}
	}
	if($("#rolemore").length > 0)
	{
		if($("#rolemore")[0].scrollHeight>155)
		{
			$("#rolezk").show();
			$("#rolemore").height(125);
			$("#rolezk").click(function(e){
			if($(this).hasClass('ss')){
			$(this).removeClass('ss').addClass('zk').html('全部角色<span>&darr;</span>');
		}else{
			$(this).removeClass('zk').addClass('ss').html('部分角色<span>&uarr;</span>');
		}						
				if($("#rolemore").height()>125)
				{
					var h = $("#rolemore")[0].scrollHeight;
					$("#rolemore").height(125);
					
				}
				else
				{
					var h = $("#rolemore")[0].scrollHeight;
					$("#rolemore").height(h);
				}
				e.preventDefault(); 
			});
		}
	}
	// 下载展开收缩
	
		if($("#story-p").length > 0)
	{
		if($("#story-p")[0].scrollHeight>120)
		{
			$(".story-pzk").show();
			$("#story-p").height(80);
			$(".story-pzk").click(function(e){
			if($(this).hasClass('ss')){
			$(this).removeClass('ss').addClass('zk').html('展开全部<span>&darr;</span>');
		}else{
			$(this).removeClass('zk').addClass('ss').html('收缩部分<span>&uarr;</span>');
		}						
				if($("#story-p").height()>80)
				{

					var h = $("#story-p")[0].scrollHeight;
					$("#story-p").height(80);
					
				}
				else
				{
					
					var h = $("#story-p")[0].scrollHeight;
					$("#story-p").height(h);
				}
				e.preventDefault(); 
			});
		}
	}
	//首页综艺周期
	$(".week-zy-list").each(function() {
		var r = $(this).find(".wkopen"),
			i = $(this).find(".wkclose");
		i.on("mouseenter", function() {
			var n = $(this);
			if (n.hasClass("wkopen")) return;
			    r.removeClass("wkopen"), n.addClass("wkopen"), r = n
		})
	});
	//通栏底部分类更多
	$(".ftv,.fdy").mouseenter(function() {
			$(this).addClass('dwem');
	});
	$(".ftv,.fdy").mouseleave(function() {
			$(this).removeClass('dwem');
	});
	//首页刷新换一组
	$(".box").changeList({
		tag: ".mov-time",
		subName: "#con_tbmov_1",
		num: 6
	}),$(".box").changeList({
		tag: ".mov-time",
		subName: "#con_tbmov_2",
		num: 6
	});		
	$(".index-jiaose").changeList({
		tag: ".module-jiaose-time",
		subName: ".index-jiaose-ul",
		num: 1
    });
	//内容页面播放列表切换
	$(".play-title ul li a").each(function(j,div){
			$(this).click(function(){
		//$("html,body").animate({scrollTop:$("#"+listid).offset().top}, 500); //我要平滑
		        if ($(this).parent().hasClass("current") ){
					return;
                }
				$(this).parent().nextAll().removeClass("current");
				$(this).parent().prevAll().removeClass("current");
				$(this).parent().addClass("current")
				$('.play-box').hide().css("opacity",0);
				$('.play-box:eq('+j+')').show().animate({"opacity":"1"},1200);
	});
			
	});
//内容播放页面排序
  $('.order a').click(function(){
		if($(this).hasClass('asc')){
			$(this).removeClass('asc').addClass('desc').text('降序');
		}else{
			$(this).removeClass('desc').addClass('asc').text('升序');
		}
		var a=$('.play-box:eq('+$(this).attr('data')+') .player_list');
		var b=$('.play-box:eq('+$(this).attr('data')+') .player_list a');
		a.html(b.get().reverse());
	});

$(".play-tool span.s1").click(function() {					 
		$html = $(this).html();
		try {
			if ($html == '关灯') {
				$(this).html('开灯')
			} else {
				$(this).html('关灯')
			}
		} catch (e) {}
		$(".playopen").toggle(300);
		$(".play-tool").toggleClass("son");
		$(".player-box").toggleClass("top")
	});
	$(".play-tool span.s2").click(function() {
		$html = $(this).html();
		try {
			if ($html == '关闭广告') {
				$(this).html('显示广告')
			} else {
				$(this).html('关闭广告')
			}
		} catch (e) {}
		$(".player-right").toggleClass("adon");
		$(".player_zanpian ").toggleClass("playall");
		$(this).toggleClass("son")
	});	
	$(".player-num .info").click(function() {	
		$html = $(this).html();
		$(".player-vinfo").toggle(300);
		$(".player-num a.info").toggleClass("on");
	});
	$(".els-ico a.s-btn").click(function() {	
		$html = $(this).html();
		$(".els-sharebox").toggle(300);
		$(".els-ico a.s-btn").toggleClass("on");
		if (window.clipboardData) {
	    $("#tips").hide();		
		}
	});
	$(".nav_more").click(function() {	
		$html = $(this).html();
		$(".header_tnav").toggle(300);
	
		$(".header_nav a.nav_more").toggleClass("on");
        $(".header_nav a.nav_more").toggleClass("current");

	});
		$(".elssm-close").click(function() {	
		$html = $(this).html();
		$(".els-sharebox").hide(300);
	});
    //播放记录
	$("#nav-looked").hover(function(){		
		$(this).find(".header_looked").show(300);
	},function(){
		$(this).find(".header_looked").hide(300);
	});	
	$(".close-his").click(function(){
		$(this).parents(".header_looked").hide();
	});
	//登录
	$("#loginbarx").hover(function(){		
		$(this).find(".drop-box").show();
	},function(){
		$(this).find(".drop-box").hide();
	});	
    $("#login2").click(function(){								
		$.colorbox({
        inline: true,
        href: "#login-dialog",
        width: '570px',
		height: '415px'

    });});
	$("#login1").click(function(){								
		$.colorbox({
        inline: true,
        href: "#login-dialog",
        width: '570px',
		height: '360px'

    });
		});	
   /**表情***/
    if ($(".emotion").length > 0) {
        $(".emotion").on('click', function(){
            var left = $(this).offset().left;
            var top = $(this).offset().top;
            var id = $(this).attr("data-id");
            $("#smileBoxOuter").css({
                "left": left,
                "top": top + 20
            }).show().attr("data-id", id)
        });
        $("#smileBoxOuter,.emotion").hover(function() {
            $("#smileBoxOuter").attr("is-hover", 1)
        },
                function() {
                    $("#smileBoxOuter").attr("is-hover", 0)
                });
        $(".emotion,#smileBoxOuter").blur(function() {
            var is_hover = $("#smileBoxOuter").attr("is-hover");
            if (is_hover != 1) {
                $("#smileBoxOuter").hide()
            }
        });
        $(".smileBox").find("a").click(function() {
            var textarea_id = $("#smileBoxOuter").attr("data-id");
            var textarea_obj = $("#reply_" + textarea_id).find("textarea");
            var textarea_val = textarea_obj.val();
            if (textarea_val == "发布评论") {
                textarea_obj.val("")
            }
            var title = "[" + $(this).attr("title") + "]";
            textarea_obj.val(textarea_obj.val() + title).focus();
            $("#smileBoxOuter").hide()
        });
        $("#smileBoxOuter").find(".smilePage").children("a").click(function() {
            $(this).addClass("current").siblings("a").removeClass("current");
            var index = $(this).index();
            $("#smileBoxOuter").find(".smileBox").eq(index).show().siblings(".smileBox").hide()
        });
        $(".comment_blockquote").hover(function() {
            $(".comment_action_sub").css({
                "visibility": "hidden"
            });
            $(this).find(".comment_action_sub").css({
                "visibility": "visible"
            })
        }, function() {
            $(".comment_action_sub").css({
                "visibility": "hidden"
            })
        })
    }	
});
function Copy()  {
 if (window.clipboardData) {
   var txtObj=document.getElementById("neirong"); 
   var text=txtObj.value;  
   window.clipboardData.setData("Text",text);  
   alert("复制成功！");   
   //var clipValue=window.clipboardData.getData("text");//text is not case sensitive  
  //alert(clipValue);  
  }
  else {
  document.getElementById("neirong").focus();   
  alert('你使用的浏览器不支持复制功能，请使用 Ctrl+C 或鼠标右键');  
  }  
} 
// 全站通栏模块切换
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"current":"";
		con.style.display=i==cursel?"block":"none";
	}
}
//栏目页面周期显示
function weekTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("week_"+name+"_"+i);
		menu.className=i==cursel?"current":"";
		con.className=i==cursel?"current":"";
	}
}