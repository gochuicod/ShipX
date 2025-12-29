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
    <ParallaxSection className="my-16">
      <div
        className={`mx-auto relative ${themeGuide.paddingX} flex flex-col justify-center items-center`}
      >
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-12">
          <Badge variant="toolkit" size="default">
            Contact Us
          </Badge>
          <HighlightedHeading
            text="Ready to take your products global? Let's talk."
            highlight="global"
            className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <IconBox
              layout="horizontal"
              size="default"
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@f02316a9e44a273e7cb5e7f1839e8eda93215d68/src/assets/icons/boxed/email_box_icon.svg"
                  alt="Email"
                />
              }
              title="Email Us"
              value="info@shipx.asia"
            >
              We'll respond within 2 hours
            </IconBox>

            <IconBox
              layout="horizontal"
              size="default"
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@f02316a9e44a273e7cb5e7f1839e8eda93215d68/src/assets/icons/boxed/phone_box_icon.svg"
                  alt="Phone"
                />
              }
              title="Call Us"
              value="+1012 3456 789"
            >
              Mon-Fri 9am to 6pm
            </IconBox>

            <IconBox
              layout="horizontal"
              size="default"
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@f02316a9e44a273e7cb5e7f1839e8eda93215d68/src/assets/icons/boxed/location_box_icon.svg"
                  alt="Location"
                />
              }
              title="Visit Us"
              value="391B Orchard Road #22,"
            >
              Ngee Ann City, Singapore 238874
            </IconBox>
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
