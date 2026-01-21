import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContactFormNew from "./ContactFormNew";

import { Badge } from "../../../../styles/badge";

import HighlightedHeading from "../../library/HighlightedHeading";
import IconBox from "../../library/IconBox";
import Container from "../../library/Container";

import { themeGuide } from "../../../../styles/themeGuide";
import { cn } from "../../../../lib/util";

const ContactUsNew = () => {
  const { t } = useTranslation();

  // --- 1. Form & Logic Setup (Ported from ContactForm) ---
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [leadSource, setLeadSource] = useState("website");
  const [isSent, setIsSent] = useState(false);

  // Geolocation Effect
  useEffect(() => {
    if (typeof window !== "undefined" && window.ShipXGeo) {
      console.log("User country:", window.ShipXGeo.country);
    }
  }, []);

  // Lead Source Effect
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
    if (ref.includes("facebook.com")) {
      setLeadSource("facebook_organic");
    } else if (ref.includes("google.com")) {
      setLeadSource("google_organic");
    } else if (ref.trim() !== "") {
      setLeadSource("generic_referral");
    } else {
      setLeadSource("website");
    }
  }, []);

  // Submit Handler
  const onSubmit = async (data) => {
    try {
      // POST to WordPress
      await fetch("/wp-json/mytheme/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Prepare CRM payload
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

      // POST to CRM API
      const crmRes = await fetch("https://crm.infigroup.co/api/public/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crmPayload),
      });

      if (!crmRes.ok) {
        throw new Error("Failed to submit to CRM");
      }

      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Container
      className={cn(
        "flex 2xl:flex-row flex-col",
        "justify-center items-stretch",
        "relative",
        "gap-8",
        themeGuide.sectionPaddingY,
      )}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Left image */}
      <div className="w-1/3 max-2xl:w-full relative rounded-2xl overflow-hidden flex-shrink-0">
        <picture>
          {/* Mobile image */}
          <source
            media="(max-width: 1536px)"
            srcSet="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/contact_us/contact_us_image_mobile.webp"
          />

          {/* Desktop image (fallback) */}
          <img
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/contact_us/contact_us_image_desktop.webp"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
        </picture>

        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to top left, oklch(1 0 0 / 0), oklch(0.616 0.2539 333.97 / 0.24))",
          }}
        />
      </div>
      {/* Main Content Grid */}
      <div className="flex 2xl:flex-col flex-wrap gap-8 w-full">
        {/* Headings */}
        <div
          className="flex flex-col justify-start 2xl:items-start items-center w-full"
          id="contact-us"
        >
          <Badge variant="toolkit" size="default">
            {t("contact_us_section.badge")}
          </Badge>
          <HighlightedHeading
            text={t("contact_us_section.title")}
            highlight={t("contact_us_section.title_highlighted")}
            className="2xl:text-[32px] 2xl:leading-10 text-[28px] leading-8 font-semibold mt-2 2xl:text-start text-center"
          />
        </div>
        {/* Left Column: Contact Details */}
        <div className="flex flex-row flex-wrap 2xl:flex-nowrap gap-2 2xl:gap-4 w-full">
          <IconBox
            layout="vertical"
            size="default"
            icon={
              <img
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8a82004d7d7941a90c58ac15e75d57c3309249db/src/assets/icons/boxed/email_box_icon.svg"
                alt="Email"
              />
            }
            title={t("contact_us_section.cards.card_1.heading")}
            value={t("contact_us_section.cards.card_1.contact")}
            className="flex md:flex-col flex-row gap-2 md:items-start items-center p-4 2xl:w-1/4 md:w-[calc(50%-0.25rem)] w-full"
          >
            {t("contact_us_section.cards.card_1.note")}
          </IconBox>

          <IconBox
            layout="vertical"
            size="default"
            icon={
              <img
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8a82004d7d7941a90c58ac15e75d57c3309249db/src/assets/icons/boxed/phone_icon_box.svg"
                alt="Phone"
              />
            }
            title={t("contact_us_section.cards.card_2.heading")}
            value={t("contact_us_section.cards.card_2.contact")}
            className="flex md:flex-col flex-row gap-2 md:items-start items-center p-4 2xl:w-1/4 md:w-[calc(50%-0.25rem)] w-full"
          >
            {t("contact_us_section.cards.card_2.note")}
          </IconBox>

          <IconBox
            layout="vertical"
            size="default"
            icon={
              <img
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8a82004d7d7941a90c58ac15e75d57c3309249db/src/assets/icons/boxed/location_box_icon.svg"
                alt="Location"
              />
            }
            title={t("contact_us_section.cards.card_3.heading")}
            value={t("contact_us_section.cards.card_3.contact")}
            className="flex md:flex-col flex-row gap-2 md:items-start items-center p-4 2xl:w-2/4 w-full"
          >
            {t("contact_us_section.cards.card_3.note")}
          </IconBox>
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-col w-full bg-linear-to-br from-[oklch(1_0_0_0)] to-[oklch(0.616_0.2539_333.97)]/24 rounded-2xl p-4 md:p-8">
          <ContactFormNew />
        </div>
      </div>
    </Container>
  );
};

export default ContactUsNew;
