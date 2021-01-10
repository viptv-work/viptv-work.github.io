<?php
if (!defined('admin')) {exit();}
$mylevel=power('alevel');
if($mylevel<2) {
	adminmsg('','无权限',3);
}else {
	if($mylevel==3) {
		$alevel=3;
	}elseif($mylevel==2) {
		$alevel=1;
	}else {
		$alevel=0;
	}
}
if(isset($_GET['id'])) {
	$id=intval($_GET['id']);
}else {
	die();
}
$query = $GLOBALS['db'] -> query("SELECT * FROM ".tableex('admin')." where id='$id' and alevel<='$alevel' limit 1");
$user = $GLOBALS['db'] -> fetchone($query);
if(!$user) {
	adminmsg('','用户不存在',3);
}
$thiuserpower=json_decode($user['power'],1);
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
<script type="text/javascript">
$(document).ready(function(){
	if ($('#alevel1').prop('checked'))
	{
		$("#quantr").show();
	}else{
		$("#quantr").hide();
	}
	$("#alevel3").click(function(){
		$("#quantr").hide();
	});
	$("#alevel2").click(function(){
		$("#quantr").hide();
	});
	$("#alevel1").click(function(){
		$("#quantr").show();
	});
});
</script>
<fieldset class="layui-elem-field">
  <legend>修改用户信息</legend>
  <div class="layui-field-box">
<form id="form1" name="form1" method="post" action="?do=user_editpost" onsubmit="return check()" class="layui-form layui-form-pane">
<?php newtoken();?>
<input type="hidden" name="id" value="<?php echo($id);?>">
		<div class="layui-form-item">
			<label class="layui-form-label">昵&nbsp;&nbsp;&nbsp;&nbsp;称</label>
			<div class="layui-input-inline">
				<input name="nickname" type="text" id="nickname" class="layui-input" value="<?php echo($user['nickname']);?>">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">用 户 名</label>
			<div class="layui-input-inline">
				<input name="username" type="text" id="username" class="layui-input" value="<?php echo($user['username']);?>" disabled>
			</div>
			<div class="layui-form-mid layui-word-aux">用户名无法修改</div>
		</div>

		<div class="layui-form-item">
			<label class="layui-form-label">密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
			<div class="layui-input-inline">
				<input name="psd" type="password" id="psd" class="layui-input" onfocus="document.getElementById('psdshow').style.display = '';">
			</div>
		</div>
		<div class="layui-form-item" id="psdshow">
			<label class="layui-form-label">确认密码</label>
			<div class="layui-input-inline">
				<input name="psd1" type="password" id="psd1" class="layui-input">
			</div>
		</div>
		<div class="layui-form-item" pane>
			<label class="layui-form-label">用户设置</label>
			<div class="layui-input-block">
				<input type="checkbox" name="b[]" value="1" title="启用账户" lay-skin="primary"<?php if(power('b',1,$thiuserpower)) {echo(' checked');}?>>
				<input type="checkbox" name="b[]" value="2" title="允许修改个人信息" lay-skin="primary" <?php if(power('b',2,$thiuserpower)) {echo(' checked');}?>>
			</div>
		</div>
		<div class="layui-form-item" pane>
			<label class="layui-form-label">用户类型</label>
			<div class="layui-input-block">
				<?php
				if($alevel==3) {
				?>
				<label><input type="radio" name="alevel" id='alevel3' value="3" title="超级管理员"></label>
				<label><input type="radio" name="alevel" id='alevel2' value="2" title="管理员"></label>
				<label><input type="radio" name="alevel" id='alevel1' value="1" title="后台用户" checked></label>
				
				<?php
				}else {
				?>
				<input type="radio" name="alevel" id='alevel1' value="1" title="后台用户" checked>
				<?php
				}
				?>
			</div>
				<div class="layui-input-block" id="quantr" style="padding: 20px;">
					├──<input type="checkbox" title="站点设置" lay-skin="primary" name="s[]" id="s_0" value="0" <?php if(power('s',0,$thiuserpower)) {echo(' checked');}?>>
						<input type="checkbox" title="变量修改" lay-skin="primary" name="s_0[]" value="4" <?php if(power('s',0,$thiuserpower)) {echo(' checked');}?>>	
					<?php
					$allc=channel_select(0,0,0,0);
					foreach($allc as $value) {
						if($value['ifshowadmin']==1) {
					?>
					<p>
					<?php echo($value['ext']);?><input lay-filter="channel_quan_one" lay-skin="primary" title="<?php echo($value['cname']);?>" type="checkbox" name="s[]" value="<?php echo($value['cid']);?>" id="s_<?php echo($value['cid']);?>"  <?php if(power('s',$value['cid'],$thiuserpower)) {echo(' checked');}?>>
					<?php
					if($value['ckind']==2) {
					?>
						<input type="checkbox" class="channel_quan_son" title="增加" lay-skin="primary" name="s_<?php echo($value['cid']);?>[]" value="1" <?php if(power('s',$value['cid'],$thiuserpower,1)) {echo(' checked');}?>>
						<input type="checkbox" class="channel_quan_son" title="编辑" lay-skin="primary" name="s_<?php echo($value['cid']);?>[]" value="2" <?php if(power('s',$value['cid'],$thiuserpower,2)) {echo(' checked');}?>>
						<input type="checkbox" class="channel_quan_son" title="删除" lay-skin="primary" name="s_<?php echo($value['cid']);?>[]" value="3" <?php if(power('s',$value['cid'],$thiuserpower,3)) {echo(' checked');}?>>
						<input type="checkbox" class="channel_quan_son" title="变量修改" lay-skin="primary" name="s_<?php echo($value['cid']);?>[]" value="4" <?php if(power('s',$value['cid'],$thiuserpower,4)) {echo(' checked');}?>>
						<input type="checkbox" class="channel_quan_son" title="栏目管理员" lay-skin="primary" name="s_<?php echo($value['cid']);?>[]" value="5" <?php if(power('s',$value['cid'],$thiuserpower,5)) {echo(' checked');}?>>
					<?php
					}elseif($value['ckind']==1 || $value['ckind']==3) {
					?>
						<input type="checkbox" title="变量修改" lay-skin="primary" name="s_<?php echo($value['cid']);?>[]" value="4" <?php if(power('s',$value['cid'],$thiuserpower,4)) {echo(' checked');}?>>
					<?php
					}
					?>
					</p>
						<?php
						}
					}
					?>
				<blockquote class="layui-elem-quote layui-quote-nm" style="margin-top:20px">权限说明:栏目管理员可管理该栏目下其他用户的文章,并拥有管理员字段的权限</blockquote>
			</div>
		</div>
		<div class="layui-form-item">
			<div class="layui-input-block">
				<blockquote class="layui-elem-quote layui-quote-nm" style="margin-top: 20px;">超级管理员:可以配置栏目,文件管理,清空缓存,添加修改任意用户权限<br>管理员:拥有所有栏目与编辑普通后台用户的权限</blockquote>
			</div>
		</div>
		<div class="layui-form-item">
			<div class="layui-input-block">
				<input class="layui-btn layui-btn-normal" type="submit" value="提交" />
			</div>
		</div>
	</form>
</div>
</fieldset>
 
<script type="text/javascript">
	layui.use('form', function(){
  		var form = layui.form;	
 	});
</script>