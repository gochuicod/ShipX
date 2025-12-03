import { useState, useMemo } from "react";
import { STYLES } from "./styles";
import { useTranslation } from "../../hooks/useTranslation";
import TabSwitcher from "./TabSwitcher";
import ShipmentTrackerForm from "./ShipmentTrackerForm";
import HSCodeForm from "./HSCodeForm";
import FileClaimForm from "./FileClaimForm";
import Badge from "../shipment_tracker/Badge";
import ParallaxSection from "../ui/ParallaxSection";

const ToolkitLayout = () => {
  const [activeTab, setActiveTab] = useState("tracker");
  const { t } = useTranslation();

  const tabsContent = useMemo(
    () => ({
      tracker: {
        prefix: t("shipment_tracker.title"),
        highlight: t("shipment_tracker.highlight"),
        desc: t("shipment_tracker.desc"),
        Component: ShipmentTrackerForm,
      },
      hscode: {
        prefix: t("hs_code.title"),
        highlight: t("hs_code.highlight"),
        desc: t("hs_code.desc"),
        Component: HSCodeForm,
      },
      claim: {
        prefix: t("claim.title"),
        highlight: t("claim.highlight"),
        desc: t("claim.desc"),
        Component: FileClaimForm,
      },
    }),
    [t],
  );

  const { prefix, highlight, desc, Component } = tabsContent[activeTab];

  return (
    <ParallaxSection className="flex items-center justify-center md:mt-[2vw] mt-[5vw] md:mb-[5vw] mb-[15vw]">
      <div
        className="
          flex
          items-start justify-center
          bg-white
        "
        style={{
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          className="
            md:w-[80vw] w-[90vw]
            flex md:flex-row flex-col
            justify-center items-start
            gap-x-[2vw]
            md:pr-[10vw]
          "
        >
          <div
            className="
              flex flex-col
              md:items-end items-center
              md:justify-start justify-center
              md:w-[40vw] w-full
              md:gap-y-0 gap-y-[3vw]
            "
          >
            <Badge
              badge_text="Trade and Logistics Toolkit"
              text_color="#FF00E5"
              bg_color="#F3F1FF"
              className="md:text-[0.8vw] text-[2.5vw]"
            />
            <div>
              <h1
                className="
                  md:text-end text-center
                  font-semibold
                  md:text-[2.5vw] text-[4vw]
                  text-[#1E2939]
                  leading-[1.4]
                "
              >
                {prefix} <span className="text-[#FF00E5]">{highlight}</span>
              </h1>
              <p
                className="
                  md:text-[1vw] text-[3vw]
                  font-medium
                  md:text-end text-center
                  md:leading-[1.5vw] leading-[4vw]
                  text-[#63666D]
                  md:w-[35vw] w-full
                "
              >
                {desc}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end md:w-[30vw] w-full md:mt-0 mt-[5vw]">
            <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className={STYLES.card}>
              <div key={activeTab} className="w-full">
                <Component />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default ToolkitLayout;
