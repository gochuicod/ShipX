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
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>ShipX — Thank you</title>
    </head>
    <body style="margin:0; padding:20px; background-color:#f9f9f9; font-family: Arial, sans-serif;">
      <!-- Outer container -->
      <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
        <tr>
          <td align="center">
            <!-- White card (max width 600) -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation" style="max-width:600px; width:100%; border-radius:8px; overflow:hidden; background-color: none; background-image:url('https://res.cloudinary.com/dsk7gzqur/image/upload/v1760073548/Full_Email_Template_uv6wbd.png'); background-repeat:no-repeat; background-position:center top; background-size: cover">
              <!-- Top padding -->
              <tr>
                <td style="padding-top:40px; padding-bottom:20px;">
                  <!-- Branding row -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tr>
                      <td align="center" style="padding-bottom:0px;">
                        <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760068032/Vector_zyknjh.png" alt="ShipX" width="100px" height="50px" style="display:block; border:0; outline:0; text-decoration:none;" />
                      </td>
                    </tr>

                    <!-- Message section with background -->
                  <tr>
                      <td align="center" 
                          background="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760066696/image_38_dhf8qc.png"
                          style="background-position: bottom; background-repeat: no-repeat; background-size: contain; text-align: center; padding:40px 20px;">
                          
                          <!-- Fallback content inside -->
                          <div style="font-size:25px; line-height:40px; color:#1A1A1A; font-weight:600;">
                          <div style="font-size:45px; color:#FF00E5; font-weight:700; line-height:46px;">THANKS!</div>
                          <div style="font-size:25px; letter-spacing:1px; margin-top:6px; opacity: 85%;">WE'VE GOT YOUR MESSAGE</div>
                          </div>
                      </td>
                  </tr>

                    <!-- Greeting -->
                    <tr>
                      <td align="center" style="padding-top:25px; padding-bottom:25px;">
                        <div style="color:#1A1A1A; font-size:15px; text-align:center;">
                          <strong>Hi {$name},</strong>
                        </div>
                      </td>
                    </tr>

                    <!-- Body copy -->
                    <tr>
                      <td align="center" style="padding-left:40px; padding-right:40px; padding-bottom:12px;">
                        <div style="color:#1A1A1A; opacity:0.85; font-size:15px; line-height:22px; text-align:center;">
                          Thanks for reaching out to ShipX. We've received your message and routed it to the right teammate. A member of our sales team will contact you within one business day.
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td align="center" style="padding-bottom:10px;">
                        <div style="color:#1A1A1A; opacity:0.85; font-size:15px; text-align:center;">
                          If there's anything urgent, just reply to this email with more details.
                        </div>
                      </td>
                    </tr>

                    <!-- Call to action header -->
                    <tr>
                      <td align="center" style="padding-top:18px; padding-bottom:6px;">
                        <div style="color:#FF00E5; font-weight:900; font-size:15px; text-align:center;">
                          Want to move faster?
                        </div>
                        <div style="color:#1A1A1A; font-size:15px; opacity:0.85; text-align:center; margin-top:6px;">
                          Book a time that suits you
                        </div>
                      </td>
                    </tr>

                    <!-- CTA button -->
                    <tr>
                      <td align="center" style="padding-top:14px; padding-bottom:24px;">
                        <a href="https://calendar.app.google/Rfe2S7Vswp9NmjJaA" target="_blank" style="display:inline-block; padding:10px 30px; border-radius:9999px; background: linear-gradient(90deg, #4F378A 0%, #FF00E5 60%, #FF00E5 100%); color:#ffffff; text-decoration:none; font-weight:700; font-size:15px; font-family:Arial, sans-serif;">
                          Book a Demo Now!
                        </a>
                      </td>
                    </tr>

                    <!-- Connect header -->
                    <tr>
                      <td align="center" style="padding-top:8px; padding-bottom:18px;">
                        <div style="color:#FF00E5; font-weight:900; font-size:15px;">Connect with Our Local Team</div>
                        <div style="color:#1A1A1A; opacity:0.85; font-size:15px; margin-top:6px;">see contacts below</div>
                      </td>
                    </tr>

                    <!-- Contact boxes (two rows of three columns) -->
                    <tr>
                      <td align="center" style="padding-top:4px; padding-bottom:20px;">
                        <!-- Outer table for contact boxes -->
                        <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%; max-width:520px;">
                          <!-- Row 1 -->
                          <tr>
                            <td align="center" valign="top" style="padding:6px;">
                              <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="background:#F8F7FF; border-radius:8px; padding:12px; width:150px;">
                                <tr>
                                  <td align="center" style="padding-bottom:8px;">
                                    <!-- flag or icon placeholder -->
                                    <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760067634/contents-1_cfy4tp.png" alt="VN" width="25" height="25" style="display:block; border:0; border-radius: 100px;" />
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7;">
                                    (+84) 90 270 23 45
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7; padding-top:6px;">
                                    contact.vn@shipx.asia
                                  </td>
                                </tr>
                              </table>
                            </td>

                            <td align="center" valign="top" style="padding:6px;">
                              <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="background:#F8F7FF; border-radius:8px; padding:12px; width:150px;">
                                <tr>
                                  <td align="center" style="padding-bottom:8px;">
                                    <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760067633/sg_n1pszf.png" alt="SG" width="25" height="25" style="display:block; border:0; border-radius: 100px;" />
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7;">
                                    (+65) 9001 9941
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7; padding-top:6px;">
                                    contact.sg@shipx.asia
                                  </td>
                                </tr>
                              </table>
                            </td>

                            <td align="center" valign="top" style="padding:6px;">
                              <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="background:#F8F7FF; border-radius:8px; padding:12px; width:150px;">
                                <tr>
                                  <td align="center" style="padding-bottom:8px;">
                                    <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760067633/contents-4_nruthj.png" alt="PH" width="25" height="25" style="display:block; border:0; border-radius: 100px;" />
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7;">
                                    (+63) 97616 71128
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7; padding-top:6px;">
                                    contact.ph@shipx.asia
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <!-- Row 2 -->
                          <tr>
                            <td align="center" valign="top" style="padding:6px;">
                              <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="background:#F8F7FF; border-radius:8px; padding:12px; width:150px;">
                                <tr>
                                  <td align="center" style="padding-bottom:8px;">
                                    <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760067633/contents_ii07yz.png" alt="TH" width="25" height="25" style="display:block; border:0; border-radius: 100px;" />
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7;">
                                    (+66) 96 798 8971
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7; padding-top:6px;">
                                    contact.th@shipx.asia
                                  </td>
                                </tr>
                              </table>
                            </td>

                            <td align="center" valign="top" style="padding:6px;">
                              <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="background:#F8F7FF; border-radius:8px; padding:12px; width:150px;">
                                <tr>
                                  <td align="center" style="padding-bottom:8px;">
                                    <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760067633/contents-5_fx1snw.png" alt="US" width="25" height="25" style="display:block; border:0; border-radius: 100px; border-radius: 100px;" />
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0;">
                                    (+60) 12 525 5019
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7; padding-top:6px;">
                                    contact.us@shipx.asia
                                  </td>
                                </tr>
                              </table>
                            </td>

                            <td align="center" valign="top" style="padding:6px;">
                              <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="background:#F8F7FF; border-radius:8px; padding:12px; width:150px;">
                                <tr>
                                  <td align="center" style="padding-bottom:8px;">
                                    <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760067633/contents-2_lpzrio.png" alt="MY" width="25" height="25" style="display:block; border:0; border-radius: 100px;" />
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7;">
                                    (+60) 12 525 5019
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="font-size:14px; color:#1A1A1A; opacity:0.7; padding-top:6px;">
                                    contact.my@shipx.asia
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Closing / signature -->
                    <tr>
                      <td align="center" style="padding-top:16px; padding-bottom:12px;">
                        <div style="color:#1A1A1A; font-size:15px; line-height:22px; text-align:center;">
                          Best,<br/>
                          <span style="font-weight:900; font-size:16px;">The <span style="color:#FF00E5;">Ship</span>X Team</span><br/>
                          by SG Link & Amilo
                        </div>
                      </td>
                    </tr>

                    <!-- Small contact row -->
                      <tr>
                          <td align="center" style="padding-top:12px; padding-bottom:24px; padding-left:40px; padding-right:40px;">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px; color:#0E0E0E; max-width:600px; margin:0 auto;">
                              <tr>
                                  <!-- Email -->
                                  <td align="left" style="padding-right:12px;">
                                  <table cellpadding="0" cellspacing="0" border="0">
                                      <tr>
                                      <td style="padding-right:10px;">
                                          <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760067801/Vector_wbv8ve.png" alt="email" width="16" height="16" style="display:block;">
                                      </td>
                                      <td>info@shipx.asia</td>
                                      </tr>
                                  </table>
                                  </td>

                                  <!-- Phone -->
                                  <td align="left" style="padding-right:12px;">
                                  <table cellpadding="0" cellspacing="0" border="0">
                                      <tr>
                                      <td style="padding-right:10px;">
                                          <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760067800/Group_1000001832_gbmlmk.png" alt="phone" width="16" height="16" style="display:block;">
                                      </td>
                                      <td>(+84) 90 270 23 45</td>
                                      </tr>
                                  </table>
                                  </td>

                                  <!-- Website -->
                                  <td align="right">
                                  <table cellpadding="0" cellspacing="0" border="0">
                                      <tr>
                                      <td style="padding-right:10px;">
                                          <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760067801/Vector_1_x5x9rg.png" alt="website" width="16" height="16" style="display:block;">
                                      </td>
                                      <td>shipx.asia</td>
                                      </tr>
                                  </table>
                                  </td>
                              </tr>
                              </table>
                          </td>
                      </tr>

                    <!-- Feature block (image + text + CTA) -->
                    <tr>
                      <td align="center" style="padding-top:6px; padding-bottom:20px; padding-left:40px; padding-right:40px;">
                        <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:100%; border-radius:12px; background:#FFF; overflow:hidden; background-color: #FFD6FA40;">
                          <tr>
                            <td>
                              <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                <tr>
                                  <td valign="top" style="width:240px; padding-right:16px;" align="left">
                                    <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760068151/1013_1_spw3ll.png" alt="ShipX Goes Live" width="240" height="151" style="box-shadow: 0 0vw 1vw rgba(79, 55, 138, 0.15); display:block; border:0; border-radius:8px;" />
                                  </td>
                                  <td valign="middle" style="padding-left:8px; padding-top: 30px; padding-bottom: 30px; padding-right: 8px;">
                                    <div style="font-size:16px; color:#1A1A1A; font-weight:600; padding-bottom:8px; font-size: 20px; font-weight: 600">Want to learn more about the <span style="color: #FF00E5">ShipX</span> launch?</div>
                                    <a href="https://shipx.asia/blog" target="_blank" style="display:inline-block; padding:10px 45px; font-size: 15px; border-radius:9999px; background: linear-gradient(90deg, #4F378A 0%, #FF00E5 60%, #FF00E5 100%); color:#ffffff; text-decoration:none; font-weight:700;"">Read our blog here</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                  </table> <!-- end inner content table -->
                </td>
              </tr>

              <!-- Footer area (solid purple background) -->
              <tr>
                  <td style="background-color: none; background-image:url('https://res.cloudinary.com/dsk7gzqur/image/upload/v1760082358/Group_1000001835_vsizob.png'); background-repeat:no-repeat; background-position:center top; background-size: cover; padding:80px 40px 40px 40px; color:#ffffff;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">

                      <!-- TOP SECTION: Logos and image -->
                      <tr>
                          <!-- Left: Two logos and text below -->
                          <td width="50%" valign="top" style="padding-bottom:18px;">
                          <table cellpadding="0" cellspacing="0" border="0" role="presentation">
                              <tr>
                              <td style="padding-right:8px;">
                                  <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760068032/Logo_dqdkhd.png" alt="Logo1" width="100" height="50" style="display:block; border:0;">
                              </td>
                              <td>
                                  <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760068032/Group_1000001779_jzor6k.png" alt="Logo2" width="100" height="50" style="display:block; border:0;">
                              </td>
                              </tr>
                              <tr>
                              <td colspan="2" style="padding-top:6px; font-size:15px; line-height:16px; color:#ffffff;">
                                  ASEAN's Next Generation Platform
                              </td>
                              </tr>
                          </table>
                          </td>

                          <!-- Right: Full-width image -->
                          <td width="50%" valign="top" style="padding-bottom:18px;">
                            <!-- <img src="https://res.cloudinary.com/dsk7gzqur/image/upload/v1760068032/Group_1000001799_dcbtqr.png" alt="Right Image" width="100%" style="display:block; border:0;"> -->
                          </td>
                      </tr>

                      <!-- BOTTOM SECTION: Description and links -->
                      <tr>
                          <td width="50%" valign="top" style="font-size:12px; line-height:18px; color:#ffffff; opacity:0.95;">
                          Empowering businesses to ship globally with confidence. Our platform simplifies international shipping, customs, and logistics.
                          </td>

                          <td width="50%" valign="top" style="font-size:12px; color:#ffffff; text-align:right;">
                          <div align="center" style="padding-bottom:8px;">
                              <span style="display:inline-block; margin-right:8px;">Terms and Conditions</span>
                              <span style="margin:0 8px;">•</span>
                              <span style="display:inline-block; margin-left:8px;">Privacy Policy</span>
                          </div>
                          <div align="center" style="font-size:12px; line-height:18px; padding-top:4px;">
                              © 2025 ShipX Copyright and rights reserved
                          </div>
                          </td>
                      </tr>

                      <!-- Address row spanning both columns -->
                      <tr>
                          <td colspan="2" style="padding-top:20px; font-size:12px; line-height:18px; color:#ffffff; text-align:center;">
                          350 National Highway 1A, Binh Hung Hoa B, Binh Tan, Ho Chi Minh
                          </td>
                      </tr>

                      </table>
                  </td>
              </tr>

              <!-- Tiny legal row under card -->
              <tr>
                <td style="padding:14px 40px 40px 40px; text-align:center; color:#4D4D4D; font-size:12px; opacity:0.6;">
                  You're receiving this as confirmation of your inquiry with ShipX (by SG Link & Amilo). For urgent matters, reply to this email.
                </td>
              </tr>

            </table> <!-- end white card -->
          </td>
        </tr>
      </table>
    </body>
  </html>
  HTML;

  $headers = array(
    'Content-Type: text/html; charset=UTF-8',
    'From: ShipX Asia <info@shipx.asia>'
  );

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