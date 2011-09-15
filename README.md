#SmartMetaBox Class#

##What does it do?##
This is a really basic helper class for WordPress themes and plugins that allows their authors to easily manage meta boxes. You just need to pass an id and a configuration array to `add_smart_meta_box()`, specify what kind of fields you need (any number of text, textarea, checkbox, select, radio, image, file) and it will deal with rendering a meta box an saving the fields for you.

##How do I use it?##

Create a folder under your theme called includes

Download the latest files and put them into includes you should have
	`js/ smart_meta_fields/ SmartMetaBox.php`
In your themes `functions.php` add the following line being sure to specify the correct path
	`require_once TEMPLATEPATH .'/includes/SmartMetaBox.php';`

Also in you `functions.php` you need to add the following code (this is an example only):
		add_smart_meta_box('my-meta-box', array(
	    'title' => 'A box of awesomeness', // the title of the meta box
	    'pages' => array('post'),  // post types on which you want the metabox to appear
	    'context' => 'normal', // meta box context (see above)
	    'priority' => 'high', // meta box priority (see above)
	    'fields' => array( // array describing our fields
	        array(
	            'name' => 'Put awesomeness here',
	            'id' => 'my-awesome-field',
	            'type' => 'text', // options are checkbox, image, radio, select, text, textarea
	        ),
	        // put more arrays to add different fields
	    )
	));

To output the new fields in your theme just include `echo SmartMetaBox::get('field_id here');`