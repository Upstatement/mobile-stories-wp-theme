<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package mobile-stories
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function mobile_story_block_init()
{
    $dir = dirname(__FILE__);

    $block_js = 'mobile-story/block.build.js';
    wp_register_script(
        'mobile-story-block-editor',
        get_template_directory_uri() . "/blocks/" . $block_js,
        array(
            'wp-blocks',
            'wp-i18n',
            'wp-element',
        ),
        filemtime("$dir/$block_js")
    );

    $editor_css = 'mobile-story/editor.css';
    wp_register_style(
        'mobile-story-block-editor',
        get_template_directory_uri() . "/blocks/" . $editor_css,
        array(
            'wp-blocks',
        ),
        filemtime("$dir/$editor_css")
    );

    $style_css = 'mobile-story/style.css';
    wp_register_style(
        'mobile-story-block',
        get_template_directory_uri() . "/blocks/" . $style_css,
        array(
            'wp-blocks',
        ),
        filemtime("$dir/$style_css")
    );

    register_block_type('mobile-stories/card', array(
        'editor_script' => 'mobile-story-block-editor',
        'editor_style'  => 'mobile-story-block-editor',
        'style'         => 'mobile-story-block',
    ));
}
add_action('init', 'mobile_story_block_init');
