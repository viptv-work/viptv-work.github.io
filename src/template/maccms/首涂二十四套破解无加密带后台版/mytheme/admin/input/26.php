
<input type="hidden" name="<?php echo($inputname);?>" id="<?php echo($inputname);?>" value="<?php echo($inputvalue);?>">
<input <?php echo($style);?> type="checkbox" id="<?php echo($inputname);?>_checkbox" <?php if($inputvalue==1) {echo('checked');}?> lay-skin="switch" lay-text="ON|OFF" lay-filter="<?php echo($inputname);?>_checkbox">
<script>
$(function(){
	layui.use('form', function(){
  	var form = layui.form;
		form.on('switch(<?php echo($inputname);?>_checkbox)', function(data){
	  		if($(this).prop('checked')){
				$('#<?php echo($inputname);?>').val("1");
			}else{
				$('#<?php echo($inputname);?>').val("0");
			}
		});
	});
});
</script>