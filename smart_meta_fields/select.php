<select name="<?php echo $id?>" id="<?php echo $id?>">
	<?php foreach ($options as $opt_value=>$opt_name): ?>
		<option <?php selected($value, $opt_value)?> value="<?php echo $opt_value?>"><?php echo $opt_name?></option>
	<?php endforeach ?>
</select>
