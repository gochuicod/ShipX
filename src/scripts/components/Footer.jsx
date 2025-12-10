import { useTranslation } from "react-i18next";
import { memo } from "react";
import SmartNavLink from "./ui/SmartNavLink";
import { themeGuide } from "../../styles/themeGuide";
import { MailIcon, LocationIcon } from "../icons/FooterIcons";
import { cn } from "../../lib/util";

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
      className: "md:flex hidden flex-col gap-[4vw] md:gap-4",
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
  ];

  return (
    <div className="md:pt-[15vw] pt-[60vw] relative">
      {/* CTA Section */}
      <div
        className="
                absolute
                md:top-[4vw] top-0 left-0 right-0
                flex flex-col
                md:w-[80vw] w-[90vw]
                md:h-auto h-[80vw]
                bg-cover bg-center bg-no-repeat
                mx-auto
                md:mb-[4vw] mb-0
                text-white text-[0.8vw]
                font-normal
                md:rounded-[20px] rounded-[2vw]
                overflow-hidden
                md:bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@ffab8ad2ad6bf54f2ed5c615722bff70ee96f7ef/src/assets/shipment_tracker_cta_image.webp')]
                bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@281b9212a310690d195ec2f7ac6057b96436d583/src/assets/shipment_tracker_cta_image_mobile.svg')]
                md:shadow-[0.2vw_0.2vw_0.2vw_rgba(0,0,0,0.3)] shadow-[0_0_1vw_rgba(0,0,0,0.8)]
            "
        style={{
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          className={`
            flex flex-col
            md:gap-y-0 gap-y-[3vw]
            ${
              i18n.language === "vn"
                ? "md:w-[45vw] w-full"
                : "md:w-[40vw] w-full"
            }
            md:ps-[8vw] ps-[10vw]
            md:pe-0 pe-[10vw]
            md:py-[5vw] py-[10vw]
          `}
        >
          <span className={cn(themeGuide.ctaHeading, "")}>
            {t("shipment_tracker.shipment_cta_section.title")}
          </span>
          <span
            className={cn(
              themeGuide.ctaDescription,
              "shadow-[#0000001A] w-full md:mt-2.5 md: mb-[30px]",
            )}
          >
            {t("shipment_tracker.shipment_cta_section.description")}
          </span>
          <div
            className="
              flex flex-row
              md:gap-x-[1vw] gap-x-[3vw]
              md:text-[0.8vw] text-[2.6vw]
              md:justify-start justify-center
              md:items-center items-center
            "
          >
            <div className="flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]">
              <SmartNavLink to="/book-a-demo" end>
                <button type="button" className={themeGuide.buttonFooterCTA}>
                  {t("footer.book_a_demo")}
                </button>
              </SmartNavLink>
            </div>
            <SmartNavLink to="/#contact-us" end>
              <button type="button" className={themeGuide.buttonFooterCTA}>
                {t("footer.contact_us")}
              </button>
            </SmartNavLink>
          </div>
        </div>
      </div>
      <footer
        className="bg-[#F3F4F6] w-full pt-[30vw] pb-[4vw] px-[5vw] md:pt-[10vw] md:pb-[2vw] md:px-[10vw]"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row justify-normal items-start gap-[3vw] md:gap-0">
          {/* LEFT COLUMN: Brand Identity */}
          <div className="flex flex-col w-full md:w-[40%] md:mb-[0.5vw] mb-[3.5vw]">
            {/* Logos */}
            <div className="flex md:justify-start justify-center items-center gap-[3vw] md:gap-[1vw] md:mb-0 mb-[2vw]">
              <img
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/shipx_logo.svg"
                alt="ShipX Logo"
                className="h-[12vw] md:h-[3vw] w-auto object-contain"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo_sglink_amilo.svg"
                alt="Powered by SGLink & Amilo"
                className="h-[8vw] md:h-[2vw] w-auto object-contain"
              />
            </div>

            {/* Tagline */}
            <h2
              className={cn(
                themeGuide.footerTagline,
                "md:mb-[1vw] mb-[4vw] md:text-start text-center",
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
                "md:text-start text-center md:w-[85%]",
              )}
            >
              {t("footer.description_1")} {t("footer.description_2")}
            </p>
          </div>

          {/* RIGHT COLUMN: Link Cards Container */}
          <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-4 gap-[4vw] md:gap-4">
            {footerColumnData.map((col) => {
              if (col.isGroup) {
                return (
                  <div key={col.id} className={col.className}>
                    {col.items.map((item) => (
                      <FooterColumn key={item.id} title={item.title}>
                        {item.content}
                      </FooterColumn>
                    ))}
                  </div>
                );
              }
              return (
                <FooterColumn key={col.id} title={col.title}>
                  {col.content}
                </FooterColumn>
              );
            })}
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="mt-[4vw] md:mt-4 flex flex-col md:flex-row justify-between items-center text-dark-neutral font-medium text-[3vw] md:text-base pt-[4vw] md:pt-0">
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
