import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

// --- STATIC DATA ---
const FAQ_DATA = {
  header_section: {
    badge_text: "Frequently Asked Questions",
    title_prefix: "Your Cargo Questions,",
    title_suffix: "Answered",
    description:
      "From takeoff to final delivery, we believe in total transparency. Find details below on how we handle, track, and protect your shipment every step of the way.",
    search_placeholder: "Start typing to find answers...",
  },
  filter_section: {
    title: "Filter by Category",
    categories: [
      { id: "all", label: "All Categories", count: null },
      { id: "shipping_basics", label: "Shipping Basics & Packaging", count: 7 },
      { id: "customs", label: "Customs, Duties & Documentation", count: 5 },
      { id: "ecommerce", label: "E-commerce Solutions", count: 2 },
      { id: "carriers", label: "Carrier Comparisons", count: 2 },
      { id: "insurance", label: "Insurance & Claims", count: 4 },
    ],
  },
  accordion_section: {
    load_more_button: "Load More",
    items: [
      {
        id: "fragile_items",
        category_id: "shipping_basics",
        category_label: "Shipping Basics & Packaging",
        question: "How do I safely ship fragile items internationally?",
        answer_blocks: [
          {
            type: "intro",
            text: "The physical integrity of a shipment is the foundation of successful e-commerce logistics. When goods travel from Southeast Asia to destinations like the U.S. or Europe, they pass through multiple touchpoints.",
          },
          {
            type: "point",
            title: "Operational Protocol:",
            text: "Amilo and ShipX advocate for a 'defense-in-depth' approach to packaging.",
          },
          {
            type: "point",
            title: "Box Selection:",
            text: "Utilizing a standard single-wall cardboard box is often insufficient for international shipping. We recommend double-walled corrugated boxes (minimum 32 ECT rating).",
          },
          {
            type: "point",
            title: "Internal Cushioning:",
            text: "Research indicates that individually wrapping fragile items with bubble wrap or heavy-grade packing paper can reduce breakage risk by up to 80%.",
          },
          {
            type: "point",
            title: "Disassembly:",
            text: "For larger items like furniture or multi-part electronics, disassembly is critical. Securely disassembling furniture reduces the surface area exposed.",
          },
          {
            type: "point",
            title: "Labeling:",
            text: "While automated sorters do not read 'Fragile' stickers, human handlers do. Studies suggest that clearly labeling boxes with 'Fragile' or 'Handle with Care' indicators reduces manual mishandling.",
          },
        ],
      },
      {
        id: "restricted_items",
        category_id: "shipping_basics",
        category_label: "Shipping Basics & Packaging",
        question: "What items are restricted or prohibited from shipping?",
        answer_blocks: [
          {
            type: "intro",
            text: "Restricted items generally include flammables, perishables, and specific lithium batteries. Please consult our detailed prohibited items list in the portal before creating a shipment.",
          },
        ],
      },
      {
        id: "shipping_cost",
        category_id: "shipping_basics",
        category_label: "Shipping Basics & Packaging",
        question: "Why is my shipping cost higher than the actual weight?",
        answer_blocks: [
          {
            type: "intro",
            text: "Carriers charge based on the greater of actual weight or volumetric weight. If a package is light but large, you will be charged for the space it occupies.",
          },
        ],
      },
      {
        id: "customs_duties",
        category_id: "customs",
        category_label: "Customs & Duties",
        question: "Who is responsible for paying customs duties?",
        answer_blocks: [
          {
            type: "intro",
            text: "By default, duties are DDU (Delivered Duty Unpaid), meaning the receiver pays. However, you can select DDP (Delivered Duty Paid) to charge the sender's account.",
          },
        ],
      },
    ],
  },
  cta_section: {
    title: "Experience the Future of Shipping",
    subtitle:
      "Don't just read about our latest tools — let us show you how they work and what they can do for your business.",
    buttons: {
      book_demo: "Book a Demo",
      contact_us: "Contact Us",
    },
  },
};

// --- SUB-COMPONENTS ---

const FilterPill = ({ label, count, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      md:px-[1vw] px-[4vw] md:py-[0.5vw] py-[2vw] 
      md:rounded-[0.42vw] rounded-[2.1vw] 
      md:text-[0.9vw] text-[3.5vw] font-medium 
      transition-colors whitespace-nowrap 
      md:mb-[0.5vw] mb-[2vw] border
      ${
        isActive
          ? "bg-[#4F378A] text-white border-[#4F378A] shadow-[0_0.2vw_0.5vw_rgba(79,55,138,0.3)]"
          : "bg-[#F3F1FF] text-[#1A1A1A]/70 border-transparent hover:bg-[#EBE5FF]"
      }
    `}
  >
    {label}{" "}
    {count !== null && (
      <span className="opacity-75 text-[0.8em] ml-[0.2em]">({count})</span>
    )}
  </button>
);

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`
        md:mb-[1vw] mb-[4vw] md:rounded-[0.8vw] rounded-[3vw] 
        transition-all duration-300 overflow-hidden border
        ${
          isOpen
            ? "bg-white shadow-[0_0.5vw_1.5vw_rgba(79,55,138,0.08)] border-[#4F378A]/20"
            : "bg-[#FAFAFA] hover:bg-white border-transparent"
        }
      `}
    >
      {/* Header / Trigger */}
      <div
        onClick={onClick}
        className="flex items-center justify-between md:p-[1.5vw] p-[5vw] cursor-pointer"
      >
        <h3
          className={`font-bold md:text-[1.1vw] text-[4vw] pr-[2vw] ${
            isOpen ? "text-[#4F378A]" : "text-[#1A1A1A]"
          }`}
        >
          {item.question}
        </h3>

        <div className="flex items-center md:gap-[0.8vw] gap-[3vw] shrink-0">
          <span className="hidden sm:block md:px-[0.8vw] px-[3vw] md:py-[0.2vw] py-[1vw] bg-[#F3F1FF] text-[#4F378A] md:text-[0.7vw] text-[2.5vw] font-semibold md:rounded-[0.42vw] rounded-[4vw]">
            {item.category_label}
          </span>
          <div
            className={`md:p-[0.5vw] p-[2vw] rounded-full transition-colors ${
              isOpen
                ? "bg-[#4F378A] text-white"
                : "bg-[#E5E5E5] text-[#1A1A1A]/60"
            }`}
          >
            {isOpen ? (
              <ChevronUp className="md:w-[1.2vw] md:h-[1.2vw] w-[5vw] h-[5vw]" />
            ) : (
              <ChevronDown className="md:w-[1.2vw] md:h-[1.2vw] w-[5vw] h-[5vw]" />
            )}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div className="md:px-[1.5vw] px-[5vw] md:pb-[2vw] pb-[6vw] text-[#1A1A1A]/80 md:text-[0.95vw] text-[3.5vw] leading-relaxed border-t border-[#1A1A1A]/5 mt-[0.5vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[2vw] md:gap-y-[1.5vw] gap-y-[4vw] md:pt-[1.5vw] pt-[4vw]">
            {(item.answer_blocks || []).map((block, index) => {
              const isFullWidth = block.type === "intro";
              return (
                <div
                  key={index}
                  className={isFullWidth ? "col-span-full" : "col-span-1"}
                >
                  {block.title && (
                    <strong className="text-[#1A1A1A] block mb-[0.2em] md:text-[1vw] text-[3.8vw]">
                      {block.title}
                    </strong>
                  )}
                  <p>{block.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

const FAQPage = () => {
  // Local State
  const [activeCategoryId, setActiveCategoryId] = useState("shipping_basics");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItemId, setOpenItemId] = useState("fragile_items"); // Default open item

  const { header_section, filter_section, accordion_section, cta_section } =
    FAQ_DATA;

  const filteredItems = accordion_section.items.filter((item) => {
    const matchesCategory =
      activeCategoryId === "all" || item.category_id === activeCategoryId;
    const matchesSearch = (item.question || "")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main
      className="
        w-full bg-white font-sans flex flex-col items-center
        py-[10vw] px-[5vw]          
        md:py-[3.1vw] md:px-[17vw] md:gap-y-[2vw] gap-y-[5vw]
      "
    >
      {/* Breadcrumbs */}
      <nav
        aria-label="breadcrumb"
        className="w-full text-[#1A1A1A] md:text-[0.8vw] text-[3vw] text-left"
      >
        <ol className="flex flex-wrap items-center gap-x-[0.5vw]">
          <li>
            <a href="/" className="hover:text-[#1A1A1A]/70 transition-colors">
              Home
            </a>
          </li>
          <li>/</li>
          <li className="text-[#1A1A1A] font-semibold">
            {header_section.badge_text}
          </li>
        </ol>
      </nav>

      {/* Header Block */}
      <div className="w-full bg-white md:rounded-[1.5vw] rounded-[4vw] md:p-[2vw] p-[6vw] text-center shadow-[0_0.2vw_1vw_rgba(0,0,0,0.05)] border border-[#1A1A1A]/5">
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
            md:mb-[1vw]

            bg-[#F3F1FF] text-[#FF00E5]
            font-bold tracking-wide
          "
        >
          ● {header_section.badge_text}
        </span>
        <h1 className="md:text-[3vw] text-[7vw] font-bold text-[#1A1A1A] md:leading-[3.5vw] leading-[8vw] md:mb-[1vw] mb-[3vw]">
          {header_section.title_prefix}{" "}
          <span className="text-[#FF00E5]">{header_section.title_suffix}</span>
        </h1>
        <p className="text-[#1A1A1A]/70 md:text-[1.1vw] text-[3.5vw] md:leading-[1.6vw] leading-[5vw] max-w-[40vw] mx-auto md:mb-[2vw] mb-[6vw]">
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
          {filter_section.categories.map((cat) => (
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
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
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

      {/* Load More */}
      <div className="text-center md:mt-[2vw] mt-[5vw]">
        <button className="md:px-[2vw] px-[8vw] md:py-[0.6vw] py-[2.5vw] border border-[#4F378A]/30 text-[#4F378A] rounded-full md:text-[0.9vw] text-[3.5vw] font-medium hover:bg-[#F3F1FF] transition-colors">
          {accordion_section.load_more_button}
        </button>
      </div>

      {/* CTA Section */}
      <section className="w-full relative overflow-hidden bg-[#4F378A] text-white md:rounded-[2vw] rounded-[4vw] md:mt-[3vw] mt-[8vw] md:py-[4vw] py-[10vw] px-[4vw]">
        <div className="absolute top-[-50%] right-[-10%] w-[40%] h-[150%] bg-[#FF00E5]/20 blur-[5vw] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="md:text-[2.5vw] text-[6vw] font-bold md:mb-[1vw] mb-[3vw]">
            {cta_section.title}
          </h2>
          <p className="md:text-[1.1vw] text-[3.5vw] text-white/80 max-w-[50vw] mx-auto md:mb-[2.5vw] mb-[6vw]">
            {cta_section.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-[1vw]">
            <button className="bg-white/20 backdrop-blur-sm border border-white/40 md:px-[2vw] px-[8vw] md:py-[0.7vw] py-[2.5vw] rounded-full hover:bg-white/30 transition-all md:text-[0.9vw] text-[3.5vw] font-semibold">
              {cta_section.buttons.book_demo}
            </button>
            <button className="bg-transparent border border-white/40 md:px-[2vw] px-[8vw] md:py-[0.7vw] py-[2.5vw] rounded-full hover:bg-white/10 transition-all md:text-[0.9vw] text-[3.5vw] font-semibold">
              {cta_section.buttons.contact_us}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
