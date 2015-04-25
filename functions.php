<?php
// Enqueue parent theme's style.css (faster than using @import in our style.css)
$themeVersion = wp_get_theme()->get('Version');


add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'Nirvana', get_template_directory_uri() . '/style.css',
    null, $themeVersion );
    wp_enqueue_style( 'Nirvana-AM',
        get_stylesheet_directory_uri() . '/nirvana-child/style.css',
        array('parent-style')
    );
}

/* load jQuery*/
if (!is_admin()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);
function my_jquery_enqueue() {
   wp_deregister_script('jquery');
   wp_register_script('jquery', "http" . ($_SERVER['SERVER_PORT'] == 443 ? "s" : "") . "://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js", false, null);
   wp_enqueue_script('jquery');
}


// load javascript files

add_action('wp_enqueue_scripts','child_add_scripts');
function child_add_scripts() {
  wp_enqueue_script( 'smooth-scroll-js', get_stylesheet_directory_uri() . '/js/scroll.js' );
  wp_enqueue_script( 'product-icons-js', get_stylesheet_directory_uri() . '/js/loadicons.js' );
  wp_localize_script('product-icons-js', 'WPURLS', array( 'iconsurl' => get_stylesheet_directory_uri() . '/icons/' ));	// show the javascript function where the icons are stored
}

// footer
add_action('cryout_footer_hook', 'footer_add_copy_am');
function footer_add_copy_am(){
	echo '<div id="site-copyright"> <span class="copyright">&copy;</span>' . date("Y") . ' Audio Modules. All Rights Reserved. </div>';
}


?>
