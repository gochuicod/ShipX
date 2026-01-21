import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Send, CalendarDays } from "lucide-react";
import AppButton from "../../library/AppButton";

// Import from Definition Layer
import {
  FormInput,
  FormLabel,
  FormTextarea,
  InputGroup,
} from "../../library/FormElements";

const ContactFormNew = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [leadSource, setLeadSource] = useState("website");
  const [isSent, setIsSent] = useState(false);
  const { t } = useTranslation();

  // --- Logic Effects ---
  useEffect(() => {
    if (typeof window !== "undefined" && window.ShipXGeo) {
      console.log("User country:", window.ShipXGeo.country);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");

    if (utmSource && utmMedium) {
      const sourceKey = `${utmSource}_${utmMedium}`.toLowerCase();
      setLeadSource(sourceKey);
      return;
    }

    const ref = document.referrer || "";
    if (ref.includes("facebook.com")) setLeadSource("facebook_organic");
    else if (ref.includes("google.com")) setLeadSource("google_organic");
    else if (ref.trim() !== "") setLeadSource("generic_referral");
    else setLeadSource("website");
  }, []);

  const onSubmit = async (data) => {
    try {
      const wpRes = await fetch("/wp-json/mytheme/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const crmPayload = {
        contactName: data.name,
        email: data.email,
        phoneNumber: data.phone || "N/A",
        leadSource,
        services: ["crossborder_shipping"],
        companyId: "8d612638-ffef-4457-a876-05e655dcc93e",
        website: "https://shipx.asia/",
        description: data.message,
        location: window.ShipXGeo?.country || "Unknown",
      };

      const crmRes = await fetch("https://crm.infigroup.co/api/public/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crmPayload),
      });

      if (!crmRes.ok) throw new Error("Failed to submit to CRM");

      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full mx-auto"
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      {/* --- Row 1: Name, Email, Phone Wrapper --- */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Name */}
        <InputGroup>
          <FormLabel htmlFor="name" required>
            {t("contact_us_section.form.name_field.label")}
          </FormLabel>
          <FormInput
            id="name"
            hasError={!!errors.name}
            aria-invalid={errors.name ? "true" : "false"}
            placeholder={
              errors.name
                ? errors.name.message
                : t("contact_us_section.form.name_field.placeholder")
            }
            autoComplete="name"
            {...register("name", {
              required: t("contact_us_section.form.name_field.placeholder"),
            })}
          />
        </InputGroup>

        {/* Email */}
        <InputGroup>
          <FormLabel htmlFor="email" required>
            {t("contact_us_section.form.email_field.label")}
          </FormLabel>
          <FormInput
            id="email"
            type="email"
            hasError={!!errors.email}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder={
              errors.email
                ? errors.email.message
                : t("contact_us_section.form.email_field.placeholder")
            }
            autoComplete="email"
            {...register("email", {
              required: t("contact_us_section.form.email_field.placeholder"),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t("contact_us_section.form.email_field.placeholder"),
              },
            })}
          />
        </InputGroup>

        {/* Phone */}
        <InputGroup>
          <FormLabel htmlFor="tel">
            {t("contact_us_section.form.number_field.label")}
          </FormLabel>
          <FormInput
            id="tel"
            type="tel"
            inputMode="tel"
            hasError={!!errors.phone}
            aria-invalid={errors.phone ? "true" : "false"}
            placeholder={
              errors.phone
                ? errors.phone.message
                : t("contact_us_section.form.number_field.placeholder")
            }
            autoComplete="tel"
            {...register("phone", {
              pattern: {
                value: /^\+?[\d\s\-()]{7,}$/,
                message: t("contact_us_section.form.number_field.placeholder"),
              },
            })}
          />
        </InputGroup>
      </div>

      {/* --- Row 2: Message --- */}
      <InputGroup>
        <FormLabel htmlFor="message" required>
          {t("contact_us_section.form.message_field.label")}
        </FormLabel>
        <FormTextarea
          id="message"
          hasError={!!errors.message}
          aria-invalid={errors.message ? "true" : "false"}
          placeholder={
            errors.message
              ? errors.message.message
              : t("contact_us_section.form.message_field.placeholder")
          }
          autoComplete="off"
          {...register("message", {
            required: t("contact_us_section.form.message_field.placeholder"),
          })}
        />
      </InputGroup>

      {/* --- Row 3: Buttons --- */}
      <div className="flex flex-row gap-2 justify-center md:justify-end w-full">
        {/* Button 1: Submit */}
        <AppButton
          as="button"
          text={
            isSubmitting
              ? t("contact_us_section.form.buttons.send_a_message.sending")
              : isSent
                ? t("contact_us_section.form.buttons.send_a_message.sent")
                : t("contact_us_section.form.buttons.send_a_message.default")
          }
          style="secondary"
          withLeftIcon={true}
          leftIcon={<Send className="size-4 md:size-5" />}
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="flex-1 md:flex-none text-xs md:text-base px-2 md:px-6 justify-center whitespace-nowrap"
        />

        {/* Button 2: Book Demo */}
        <AppButton
          to="/book-a-demo"
          text={t("contact_us_section.form.buttons.book_a_demo")}
          withLeftIcon={true}
          leftIcon={<CalendarDays className="size-4 md:size-5" />}
          className="flex-1 md:flex-none text-xs md:text-base px-2 md:px-6 justify-center whitespace-nowrap"
        />
      </div>
    </form>
  );
};

export default ContactFormNew;
