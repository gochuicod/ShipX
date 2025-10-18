<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/site_icon_shipx.ico" sizes="32x32">
    <link rel="preload" as="image" href="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_1.svg">
    <link rel="preload" as="image" href="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_11.svg">
    <link rel="preload" as="image" href="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_svg_12.svg">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <div id="render"></div>
    <?php wp_footer(); ?>
  </body>
</html>