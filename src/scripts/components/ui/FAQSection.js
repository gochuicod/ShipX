import React, { useState, lazy } from "react";
import { useTranslation } from "react-i18next";
import FaqItem from "./FAQItem";

const ParallaxSection = lazy(() => import("./ParallaxSection"));

const FAQSection = () => {
  const { t } = useTranslation();

  // 1. Cleaned up data retrieval (Removed FALLBACK_DATA)
  const rawItems = t("faq_section.items", { returnObjects: true });
  const faqItems = Array.isArray(rawItems) ? rawItems : [];

  const [openId, setOpenId] = useState(
    faqItems.length > 0 ? faqItems[0].id : null,
  );

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const midPoint = Math.ceil(faqItems.length / 2);
  const leftColItems = faqItems.slice(0, midPoint);
  const rightColItems = faqItems.slice(midPoint);

  const getSafeText = (key, fallback) => {
    const val = t(key);
    return val === key ? fallback : val;
  };

  return (
    <ParallaxSection>
      <div className="w-full bg-white py-20 px-4 md:px-8 font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-20">
            <span className="inline-block py-2 px-6 rounded-full bg-fuchsia-100 text-fuchsia-600 text-xs md:text-sm font-bold tracking-wide mb-6">
              ● {getSafeText("faq_section.badge", "Frequently Asked Questions")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-950">
              {getSafeText("faq_section.title", "Everything You Need to Know")}
            </h2>
          </div>

          {/* Grid Gap Adjustment: 
            - gap-4 on mobile (matches the flex-col gap below for a seamless list)
            - md:gap-8 on desktop (separation between left and right columns)
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-start">
            {/* Column Item Gap Adjustment:
              - gap-4 on mobile (uniform spacing)
              - md:gap-6 on desktop (slightly increased breathing room between cards)
            */}
            <div className="flex flex-col gap-2 md:gap-4">
              {leftColItems.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onClick={handleToggle}
                />
              ))}
            </div>

            <div className="flex flex-col gap-2 md:gap-4">
              {rightColItems.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onClick={handleToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default FAQSection;
