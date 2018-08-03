<?php
define('MOBILE_THEME_URL', get_template_directory_uri());
define('MOBILE_THEME_PATH', dirname(__FILE__) . '/');
define('MOBILE_DOMAIN', get_site_url());
define('MOBILE_SITE_NAME', get_bloginfo('name'));
require MOBILE_THEME_PATH . 'vendor/autoload.php';

$timber = new \Timber\Timber();
Timber::$dirname = 'templates';

/**
 * Custom post types and taxonomies.
 */
function mobile_architecture()
{
    // Post Types
    include_once MOBILE_THEME_PATH . 'lib/custom_post_types/MobileStories.php';
    include_once MOBILE_THEME_PATH . 'blocks/mobile-story.php';
}

add_action('init', 'mobile_architecture', 0);