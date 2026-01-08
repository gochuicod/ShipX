import { useTranslation } from "react-i18next";
import { memo } from "react";
import SmartNavLink from "./ui/SmartNavLink";
import { themeGuide } from "../../styles/themeGuide";
import { MailIcon, LocationIcon } from "../icons/FooterIcons";
import { cn } from "../../lib/util";

import AppButton from "../components/library/AppButton";
import { CalendarDays } from "lucide-react";

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

  const linkColumns = {
    quickLinks: [
      { to: "/", label: t("footer.home") },
      { to: "/#statistics", label: t("footer.statistics") },
      { to: "/#services", label: t("footer.services") },
      { to: "/#platform", label: t("footer.platform") },
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
        "md:col-start-2 lg:col-start-auto flex flex-col gap-[4vw] md:gap-4",
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
      // Desktop: lg:contents makes the container invisible to the Grid.
      className: "md:col-start-3 lg:contents flex flex-col gap-0",
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
    <div className="md:pt-[15vw] pt-[60vw] lg:mt-0 mt-[20vw] relative">
      {/* CTA Section */}
      <div
        className="
          absolute
          lg:top-[5vw] md:top-[-8vw] top-0 left-0 right-0
          mx-auto
          lg:w-[80vw] md:w-[92vw] w-[90vw]
          md:h-fit h-[80vw]
          rounded-3xl
          flex flex-col
          bg-linear-to-b
          from-[#4F378A]
          to-[#66005C]
        "
        style={{
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Glow blobs */}
        <div className="absolute w-[256px] h-64 bg-[#FF00E5]/20 blur-3xl rounded-full top-1 left-0" />

        {/* Content */}
        <div
          className={`
            relative
            flex flex-col
            md:items-start items-center
            md:h-auto h-[80vw]
            justify-end
            gap-y-[3vw] md:gap-y-0
            ${i18n.language === "vn" ? "lg:w-full md:w-[45vw]" : "lg:w-full md:w-full"}
            lg:px-16 lg:py-9 md:p-8.5 p-7
            text-white
          `}
        >
          <span
            className={cn(
              themeGuide.ctaHeading,
              "md:text-start text-center md:w-auto w-[70%]",
            )}
          >
            {t("shipment_tracker.shipment_cta_section.title")}
          </span>

          <span
            className={cn(
              themeGuide.ctaDescription,
              "opacity-90 font-light lg:w-[50%] md:w-[50%] md:pt-2 pt-0 md:text-start text-center",
            )}
          >
            {t("shipment_tracker.shipment_cta_section.description")}
          </span>

          <div className="flex flex-row gap-x-[3vw] md:gap-x-[1vw] mt-4">
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
              leftIcon={<CalendarDays className="size-5" />}
            />
          </div>
          {/* Footer CTA Image */}
          <img
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/footer/footer_cta_image.webp"
            alt=""
            className="
              lg:w-auto md:w-[50%]
              h-auto
              absolute
              lg:top-[-9.5vw] md:top-0 top-[-26vw]
              md:right-[-4vw] right-0
              justify-end
            "
          />
        </div>
      </div>
      <footer
        className="bg-[#F3F4F6] w-full pt-[30vw] pb-[4vw] px-[5vw] md:pt-[10vw] md:pb-[2vw] md:px-[5vw] lg:px-[10vw]"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col lg:items-start md:items-center md:flex-col lg:flex-row gap-[3vw] md:gap-0">
          {/* LEFT COLUMN: Brand Identity */}
          <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center w-full lg:w-[37%] md:w-full md:mb-[0.5vw] mb-[3.5vw]">
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
                "md:mb-[1vw] mb-[4vw] lg:text-start md:text-center text-center",
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
                "lg:text-start md:text-center text-center md:w-[65%] lg:w-[85%] lg:mt-0 md:mt-2",
              )}
            >
              {t("footer.description_1")} {t("footer.description_2")}
            </p>
          </div>

          {/* RIGHT COLUMN: Link Cards Container */}
          <div
            className="
              w-full lg:w-[70%] md:w-[90%]
              grid grid-cols-1
              md:grid-cols-3
              lg:grid-cols-4
              gap-[4vw] md:gap-4
              auto-rows-min
              lg:my-0 md:my-6
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
                            ? "lg:col-start-3"
                            : "lg:col-start-4",
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
                <div key={col.id} className="md:col-start-1 lg:col-start-1">
                  <FooterColumn title={col.title}>{col.content}</FooterColumn>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="mt-[4vw] md:mt-4 flex flex-col md:flex-row justify-between items-center text-dark-neutral font-normal text-[3vw] md:text-base pt-[4vw] md:pt-0">
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
