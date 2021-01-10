<?php
if($inputvalue=='') {
	$inputvalue=0;
}
?>
<input<?php echo($style);?> name="<?php echo($inputname);?>" type="text"  value="<?php echo(($inputvalue));?>" size="5" style="text-align: center; padding: 0;" class="layui-input">