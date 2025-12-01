import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import FilterPill from "./FilterPill";
import AccordionItem from "./AccordionItem";
import faqBanner from "../../../assets/shipx-faq-banner.webp";

const FAQPage = () => {
  // 1. Initialize Translation
  const { t } = useTranslation();

  // 2. Data Retrieval with Safety Check
  const rawData = t("faq_page", { returnObjects: true });
  const pageData = typeof rawData === "object" && rawData !== null ? rawData : {};

  const {
    header_section = {},
    filter_section = {},
    accordion_section = {},
    cta_section = {},
  } = pageData;

  // 3. State Management
  const [activeCategoryId, setActiveCategoryId] = useState("shipping_basics");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItemId, setOpenItemId] = useState("safely_ship_fragile");
  const [visibleCount, setVisibleCount] = useState(10);

  // 4. Filtering Logic
  const rawItems = Array.isArray(accordion_section?.items)
    ? accordion_section.items
    : [];

  const filteredItems = rawItems.filter((item) => {
    const matchesCategory =
      activeCategoryId === "all" || item.category_id === activeCategoryId;
    const matchesSearch = (item.question || "")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 5. Pagination Logic
  useEffect(() => {
    setVisibleCount(10);
  }, [activeCategoryId, searchQuery]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMoreItems = visibleCount < filteredItems.length;

  // Guard Clause
  if (Object.keys(pageData).length === 0) {
    return <div className="w-full min-h-screen bg-white" />;
  }

  return (
    <div className="w-full bg-white font-sans flex flex-col">
      {/* --- Banner Image --- */}
      <div className="w-full">
        <img
          src={faqBanner}
          alt="ShipX FAQ Banner"
          className="w-full h-[18vw] object-cover"
        />
      </div>

      {/* --- Main Content (Search, Filters, Accordion) --- */}
      <main
        className="
          flex flex-col items-center w-full
          py-[10vw] px-[5vw]          
          md:py-[3.1vw] md:px-[17vw] md:gap-y-[2vw] gap-y-[5vw]
        "
      >
        {/* Header Block (Title & Search) */}
        <div className="w-full bg-white md:rounded-[1.5vw] rounded-[4vw] md:p-[2vw] p-[6vw] text-center shadow-[0_0.2vw_1vw_rgba(0,0,0,0.05)] border border-[#1A1A1A]/5">
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
            <span className="text-[#FF00E5]">{header_section.title_suffix}</span>
          </h1>
          <p className="text-[#1A1A1A]/70 md:text-[1.1vw] text-[3.5vw] md:leading-[1.6vw] leading-[5vw] md:max-w-[40vw] w-full mx-auto md:mb-[2vw] mb-[6vw]">
            {header_section.description}
          </p>

          {/* Search Bar */}
          <div className="relative md:max-w-[25vw] max-w-full mx-auto">
            <Search className="absolute left-[1vw] top-[50%] -translate-y-[50%] text-[#4F378A] md:w-[1.2vw] md:h-[1.2vw] w-[5vw] h-[5vw]" />
            <input
              type="text"
              placeholder={header_section.search_placeholder}
              className="w-full md:pl-[3vw] pl-[10vw] md:pr-[1vw] pr-[4vw] md:py-[0.8vw] py-[3vw] rounded-full border border-[#4F378A]/20 bg-[#F3F1FF]/50 focus:outline-none focus:ring-[0.1vw] focus:ring-[#4F378A]/50 transition-all md:text-[0.9vw] text-[3.5vw]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Section */}
        <div className="w-full text-center md:mb-[1vw] mb-[4vw]">
          <h4 className="md:text-[0.9vw] text-[3.5vw] font-semibold md:mb-[1vw] mb-[3vw] text-[#1A1A1A]/80">
            {filter_section.title}
          </h4>
          <div className="flex flex-wrap justify-center md:gap-[0.5vw] gap-[1.5vw]">
            {(filter_section.categories || []).map((cat) => (
              <FilterPill
                key={cat.id}
                label={cat.label}
                count={cat.count}
                isActive={activeCategoryId === cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
              />
            ))}
          </div>
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
          <div className="text-center md:mt-[2vw] mt-[5vw]">
            <button
              onClick={handleLoadMore}
              className="md:px-[2vw] px-[8vw] md:py-[0.6vw] py-[2.5vw] border border-[#4F378A]/30 text-[#4F378A] rounded-full md:text-[0.9vw] text-[3.5vw] font-medium hover:bg-[#F3F1FF] transition-colors"
            >
              {accordion_section.load_more_button}
            </button>
          </div>
        )}
      </main>

      {/* --- CTA Section --- */}
      <div
        className="
          flex flex-col
          md:w-[80vw] w-screen
          md:h-auto h-[80vw]
          bg-cover bg-center bg-no-repeat
          mx-auto
          md:mb-[4vw] mb-0
          text-white text-[0.8vw]
          font-normal
          md:rounded-[1vw] rounded-[0.00000001vw]
          overflow-hidden
          md:bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@ffab8ad2ad6bf54f2ed5c615722bff70ee96f7ef/src/assets/shipment_tracker_cta_image.webp')]
          bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@281b9212a310690d195ec2f7ac6057b96436d583/src/assets/shipment_tracker_cta_image_mobile.svg')]
        "
        style={{
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          className="
            flex flex-col
            md:gap-y-0 gap-y-[3vw]
            md:w-[40vw] w-screen
            md:ps-[8vw] ps-[10vw]
            md:pe-0 pe-[10vw]
            md:py-[5vw] py-[10vw]
          "
        >
          <span
            className="
              md:px-0 px-[5vw]
              md:text-[2vw] text-[7vw]
              md:text-start text-center
              md:leading-[3vw] leading-[8vw]
              font-semibold
            "
          >
            {cta_section.title}
          </span>
          <span
            className="
              font-normal
              opacity-95
              pb-[1vw]
              md:text-[0.9vw] text-[2.5vw]
              md:text-start text-center
              md:leading-[1.5vw] leading-[3vw]
              md:px-0 px-[3vw]
            "
          >
            {cta_section.subtitle}
          </span>
          <div
            className="
              flex flex-row
              md:gap-x-[1vw] gap-x-[3vw]
              md:text-[0.8vw] text-[2.6vw]
              md:justify-start justify-center
              md:items-center items-center
            "
          >
            <div className="flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]">
              <a href="/book-a-demo">
                <button
                  type="button"
                  className="
                    flex flex-row
                    items-center justify-center
                    gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw]
                    bg-white/15 text-white
                    border border-white/95
                    rounded-full
                    transition-all duration-300 focus:outline-none
                    cursor-pointer
                  "
                >
                  {cta_section.buttons?.book_demo}
                </button>
              </a>
            </div>
            <a href="/#contact-us">
              <button
                type="button"
                className="
                  flex flex-row
                  items-center justify-center
                  gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw]
                  bg-white/15 text-white
                  border border-white/95
                  rounded-full
                  transition-all duration-300 focus:outline-none
                  cursor-pointer
                "
              >
                {cta_section.buttons?.contact_us}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;