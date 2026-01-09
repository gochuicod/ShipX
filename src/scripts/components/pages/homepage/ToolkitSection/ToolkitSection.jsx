import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SectionGlow from "../../../library/SectionGlow";
import TabSwitcher from "../../../library/TabSwitcher";
import { Badge } from "../../../../../styles/badge";
import { TOOLKIT_TABS } from "./tabs.config";
import { getTranslatedToolkitTabs } from "./toolkitTabs.i18n";

import { cn } from "../../../../../lib/util";
import { themeGuide } from "../../../../../styles/themeGuide";

import Container from "../../../library/Container";

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
      className={cn(
        themeGuide.sectionPaddingY,
        "relative w-full min-h-[408px] overflow-hidden isolation-isolate",
        "flex items-center",
      )}
      style={{
        background: "linear-gradient(180deg, #4F378A 0%, #66005C 159.37%)",
      }}
    >
      {/* Background Glows */}
      <SectionGlow className="left-[1072px] top-5" />
      <SectionGlow className="left-[148px] -top-3" />

      <Container
        className={cn(
          "flex flex-col 2xl:flex-row",
          "items-start justify-center",
          "gap-8",
        )}
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10 flex 2xl:flex-col md:flex-row flex-col items-center 2xl:items-end text-center 2xl:text-right w-full 2xl:max-w-[390px] md:max-w-full 2xl:gap-2 md:gap-6">
          <div className="flex flex-col items-center md:items-start 2xl:items-end text-center 2xl:text-right gap-2 md:w-auto">
            {/* Badge */}
            <Badge variant="toolkit" size="default" className="md:text-sm">
              {activeTabData?.badge}
            </Badge>

            {/* Title */}
            <h2 className="font-['Inter'] font-semibold text-[32px] md:text-md 2xl:text-[40px] text-white opacity-90 leading-10 tracking-[-1px]">
              {activeTabData?.title}
            </h2>
          </div>

          {/* Description */}
          <p className="font-['Inter'] font-normal text-[16px] leading-5 text-white opacity-90 2xl:w-auto md:w-[450px] 2xl:text-right md:text-left">
            {activeTabData?.description}
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative z-10 flex flex-col 2xl:gap-4 md:gap-4 gap-8 w-full 2xl:max-w-[808px] md:max-w-full">
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
      </Container>
    </section>
  );
}
