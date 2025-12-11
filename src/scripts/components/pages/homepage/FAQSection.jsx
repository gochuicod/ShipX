import { useState, lazy } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import FaqItem from "../../ui/FAQItem";
import SmartNavLink from "../../ui/SmartNavLink";

const ParallaxSection = lazy(() => import("../../ui/ParallaxSection"));

const FAQSection = () => {
  const { t } = useTranslation();

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
      <div
        className="
          w-full bg-white font-sans
          py-0 px-[5vw]
          md:py-[3.1vw] md:px-[17vw] 
        "
      >
        <div className="w-full mx-auto">
          {/* Header Section */}
          <div className="text-center mb-[8vw] md:mb-[2.5vw]">
            <span
              className="
                  inline-block
                  py-[2.1vw] pl-[2.7vw] pr-[3.5vw]
                  rounded-[2.1vw]
                  text-[2.5vw]
                  mb-[4vw]

                  md:py-[0.42vw] md:pl-[0.52vw] md:pr-[0.68vw]
                  md:rounded-[0.42vw]
                  md:text-[0.7vw]
                  md:mb-[0.5vw]

                  bg-[#F3F1FF] text-[#FF00E5]
                  font-bold tracking-wide
                "
            >
              ● {getSafeText("faq_section.badge", "Frequently Asked Questions")}
            </span>
            <h2 className="text-[5vw] md:text-[2.5vw] font-bold text-slate-950">
              {getSafeText("faq_section.title", "Everything You Need to Know")}
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1vw] md:gap-[1vw] items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-[0.5vw] md:gap-[0.5vw]">
              {leftColItems.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onClick={handleToggle}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[0.5vw] md:gap-[0.5vw]">
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
      {/* Read More - FAQ Page redirect Button */}
      <div className="text-center md:mt-0 mt-[2vw]">
        <SmartNavLink
          to="/frequently-asked-questions"
          className="
                group
                relative
                inline-flex items-center justify-center
                p-px
                rounded-full
                bg-linear-to-b from-[#FF00E5] to-[#4F378A]
                transition-transform active:scale-95
                hover:cursor-pointer
              "
        >
          <span
            className="
                  w-full h-full
                  rounded-[19px]
                  md:px-[30px] px-[8vw]
                  md:py-[7.5px] py-[2.5vw]
                  md:text-base text-[3.5vw]
                  font-medium
                  bg-white
                  text-[#1A1A1A]
                  transition-all duration-300 ease-in-out
                  group-hover:bg-transparent
                  group-hover:text-white
                  flex items-center justify-center gap-[0.52vw]
                "
          >
            Read More
            <ArrowRight className="hidden md:inline-block md:w-[0.9vw] md:h-[0.9vw] transition-transform group-hover:translate-x-1 text-[#FF00E5] md:group-hover:text-white" />
          </span>
        </SmartNavLink>
      </div>
    </ParallaxSection>
  );
};

export default FAQSection;
