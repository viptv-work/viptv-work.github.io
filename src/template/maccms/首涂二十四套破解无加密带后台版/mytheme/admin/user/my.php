<?php
if (!defined('admin')) {exit();}
if(!power('b',2)) {
	adminmsg('','无权限',3);
}
$thisname=getadminname();
$query = $GLOBALS['db'] -> query("SELECT * FROM ".tableex('admin')." where username='$thisname' limit 1");
$user = $GLOBALS['db'] -> fetchone($query);
if(isset($_GET['ucmsid'])) {
	$query = $GLOBALS['db'] -> query("UPDATE ".tableex('admin')." SET ucmsid='' WHERE username='$thisname'");
	$user['ucmsid']='';
	if($query) {
		$errormsg='取消绑定成功';
	}else {
		$errormsg='取消绑定出错';
	}
}
if(isset($_GET['code'])) {
	checktoken();
	$code=dbstr($_GET['code']);
	if(!empty($code)) {
		$query = $GLOBALS['db'] -> query("SELECT count(*) FROM ".tableex('admin')." where ucmsid='".$code."' and username<>'$thisname' limit 1");
		$ifbind = $GLOBALS['db'] -> fetchone($query);
		if($ifbind[0]>0) {
			$errormsg='绑定出错,已绑定了其他账号';
		}else {
			$query = $GLOBALS['db'] -> query("UPDATE ".tableex('admin')." SET ucmsid='".$code."' WHERE username='$thisname'");
			$user['ucmsid']=$code;
			if($query) {
				$errormsg='绑定成功';
			}else {
				$errormsg='绑定出错';
			}
		}
	}
}
?>
<?php
	if(isset($errormsg)){
	echo("<script type=\"text/javascript\">alert('".$errormsg."')</script>");
	}
	?>
<script language="JavaScript" type="text/javascript">
	function check(){
		if(document.form1.nickname.value==""){
			alert("[昵称]不能为空！");
			document.form1.nickname.focus();
			return false;
		}
		
		if(document.form1.psd.value!=document.form1.psd1.value){
			alert("两次输入密码不一至！");
			document.form1.psd.focus();
			return false;
		}
	return true
	}
</script>
<fieldset class="layui-elem-field">
  <legend>修改个人信息</legend>
  <div class="layui-field-box">
<form id="form1" name="form1" method="post" action="?do=user_mypost" onsubmit="return check()" class="layui-form layui-form-pane">
	<?php newtoken();?>
	<div class="layui-form-item">
		<label class="layui-form-label">管理员名称</label>
		<div class="layui-input-inline">
			<input name="nickname" type="text" id="nickname" value="<?php echo($user['nickname']);?>" class="layui-input">
		</div>
	</div>
	<div class="layui-form-item">
		<label class="layui-form-label">用 户 名</label>
		<div class="layui-input-inline">
			<input name="username" type="text" id="username" size="20" value="<?php echo($user['username']);?>" class="layui-input layui-btn-disabled" disabled>
		</div>
	</div>
	<div class="layui-form-item">
		<label class="layui-form-label">密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
		<div class="layui-input-inline">
			<input name="psd" type="password" id="psd" value="" onfocus="document.getElementById('psdshow').style.display = '';" class="layui-input">
		</div>
		<div class="layui-form-mid layui-word-aux">不修改则留空,修改后需重新登录</div>
	</div>
	<div class="layui-form-item">
		<label class="layui-form-label">确认密码</label>
		<div class="layui-input-inline">
			<input name="psd1" type="password" id="psd1" class="layui-input">
		</div>
	</div>
	<div class="layui-form-item">
		<div class="layui-input-block">
			<input class="layui-btn layui-btn-normal" type="submit" value="保存" />
		</div>
	</div>
    </form>
   </div>
 </fieldset>
<script>
loaded=0;
uuu_token='<?php echo(newtoken(999));?>';
</script>


