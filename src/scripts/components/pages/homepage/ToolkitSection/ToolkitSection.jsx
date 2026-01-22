import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SectionGlow from "../../../library/SectionGlow";
import TabSwitcher from "../../../library/TabSwitcher";
import Container from "../../../library/Container";
import { Badge } from "../../../../../styles/badge";

import { TOOLKIT_TABS } from "./tabs.config";
import { getTranslatedToolkitTabs } from "./toolkitTabs.i18n";

import { cn } from "../../../../../lib/util";
import { themeGuide } from "../../../../../styles/themeGuide";

export default function ToolkitSection() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const translatedTabs = getTranslatedToolkitTabs(t);

  const getTabFromUrl = () =>
    TOOLKIT_TABS.find((tab) => tab.path === pathname)?.id || TOOLKIT_TABS[0].id;

  const [activeTab, setActiveTab] = useState(getTabFromUrl());

  useEffect(() => {
    setActiveTab(getTabFromUrl());
  }, [pathname]);

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
      <SectionGlow className="left-[1072px] top-5" />
      <SectionGlow className="left-[148px] -top-3" />

      <Container
        className={cn(
          "flex flex-col lg:flex-row",
          "items-center lg:items-stretch justify-center",
          "gap-8 mx-auto",
        )}
      >
        {/* 1. MOBILE ILLUSTRATION (Visible only on mobile/tablet) */}
        {activeTabData?.illustration && (
          <img
            key={`mobile-${activeTab}`}
            src={activeTabData.illustration}
            alt={activeTabData.title}
            className="block lg:hidden w-full max-w-[262px] mx-auto h-auto animate-in fade-in zoom-in-95 duration-500 mb-4"
          />
        )}

        {/* 2. LEFT COLUMN: Heading & Description */}
        {/* Changed: Removed 'md:flex-row'. Now strictly 'flex-col' on all sizes. */}
        <div className="relative z-10 flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:max-w-[350px] gap-6 lg:gap-2 shrink-0">
          <div className="flex flex-col items-center 2xl:items-end gap-2">
            <Badge variant="toolkit" size="default" className="md:text-sm">
              {activeTabData?.badge}
            </Badge>

            <h2 className="font-['Inter'] font-semibold text-[32px] md:text-[36px] lg:text-[40px] text-white opacity-90 leading-10 tracking-[-1px]">
              {activeTabData?.title}
            </h2>
          </div>

          <p className="font-['Inter'] font-normal text-[16px] leading-5 text-white opacity-90 max-w-[450px] 2xl:max-w-none">
            {activeTabData?.description}
          </p>
        </div>

        {/* 3. MIDDLE COLUMN: Switcher & Form */}
        <div className="relative z-10 flex flex-col gap-4 w-full md:max-w-[600px] lg:max-w-[600px] shrink-0">
          <div className="w-full flex lg:justify-start justify-center">
            <TabSwitcher
              tabs={translatedTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </div>

          {ActiveForm && <ActiveForm />}
        </div>

        {/* 4. RIGHT COLUMN: Desktop Illustration */}
        <div className="hidden lg:flex flex-col justify-end w-full max-w-[350px] my-auto">
          {activeTabData?.illustration && (
            <img
              key={`desktop-${activeTab}`}
              src={activeTabData.illustration}
              alt={activeTabData.title}
              className={cn(
                "w-full h-auto object-contain animate-in fade-in zoom-in-95 duration-500",
                `${activeTabData.id === "file-a-claim" ? "scale-170" : "scale-110"}`,
              )}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
