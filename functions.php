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
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <!-- Load Kantumruy Pro from Google Fonts -->
      <link
        href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ShipX - Thank You</title>
    </head>
    <body
      style="
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        font-family: 'Kantumruy Pro', Arial, sans-serif;
      "
    >
      <center style="width: 100%; background-color: #ffffff">
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
          style="
            max-width: 600px;
            border-collapse: collapse;
            background-color: #ffffff;
            background-image: url('https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/bg-images/Laptop.png');
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
          "
        >
          <!-- Logo -->
          <tr>
            <td align="center" style="padding: 30px 0 10px 0">
              <a href="http://shipx.asia/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/ShipX%20Logo.png"
                  width="108"
                  height="49"
                  alt="ShipX Logo"
                  style="display: block; border: 0; padding-top: 50px"
                />
              </a>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td align="center" style="padding: 10px 20px">
              <h1
                style="
                  color: #ff00e5;
                  font-size: 34px;
                  font-weight: 700;
                  margin: 0;
                  font-family: Karla, Arial, sans-serif;
                "
              >
                THANKS!
              </h1>
              <p
                style="
                  color: #1a1a1a;
                  font-size: 20px;
                  font-weight: 500;
                  margin: 10px 0 0 0;
                  font-family: Karla, Arial, sans-serif;
                "
              >
                WE'VE GOT YOUR MESSAGE
              </p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td align="center" style="padding: 150px 20px 10px">
              <p
                style="
                  font-size: 18px;
                  color: #000000;
                  font-weight: 700;
                  margin: 0;
                  font-family: Karla, Arial, sans-serif;
                "
              >
                Hi {{first_name}},
              </p>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td align="center" style="padding: 10px 30px">
              <p
                style="
                  font-size: 16px;
                  color: #000000;
                  line-height: 24px;
                  margin: 0;
                "
              >
                Thanks for reaching out to ShipX. We've received your message and
                routed it to the right teammate. A member of our sales team will
                contact you within one business day.
              </p>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding: 40px 20px 10px">
              <p
                style="
                  color: #ff00e5;
                  font-weight: 700;
                  font-size: 18px;
                  margin: 0;
                "
              >
                Want to move faster?
              </p>
              <p style="font-size: 16px; color: #000000; margin: 5px 0 20px 0">
                Book a time that suits you
              </p>
              <a
                href="http://shipx.asia/book-a-demo"
                target="_blank"
                style="
                  display: inline-block;
                  padding: 12px 30px;
                  background: radial-gradient(
                    circle at 76% 51%,
                    #ff00e5 0%,
                    #4f378a 100%
                  );
                  border-radius: 20px;
                  color: #ffffff;
                  font-size: 18px;
                  font-weight: bold;
                  text-decoration: none;
                "
              >
                Book A Demo Now!
              </a>
            </td>
          </tr>

          <!-- Local Team -->
          <tr>
            <td align="center" style="padding: 10px 30px 30px 20px">
              <p
                style="
                  color: #ff00e5;
                  font-weight: 700;
                  font-size: 18px;
                  margin: 0;
                "
              >
                Connect with Our Local Team
              </p>
              <p style="font-size: 16px; color: #000000; margin: 5px 0 10px 0">
                See contacts below
              </p>

              <!-- Contacts Table -->
              <table
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="width: 100%; max-width: 520px; border-collapse: collapse"
              >
                <!-- Row 1 -->
                <tr>
                  <!-- Vietnam -->
                  <td
                    align="center"
                    valign="top"
                    style="
                      background-color: #f8f7ff;
                      border-radius: 7px;
                      padding: 15px;
                    "
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/country-logos/vn.png"
                      width="25"
                      alt="Vietnam"
                      style="margin-bottom: 5px; display: block"
                    /><br />
                    <a
                      href="mailto:contact.vn@shipx.asia"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >contact.vn@shipx.asia</a
                    ><br />
                    <a
                      href="tel:+842873001234"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >+84 28 7300 1234</a
                    >
                  </td>

                  <td width="20"></td>

                  <!-- Singapore -->
                  <td
                    align="center"
                    valign="top"
                    style="
                      background-color: #f8f7ff;
                      border-radius: 7px;
                      padding: 15px;
                    "
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/country-logos/sg.png"
                      width="25"
                      alt="Singapore"
                      style="margin-bottom: 5px; display: block"
                    /><br />
                    <a
                      href="mailto:contact.sg@shipx.asia"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >contact.sg@shipx.asia</a
                    ><br />
                    <a
                      href="tel:+6567890123"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >+65 6789 0123</a
                    >
                  </td>

                  <td width="20"></td>

                  <!-- Philippines -->
                  <td
                    align="center"
                    valign="top"
                    style="
                      background-color: #f8f7ff;
                      border-radius: 7px;
                      padding: 15px;
                    "
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/country-logos/ph.png"
                      width="25"
                      alt="Philippines"
                      style="margin-bottom: 5px; display: block"
                    /><br />
                    <a
                      href="mailto:contact.ph@shipx.asia"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >contact.ph@shipx.asia</a
                    ><br />
                    <a
                      href="tel:+63281234567"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >+63 2 8123 4567</a
                    >
                  </td>
                </tr>

                <!-- Vertical spacer row -->
                <tr>
                  <td colspan="5" height="20"></td>
                </tr>

                <!-- Row 2 -->
                <tr>
                  <!-- Malaysia -->
                  <td
                    align="center"
                    valign="top"
                    style="
                      background-color: #f8f7ff;
                      border-radius: 7px;
                      padding: 15px;
                    "
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/country-logos/my.png"
                      width="25"
                      alt="Malaysia"
                      style="margin-bottom: 5px; display: block"
                    /><br />
                    <a
                      href="mailto:contact.my@shipx.asia"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >contact.my@shipx.asia</a
                    ><br />
                    <a
                      href="tel:+60392123456"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >+60 3 9212 3456</a
                    >
                  </td>

                  <td width="20"></td>

                  <!-- USA -->
                  <td
                    align="center"
                    valign="top"
                    style="
                      background-color: #f8f7ff;
                      border-radius: 7px;
                      padding: 15px;
                    "
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/country-logos/us.png"
                      width="25"
                      alt="USA"
                      style="margin-bottom: 5px; display: block"
                    /><br />
                    <a
                      href="mailto:contact.us@shipx.asia"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >contact.us@shipx.asia</a
                    ><br />
                    <a
                      href="tel:+14155550198"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >+1 415 555 0198</a
                    >
                  </td>

                  <td width="20"></td>

                  <!-- Thailand -->
                  <td
                    align="center"
                    valign="top"
                    style="
                      background-color: #f8f7ff;
                      border-radius: 7px;
                      padding: 15px;
                    "
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/country-logos/th.png"
                      width="25"
                      alt="Thailand"
                      style="margin-bottom: 5px; display: block"
                    /><br />
                    <a
                      href="mailto:contact.th@shipx.asia"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >contact.th@shipx.asia</a
                    ><br />
                    <a
                      href="tel:+6623456789"
                      style="
                        font-size: 12px;
                        color: #4d4d4d;
                        text-decoration: none;
                      "
                      >+66 2 345 6789</a
                    >
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td align="center" style="padding: 2px 0px 20px 0px">
              <p
                style="
                  font-size: 16px;
                  color: #1a1a1a;
                  margin: 0;
                  line-height: 20px;
                  font-weight: 400;
                  line-height: 24px;
                "
              >
                Best, <br />
                The
                <strong>Ship<span style="color: #ff00e5">X</span></strong>
                Team<br />
                by SG Link & Amilo
              </p>
            </td>
          </tr>

          <!-- Contact Info Bar -->
          <tr>
            <td align="center">
              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                align="center"
                style="
                  border-radius: 8px;
                  padding: 0px 20px;
                  max-width: 600px;
                  width: 100%;
                  font-family: Karla, Arial, sans-serif;
                "
              >
                <tr>
                  <!-- Email -->
                  <td align="center" style="padding: 5px 15px">
                    <img
                      src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/icons/ic_sharp-email.png"
                      alt="Email"
                      width="20"
                      style="vertical-align: middle; margin-right: 6px"
                    />
                    <a
                      href="mailto:info@shipx.asia"
                      style="
                        color: #000000;
                        text-decoration: none;
                        font-size: 14px;
                      "
                    >
                      info@shipx.asia
                    </a>
                  </td>

                  <!-- Phone -->
                  <td align="center" style="padding: 5px 15px">
                    <img
                      src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/icons/bxs_phone-call.png"
                      alt="Phone"
                      width="20"
                      style="vertical-align: middle; margin-right: 6px"
                    />
                    <a
                      href="tel:+84902702345"
                      style="
                        color: #000000;
                        text-decoration: none;
                        font-size: 14px;
                      "
                    >
                      (+84) 90 270 23 45
                    </a>
                  </td>

                  <!-- Website -->
                  <td align="center" style="padding: 5px 15px">
                    <img
                      src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/icons/Frame.png"
                      alt="Website"
                      width="20"
                      style="vertical-align: middle; margin-right: 6px"
                    />
                    <a
                      href="https://shipx.asia"
                      target="_blank"
                      style="
                        color: #000000;
                        text-decoration: none;
                        font-size: 14px;
                      "
                    >
                      shipx.asia
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Top Section: ShipX Goes Live -->
          <tr>
            <td
              align="center"
              style="background-color: transparent; padding: 0px 20px"
            >
              <table
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="max-width: 520px; width: 100%; border-collapse: collapse"
              >
                <tr>
                  <!-- Left Column: Image -->
                  <td
                    align="left"
                    valign="middle"
                    style="width: 50%; padding-right: 10px"
                  >
                    <a
                      href="https://shipx.asia/en/news/shipx-goes-live-smarter-future-asean-cross-border-logistics/"
                      target="_blank"
                      style="display: inline-block; text-decoration: none"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/Blog%20image.png"
                        alt="ShipX Goes Live"
                        width="100%"
                        style="display: block; border-radius: 10px"
                      />
                    </a>
                  </td>

                  <!-- Right Column: Text + Button -->
                  <td align="left" valign="middle" style="width: 50%">
                    <p
                      style="
                        font-size: 18px;
                        font-weight: 700;
                        color: #1b1b1b;
                        margin: 0 0 8px;
                        line-height: 22px;
                      "
                    >
                      Want to learn more about the
                      <a
                        href="https://shipx.asia"
                        target="_blank"
                        style="
                          color: #ff00e5;
                          text-decoration: none;
                          font-weight: 600;
                        "
                        >ShipX</a
                      >
                      launch?
                    </p>

                    <a
                      href="https://shipx.asia/en/news/shipx-goes-live-smarter-future-asean-cross-border-logistics/"
                      target="_blank"
                      style="
                        background: linear-gradient(
                          90deg,
                          #4f378a 0%,
                          #ff00e5 100%
                        );
                        color: #ffffff;
                        padding: 10px 22px;
                        font-size: 14px;
                        font-weight: 600;
                        border-radius: 9999px;
                        text-decoration: none;
                        display: inline-block;
                        line-height: 20px;
                      "
                    >
                      Read our blog here
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              align="center"
              style="
                background: linear-gradient(250deg, #ff00e5 0%, #4f378a 100%);
                padding: 30px 20px;
                color: #ffffff;
              "
            >
              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                align="center"
                style="max-width: 520px; width: 100%; border-collapse: collapse"
              >
                <tr>
                  <!-- Left Section -->
                  <td
                    valign="top"
                    align="left"
                    style="width: 50%; padding-right: 25px"
                  >
                    <a
                      href="https://shipx.asia"
                      target="_blank"
                      style="display: inline-block; text-decoration: none"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/Footer%20Logo%20(1).png"
                        width="200"
                        alt="ShipX Footer Logo"
                        style="display: block; padding-bottom: 10px"
                      />
                    </a>

                    <p
                      style="
                        font-size: 12px;
                        margin: 0;
                        line-height: 18px;
                        color: #ffffff;
                        font-weight: 600;
                        font-family: 'Kantumruy Pro', Arial, sans-serif;
                      "
                    >
                      ASEAN's Next Generation Platform
                    </p>

                    <p
                      style="
                        font-size: 12px;
                        padding-top: 30px;
                        line-height: 16px;
                        color: #f2f2f2;
                        font-family: 'Kantumruy Pro', Arial, sans-serif;
                      "
                    >
                      Empowering businesses to ship globally with confidence. Our
                      platform simplifies international shipping, customs, and
                      logistics.
                    </p>
                  </td>

                  <!-- Right Section -->
                  <td
                    valign="top"
                    align="right"
                    style="width: 50%; padding-left: 10px"
                  >
                    <!-- Top Row: Placeholder Image -->
                    <a
                      href="https://shipx.asia/"
                      target="_blank"
                      style="display: inline-block; text-decoration: none"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/hezekiahdane/shipx-email-assets@main/Mask%20group.png"
                        width="250px"
                        alt="ShipX Blog"
                        style="display: flex; margin: 0 0 0px auto"
                      />
                    </a>

                    <!-- Bottom Row: Links and Copyright -->
                    <p
                      style="
                        font-size: 12px;
                        margin-bottom: 8px;
                        text-align: left;
                        line-height: 16px;
                      "
                    >
                      <a
                        href="https://shipx.asia/terms"
                        target="_blank"
                        style="color: #ffffff; text-decoration: underline"
                        >Terms and Conditions</a
                      >
                      &nbsp;•&nbsp;
                      <a
                        href="https://shipx.asia/privacy-policy"
                        target="_blank"
                        style="color: #ffffff; text-decoration: underline"
                        >Privacy Policy</a
                      >
                    </p>

                    <p
                      style="
                        font-size: 12px;
                        margin: 0;
                        line-height: 16px;
                        color: #ffffff;
                        text-align: center;
                      "
                    >
                      © 2025 ShipX Copyright and rights reserved
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Address Line -->
              <table
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="max-width: 520px; width: 100%; margin-top: 0px"
              >
                <tr>
                  <td
                    align="center"
                    style="font-size: 11px; color: #ffffff; padding: 8px 10px"
                  >
                    350 National Highway 1A, Binh Hung Hoa B, Binh Tan, Ho Chi
                    Minh
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Disclaimer -->
          <tr>
            <td
              align="center"
              style="
                background-color: #ffffff;
                padding: 15px 20px;
                color: #777777;
                font-size: 10px;
                line-height: 16px;
              "
            >
              You’re receiving this as confirmation of your inquiry with ShipX (by
              SG Link & Amilo). For urgent matters, reply to this email. Privacy
              details available on
              <a
                href="https://shipx.asia"
                target="_blank"
                style="color: #4f378a; text-decoration: underline"
                >shipx.asia</a
              >.
            </td>
          </tr>
        </table>
      </center>
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