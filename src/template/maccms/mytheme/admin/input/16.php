<input id="<?php echo($inputname);?>"  class="layui-input" style="display: inline-block; width: 100px;" name="<?php echo($inputname);?>" type="text" value="<?php echo($inputvalue);?>" hx="<?php echo($inputvalue);?>" autocomplete="off" /><div id="form_<?php echo($inputname);?>" style="display: inline-block; vertical-align: 1px; margin-left: -1px;"></div>
<script type="text/javascript">
	layui.use('colorpicker', function(){
	  	var $ = layui.$
	  	,colorpicker = layui.colorpicker;
		colorpicker.render({
	    elem: '#form_<?php echo($inputname);?>'
	    ,color: '<?php echo($inputvalue);?>'
	    ,done: function(color){
	      	$('#<?php echo($inputname);?>').val(color);
	    	}
  		});
 	});
</script>