import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ResponsiveFilterBar from "./ResponsiveFilterBar";
import AccordionItem from "./AccordionItem";
import FAQCTASection from "../ui/FAQCTASection";
import BlogSection from "../blogs/BlogsSection";

const FAQPage = () => {
  const { t } = useTranslation();

  const rawData = t("faq_page", { returnObjects: true });
  const pageData =
    typeof rawData === "object" && rawData !== null ? rawData : {};

  const {
    header_section = {},
    filter_section = {},
    accordion_section = {},
    cta_section = {},
  } = pageData;

  const [activeCategoryId, setActiveCategoryId] = useState("shipping_basics");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItemId, setOpenItemId] = useState("safely_ship_fragile");
  const [visibleCount, setVisibleCount] = useState(10);

  const rawItems = Array.isArray(accordion_section?.items)
    ? accordion_section.items
    : [];

  const getAnswerText = (answerBlocks) => {
    if (!Array.isArray(answerBlocks)) return "";
    return answerBlocks
      .map((block) => (block.title || "") + " " + (block.text || ""))
      .join(" ");
  };

  const filteredItems = rawItems.filter((item) => {
    const matchesCategory =
      activeCategoryId === "all" || item.category_id === activeCategoryId;
    const matchesSearch =
      (item.question || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      getAnswerText(item.answer_blocks)
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      (item.category_label || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setVisibleCount(10);
  }, [activeCategoryId, searchQuery]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMoreItems = visibleCount < filteredItems.length;

  if (Object.keys(pageData).length === 0) {
    return <div className="w-full min-h-screen bg-white" />;
  }

  return (
    <div className="w-full bg-white font-sans flex flex-col">
      {/* --- Banner Image (Responsive) --- */}
      <div className="w-full">
        {/* Desktop Image: Hidden on mobile, block on md+ */}
        <img
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx-faq-banner.webp"
          alt="ShipX FAQ Banner"
          className="hidden md:block w-full h-[18vw] object-cover"
        />

        {/* Mobile Image: Block on mobile, hidden on md+ */}
        <img
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx-faq-banner-mobile.webp"
          alt="ShipX FAQ Banner"
          className="block md:hidden w-full h-auto object-cover"
        />
      </div>

      {/* --- Main Content --- */}
      <main
        className="
          flex flex-col items-center w-full
          py-[10vw] px-[5vw]
          md:py-[3.1vw] md:px-[17vw] md:gap-y-[2vw] gap-y-[5vw]
        "
      >
        {/* Header Block */}
        <div className="w-full bg-white md:p-[2vw] p-[6vw] text-center">
          <span
            className="
              inline-block
              py-[2.1vw] pl-[2.7vw] pr-[3.5vw] rounded-[2.1vw] text-[2.5vw] mb-[4vw]
              md:py-[0.42vw] md:pl-[0.52vw] md:pr-[0.68vw] md:rounded-[0.42vw] md:text-[0.7vw] md:mb-[1vw]
              bg-[#F3F1FF] text-[#FF00E5] font-bold tracking-wide
            "
          >
            ● {header_section.badge_text}
          </span>
          <h1 className="md:text-[3vw] text-[7vw] font-bold text-[#1A1A1A] md:leading-[3.5vw] leading-[8vw] md:mb-[1vw] mb-[3vw]">
            {header_section.title_prefix}{" "}
            <span className="text-[#FF00E5]">
              {header_section.title_suffix}
            </span>
          </h1>
          <p className="text-[#0E0E0E]/70 md:text-[1.1vw] text-[3.5vw] md:leading-[1.6vw] leading-[5vw] md:max-w-[40vw] w-full mx-auto md:mb-[2vw] mb-[6vw]">
            {header_section.description}
          </p>

          {/* --- SEARCH BAR --- */}
          <div className="w-full md:w-[75%] mx-auto">
            <div
              className="
                flex flex-row items-center
                bg-white
                shadow-[0px_0px_20px_0px_#FF00E533]
                md:rounded-[1vw] rounded-[3vw]
                md:p-[0.7vw] p-[2.7vw]
                md:gap-[0.7vw] gap-[2.7vw]
              "
            >
              <input
                type="text"
                placeholder={header_section.search_placeholder}
                className="
                  grow
                  w-full
                  bg-transparent
                  focus:outline-none
                  text-[#1A1A1A]
                  placeholder-[#99A1AF]
                  italic
                  md:text-[1vw] text-[3.5vw]
                "
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  // Set to "all" categories when user types
                  if (e.target.value.trim()) {
                    setActiveCategoryId("all");
                  }
                }}
              />

              <button
                type="button"
                className="shrink-0 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/faq_send_icon.svg"
                  alt="Search Button"
                  className="md:w-[2.1vw] md:h-[2.1vw] w-[6vw] h-[6vw] object-contain"
                />
              </button>
            </div>
          </div>
        </div>

        {/* --- Filter Section --- */}
        <div className="w-full text-center md:mb-[1vw] mb-[4vw]">
          <h4 className="md:text-[0.9vw] text-[3.5vw] font-semibold md:mb-[1vw] mb-[3vw] text-[#1A1A1A]/80">
            {filter_section.title}
          </h4>

          <ResponsiveFilterBar
            filters={filter_section.categories || []}
            activeFilterId={activeCategoryId}
            onFilterChange={setActiveCategoryId}
          />
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col">
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openItemId === item.id}
                onClick={() =>
                  setOpenItemId(openItemId === item.id ? null : item.id)
                }
              />
            ))
          ) : (
            <div className="text-center md:py-[3vw] py-[10vw] text-[#1A1A1A]/50 md:text-[1vw] text-[3.5vw]">
              No results found.
            </div>
          )}
        </div>

        {/* Load More Button */}
        {hasMoreItems && (
          <div className="text-center mt-[5vw]">
            <button
              onClick={handleLoadMore}
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
                  block
                  w-full h-full
                  rounded-full
                  md:px-[1.56vw] px-[8vw] 
                  md:py-[0.36vw] py-[2.5vw] 
                  md:text-[0.9vw] text-[3.5vw] 
                  font-medium
                  bg-white 
                  text-[#1A1A1A]
                  transition-all duration-300 ease-in-out
                  group-hover:bg-transparent 
                  group-hover:text-white
                "
              >
                {accordion_section.load_more_button}
              </span>
            </button>
          </div>
        )}
      </main>

      <FAQCTASection ctaData={cta_section} />
      <BlogSection />
    </div>
  );
};

export default FAQPage;
