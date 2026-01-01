import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ResponsiveFilterBar from "../../library/ResponsiveFilterBar";
import SubPageHero from "../../library/SubPageHero";
import SearchBar from "../../library/SearchBar";
import AppButton from "../../library/AppButton";
import { Badge } from "../../../../styles/badge";
import HighlightedHeading from "../../library/HighlightedHeading";
import { themeGuide } from "../../../../styles/themeGuide";
import { CircleArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../library/Accordion";

const FAQPage = () => {
  const { t } = useTranslation();

  // --- 1. Data Retrieval ---
  const rawData = t("faq_page", { returnObjects: true });
  const pageData =
    typeof rawData === "object" && rawData !== null ? rawData : {};

  const {
    header_section = {},
    filter_section = {},
    accordion_section = {},
    cta_section = {},
  } = pageData;

  // --- 2. State ---
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  // --- 3. Helper Functions & Derived Data ---
  const rawItems = Array.isArray(accordion_section?.items)
    ? accordion_section.items
    : [];

  const getAnswerText = (answerBlocks) => {
    if (!Array.isArray(answerBlocks)) return "";
    return answerBlocks
      .map((block) => (block.title || "") + " " + (block.text || ""))
      .join(" ");
  };

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

  const categories = useMemo(() => {
    const getCount = (categoryId) => {
      if (categoryId === "all") return rawItems.length;
      return rawItems.filter((item) => item.category_id === categoryId).length;
    };

    const uniqueCategories = [
      ...new Set(rawItems.map((item) => item.category_id)),
    ].filter(Boolean);

    return [
      { id: "all", label: "All Categories", count: getCount("all") },
      ...(filter_section.categories || []),
    ].filter(
      (cat, idx, arr) =>
        idx === 0 || arr.findIndex((c) => c.id === cat.id) === idx,
    );
  }, [rawItems, filter_section.categories]);

  const filteredItems = useMemo(() => {
    return rawItems.filter((item) => {
      const matchesCategory =
        activeCategoryId === "all" || item.category_id === activeCategoryId;

      if (!searchQuery.trim()) {
        return matchesCategory;
      }

      const matchesSearch =
        (item.question || "")
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        getAnswerText(item.answer_blocks)
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        (item.category_label || "")
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [rawItems, activeCategoryId, searchQuery]);

  // Grid layout helper - split filtered items into sections
  const { rowItems, gridLeftColItems, gridRightColItems } = useMemo(() => {
    const paginatedFiltered = filteredItems.slice(0, visibleCount);

    // First 4 items for the row
    const row = paginatedFiltered.slice(0, 4);

    // Remaining items split into 2 columns (3 per column)
    const remaining = paginatedFiltered.slice(4);
    const gridMidPoint = Math.ceil(remaining.length / 2);

    return {
      rowItems: row,
      gridLeftColItems: remaining.slice(0, gridMidPoint),
      gridRightColItems: remaining.slice(gridMidPoint),
    };
  }, [filteredItems, visibleCount]);

  // Pagination Logic
  const handleLoadMore = () => setVisibleCount((prev) => prev + 10);
  const hasMoreItems = visibleCount < filteredItems.length;

  // Paginated items for display
  const paginatedItems = filteredItems.slice(0, visibleCount);

  if (Object.keys(pageData).length === 0) {
    return <div className="w-full min-h-screen bg-white" />;
  }

  return (
    <>
      <div className="w-full bg-white font-sans flex flex-col items-center mb-20">
        {/* --- Hero Banner --- */}
        <SubPageHero
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/faq_hero_desktop.webp"
          srcMobile="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/faq_hero_mobile.webp"
          alt="ShipX FAQ Banner"
        />

        {/* --- Main Content --- */}
        <main
          className={`mx-auto relative ${themeGuide.paddingX} flex flex-col items-center w-full py-16 gap-y-4`}
        >
          {/* Header Block & Search */}
          <div className="w-full flex flex-col gap-2 items-center text-center">
            <Badge variant="toolkit" size="default">
              {header_section.badge_text || "Frequently Asked Questions"}
            </Badge>

            <HighlightedHeading
              text={header_section.title_prefix || "Frequently Asked"}
              highlight={header_section.title_suffix || "Questions"}
              className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
            />

            {/* Description */}
            <p className="flex items-center justify-center text-center mx-auto w-full font-['Inter'] font-normal text-[#63666D] opacity-90 text-[14px] leading-[18px] max-w-[376px] md:text-[16px] md:leading-[20px] md:max-w-[822px] md:mb-[2vw] mb-[6vw]">
              {header_section.description}
            </p>

            {/* --- SEARCH BAR --- */}
            <SearchBar
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.trim() && activeCategoryId !== "all") {
                  setActiveCategoryId("all");
                }
              }}
              onClear={() => setSearchQuery("")}
              placeholder={
                header_section.search_placeholder ||
                "Start typing to find answers..."
              }
              submitLabel="Search"
              className="w-full md:w-[822px] mx-auto"
            />
          </div>

          {/* Filter Bar */}
          <div className="w-full flex flex-col items-center gap-4">
            {/* Filter by Category Label */}
            <h3 className="font-['Inter'] font-bold text-[16px] leading-[20px] flex items-center text-center text-black mb-[1.5vw] md:mb-[0.8vw]">
              <span className="md:hidden">
                {filter_section.title || "Filter by:"}
              </span>
              <span className="hidden md:inline">
                {filter_section.title || "Select a Category"}
              </span>
            </h3>
            <ResponsiveFilterBar
              filters={categories}
              activeFilterId={activeCategoryId}
              onFilterChange={setActiveCategoryId}
            />
          </div>

          {/* Accordion List */}
          <div className="w-full flex flex-col gap-4">
            {filteredItems.length === 0 ? (
              <div className="text-center py-[10vw] text-gray-400">
                No results found.
              </div>
            ) : (
              <>
                {/* Accordion Column - 4 Items (Horizontal Display) */}
                {rowItems.length > 0 && (
                  <Accordion
                    className="flex flex-col md:gap-5 gap-4 items-start w-full"
                    defaultOpen={rowItems[0]?.id}
                  >
                    {rowItems.map((item) => (
                      <AccordionItem
                        key={item.id}
                        value={item.id}
                        variant="purple"
                      >
                        <AccordionTrigger>
                          <span className="text-base md:text-lg">
                            {item.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          {renderAnswerContent(item)}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}

                {/* Accordion Grid - 3 Items per Column */}
                {(gridLeftColItems.length > 0 ||
                  gridRightColItems.length > 0) && (
                  <Accordion
                    className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-4 items-start w-full"
                    defaultOpen={gridLeftColItems[0]?.id}
                  >
                    {/* Left Column */}
                    <div className="flex flex-col gap-2">
                      {gridLeftColItems.map((item) => (
                        <AccordionItem
                          key={item.id}
                          value={item.id}
                          variant="purple"
                        >
                          <AccordionTrigger>
                            <span className="text-base md:text-lg">
                              {item.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            {renderAnswerContent(item)}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-2">
                      {gridRightColItems.map((item) => (
                        <AccordionItem
                          key={item.id}
                          value={item.id}
                          variant="purple"
                        >
                          <AccordionTrigger>
                            <span className="text-base md:text-lg">
                              {item.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            {renderAnswerContent(item)}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </div>
                  </Accordion>
                )}

                {/* Load More Button */}
                {hasMoreItems && (
                  <div className="flex justify-center mt-4">
                    <AppButton
                      onClick={handleLoadMore}
                      variant="secondary"
                      text={accordion_section.load_more_button || "Load More"}
                      withRightIcon={true}
                      rightIcon={<CircleArrowRight className="size-5" />}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default FAQPage;
