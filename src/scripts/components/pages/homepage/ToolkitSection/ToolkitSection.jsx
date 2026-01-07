import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SectionGlow from "../../../library/SectionGlow";
import TabSwitcher from "../../../library/TabSwitcher";
import { Badge } from "../../../../../styles/badge";
import { TOOLKIT_TABS } from "./tabs.config";
import { getTranslatedToolkitTabs } from "./toolkitTabs.i18n";

export default function ToolkitSection() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  // Get translated tabs from i18n
  const translatedTabs = getTranslatedToolkitTabs(t);

  // Determine the active tab from URL or default
  const getTabFromUrl = () =>
    TOOLKIT_TABS.find((tab) => tab.path === pathname)?.id || TOOLKIT_TABS[0].id;

  const [activeTab, setActiveTab] = useState(getTabFromUrl());

  // Update active tab if URL changes
  useEffect(() => {
    setActiveTab(getTabFromUrl());
  }, [pathname]);

  // Merge static config with translated content
  const activeTabConfig = TOOLKIT_TABS.find((tab) => tab.id === activeTab);
  const activeTabTranslations =
    translatedTabs.find((tab) => tab.id === activeTab) || {};
  const activeTabData = { ...activeTabConfig, ...activeTabTranslations };
  const ActiveForm = activeTabData?.Form;

  return (
    <section
      className="relative w-full min-h-[408px] flex flex-col lg:flex-row items-center justify-center px-6 py-16 lg:px-24 gap-8 overflow-hidden isolation-isolate"
      style={{
        background: "linear-gradient(180deg, #4F378A 0%, #66005C 159.37%)",
      }}
    >
      {/* Background Glows */}
      <SectionGlow className="left-[1072px] top-5" />
      <SectionGlow className="left-[148px] -top-3" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex lg:flex-col md:flex-row flex-col items-center lg:items-end text-center lg:text-right w-full lg:max-w-[390px] md:max-w-full lg:gap-2 md:gap-6">
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-2 lg:w-auto md:w-68">
          {/* Badge */}
          <Badge variant="toolkit" size="default" className="md:text-sm">
            {activeTabData?.badge}
          </Badge>

          {/* Title */}
          <h2 className="font-['Inter'] font-semibold text-[32px] md:text-md lg:text-[40px] text-white opacity-90 leading-10 tracking-[-1px]">
            {activeTabData?.title}
          </h2>
        </div>

        {/* Description */}
        <p className="font-['Inter'] font-normal text-[16px] leading-5 text-white opacity-90 lg:w-auto md:w-[450px] lg:text-right md:text-left">
          {activeTabData?.description}
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative z-10 flex flex-col lg:gap-4 md:gap-4 gap-8 w-full lg:max-w-[808px] md:max-w-full">
        {/* Tab Switcher */}
        <div className="flex justify-center md:justify-start">
          <TabSwitcher
            tabs={translatedTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Active Form */}
        {ActiveForm && <ActiveForm />}
      </div>
    </section>
  );
}
