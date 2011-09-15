jQuery(document).ready(function() {

jQuery('#upload_file_button').click(function() {
 formfield = jQuery('#upload_image').attr('name');
 tb_show('', 'media-upload.php?type=file&amp;TB_iframe=true');
 return false;
});

window.send_to_editor = function(html) {
 imgurl = jQuery(html).attr('href');
 jQuery('#upload_file').val(imgurl);
 tb_remove();
}

});