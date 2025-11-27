import Badge from "./Badge";
import ShipmentTrackerForm from "./ShipmentTrackerForm";
import ShipmentTrackerAccordion from "./ShipmentTrackerAccordion";
import SmartNavLink from "../ui/SmartNavLink";
import { useTranslation } from "react-i18next";
import { useShipment } from "../../hooks/useShipment";
import SEO from "../ui/SEO";

const ShipmentTracker = () => {
  const { t, i18n } = useTranslation();
  const { shipmentData, trackingNumber } = useShipment();

  return (
    <>
      <SEO
        title={t("seo.shipment_tracker_page.title")}
        description={t("seo.shipment_tracker_page.description")}
        canonical={t("seo.shipment_tracker_page.canonical")}
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
      />

      <div className="w-screen min-h-screen flex flex-col">
        {/* Cover image and text section */}
        <div
          className="
              flex flex-col
              w-screen md:h-auto h-[70vw]
              bg-cover bg-center bg-no-repeat
              text-white text-[0.8vw]
              font-normal
              md:bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@203c06c5bdc001c743c47953f4f7cab69c259dd7/src/assets/shipment_tracker_cover_image.svg')]
              bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@203c06c5bdc001c743c47953f4f7cab69c259dd7/src/assets/shipment_tracker_cta_image.svg')]
          "
          style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          }}
        >
          <div
            className={`
                          ${
                            i18n.language === "en" || i18n.language === "thai"
                              ? "md:w-[35vw] w-screen"
                              : "md:w-[50vw] w-screen"
                          }
                          md:ps-[10vw] ps-[12vw]
                          md:pe-0 pe-[12vw]
                          md:pt-[5vw] pt-[15vw]
                          md:pb-[5vw] pb-[25vw]
                          flex flex-col
                          md:justify-start justify-center md:items-start items-center
                          md:gap-y-[1vw] gap-y-[3vw]
                          z-2
                      `}
          >
            <span
              className="
                              md:text-[2.5vw] text-[7vw] text-center
                              md:font-bold font-semibold
                          "
            >
              {t("shipment_tracker.hero_section.title")}
            </span>
            <span
              className="
                              md:text-[0.8vw] text-[2.8vw]
                              md:text-start text-center
                          "
            >
              {t("shipment_tracker.hero_section.description")}
            </span>
            <div
              className="
                              flex flex-row
                              md:gap-x-[1.5vw] gap-x-[3vw]
                              bg-white
                              rounded-full
                              md:py-[0.20vw] py-[0.6vw]
                              md:pe-[1.5vw] pe-[3vw]
                              md:ps-[0.25vw] ps-[0.55vw]
                              w-fit
                              items-center justify-center
                              md:text-[0.8vw] text-[2.8vw]
                          "
            >
              <SmartNavLink to="/shipment-tracker" end>
                <button
                  type="button"
                  className="
                                    bg-[#99008A]
                                    rounded-full
                                    md:px-[2.5vw] px-[3.5vw]
                                    md:py-[0.35vw] py-[1vw]
                                    text-center
                                    cursor-pointer
                                "
                >
                  {t("shipment_tracker.hero_section.buttons.shipment_tracker")}
                </button>
              </SmartNavLink>
              <SmartNavLink to="/hs-code-generator" end>
                <button
                  type="button"
                  className="
                                    text-[#4F378A] text-center
                                    cursor-pointer
                                "
                >
                  {t("shipment_tracker.hero_section.buttons.hs_code_generator")}
                </button>
              </SmartNavLink>
            </div>
          </div>
        </div>

        {/* Track your order section */}
        <div
          className="
                      flex md:flex-row flex-col
                      gap-x-[4vw]
                      justify-center items-center
                      md:mt-[5vw] mt-[10vw]
                      md:px-0 px-[10vw]
                  "
        >
          <div
            className="
                          flex flex-col
                          justify-center
                          md:items-end items-center
                          md:w-[36vw]
                          md:gap-y-0 gap-y-[2vw]
                          md:mb-0 mb-[8vw]
                      "
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <Badge
              className="md:text-[0.8vw] text-[2.5vw]"
              badge_text={t("shipment_tracker.track_order_section.badge_text")}
              text_color="#FF00E5"
              bg_color="#F3F1FF"
            />
            <h2
              className="
                              md:text-[2.5vw] text-[4vw]
                              text-[#1E2939]
                              font-semibold
                          "
            >
              {t("shipment_tracker.track_order_section.title.regular")}&nbsp;
              <span className="text-[#FF00E5]">
                {t("shipment_tracker.track_order_section.title.highlighted")}
              </span>
            </h2>
            <p
              className="
                              text-[#63666D]/95
                              md:text-[1vw] text-[3vw]
                              font-medium
                              md:text-end text-center
                              md:leading-[1.5vw] leading-[4vw]
                          "
            >
              {t("shipment_tracker.track_order_section.description")}
            </p>
          </div>

          {/* Shipment Form and Accordion */}
          <ShipmentTrackerForm />
        </div>

        {/* Shipment Accordion */}
        <ShipmentTrackerAccordion
          shipmentData={shipmentData}
          trackingNumber={trackingNumber}
        />

        {/* CTA Section */}
        <div
          className="
                      flex flex-col
                      md:w-[80vw] w-screen
                      md:h-auto h-[80vw]
                      bg-cover bg-center bg-no-repeat
                      mx-auto
                      md:mb-[4vw] mb-0
                      text-white text-[0.8vw]
                      font-normal
                      md:rounded-[1vw] rounded-[0.00000001vw]
                      overflow-hidden
                      md:bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@ffab8ad2ad6bf54f2ed5c615722bff70ee96f7ef/src/assets/shipment_tracker_cta_image.webp')]
                      bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@281b9212a310690d195ec2f7ac6057b96436d583/src/assets/shipment_tracker_cta_image_mobile.svg')]
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
                  ? "md:w-[45vw] w-screen"
                  : "md:w-[40vw] w-screen"
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
                md:text-[0.9vw] text-[2.5vw]
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
      </div>
    </>
  );
};

export default ShipmentTracker;
