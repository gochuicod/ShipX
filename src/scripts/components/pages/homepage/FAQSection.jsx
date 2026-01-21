import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { CircleArrowRight } from "lucide-react";

import { Badge } from "../../../../styles/badge";
import { themeGuide } from "../../../../styles/themeGuide";
import { cn } from "../../../../lib/util";

import AppButton from "../../library/AppButton";
import HighlightedHeading from "../../library/HighlightedHeading";
import Container from "../../library/Container";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../library/Accordion";

const FAQSection = () => {
  const { t } = useTranslation();

  // 1. Memoize data processing to prevent re-calculations on re-renders
  const { leftColItems, rightColItems } = useMemo(() => {
    const rawItems = t("faq_section.items", { returnObjects: true });
    const items = Array.isArray(rawItems) ? rawItems : [];
    const midPoint = Math.ceil(items.length / 2);

    return {
      leftColItems: items.slice(0, midPoint),
      rightColItems: items.slice(midPoint),
    };
  }, [t]);

  // Helper to render the complex inner content of an answer
  const renderAnswerContent = (item) => {
    if (item.answer_blocks?.length > 0) {
      return (
        <div className="flex flex-col gap-4">
          {item.answer_blocks.map((block, idx) => (
            <div key={idx} className="w-full">
              <p>
                {block.title && (
                  <span className="font-bold mr-1 text-[#1E2939]">
                    {block.title}
                  </span>
                )}
                {block.text}
              </p>
            </div>
          ))}
        </div>
      );
    }
    return <p>{item.answer || item.description}</p>;
  };

  return (
    <Container
      className={cn(
        "flex flex-col",
        "relative gap-8 items-center",
        themeGuide.sectionPaddingY,
      )}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="w-full gap-8 flex flex-col">
        {/* --- Header --- */}
        <div className="gap-2 flex flex-col items-center text-center">
          <Badge variant="toolkit" size="default">
            {t("faq_section.badge", "Frequently Asked Questions")}
          </Badge>
          <HighlightedHeading
            text={t("faq_section.title", "Everything You Need to Know")}
            className="2xl:text-[32px] 2xl:leading-10 text-[28px] leading-8 font-semibold mt-2 text-center"
          />
          <h3 className="font-normal text-sm md:text-base text-[#4D525C]">
            {t("Have questions? Our team is ready to help you 24/7")}
          </h3>
        </div>

        {/* --- Accordion Grid --- */}
        <Accordion className="flex flex-col lg:flex-row gap-5 lg:gap-5 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-5 flex-1">
            {leftColItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} variant="purple">
                <AccordionTrigger>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    {item.category_label && (
                      <span className="px-2 py-1 bg-[#EDE9FE] text-[#1A1A1A] text-xs font-semibold rounded-md md:mr-2 w-fit">
                        {item.category_label}
                      </span>
                    )}
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>{renderAnswerContent(item)}</AccordionContent>
              </AccordionItem>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-5 flex-1">
            {rightColItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} variant="purple">
                <AccordionTrigger>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    {item.category_label && (
                      <span className="px-2 py-1 bg-[#EDE9FE] text-[#1A1A1A] text-xs font-semibold rounded-md md:mr-2 w-fit">
                        {item.category_label}
                      </span>
                    )}
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>{renderAnswerContent(item)}</AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>
        {/* Read More - All FAQs Button */}
        <div className="text-center">
          <AppButton
            to="/frequently-asked-questions"
            variant="secondary"
            text={t("blogs_section.read_more_button")}
            withRightIcon={true}
            rightIcon={<CircleArrowRight className="size-5" />}
          />
        </div>
      </div>
    </Container>
  );
};

export default FAQSection;
