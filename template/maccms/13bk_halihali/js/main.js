$(document).ready(function() {
	var _wechatshow = $.cookie('_wechatshow');
	if (_wechatshow == null || _wechatshow == undefined || _wechatshow == '' || _wechatshow == "") {
		_PopupWeChat();
	}
});
function _PopupWeChat() {
	var _PopupWeChat = layer.open({
		type: 1,
		title: false,
		skin: 'PopupWeChat',
		closeBtn: 0,
		shift: 0,
		anim: 1,
		shade: 0.5,
   	    resize: false,
		area: ['670px', '400px'],
		content: '<div class="WeChatshadow clearfix"><div class="WeChatshadowBox"><span onclick="_closePopupWeChat();" class="close"></span></div></div>',
	});
}
function _closePopupWeChat() {
	var refrushTime = new Date();　　　　　　refrushTime.setTime(refrushTime.getTime() + 1 * 12 * 60 * 60 * 1000);
	$.cookie('_wechatshow', '1', {
		expires: refrushTime,
		path: '/'
	});
	layer.closeAll();
}