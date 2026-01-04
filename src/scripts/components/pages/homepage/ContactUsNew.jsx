import { lazy, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Send, CalendarDays } from "lucide-react";
import ContactFormNew from "./ContactFormNew";
import { themeGuide } from "../../../../styles/themeGuide";

// Components
import { Badge } from "../../../../styles/badge";
import HighlightedHeading from "../../library/HighlightedHeading";
import IconBox from "../../library/IconBox";
import AppButton from "../../../components/library/AppButton";

const ParallaxSection = lazy(() => import("../../ui/ParallaxSection"));

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
    <ParallaxSection
      className="lg:mb-16 md:mb-8 mb-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div
        className={`mx-auto relative ${themeGuide.paddingX} flex flex-col justify-center items-center`}
        id="contact-us"
      >
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-12">
          <Badge variant="toolkit" size="default">
            {t("contact_us_section.badge")}
          </Badge>
          <HighlightedHeading
            text={t("contact_us_section.title")}
            highlight={t("contact_us_section.title_highlighted")}
            className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div>
              <IconBox
                layout="horizontal"
                size="default"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8a82004d7d7941a90c58ac15e75d57c3309249db/src/assets/icons/boxed/email_box_icon.svg"
                    alt="Email"
                  />
                }
                title={t("contact_us_section.cards.card_1.heading")}
                value={t("contact_us_section.cards.card_1.contact")}
              >
                {t("contact_us_section.cards.card_1.note")}
              </IconBox>
            </div>

            <div>
              <IconBox
                layout="horizontal"
                size="default"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8a82004d7d7941a90c58ac15e75d57c3309249db/src/assets/icons/boxed/phone_icon_box.svg"
                    alt="Phone"
                  />
                }
                title={t("contact_us_section.cards.card_2.heading")}
                value={t("contact_us_section.cards.card_2.contact")}
              >
                {t("contact_us_section.cards.card_2.note")}
              </IconBox>
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <IconBox
                layout="horizontal"
                size="default"
                icon={
                  <img
                    src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8a82004d7d7941a90c58ac15e75d57c3309249db/src/assets/icons/boxed/location_box_icon.svg"
                    alt="Location"
                  />
                }
                title={t("contact_us_section.cards.card_3.heading")}
                value={t("contact_us_section.cards.card_3.contact")}
              ></IconBox>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8 bg-linear-to-br from-[oklch(1_0_0_0)] to-[oklch(0.616_0.2539_333.97)]/24 rounded-2xl p-4 md:p-8">
            <ContactFormNew />
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default ContactUsNew;
