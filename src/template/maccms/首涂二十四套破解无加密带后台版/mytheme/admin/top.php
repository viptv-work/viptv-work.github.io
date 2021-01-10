<?php
adminchannelscache();
?>
  <div class="layui-header" style="background-color: #393D49;">
  	<a class="logo layui-layout-left" href="?do=home" style="left: 20px; top: 8px; color: #ddd;">
      <img src="static/img/logo2.png" alt="layui" width="170">&nbsp;&nbsp;
    </a>
    <div class="layui-main">
  	<ul class="layui-nav" style="padding: 0;">
  		<li class="layui-nav-item <?php if( $thisdo[0]=='home') {echo('layui-this');}?>"><a href="?do=home">首页</a></li>
  		<?php if(power('s',0)) {?>

			<li class="layui-nav-item <?php if((!isset($_GET['cid']) || $_GET['cid']==0) && isset($thisdo[0]) && $thisdo[0]=='str') {echo('layui-this');}?>"><a href="?do=str">站点设置</a></li>

		<?php }?>
<?php
if(isset($_GET['cid'])) {
	$cid=intval($_GET['cid']);
	$link =adminchannel($cid);
	$fid=$link['fid'];
}else {
	$cid=0;
}

function getleftlist($cdaddy=0,$times=0){
	Global $channels;
	Global $power,$cid,$fid;
	$times++;
	$mynav=array();
	foreach($channels as $value){
		if ($value['fid']==$cdaddy && $times<5){
			if($value['ifshowleft']==1 && $value['ifshowadmin']==1 && power('s',$value['cid'],$power)) {
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
					$mynav[]=array('url'=>get_transit_channel($value['cid'],2),'title'=>$value['cname'],'cid'=>$value['cid'],'fid'=>$value['fid'],'blank'=>'');
				}
			}
		}
	}
	if(count($mynav)>0) {
		foreach($mynav as $thisnav) {
			if($cid==$thisnav['cid']||$fid==$thisnav['cid']) {
				echo('<li class="layui-nav-item layui-this">');
			}
			else {
				echo('<li class="layui-nav-item">');	
			}
			echo('<a href="'.$thisnav['url'].'"'.$thisnav['blank'].'>'.$thisnav['title'].'</a>');
			echo('</li>');
		}
	}
	Return count($mynav);
}
getleftlist();
?>
 </ul>
	</div>
   </ul>
   <ul class="layui-nav layui-layout-right" style="padding: 0;">
   	
	<li class="layui-nav-item">
    <a href="javascript:;">我的</a>
    <dl class="layui-nav-child">
      <?php
		if(power('b',2)) {
			echo('<a href="?do=user_my">修改密码</a>');
		}
		?>
		<?php
		if(power('alevel')>1) {
			echo('<dd><a href="?do=user">帐户管理</a></dd>');
		}
		if(power('alevel')==3) {
			echo('<dd><a href="?do=str_cache&'.newtoken(3).'">清空缓存</a></dd>');
		}
		?>
	    <dd><a href="login.php?do=out&<?php echo(newtoken(2));?>">退出</a></dd>
    </dl>
  </li>
	<li class="layui-nav-item"><a href="<?php echo(gethomeurl());?>" target="_blank">前台</a></li>
   </ul>
 </div>
<script type="text/javascript">
	layui.use('element', function(){
  	var element = layui.element;
});
</script>

<div class="layui-main">
	