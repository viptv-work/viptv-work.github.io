<?php
if(!is_numeric($inputvalue)) {
	$defaulttime=@strtotime($inputvalue);
	if($defaulttime) {
		$inputvalue=date("Y-m-d H:i:s",$defaulttime);
	}else {
		$inputvalue='';
	}
}else {
	if(empty($inputvalue)) {
		$inputvalue='';
	}else {
		$inputvalue=date("Y-m-d H:i:s",$inputvalue);
	}
}
if(empty($style)) {
	$style=' style="width:150px;"';
}
?>
<input<?php echo($style);?> name="<?php echo($inputname);?>" autocomplete="off" id="time_<?php echo($inputname);?>" type="text" value="<?php echo($inputvalue);?>" size="20"  class="layui-input" />
<script type="text/javascript">
	layui.use('laydate', function(){
	  	var laydate = layui.laydate;
	  	laydate.render({
    		elem: '#time_<?php echo($inputname);?>'
    		,type: 'datetime'
  		});
	});
</script>