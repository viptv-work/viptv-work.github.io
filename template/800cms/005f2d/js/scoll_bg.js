jQuery(function(){
	jQuery(window).scroll(function(){
		var detail = jQuery(".detail");
		var sh = 82 - jQuery(window).scrollTop();
		var bottom_width = (detail.width() - 1200)/2;
		var lheight = set_left_btn_top == 0 ? '100%' : '100px';
		var rheight = set_right_btn_top == 0 ? '100%' : '100px';
		if(jQuery(window).scrollTop() <= 82){
			detail.attr("style","background:url('"+back_img+"') no-repeat center "+sh+"px; background-attachment:fixed;");
			var lh = parseInt(set_left_btn_top) + sh;
			var rh = parseInt(set_right_btn_top) + sh;
	
			jQuery("#wrapper_left_bg").attr('style','width:'+bottom_width+'px;height:'+lheight+';position:fixed;display:block;top:'+lh+'px;left:0;');
			jQuery("#wrapper_right_bg").attr('style','width:'+bottom_width+'px;height:'+rheight+';position:fixed;display:block;top:'+rh+'px;right:0;');
		}else{
			detail.attr("style","background:url('"+back_img+"') no-repeat center 0;background-attachment:fixed;");
			jQuery("#wrapper_left_bg").attr('style','width:'+bottom_width+'px;height:'+lheight+';position:fixed;display:block;top:'+set_left_btn_top+'px;left:0');
			jQuery("#wrapper_right_bg").attr('style','width:'+bottom_width+'px;height:'+rheight+';position:fixed;display:block;top:'+set_right_btn_top+'px;right:0');
		}
	}).trigger("scroll");
});