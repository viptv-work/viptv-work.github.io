<?php
ob_start();
define('loginpage',1);
require('config.php');
require('chk.php');
ob_clean();
if(isset($_GET['do'])=='out') {
	checktoken();
	setadminname('');
	setadminpsd('');
	setadmintoken('');
	echo("<meta http-equiv=refresh content='0; url=login.php'>");
	die();
}
$login_cachekey='login_'.ip();
$try_time=20;//15分钟内允许尝试的次数
$login_error_time=cacheget($login_cachekey,900,'mylogin');
if($login_error_time==false) {$login_error_time=0;}
if(isset($_GET['code']) && !empty($_GET['code']) && AdminOpenid) {
	if($login_error_time<=$try_time) {
		$code=dbstr($_GET['code']);
		$query = $GLOBALS['db'] -> query("SELECT * FROM ".tableex('admin')." where ucmsid='$code' and ucmsid<>'' limit 1;");
		$link = $GLOBALS['db'] -> fetchone($query);
		if($link) {
			$power=json_decode($link['power'],1);
			if(!power('b',1,$power)) {
					$errormsg='该账户已禁用';
			}else {
				setadminname($link['username']);
				setadminpsd($link['psd']);
				cachedel($login_cachekey,'mylogin');
				echo("<meta http-equiv=refresh content='0; url=index.php'>");
				exit();
			}
		}else {
			$errormsg='尚未绑定该账号,请使用账号密码登录';
			cacheset($login_cachekey,$login_error_time+1,900,'mylogin');
		}
	}else {
		$errormsg='登录过于频繁,请稍后再试';
		cacheset($login_cachekey,$login_error_time+1,900,'mylogin');
	}
}
if(isset($_POST['uuu_username'])) {
	if($login_error_time<=$try_time) {
		$username=trim(dbstr($_POST['uuu_username']));
		$password=password_md5(trim($_POST['uuu_password']));
		$query = $GLOBALS['db'] -> query("SELECT * FROM ".tableex('admin')." where username='$username' and psd='$password'");
		$link = $GLOBALS['db'] -> fetchone($query);
		if($link && $password==$link['psd']) {
			$power=json_decode($link['power'],1);
			if(!power('b',1,$power)) {
					$errormsg='该账户已禁用';
			}else {
				setadminname($link['username']);
				setadminpsd($link['psd']);
				cachedel($login_cachekey,'mylogin');
				echo("<meta http-equiv=refresh content='0; url=index.php'>");
				exit();
			}
		}else {
			$errormsg='您填写的账户信息有误';
			cacheset($login_cachekey,$login_error_time+1,900,'mylogin');
		}
	}else {
		$errormsg='登录过于频繁,请稍后再试';
		cacheset($login_cachekey,$login_error_time+1,900,'mylogin');
	}
}
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>后台管理登录</title>
<meta name="robots" content="noindex,nofollow,nosnippet,noarchive">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
<link rel="shortcut icon" href="img/ico.ico" >
<meta name="renderer" content="webkit">
<script type="text/javascript">cmsversion='<?php echo(version);?>';</script>
<link href="static/layui/css/layui.css" rel="stylesheet" type="text/css" />
<script src="static/layui/layui.js" type="text/javascript" charset="utf-8"></script>
<script language="javascript" type="text/javascript"> 
function checkuser(){
	if (document.getElementById("uuu_username").value==''){alert('请填写您的用户名');document.getElementById("uuu_username").focus();return false;}
	if (document.getElementById("uuu_password").value=='') { alert('请填写密码'); document.getElementById("uuu_password").focus(); return false; } 
	return true;
}
</script>
<script src="img/jquery.min.js"></script>
<?php
if(isset($errormsg)) {
	echo("<script type=\"text/javascript\">alert('".$errormsg."')</script>");
}
?>
</head>
<body>
	<style type="text/css">
		.adming_login{ 
			margin: 200px auto; 
			width: 280px; 
			padding: 80px 50px; 
			box-shadow: 0 2px 5px rgba(0,0,0,.1);
		}
		.adming_login h3{
			margin-bottom: 30px;
			text-align: center;
		}
		.adming_login .copy{
			text-align: center;
			margin-top: 30px;
			color: #999;
		}
	</style>
	<div class="layui-main">
		<div class="adming_login">
			<h3>
	      		<p><img src="static/img/logo.png" alt="layui" width="204"></p>
	      		<p>主题管理系统</p>
	    	</h3>
			<form name="form1" method="post" action="" onSubmit="return checkuser();" class="layui-form layui-form-pane">
				<div class="layui-form-item">
					<label class="layui-form-label">用户名</label>
					<div class="layui-input-block">
						<input type="text" tabindex="1" name="uuu_username" value="" id="uuu_username" value="" class="layui-input">
					</div>
				</div>
				<div class="layui-form-item">
					<label class="layui-form-label">密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
					<div class="layui-input-block">
						<input type="password" tabindex="2" name="uuu_password" value="" id="uuu_password" class="layui-input">
					</div>
				</div>
				<div class="layui-form-item">
					<input type="submit" tabindex="4" value="登录" class="layui-btn layui-btn-fluid" />
				</div>
			</form>
			<div class="copy">
				&copy; <?php echo(date('Y'));?> Powered by MyTheme.cn
			</div>
		</div>
	</div>
</body>
</html>