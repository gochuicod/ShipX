# ShipX

# Contact Form Email Setup (WordPress + Gmail SMTP)

By default, `wp_mail()` in WordPress does **not guarantee email delivery**.  
To ensure reliability, it’s recommended to use an **SMTP plugin** with your Gmail account.

---

## 🔹 1. Install & Configure SMTP (Recommended)

Install one of these SMTP plugins in WordPress:

- [WP Mail SMTP](https://wordpress.org/plugins/wp-mail-smtp/) _(most popular)_
- [Post SMTP Mailer/Email Log](https://wordpress.org/plugins/post-smtp/)

### Gmail SMTP Settings

| Setting        | Value                                                  |
| -------------- | ------------------------------------------------------ |
| **SMTP Host**  | `smtp.gmail.com`                                       |
| **SMTP Port**  | `587`                                                  |
| **Encryption** | `TLS`                                                  |
| **Auth**       | Yes                                                    |
| **Username**   | Your full Gmail address                                |
| **Password**   | App Password (generated from Google if 2FA is enabled) |

> ⚠️ **Important:** Do not use your regular Gmail password.  
> Use a [Google App Password](https://support.google.com/accounts/answer/185833) if you have 2FA enabled.

Set the **From Email** in the plugin to your Gmail address.

---

## 🔹 2. Update Your PHP Code

Once SMTP is configured, `wp_mail()` will work properly.  
Here’s an example WordPress REST endpoint handler:

```php
function mytheme_handle_contact(WP_REST_Request $request) {
  $params = $request->get_json_params();

  $name    = sanitize_text_field($params['name'] ?? '');
  $email   = sanitize_email($params['email'] ?? '');
  $phone   = sanitize_text_field($params['phone'] ?? '');
  $message = sanitize_textarea_field($params['message'] ?? '');

  $to = "yourgmail@gmail.com"; // replace with your Gmail
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

  $headers = [
    'Content-Type: text/plain; charset=UTF-8',
    'From: '.$name.' <'.$email.'>',
    'Reply-To: '.$email
  ];

  if (wp_mail($to, $subject, $body, $headers)) {
    return ['success' => true, 'message' => 'Message sent successfully!'];
  } else {
    return new WP_Error('mail_failed', 'Email failed to send.', ['status' => 500]);
  }
}
```
