import { useState, useEffect } from "react";
import SectionGlow from "../../../library/SectionGlow";
import TabSwitcher from "../../../library/TabSwitcher";
import { Badge } from "../../../../../styles/badge";
import { TOOLKIT_TABS } from "./tabs.config";
import { useLocation } from "react-router-dom";

export default function ToolkitSection() {
  const { pathname } = useLocation();

  // Logic to determine tab based on URL or default
  const getTabFromUrl = () =>
    TOOLKIT_TABS.find((t) => t.path === pathname)?.id || TOOLKIT_TABS[0].id;

  const [activeTab, setActiveTab] = useState(getTabFromUrl());

  // Automatically switch tabs if the URL changes (e.g., clicking a link elsewhere)
  useEffect(() => {
    setActiveTab(getTabFromUrl());
  }, [pathname]);

  const activeTabData = TOOLKIT_TABS.find((tab) => tab.id === activeTab);
  const ActiveForm = activeTabData?.Form;

  return (
    <section
      className="relative w-full min-h-[408px] flex flex-col xl:flex-row items-center justify-center px-6 py-16 lg:px-24 gap-8 overflow-hidden isolation-isolate"
      style={{
        background: "linear-gradient(180deg, #4F378A 0%, #66005C 159.37%)",
      }}
    >
      {/* Background Glows */}
      <SectionGlow className="left-[1072px] top-[20px]" />
      <SectionGlow className="left-[148px] top-[-12px]" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex xl:flex-col md:flex-row flex-col items-center xl:items-end text-center xl:text-right w-full xl:max-w-[390px] md:max-w-full xl:gap-2 md:gap-6">
        <div className="flex flex-col items-center xl:items-end text-center xl:text-right gap-2 xl:w-auto md:w-[240px]">
          <Badge variant="toolkit" size="default" className="md:text-sm">
            {activeTabData?.badge}
          </Badge>

          <h2 className="font-['Inter'] font-semibold text-[32px] md:text-md xl:text-[40px] text-white opacity-90 leading-[40px] tracking-[-1px]">
            {activeTabData?.title}
          </h2>
        </div>

        <p className="font-['Inter'] font-normal text-[16px] leading-[20px] text-white opacity-90 xl:w-auto md:w-[450px] xl:text-right md:text-left">
          {activeTabData?.description}
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative z-10 flex flex-col xl:gap-4 md:gap-4 gap-8 w-full xl:max-w-[608px] md:max-w-full">
        {/* Tabs */}
        <div className="flex justify-center md:justify-start">
          <TabSwitcher
            tabs={TOOLKIT_TABS}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Active Tool */}
        <ActiveForm />
      </div>

      {/* Illustration */}
      <div className="xl:block md:block hidden absolute xl:right-[110px] md:right-[5px] xl:bottom-[40px] md:bottom-[20px] z-20">
        <img
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/delivery_van.webp"
          alt="Delivery Van"
          className="xl:w-[300px] md:w-[220px] object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
