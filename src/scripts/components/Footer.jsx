import { useTranslation } from "react-i18next";
import { memo } from "react";
import { CalendarDays, Phone } from "lucide-react";
import { useState, useEffect } from "react";

import SmartNavLink from "./ui/SmartNavLink";
import { themeGuide } from "../../styles/themeGuide";
import { MailIcon, LocationIcon } from "../icons/FooterIcons";
import { cn } from "../../lib/util";
import { languages } from "../utils/constants";

import AppButton from "../components/library/AppButton";
import Dropdown from "../components/library/Dropdown";
import LoginModal from "../components/library/LoginModal";

const ContactItem = ({ icon: Icon, text, href, itemClass, iconClass }) => (
  <li className={`flex gap-[2vw] md:gap-[0.6vw] text-gray-600 ${itemClass}`}>
    <Icon className={cn("shrink-0", iconClass)} />
    {href ? (
      <a href={href} className={themeGuide.footerItem}>
        {text}
      </a>
    ) : (
      <span className={themeGuide.footerItem}>{text}</span>
    )}
  </li>
);

const FooterColumn = ({ title, children, className }) => (
  <div
    className={`bg-white rounded-[10px] p-[5vw] md:p-[15px_20px] h-fit ${className}`}
  >
    <h3 className={themeGuide.footerHeading + " mb-[3vw] md:mb-1"}>{title}</h3>
    {children}
  </div>
);

const FooterLinkList = ({ links }) => (
  <ul className="space-y-[2vw] md:space-y-0">
    {links.map((item) => (
      <li key={item.to}>
        <SmartNavLink to={item.to} className={themeGuide.footerItem}>
          {item.label}
        </SmartNavLink>
      </li>
    ))}
  </ul>
);

const Footer = memo(() => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageChange = async (language) => {
    setSelectedLanguage(language);
    try {
      await i18n.changeLanguage(language.key); // loads from CDN
      localStorage.setItem("lang", language.key);

      const segments = window.location.pathname.split("/").filter(Boolean);

      if (languages.some((l) => l.key === segments[0])) {
        segments.shift();
      }

      const newPath =
        language.key === "en"
          ? `/${segments.join("/")}`
          : `/${language.key}${segments.length ? "/" + segments.join("/") : ""}`;
      navigate(newPath, { replace: true });
    } catch (err) {
      console.error("Failed to load language:", err);
    }
  };

  const [selected, setSelected] = useState(() => {
    const current = i18n.language || localStorage.getItem("lang") || "en";
    return (
      languages.find((language) => language.key === current) || languages[0]
    );
  });

  useEffect(() => {
    const currentLang = i18n.language || localStorage.getItem("lang") || "en";
    const matched = languages.find((lang) => lang.key === currentLang);
    if (matched && matched.key !== selected.key) {
      setSelected(matched);
    }
  }, [i18n.language]);

  const linkColumns = {
    quickLinks: [
      { to: "/", label: t("footer.home") },
      { to: "/#services", label: t("footer.services") },
    ],
    toolkit: [
      { to: "/shipment-tracker", label: t("header.shipment_tracker") },
      { to: "/hs-code-generator", label: t("header.hs_code_generator") },
      { to: "/file-a-claim", label: t("header.file_a_claim") },
    ],
    resources: [
      { to: "/blog", label: t("header.blogs") },
      { to: "/frequently-asked-questions", label: t("header.faqs") },
    ],
    legal: [
      { to: "/privacy-policy", label: t("footer.privacy_policy") },
      { to: "/terms-and-conditions", label: t("footer.terms_and_conditions") },
    ],
  };

  const contactItems = [
    {
      icon: MailIcon,
      text: t("footer.reach_us_3"),
      href: `mailto:${t("footer.reach_us_3")}`,
      itemClass: "items-center",
      iconClass: themeGuide.footerIcon,
    },
    {
      icon: LocationIcon,
      text: t("footer.reach_us_4"),
      itemClass: "items-start",
      iconClass: themeGuide.footerIcon,
    },
  ];

  const footerColumnData = [
    {
      id: "quickLinks",
      title: t("footer.quick_links"),
      content: <FooterLinkList links={linkColumns.quickLinks} />,
    },
    {
      id: "toolkitAndResources",
      isGroup: true,
      className:
        "md:col-start-2 xl:col-start-auto flex flex-col gap-[4vw] md:gap-4",
      items: [
        {
          id: "toolkit",
          title: t("header.toolkit"),
          content: <FooterLinkList links={linkColumns.toolkit} />,
        },
        {
          id: "resources",
          title: t("header.resources"),
          content: <FooterLinkList links={linkColumns.resources} />,
        },
      ],
    },
    {
      id: "legalAndContact",
      isGroup: true,
      // THE SECRET SAUCE:
      // Mobile: flex-col gap-0 makes them touch.
      // Desktop: xl:contents makes the container invisible to the Grid.
      className: "md:col-start-3 xl:contents flex flex-col gap-0",
      items: [
        {
          id: "legal",
          title: "Legal",
          content: <FooterLinkList links={linkColumns.legal} />,
        },
        {
          id: "contact",
          title: t("footer.reach_us_1"),
          content: (
            <ul className="space-y-[3vw] md:space-y-[8.5px]">
              {contactItems.map((item) => (
                <ContactItem key={item.text} {...item} />
              ))}
            </ul>
          ),
        },
      ],
    },
  ];

  return (
    <div className="md:pt-[100px] pt-[150px] relative overflow-hidden">
      {/* CTA Section */}
      <div
        className={cn(
          "bg-linear-to-b from-[#4F378A] from-[0%] to-[#66005C] to-[95%]",
          "w-[90%]",
          "md:min-h-auto min-h-[383px]",
          "md:w-[95%]",
          "xl:w-full",
          "max-w-[1440px]",
          "absolute",
          "top-[70px]",
          "left-1/2",
          "-translate-x-1/2",
          "z-10",
          "rounded-[24px]",
          "flex flex-row",
          "md:items-center items-end",
          "justify-between",
          "px-8 md:px-16 py-10",
          "text-['Inter']",
          "relative",
        )}
      >
        {/* Glow Blobs */}
        <div className="absolute w-[256px] h-64 bg-[#FF00E5]/20 blur-3xl rounded-full top-1 left-0 -z-5" />
        <div className="absolute w-[256px] h-64 bg-[#FF00E5]/20 blur-3xl rounded-full top-1 right-0 -z-5" />

        {/* Left side */}
        <div className="flex flex-col">
          <span className="2xl:text-[32px] text-[28px] leading-[32px] font-semibold text-white md:text-start text-center">
            {t("shipment_tracker.shipment_cta_section.title")}
          </span>
          <span className="md:w-[65%] w-full font-normal text-white md:text-start text-center">
            {t("shipment_tracker.shipment_cta_section.description")}
          </span>
          <div className="flex flex-row md:justify-start justify-center gap-3 mt-6">
            <AppButton
              to="/book-a-demo"
              text={t("header.book_a_demo") || "Book a Demo"}
              withLeftIcon={true}
              leftIcon={<CalendarDays className="size-5" />}
            />
            <AppButton
              to="/#contact-us"
              text={t("header.contact_us") || "Contact Us"}
              variant="secondary"
              withLeftIcon={true}
              leftIcon={<Phone className="size-5 fill-white" />}
              className="backdrop-blur-xl hover:bg-[#CC00B7]/20 bg-[#CC00B7]/10 text-white border-[#CC00B7]/30"
            />
          </div>
        </div>
        {/* Right side */}
        <img
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/footer/footer_cta_image.webp"
          alt="ShipX Footer CTA Image"
          className={cn(
            "h-auto md:w-[50%] w-full",
            "absolute",
            "2xl:right-0 md:right-[-50px] right-auto",
            "md:left-auto left-1/2 md:translate-none -translate-x-1/2",
            "2xl:bottom-[-30px] md:bottom-[5px] bottom-[220px]",
            "-z-5",
          )}
        />
      </div>
      <footer
        className="bg-[#F3F4F6] w-full pt-[150px]"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col xl:items-start md:items-center md:flex-col xl:flex-row gap-[3vw] md:gap-0 max-w-[1440px] mx-auto">
          {/* LEFT COLUMN: Brand Identity */}
          <div className="flex flex-col xl:justify-start xl:items-start justify-center items-center w-full xl:w-[37%] md:w-full md:mb-[0.5vw] mb-[3.5vw]">
            {/* Logos */}
            <div className="flex flex-row items-center gap-[3vw] md:gap-[1vw] md:mb-0 mb-[2vw]">
              <img
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/shipx_logo.svg"
                alt="ShipX Logo"
                className="h-12 w-auto object-contain"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo_sglink_amilo.svg"
                alt="Powered by SGLink & Amilo"
                className="h-8 w-auto object-contain"
              />
            </div>

            {/* Tagline */}
            <h2
              className={cn(
                themeGuide.footerTagline,
                "md:mb-[1vw] mb-[4vw] xl:text-start md:text-center text-center",
              )}
              style={{
                fontFamily: "Karla, system-ui, -apple-system, sans-serif",
              }}
            >
              {t("footer.tagline")}
            </h2>

            {/* Description */}
            <p
              className={cn(
                themeGuide.footerBody,
                "xl:text-start md:text-center text-center md:w-[65%] xl:w-[85%] xl:mt-0 md:mt-2",
              )}
            >
              {t("footer.description_1")} {t("footer.description_2")}
            </p>

            <div
              className={cn(
                "flex flex-row",
                "gap-2",
                "xl:justify-center",
                "xl:items-center",
                "mt-3",
              )}
            >
              <Dropdown
                title="Language"
                items={languages}
                selected={selectedLanguage}
                onSelect={(language) => handleLanguageChange(language)}
                direction="up"
                parentClassName={cn(
                  "bg-white hover:bg-secondary-hover active:bg-secondary-active",
                  "border border-violet-300 active:border-secondary-active",
                  "text-primary active:text-white cursor-pointer font-normal",
                  "shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(167,139,250,0.3)]",
                  "rounded-md",
                )}
                triggerClassName="px-4 py-[5px] flex items-center justify-center"
              />
              <LoginModal footer={true} placement="top" />
              <AppButton
                to="/book-a-demo"
                text={t("header.book_a_demo") || "Book a Demo"}
                variant="primary"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Link Cards Container */}
          <div
            className="
              w-full xl:w-[70%] md:w-[90%]
              grid grid-cols-1
              md:grid-cols-3
              xl:grid-cols-4
              gap-[4vw] md:gap-4
              auto-rows-min
              xl:my-0 md:my-6
            "
          >
            {footerColumnData.map((col) => {
              if (col.isGroup) {
                return (
                  <div
                    key={col.id}
                    className={cn(col.className, "gap-[4vw] md:gap-4")}
                  >
                    {col.items.map((item, index) => (
                      <FooterColumn
                        key={item.id}
                        title={item.title}
                        className={cn(
                          // If it's the Legal/Contact group...
                          col.id === "legalAndContact" && index === 0
                            ? "xl:col-start-3"
                            : "xl:col-start-4",
                        )}
                      >
                        {item.content}
                      </FooterColumn>
                    ))}
                  </div>
                );
              }

              // Quick Links
              return (
                <div key={col.id} className="md:col-start-1 xl:col-start-1">
                  <FooterColumn title={col.title}>{col.content}</FooterColumn>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="mt-[4vw] md:mt-4 flex flex-col md:flex-row justify-between items-center text-dark-neutral font-normal text-[14px] pt-[4vw] md:pt-0 max-w-[1440px] mx-auto">
          <div className="flex flex-row gap-x-[1vw]">
            <SmartNavLink to="terms-and-conditions" end>
              <span>{t("footer.terms_and_conditions")}</span>
            </SmartNavLink>
            <span>•</span>
            <SmartNavLink to="privacy-policy" end>
              <span>{t("footer.privacy_policy")}</span>
            </SmartNavLink>
          </div>
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </div>
        </div>
      </footer>
    </div>
  );
});

export default Footer;
