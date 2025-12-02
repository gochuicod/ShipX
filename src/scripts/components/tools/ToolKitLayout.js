import { useState, useMemo } from "react";
import { STYLES } from "./styles";
import { useTranslation } from "../../hooks/useTranslation";
import Badge from "./Badge";
import TabSwitcher from "./TabSwitcher";
import ShipmentTrackerForm from "./ShipmentTrackerForm";
import HSCodeForm from "./HSCodeForm";
import FileClaimForm from "./FileClaimForm";

// --- MAIN LAYOUT ---

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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="flex flex-col items-start pt-10 lg:pl-10 space-y-6 animate-fade-in-up">
          <Badge />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {prefix} <span className="text-[#FF00E5]">{highlight}</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg">
            {desc}
          </p>
        </div>

        <div className="flex flex-col items-end w-full">
          <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className={STYLES.card}>
            <div key={activeTab} className="w-full animate-fade-in">
              <Component />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolkitLayout;
