<?php
	
if (!defined('admin')) {exit();}
unset($link);
if(isset($_GET['cid'])) {
	$cid=intval($_GET['cid']);
	$link =adminchannel($cid);
	if($link['ifshowadmin']==0) {adminmsg('','此栏目已经禁用');}
	$csetting=json_decode($link['csetting'],1);
	$cname=$link['cname'];
	$fid=$link['fid'];
	if($link['ckind']==2 && !power('s',$cid,$power,4)) {
		adminmsg('','无权限',3);
	}
}else{
	$cid=0;
	$cname = '站点设置';
}
if(!power('s',$cid)) {adminmsg('','无权限');}
?>

<fieldset class="layui-elem-field">
  	<legend><?php echo($cname);?></legend>
  	<?php
  		if($cid>0) {	
			function getleftlist2($cdaddy=0,$times=0){
				Global $channels;
				Global $power,$cid,$fid;
				$times++;
				$mynav=array();
				foreach($channels as $value){
					if ($value['fid']==$cdaddy && $times<5){
						if($value['ifshowleft']==1 && $value['ifshowadmin']==1 && power('s',$value['cid'],$power)) {
							if($cid==$value['cid']) {$thisstr=' class="layui-this"';}else {$thisstr='';}
							if($value['ckind']==1) {
								$mynav[]=array('url'=>'?do=str&cid='.$value['cid'],'title'=>$value['cname'],'cid'=>$value['cid'],'fid'=>$value['fid'],'blank'=>'');
							}elseif($value['ckind']==2) {
								$mynav[]=array('url'=>'?do=list&cid='.$value['cid'],'title'=>$value['cname'],'cid'=>$value['cid'],'fid'=>$value['fid'],'blank'=>'');
							}elseif($value['ckind']==3) {
								$mynav[]=array('url'=>'?do=str&cid='.$value['cid'],'title'=>$value['cname'],'cid'=>$value['cid'],'fid'=>$value['fid'],'blank'=>'');
							}elseif($value['ckind']==4) {
								if($value['newwindow']==1) {
									$mynav[]=array('url'=>$value['cvalue'],'title'=>$value['cname'],'cid'=>$value['cid'],'fid'=>$value['fid'],'blank'=>'target="_blank"');
								}else {
									$mynav[]=array('url'=>$value['cvalue'],'title'=>$value['cname'],'cid'=>$value['cid'],'fid'=>$value['fid'],'blank'=>'');
								}
							}elseif($value['ckind']==5) {
								
							}
						}
					}
				}
				if(count($mynav)>0) {
					if($fid<=0) {
						$sonNav = $GLOBALS['db'] -> all("SELECT * FROM ".tableex('channel')." where fid='".$cid."' order by corder asc");
					}else {
						$sonNav = $GLOBALS['db'] -> all("SELECT * FROM ".tableex('channel')." where fid='".$fid."' order by corder asc");
					}
					if(count($sonNav)>0) {
							echo('<div style="padding: 20px;"><div class="layui-tab"><ul class="layui-tab-title">');
							if($fid<=0) {
								echo('<li class="layui-this"><a href="'.$cid['url'].'">默认配置</a></li>');
							}else {
								echo('<li><a href="?do=str&cid='.$fid.'">默认配置</a></li>');
							}
							foreach($sonNav as $s) {
								if($cid==$s['cid']) {
									echo('<li class="layui-this">');
								}
								else {
									echo('<li>');	
								}
								if($s['ckind']==1) {
									$thisUrl = '?do=str&cid='.$s['cid'];
								}elseif($s['ckind']==2) {
									$thisUrl = '?do=list&cid='.$s['cid'];
								}elseif($s['ckind']==3) {
									$thisUrl = '?do=str&cid='.$s['cid'];
								}elseif($s['ckind']==4) {
									if(@$s['newwindow']==1) {
										$thisUrl = $value['s'];
									}else {
										$thisUrl = $value['s'];
									}
								}elseif($value['ckind']==5) {
									$thisUrl = get_transit_channel($value['cid'],2);
								}
								echo('<a href="'.$thisUrl.'">'.$s['cname'].'</a></li>');
							}
							echo('</ul></div></div>');
						}
					
					}
					Return count($mynav);
				}
				getleftlist2();	
			}
		?>

  <div class="layui-field-box">
  	
<form  id="form1" name="form1" method="post" action="?do=str_editpost&cid=<?php echo($cid);?>" class="layui-form new">
	<?php
  	if(isset($csetting['cnote'])) { 
		if($csetting['cnote']) { 
			echo('<div class="layui-form-item"><label class="layui-form-label">友情提示</label><div class="layui-input-block"><blockquote class="layui-elem-quote" style="padding: 10px;">'.$csetting['cnote'].'</blockquote></div></div>');
		}
	}
	?>
<?php newtoken();?>
<?php
if(power('s',$cid,$power,5)) {
	$query = $GLOBALS['db'] -> query("SELECT * FROM ".tableex('str')." where strcid='$cid' and inputkind>0 order by strorder");
}else {
	$query = $GLOBALS['db'] -> query("SELECT * FROM ".tableex('str')." where strcid='$cid' and inputkind>0 and ifadmin='0' order by strorder");
}
$strlist = $GLOBALS['db'] -> fetchall($query);
if($cid==0 && !$strlist && power('alevel')==3) {
	echo("<meta http-equiv=refresh content='0; url=?do=install'>");
	exit();
}

foreach ($strlist as $link) 
{ 
	?>
<div class="layui-form-item">
<?php
if(power('alevel')==3) {
?>
	<label class="layui-form-label"><?php echo($link['strtitle']);?></label>
<?php
}else{
?>
	<label class="layui-form-label"><?php echo($link['strtitle']);?></label>
<?php
}
?>

<?php
$strarray=explode('|',$link['strarray']);
$thisinput=array(
	'id'=>$link['id'],
	'from'=>'str',
	'pictips'=>$link['strtip'],
	'kind'=>$link['inputkind'],
	'inputname'=>'input_'.$link['id'],
	'inputvalue'=>$link['strvalue'],
	'style'=>$link['strstyle'],
	'strarray'=>$strarray
);
echo('<div class="layui-input-inline">');
htmlinput($thisinput);
echo('</div>');
	echo('<div class="layui-form-mid layui-word-aux">'.$link['strtip'].'</div>');
?>

		</div>
	<?php
}
?>
<?php
if(power('s',$cid,$power,4)) {
?>
	<div class="layui-form-item">
		<div class="layui-input-block">
			<input class="layui-btn layui-btn-normal" type="submit" value="保存设置" />
		</div>
	</div>
<?php
}
?>
	</form>
</div>
</fieldset>


