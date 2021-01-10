<?php
if (!defined('admin')) {exit();}
if(power('alevel')!=3) {die('error');}
$settingfile=0;
if(isset($_GET['cid'])) {
	$cid=intval($_GET['cid']);
	$fidchannel=getchannelcache($cid);
	if($fidchannel['ckind']==5) {
		$settingfile=1;
	}elseif($fidchannel['ckind']==1) {
		$settingfile=3;
	}elseif($fidchannel['ckind']==2) {
		$settingfile=3;
	}else {
		$settingfile=1;
	}
}else {
	$cid=0;
	$settingfile=1;
}
if(isset($_POST["isPost"])){
	$str = file_get_contents($_FILES['txt']['tmp_name']);
	$str = json_decode($str , true);
	$i = 0;$c = 0;
	foreach($str["str"] as $a){
		$GLOBALS['db']->update("sm_str", "id=".$a['id'], $a);
	}
	foreach($str["channel"] as $a){
		$GLOBALS['db']->update("sm_channel", "cid=" . $a['cid'], $a);
	}
	echo('<script>alert("导入成功");</script>');
	echo("<meta http-equiv=refresh content='0; url=?do=home'>");
	die();
}
?>
<fieldset class="layui-elem-field">
  <legend>导入备份</legend>
  <div class="layui-field-box">
	<form id="form1" method="post" action=""  enctype="multipart/form-data" class="layui-form">
	<input type="hidden" name="key" value="" id="key">
	<?php newtoken();?>
	<div class="layui-form-item">
		<label class="layui-form-label">备份文件</label>
		<div class="layui-input-inline">
			<input type="hidden" name="isPost" value="yes" />
			<div class="layui-input-inline" id="file" style="margin-top: 10px;">
				<input type="file" name="txt" id="chosefile">
			</div>
		</div>
	</div>
	<div class="layui-form-item">
		<div class="layui-input-block">
			<input class="layui-btn layui-btn-normal" type="submit" value="执行导入" />
		</div>
	</div>
   </form>
  </div>
 </fieldset>

<script>
	$(function(){
		layui.use('form', function(){
	  		var form = layui.form;
	 	});
		
	});
</script>