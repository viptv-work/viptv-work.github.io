// 滚动后 按钮显示 隐藏
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.toTop').fadeIn();
        }
        else {
            $('.toTop').fadeOut();
        }
    });
});
// 点击回到顶部
$('.toTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 500);
});
$('a.video-pic').each(function(){
  	var wapper=$(this),
  		img=$(this).find('img'),
        wapperRatio=wapper.width()/wapper.height(),
        imgRatio=img.width()/img.height();
        if(wapperRatio<imgRatio){
            img.css({'width':'auto','height':'100%'});
        }else{
            img.css({'width':'100%','height':'auto'});
        }
  		img.load(function(){
            if(imgRatio!=img.width()/img.height()){
                imgRatio=img.width()/img.height();
                if(wapperRatio<imgRatio){
                    img.css({'width':'auto','height':'100%'});
                }else{
                    img.css({'width':'100%','height':'auto'});
                }
            }   
   		})
       
});