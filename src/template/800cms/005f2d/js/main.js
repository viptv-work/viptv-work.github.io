$(function(){
	
	//广告图
	var aDetail = $(".detail_right_title a").length;
	for(var i=0; i<aDetail; i++){
		if(i%3 == 2){
			$(".detail_right_title a").eq(i).css({marginRight:0})
		}
	}
	if($(".detail_right_tab").find("div").hasClass("detail_right_scroll")){
		//选项卡
		$(".detail_right_scroll ul li").click(function(){
			$(this).addClass("active").siblings().removeClass("active")	
			$(".detail_tab").eq($(this).index()).show().siblings(".detail_tab").hide();
		})
		var detailTop = $(".detail_right_scroll").offset().top;
		var detailLeft = $(".detail_left").offset().top;
		$(window).scroll(function(){
			
			//选项卡
			if($(window).scrollTop() >= detailTop){
				//position:fixed; top:-25px; left:0; width:100%; :2;
				$(".detail_right_scroll").css({
						"position":"fixed",
						"top":"-25px",
						"left":"6%",
						"width":"100%",
						"z-index":"2",
				
				})
			}else{
				//alert(2)
				$(".detail_right_scroll").css({
						"position":"static",
						"top":"-25px",
						"left":"0",
						"width":"auto",
						"z-index":"2",
				
				})
			}
			
			左侧
			if($(window).scrollTop() >= detailLeft){
				$(".detail_left").css({
					//position:fixed; left:50%; margin-left:-600px; top:0;
					"position":"fixed",
					"top":"0px",
					"left":"50%",
					"margin-left":"-600px",
					"z-index":"3",
				})
			}else{
				$(".detail_left").css({
					"position":"static",
					"margin-left":"0px"
				})	
			}
		})	


		}
	
	
	
	//固定
	
	
	//左侧二级栏目
	$(".detail_left ul li h3").click(function(){
		//alert(1)	
		$(this).siblings("ol").slideToggle().parent().siblings().find("ol").slideUp();
	})

	// $(document).scroll(function(){
	// 		if($(document).scrollTop()>=$(document).height()-$(window).height()){
	// 			$(".detail_left").find("ol").slideUp();
	// 		}else{
	// 			$(".detail_left").find("ol").slideDown();
	// 		}
		  
	// })

	$(".fbpl").click(function(){
		$("body,html").animate({"scrollTop":$(".deng").offset().top});	
	});
	//返回顶部
	 $(".v-top").hide();

     $(window).scroll(function() {
       if ($(window).scrollTop() > 1000) {
         $(".v-top").fadeIn(800);
       } else {
         $(".v-top").fadeOut(800);
       }
     });
     $(".v-top").click(function() {
       $('body,html').animate({
         scrollTop: 0
       },
       100);
       return false;
     });
})