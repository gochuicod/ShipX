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

  $to_admin = "info@shipx.asia";
  $subject  = "New Contact Form Submission from $name";

  // 📨 HTML email body for the admin
  $admin_body = "
  <html>
    <body style='font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;'>
      <div style='max-width: 600px; margin: auto; background: white; border-radius: 8px; padding: 20px;'>
        <h2 style='color: #333;'>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Message:</strong></p>
        <div style='background: #f1f1f1; padding: 10px; border-radius: 5px;'>
          " . nl2br($message) . "
        </div>
      </div>
    </body>
  </html>";

  // 📨 Optional — confirmation email for the sender
  $user_subject = "Thanks for contacting ShipX Asia!";
  $user_body = <<<HTML
  <html>
    <body style='font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;'>
      <div style='position: relative; max-width: 600px; margin: auto; background: white; border-radius: 8px; padding-left: 40px; padding-top: 40px; padding-right: 40px; padding-bottom: 20px; overflow: hidden;'>
        <img style="position: absolute; transform: translate(-50px, 100px);" src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/email_template_svg_1.svg" height="700px" width="1000px" />
        <div style="display: flex; justify-content: center; align-items: center;">
            <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx_logo.svg" height="65px" width="100px" />
        </div>
        <p style="color: #1A1A1A; text-align: center; opacity: 100%; font-size: 25px; line-height: 45px; font-weight: 600; padding-top: 20px;">
            <span style="color: #FF00E5; font-size: 45px; font-weight: 700;">THANKS!</span><br/>
            WE'VE GOT YOUR MESSAGE
        </p>
        <p style="color:#1A1A1A; text-align: center; padding-top: 50px;">
            <strong>Hi {$name},</strong>
        </p>
        <p style="color: #1A1A1A; text-align: center; opacity: 80%; padding-inline: 50px; line-height: 25px; font-size: 15px;">
            Thanks for reaching out to ShipX. We've received your message and routed it to the right teammate. A member of our sales team will contact you within one business day.
        </p>
        <p style="color: #1A1A1A; text-align: center; opacity: 80%; font-size: 15px;">
            If there's anything urgent, just reply to this email with more details.
        </p>
        <p style="color: #FF00E5; text-align: center; line-height: 1px; padding-top: 25px; font-weight: 900; font-size: 15px;">
            Want to move faster?
            <p style="color: #1A1A1A; text-align: center; opacity: 80%; font-size: 15px;">
                Book a time that suits you
            </p>
        </p>
        <div align="center" style="padding-top: 15px; padding-bottom: 25px;">
            <a
                href="https://calendar.app.google/Rfe2S7Vswp9NmjJaA"
                style="
                    display: inline-block;
                    padding: 10px 30px;
                    border-radius: 9999px;
                    font-weight: 700;
                    color: #ffffff;
                    text-decoration: none;
                    background: linear-gradient(90deg, #4F378A 0%, #FF00E5 60%, #FF00E5 100%);
                    background-size: 200% 100%;
                    background-position: 0% 0%;
                    transition: background-position 1s ease-in-out;
                    font-family: sans-serif;
                    font-size: 15px;
                    text-align: center;
                    cursor: pointer;
                    z-index: 100;
                    position: relative;
                "
                onmouseover="this.style.backgroundPosition='100% 0%'"
                onmouseout="this.style.backgroundPosition='0% 0%'"
            >
                Book a Demo Now!
            </a>
        </div>
        <p style="color: #FF00E5; text-align: center; line-height: 1px; font-weight: 900; font-size: 15px;">
            Connect with Our Local Team
            <p style="color: #1A1A1A; text-align: center; opacity: 80%; font-size: 15px;">
                see contacts below
            </p>
        </p>
        <div style="display: flex; flex-direction: column; gap: 20px 0px; padding-top: 20px;">
            <div style="display: flex; flex-direction: row; gap: 0px 30px; justify-content: center;">
                <div align="center" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #F8F7FF; border-radius: 8px; padding: 15px;">
                    <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_22.svg" height="25px" width="25px" />
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px; padding-top: 10px;">
                        (+84) 90 270 23 45
                    </span>
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px;">
                        contact.vn@shipx.asia
                    </span>
                </div>
                <div align="center" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #F8F7FF; border-radius: 8px; padding: 15px;">
                    <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_20.svg" height="25px" width="25px" />
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px; padding-top: 10px;">
                        (+65) 9001 9941
                    </span>
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px;">
                        contact.sg@shipx.asia
                    </span>
                </div>
                <div align="center" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #F8F7FF; border-radius: 8px; padding: 15px;">
                    <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_19.svg" height="25px" width="25px" />
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px; padding-top: 10px;">
                        (+63) 97616 71128
                    </span>
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px;">
                        contact.ph@shipx.asia
                    </span>
                </div>
            </div>
            <div style="display: flex; flex-direction: row; gap: 0px 30px; justify-content: center;">
                <div align="center" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #F8F7FF; border-radius: 8px; padding: 15px;">
                    <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_21.svg" height="25px" width="25px" />
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px; padding-top: 10px;">
                        (+66) 96 798 8971
                    </span>
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px;">
                        contact.th@shipx.asia
                    </span>
                </div>
                <div align="center" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #F8F7FF; border-radius: 8px; padding: 15px;">
                    <img style="border-radius: 1000px;" src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_16.svg" height="25px" width="25px" />
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px; padding-top: 10px;">
                        contact.us@shipx.asia
                    </span>
                </div>
                <div align="center" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #F8F7FF; border-radius: 8px; padding: 15px;">
                    <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_18.svg" height="25px" width="25px" />
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px; padding-top: 10px;">
                        (+60) 12 525 5019
                    </span>
                    <span style="color: #1A1A1A; text-align: center; opacity: 60%; font-size: 15px;">
                        contact.my@shipx.asia
                    </span>
                </div>
            </div>
        </div>
        <p style="color: #1A1A1A; text-align: center; opacity: 80%; font-size: 15px; line-height: 30px;">
            Best, <br/>
            The
            <span style="display: inline-flex; align-items: center; font-weight: 900; font-size: 16px; margin: 0 4px;">
                <span>
                    Ship
                </span>
                <span style="color: #FF00E5">
                    X
                </span>
            </span>
            Team <br/>
            by SG Link & Amilo
        </p>
        <div style="display: flex; flex-direction: row; justify-content: space-between; padding-top: 20px;">
            <div align="center" style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 0px 10px">
                <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/email_template_icon_1.webp" height="15px" width="15px" />
                <span style="color: #0E0E0E; text-align: center; opacity: 100%; font-size: 15px;">
                    info@shipx.asia
                </span>
            </div>
            <div align="center" style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 0px 10px">
                <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/email_template_icon_2.webp" height="20px" width="20px" />
                <span style="color: #0E0E0E; text-align: center; opacity: 100%; font-size: 15px;">
                    (+84) 90 270 23 45
                </span>
            </div>
            <div align="center" style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 0px 10px">
                <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/email_template_icon_3.webp" height="20px" width="20px" />
                <span style="color: #0E0E0E; text-align: center; opacity: 100%; font-size: 15px;">
                    shipx.asia
                </span>
            </div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-between; margin-top: 30px; background-color: #FFD6FA40; border-radius: 20px;">
            <img style="box-shadow: 0 0vw 1vw rgba(79, 55, 138, 0.15); border-radius: 20px;" src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/email_template_image_1.webp" height="170px" width="280px" />
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: start; width: 100%; padding-left: 40px;">
                <p style="color: #1A1A1A; text-align: left; opacity: 100%; font-size: 20px; line-height: 25px; font-weight: 600;">
                    Want to learn more about <br/>
                    the
                    <span style="color: #FF00E5">
                        ShipX
                    </span>
                    launch?
                </p>
                <a
                    href="https://calendar.app.google/Rfe2S7Vswp9NmjJaA"
                    style="
                        display: inline-block;
                        padding: 10px 30px;
                        border-radius: 9999px;
                        font-weight: 700;
                        color: #ffffff;
                        text-decoration: none;
                        background: linear-gradient(90deg, #4F378A 0%, #FF00E5 60%, #FF00E5 100%);
                        background-size: 200% 100%;
                        background-position: 0% 0%;
                        transition: background-position 1s ease-in-out;
                        font-family: sans-serif;
                        font-size: 15px;
                        text-align: center;
                        cursor: pointer;
                        z-index: 100;
                        position: relative;
                    "
                    onmouseover="this.style.backgroundPosition='100% 0%'"
                    onmouseout="this.style.backgroundPosition='0% 0%'"
                >
                    Read our blog here
                </a>
            </div>
        </div>
        <footer style="position: relative; background: linear-gradient(90deg, #4F378A 0%, #FF00E5 95%, #FF00E5 100%); margin-top: 70px; padding-left: 50px; padding-right: 50px; padding-top: 20px; padding-bottom: 20px; margin-left: -40px; margin-right: -40px; margin-bottom: 20px; box-shadow: 0 0vw 1vw rgba(79, 55, 138, 0.15);">
            <img style="position: absolute; top: -130px; right: 0;" src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/email_template_svg_2.svg" height="300px" width="350px" />
            <div style="display: flex; flex-direction: row;">
                <div style="display: flex; flex-direction: column;">
                    <div style="display: flex; flex-direction: row; gap: 0px 10px">
                        <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx_logo_white.svg" height="65px" width="100px" />
                        <img src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/sglink_amilo_logo_white.svg" height="65px" width="100px" />
                    </div>
                    <span style="color: white; font-weight: 500; font-size: 15px;">
                        ASEAN's Next Generation Platform
                    </span>
                </div>
            </div>
            <div style="display: flex; flex-direction: row; gap: 0px 20px; align-items: center; justify-content: space-between;">
                <p style="color: white; font-weight: 400; font-size: 12px; width: 45%; text-align: justify; opacity: 100%;">
                    Empowering businesses to ship globally with confidence. Our platform simplifies international shipping, customs, and logistics.
                </p>
                <div style="display: flex; flex-direction: column;">
                    <div style="display: flex; flex-direction: row; justify-content: space-between; line-height: 1px;">
                        <p style="color: white; font-weight: 400; font-size: 12px; text-align: justify; opacity: 100%;">
                            Terms and Conditions
                        </p>
                        <p style="color: white; font-weight: 400; font-size: 12px; text-align: justify; opacity: 100%;">
                            &bull;
                        </p>
                        <p style="color: white; font-weight: 400; font-size: 12px; text-align: justify; opacity: 100%;">
                            Privacy Policy
                        </p>
                    </div>
                    <p style="color: white; font-weight: 400; font-size: 12px; text-align: justify; opacity: 100%; line-height: 1px;">
                        © 2025 ShipX Copyright and rights reserved
                    </p>
                </div>
            </div>
            <div style="width: 100%; justify-content: center; align-items: center; display: flex; padding-top: 10px;">
                <span style="color: white; font-weight: 400; font-size: 12px; text-align: center;">
                    350 National Highway 1A, Binh Hung Hoa B, Binh Tan, Ho Chi Minh
                </span>
            </div>
        </footer>
        <div style="width: 100%; justify-content: center; align-items: center; display: flex;">
            <span style="color: #4D4D4D; opacity: 50%; text-align: center; font-size: 14px">
                You're receiving this as confirmation of your inquiry with ShipX (by SG Link & Amilo). For urgent matters, reply to this email. Privacy details available on shipx.asia
            </span>
        </div>
      </div>
    </body>
  </html>
  HTML;

  $headers = array('Content-Type: text/html; charset=UTF-8');

  // Send to admin and user
  $admin_sent = wp_mail($to_admin, $subject, $admin_body, $headers);
  $user_sent  = wp_mail($email, $user_subject, $user_body, $headers);

  if ($admin_sent && $user_sent) {
    return array('success' => true, 'message' => 'Messages sent successfully!');
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