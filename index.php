<?php
  status_header(200);
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/site_icon_shipx.ico" sizes="32x32">
    <link rel="preload" as="image" fetchpriority="high" href="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_1.webp">
    <link rel="preload" as="image" href="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_11.webp">
    <link rel="preload" as="image" href="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_12.webp">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <div id="render"></div>
    <?php wp_footer(); ?>
  </body>
</html>