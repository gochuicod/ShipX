import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../../ui/SEO";
import ResponsiveFilterBar from "../../library/ResponsiveFilterBar";
import AccordionItem from "./AccordionItem";
import FAQCTASection from "../../ui/FAQCTASection";
import BlogSection from "../blogs/BlogsSectionReusable";
import SubPageHero from "../../library/SubPageHero";
import SearchBar from "../../library/SearchBar";
import { Badge } from "../../../../styles/badge";
import HighlightedHeading from "../../library/HighlightedHeading";
import { themeGuide } from "../../../../styles/themeGuide";

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
  const [openItemId, setOpenItemId] = useState(null);
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
      <SEO
        title={t("seo.faq_page.title")}
        description={t("seo.faq_page.description")}
        canonical={t("seo.faq_page.canonical")}
        ogImage={t("seo.faq_page.ogImage")}
      />

      <div className="w-full bg-white font-sans flex flex-col items-center mb-20">
        {/* --- Hero Banner --- */}
        <SubPageHero
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/faq_hero_desktop.webp"
          srcMobile="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/faq_hero_mobile.webp"
          alt="ShipX FAQ Banner"
        />

        {/* --- Main Content --- */}
        <main
          className={`mx-auto relative ${themeGuide.paddingX} flex flex-col items-center w-full py-[8vw] md:py-[4vw] gap-y-[6vw] md:gap-y-[3vw]`}
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
          <div className="w-full flex flex-col">
            {filteredItems.length === 0 ? (
              <div className="text-center py-[10vw] text-gray-400">
                No results found.
              </div>
            ) : (
              paginatedItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItemId === item.id}
                  onClick={() =>
                    setOpenItemId(openItemId === item.id ? null : item.id)
                  }
                />
              ))
            )}

            {/* Load More Button */}
            {hasMoreItems && (
              <div className="text-center mt-[4vw] md:mt-[2vw]">
                <button
                  onClick={handleLoadMore}
                  className="group relative inline-flex items-center justify-center p-px rounded-full bg-linear-to-b from-[#FF00E5] to-[#4F378A] transition-transform active:scale-95"
                >
                  <span className="block w-full h-full rounded-full bg-white text-[#1A1A1A] px-[8vw] py-[2.5vw] md:px-[2vw] md:py-[0.5vw] text-[3.5vw] md:text-[0.9vw] font-medium transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                    {accordion_section.load_more_button || "Load More"}
                  </span>
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      <FAQCTASection ctaData={cta_section} />
      <BlogSection />
    </>
  );
};

export default FAQPage;
