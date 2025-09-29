<?php

// Boilerplate init essentials
function boilerplate_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element', 'react-jsx-runtime'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');

add_action('rest_api_init', function () {
  register_rest_route('mytheme/v1', '/contact', array(
    'methods' => 'POST',
    'callback' => 'mytheme_handle_contact',
    'permission_callback' => '__return_true',
  ));
});

// Contact Form
function mytheme_handle_contact(WP_REST_Request $request) {
  $params = $request->get_json_params();

  $name    = sanitize_text_field($params['name'] ?? '');
  $email   = sanitize_email($params['email'] ?? '');
  $phone   = sanitize_text_field($params['phone'] ?? '');
  $message = sanitize_textarea_field($params['message'] ?? '');

  $to = "darelle@infigroup.co"; // <- replace with your target email
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
  $headers = array('Content-Type: text/plain; charset=UTF-8');

  if (wp_mail($to, $subject, $body, $headers)) {
    return array('success' => true, 'message' => 'Message sent successfully!');
  } else {
    return new WP_Error('mail_failed', 'Email failed to send.', array('status' => 500));
  }
}

// Fonts config
function shipx_enqueue_styles() {
  wp_enqueue_style(
    'shipx-main-style',
    get_stylesheet_directory_uri() . '/build/index.css',
    array(),
    filemtime(get_stylesheet_directory() . '/build/index.css')
  );
}
add_action('wp_enqueue_scripts', 'shipx_enqueue_styles');

// Preload fonts
function shipx_preload_fonts() {
  $fonts = [
    'Inter-VariableFont_opsz,wght.woff2',
    'KantumruyPro-VariableFont_wght.woff2',
    'Karla-VariableFont_wght.woff2',
    'Poppins-Regular.woff2',
    'Poppins-SemiBold.woff2',
  ];

  foreach ($fonts as $font) {
    echo '<link rel="preload" href="' . get_stylesheet_directory_uri() . '/fonts/' . $font . '" as="font" type="font/woff2" crossorigin="anonymous">' . "\n";
  }
}
add_action('wp_head', 'shipx_preload_fonts');