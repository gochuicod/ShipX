import Badge from "./Badge";
import ShipmentTrackerForm from "./ShipmentTrackerForm";
import ShipmentTrackerAccordion from "./ShipmentTrackerAccordion";
import SmartNavLink from "../ui/SmartNavLink";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useShipment } from "../../hooks/useShipment";
import SEO from "../ui/SEO";
import ToolsHeroSection from "./ToolsHeroSection";
import { useRef, useEffect } from "react";

const ShipmentTracker = () => {
  const { t, i18n } = useTranslation();
  const { shipmentData, trackingNumber, setShipmentData } = useShipment();
  const [searchParams] = useSearchParams();

  const urlTrackingNumber = searchParams.get("trackingNumber");
  const autoSubmit = searchParams.get("autosubmit") === "true";

  const accordionRef = useRef(null);

  useEffect(() => {
    if (!shipmentData?.errors && accordionRef.current) {
      setTimeout(() => {
        accordionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", // Aligns the top of the element to the top of the viewport
        });
      }, 500);
    }
  }, [shipmentData]);

  const handleTrackAnotherShipment = () => {
    setTimeout(() => {
      setShipmentData(null);
    }, 500);
  };

  return (
    <>
      <SEO
        title={t("seo.shipment_tracker_page.title")}
        description={t("seo.shipment_tracker_page.description")}
        canonical={t("seo.shipment_tracker_page.canonical")}
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
      />

      <div className="w-screen min-h-screen flex flex-col">
        {/* Reusable Hero Section */}
        <ToolsHeroSection activePage="shipment-tracker" />

        {/* Track your order section */}
        <div
          className="
            flex md:flex-row flex-col
            gap-x-[4vw]
            justify-center items-center
            md:mt-[5vw] mt-[10vw]
            md:px-0 px-[10vw]
            md:mb-[5vw] mb-[10vw]
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
                md:text-[2.5vw] text-[6vw]
                text-[#1E2939]
                font-bold
              "
            >
              {t("shipment_tracker.track_order_section.title.regular")}&nbsp;
              <span className="text-[#FF00E5]">
                {t("shipment_tracker.track_order_section.title.highlighted")}
              </span>
            </h2>
            <p
              className="
                text-[#63666D]/75
                md:text-[0.9vw] text-[3.5vw]
                md:text-end text-center
                font-medium
                md:leading-[1.5vw] leading-[4vw]
              "
            >
              {t("shipment_tracker.track_order_section.description")}
            </p>
          </div>

          {/* Shipment Form */}
          <ShipmentTrackerForm
            initialTrackingNumber={urlTrackingNumber}
            autoSubmit={autoSubmit}
          />
        </div>

        {/* Shipment Accordion */}
        {shipmentData &&
          shipmentData.statuses &&
          shipmentData.statuses.length > 0 && (
            <div ref={accordionRef}>
              <div
                className="
                  flex flex-col
                  md:gap-y-[3vw] gap-y-[8vw]
                  justify-center items-center
                "
              >
                <ShipmentTrackerAccordion
                  shipmentData={{
                    statuses: shipmentData?.statuses,
                  }}
                  trackingNumber={trackingNumber}
                  latestStatusHidden={shipmentData.statuses.length <= 3}
                />

                <SmartNavLink to="shipment-tracker/#" end>
                  <button
                    type="button"
                    onClick={handleTrackAnotherShipment}
                    className="
                                  bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                                  bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%]
                                  transition-[background-position] duration-1000 ease-in-out
                                  md:py-[0.5vw] py-[1.4vw]
                                  md:px-[1.5vw] px-[3vw]
                                  md:rounded-[2vw] rounded-full
                                  cursor-pointer
                                  text-white
                                  md:font-medium font-normal
                                  md:text-[0.8vw] text-[2.4vw]
                                  w-fit
                                  md:mb-[5vw] mb-[10vw]
                              "
                    style={{
                      fontFamily: "Karla, system-ui, -apple-system, sans-serif",
                    }}
                  >
                    {t(
                      "shipment_tracker.shipment_activity_section.track_another_shipment_button_text",
                    )}
                  </button>
                </SmartNavLink>
              </div>
            </div>
          )}
      </div>
    </>
  );
};

export default ShipmentTracker;
