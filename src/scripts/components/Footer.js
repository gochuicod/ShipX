import { useTranslation } from "react-i18next";
import { memo } from "react";
import SmartNavLink from "./ui/SmartNavLink";

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

  return (
    <div className="md:pt-[15vw] relative">
      {/* CTA Section */}
      <div
        className="
                absolute
                md:top-[2vw] top-[-60vw] left-0 right-0
                flex flex-col
                md:w-[85vw] w-[90vw]
                md:h-auto h-[80vw]
                bg-cover bg-center bg-no-repeat
                mx-auto
                md:mb-[4vw] mb-0
                text-white text-[0.8vw]
                font-normal
                md:rounded-[1vw] rounded-[2vw]
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
          <span
            className="
              md:px-0 px-[5vw]
              md:text-[2vw] text-[7vw]
              md:text-start text-center
              md:leading-[3vw] leading-[8vw]
              font-semibold
            "
          >
            {t("shipment_tracker.shipment_cta_section.title")}
          </span>
          <span
            className="
              font-normal
              opacity-95
              pb-[1vw]
              md:text-[0.8vw] text-[2.5vw]
              md:text-start text-center
              md:leading-[1.5vw] leading-[3vw]
              md:px-0 px-[3vw]
            "
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
                <button
                  type="button"
                  className={`
                      flex flex-row
                      items-center justify-center
                      gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw]
                      bg-white/15 text-white
                      border border-white/95
                      rounded-full
                      transition-all duration-300 focus:outline-none
                      cursor-pointer
                  `}
                >
                  {t("footer.book_a_demo")}
                </button>
              </SmartNavLink>
            </div>
            <SmartNavLink to="/#contact-us" end>
              <button
                type="button"
                className={`
                  flex flex-row
                  items-center justify-center
                  gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw]
                  bg-white/15 text-white
                  border border-white/95
                  rounded-full
                  transition-all duration-300 focus:outline-none
                  cursor-pointer
                `}
              >
                {t("footer.contact_us")}
              </button>
            </SmartNavLink>
          </div>
        </div>
      </div>
      <footer
        className="bg-[#F3F4F6] w-full pt-[30vw] pb-[4vw] px-[5vw] md:pt-[10vw] md:pb-[2vw] md:px-[7.5vw]"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-[5vw] md:gap-[4vw]">
          {/* LEFT COLUMN: Brand Identity */}
          <div className="flex flex-col w-full md:w-[30%] md:mb-[0.5vw] mb-[3.5vw]">
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
              className="text-[#1A1A1A] font-bold text-[4.5vw] md:text-[1vw] leading-tight md:mb-[1vw] mb-[4vw] md:text-start text-center"
              style={{
                fontFamily: "Karla, system-ui, -apple-system, sans-serif",
              }}
            >
              {t("footer.tagline")}
            </h2>

            {/* Description */}
            <p className="text-[#1A1A1A] font-normal text-[3.3vw] md:text-[0.8vw] md:text-start text-center md:leading-relaxed leading-[3.6vw] max-w-fit">
              {t("footer.description_1")} {t("footer.description_2")}
            </p>
          </div>

          {/* RIGHT COLUMN: Link Cards Container */}
          <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-4 gap-[4vw] md:gap-[1.5vw]">
            {/* Column 1: Quick Links */}
            <div className="bg-white rounded-xl p-[5vw] md:p-[1.5vw] h-fit">
              <h3 className="text-[#FF4FF0] font-bold text-[4vw] md:text-[1.1vw] mb-[3vw] md:mb-[0.5vw]">
                {t("footer.quick_links")}
              </h3>
              <ul className="space-y-[2vw] md:space-y-[0.3vw]">
                {linkColumns.quickLinks.map((item) => (
                  <li key={item.to}>
                    <SmartNavLink
                      to={item.to}
                      className="text-gray-600 hover:text-gray-900 text-[3.5vw] md:text-[0.8vw] transition-colors block"
                    >
                      {item.label}
                    </SmartNavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Toolkit & Resources */}
            <div className="md:flex hidden flex-col gap-[4vw] md:gap-[1.5vw]">
              <div className="bg-white rounded-xl p-[5vw] md:p-[1.5vw] h-fit">
                <h3 className="text-[#FF4FF0] font-bold text-[4vw] md:text-[1.1vw] mb-[3vw] md:mb-[0.5vw]">
                  {t("header.toolkit")}
                </h3>
                <ul className="space-y-[2vw] md:space-y-[0.3vw]">
                  {linkColumns.toolkit.map((item) => (
                    <li key={item.to}>
                      <SmartNavLink
                        to={item.to}
                        className="text-gray-600 hover:text-gray-900 text-[3.5vw] md:text-[0.8vw] transition-colors block"
                      >
                        {item.label}
                      </SmartNavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-[5vw] md:p-[1.5vw] h-fit">
                <h3 className="text-[#FF4FF0] font-bold text-[4vw] md:text-[1.1vw] mb-[3vw] md:mb-[0.5vw]">
                  {t("header.resources")}
                </h3>
                <ul className="space-y-[2vw] md:space-y-[0.3vw]">
                  {linkColumns.resources.map((item) => (
                    <li key={item.to}>
                      <SmartNavLink
                        to={item.to}
                        className="text-gray-600 hover:text-gray-900 text-[3.5vw] md:text-[0.8vw] transition-colors block"
                      >
                        {item.label}
                      </SmartNavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: Legal */}
            <div className="bg-white rounded-xl p-[5vw] md:p-[1.5vw] h-fit">
              <h3 className="text-[#FF4FF0] font-bold text-[4vw] md:text-[1.1vw] mb-[3vw] md:mb-[0.5vw]">
                Legal
              </h3>
              <ul className="space-y-[2vw] md:space-y-[0.3vw]">
                {linkColumns.legal.map((item) => (
                  <li key={item.to}>
                    <SmartNavLink
                      to={item.to}
                      className="text-gray-600 hover:text-gray-900 text-[3.5vw] md:text-[0.8vw] transition-colors block"
                    >
                      {item.label}
                    </SmartNavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="bg-white rounded-xl p-[5vw] md:p-[1.5vw] h-fit">
              <h3 className="text-[#FF4FF0] font-bold text-[4vw] md:text-[1.1vw] mb-[3vw] md:mb-[0.5vw]">
                {t("footer.reach_us_1")}
              </h3>
              <ul className="space-y-[3vw] md:space-y-[1vw]">
                <li className="flex items-center gap-[2vw] md:gap-[0.6vw] text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[4vw] h-[4vw] md:w-[1.1vw] md:h-[1.1vw] shrink-0"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <a
                    href={`mailto:${t("footer.reach_us_3")}`}
                    className="text-[3.5vw] md:text-[0.8vw]"
                  >
                    {t("footer.reach_us_3")}
                  </a>
                </li>
                <li className="flex items-start gap-[2vw] md:gap-[0.6vw] text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[4vw] h-[4vw] md:w-[1.1vw] md:h-[1.1vw] mt-[0.5vw] shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[3.5vw] md:text-[0.8vw] leading-snug">
                    {t("footer.reach_us_4")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="mt-[4vw] md:mt-[0.5vw] flex flex-col md:flex-row justify-between items-center text-[#1A1A1A] text-[3vw] md:text-[0.8vw] pt-[4vw] md:pt-[1.5vw]">
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
