import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AppButton from "../../library/AppButton";
import { Mail, Send, CalendarDays } from "lucide-react";

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

  // --- Logic Effects (Kept exactly as original) ---
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

  // --- Styles ---

  // Reusable Input Wrapper Style
  const inputContainerClass = "flex flex-col gap-[8px] flex-grow w-full";

  // Reusable Label Style
  const labelClass =
    "font-inter font-semibold text-[16px] leading-[20px] text-[#1E2939] flex items-center gap-[5px]";

  // Reusable Asterisk Style
  const requiredStar = (
    <span className="text-[#E7000B] font-bold text-[16px] leading-[19px]">
      *
    </span>
  );

  // Reusable Input Field Style
  // Logic: Height 55px, White BG, Bottom Border Purple, Radius 8px, Italic Placeholder
  const inputClass = (hasError) => `
    w-full h-[55px] px-[16px] py-[8px]
    bg-white rounded-[8px]
    border-b ${hasError ? "border-red-500" : "border-[#7F22FE]"}
    font-inter font-normal text-[16px] text-[#1E2939]
    placeholder:font-inter placeholder:italic placeholder:font-normal placeholder:text-[16px] 
    ${hasError ? "placeholder-red-400" : "placeholder-[#99A1AF]"}
    focus:outline-none transition-colors
  `;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-4 w-full max-w-[757px] mx-auto"
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      {/* --- Row 1: Name, Email, Phone --- */}
      <div className="flex flex-col md:flex-row items-start gap-4 w-full h-auto md:h-[70px]">
        {/* Name */}
        <div className={inputContainerClass}>
          <label htmlFor="name" className={labelClass}>
            {t("contact_us_section.form.name")}
            {requiredStar}
          </label>
          <input
            id="name"
            aria-invalid={errors.name ? "true" : "false"}
            className={inputClass(errors.name)}
            placeholder={
              errors.name
                ? errors.name.message
                : t("contact_us_section.form.name_placeholder")
            }
            autoComplete="name"
            {...register("name", {
              required: t("contact_us_section.form.name_placeholder"),
            })}
          />
        </div>

        {/* Email */}
        <div className={inputContainerClass}>
          <label htmlFor="email" className={labelClass}>
            {t("contact_us_section.form.email")}
            {requiredStar}
          </label>
          <input
            id="email"
            type="email"
            aria-invalid={errors.email ? "true" : "false"}
            className={inputClass(errors.email)}
            placeholder={
              errors.email
                ? errors.email.message
                : t("contact_us_section.form.email_placeholder_1")
            }
            autoComplete="email"
            {...register("email", {
              required: t("contact_us_section.form.email_placeholder_1"),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t("contact_us_section.form.email_placeholder_2"),
              },
            })}
          />
        </div>

        {/* Phone */}
        <div className={inputContainerClass}>
          <label htmlFor="tel" className={labelClass}>
            {t("contact_us_section.form.phone")}
          </label>
          <input
            id="tel"
            type="tel"
            inputMode="tel"
            aria-invalid={errors.phone ? "true" : "false"}
            className={inputClass(errors.phone)}
            placeholder={
              errors.phone
                ? errors.phone.message
                : t("contact_us_section.form.phone_placeholder")
            }
            autoComplete="tel"
            {...register("phone", {
              pattern: {
                value: /^\+?[\d\s\-()]{7,}$/,
                message: t("contact_us_section.form.phone_placeholder"),
              },
            })}
          />
        </div>
      </div>

      {/* --- Row 2: Message --- */}
      <div className="flex flex-col gap-[8px] w-full">
        <label htmlFor="message" className={labelClass}>
          {t("contact_us_section.form.message")}
          {requiredStar}
        </label>
        <textarea
          id="message"
          aria-invalid={errors.message ? "true" : "false"}
          className={`${inputClass(errors.message)} h-[122px] resize-none`}
          placeholder={
            errors.message
              ? errors.message.message
              : t("contact_us_section.form.message_placeholder")
          }
          autoComplete="off"
          {...register("message", {
            required: t("contact_us_section.form.message_placeholder"),
          })}
        />
      </div>

      {/* --- Row 3: Buttons --- */}
      <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-4 w-full mt-2">
        {/* Button 1: Book Demo (Secondary Style) */}
        <AppButton
          to="/book-a-demo"
          text={t("contact_us_section.form.book_a_demo")}
          withLeftIcon={true}
          leftIcon={<CalendarDays className="size-5" />}
        />

        {/* Button 2: Submit (Primary Style) */}
        <AppButton
          as="button"
          text={
            isSubmitting
              ? t("contact_us_section.form.button_sending")
              : isSent
                ? t("contact_us_section.form.button_sent")
                : t("contact_us_section.form.button_default")
          }
          style="secondary"
          withLeftIcon={true}
          leftIcon={<Send className="size-5" />}
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};

export default ContactFormNew;
