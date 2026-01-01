import Badge from "./Badge";
import ShipmentTrackerForm from "./ShipmentTrackerForm";
import ShipmentTrackerAccordion from "./ShipmentTrackerAccordion";
import SmartNavLink from "../../../ui/SmartNavLink";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useShipment } from "../../../../hooks/useShipment";
import SEO from "../../../ui/SEO";
import ToolsHeroSection from "../../../library/ToolsHeroSection";
import { useRef, useEffect } from "react";
import Button from "../../../ui/Button";

const UI_DELAY_MS = 500;

const TrackOrderSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="
        flex flex-col justify-center md:items-end items-center
        md:w-[36vw] md:gap-y-2 gap-y-[2vw] md:mb-0 mb-[8vw]
      "
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <Badge
        badge_text={t("shipment_tracker.track_order_section.badge_text")}
        text_color="#FF00E5"
        bg_color="#F3F1FF"
      />
      <h2 className="text-4xl text-[#1E2939] font-bold">
        {t("shipment_tracker.track_order_section.title.regular")}&nbsp;
        <span className="text-[#FF00E5]">
          {t("shipment_tracker.track_order_section.title.highlighted")}
        </span>
      </h2>
      <p className="text-[#63666D]/75 md:text-[0.9vw] text-[3.5vw] md:text-end text-center font-medium md:leading-[1.5vw] leading-[4vw]">
        {t("shipment_tracker.track_order_section.description")}
      </p>
    </div>
  );
};

const ShipmentTracker = () => {
  const { t } = useTranslation();
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
      }, UI_DELAY_MS);
    }
  }, [shipmentData]);

  const handleTrackAnotherShipment = () => {
    setTimeout(() => {
      setShipmentData(null);
    }, UI_DELAY_MS);
  };

  return (
    <>
      <SEO
        title={t("seo.shipment_tracker_page.title")}
        description={t("seo.shipment_tracker_page.description")}
        canonical={t("seo.shipment_tracker_page.canonical")}
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
      />

      <div className="w-screen flex flex-col">
        {/* Reusable Hero Section */}
        <ToolsHeroSection activePage="shipment-tracker" />

        {/* Track your order section */}
        <div
          className="
            flex md:flex-row flex-col
            gap-x-8
            justify-center items-center
            md:mt-[5vw] mt-[10vw]
            md:px-0 px-[10vw]
            md:mb-[5vw] mb-[10vw]
          "
        >
          <TrackOrderSection />

          {/* Shipment Form */}
          <ShipmentTrackerForm
            initialTrackingNumber={urlTrackingNumber}
            autoSubmit={autoSubmit}
          />
        </div>

        {/* Shipment Accordion */}
        {shipmentData?.statuses?.length > 0 && (
          <div ref={accordionRef}>
            <div
              className="
                  flex flex-col
                  md:gap-y-[3vw] gap-y-[8vw]
                  justify-center items-center
                "
            >
              <ShipmentTrackerAccordion
                shipmentData={shipmentData}
                trackingNumber={trackingNumber}
                latestStatusHidden={shipmentData.statuses.length <= 3}
              />

              <SmartNavLink to="shipment-tracker/#" end>
                <Button
                  onClick={handleTrackAnotherShipment}
                  className="w-fit md:mb-[5vw] mb-[10vw]"
                >
                  {t(
                    "shipment_tracker.shipment_activity_section.track_another_shipment_button_text",
                  )}
                </Button>
              </SmartNavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShipmentTracker;
