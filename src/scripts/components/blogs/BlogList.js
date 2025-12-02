import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../ui/SEO";

// Sub-components
import BlogFilterPill from "./BlogFilterPill";
import FeaturedBlog from "./FeaturedBlog";
import BlogsGrid from "./BlogsGrid"; // Import the new component

const BlogList = () => {
  const { t } = useTranslation();

  // --- 1. Data Retrieval ---
  const blogs =
    t("service_headline_section.blogs", { returnObjects: true }) || [];

  // --- 2. State ---
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(7);

  // --- 3. Derived Data (Categories & Filtering) ---
  const categories = useMemo(() => {
    const allCats = blogs.map((b) => b.category || "Uncategorized");
    const uniqueCats = [...new Set(allCats)];
    return [
      { id: "all", label: "All Categories" },
      ...uniqueCats.map((cat) => ({ id: cat, label: cat })),
    ];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    const sorted = [...blogs].reverse();
    return sorted.filter((post) => {
      const matchesCategory =
        activeCategoryId === "all" || post.category === activeCategoryId;
      const matchesSearch =
        (post.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.content || "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [blogs, activeCategoryId, searchQuery]);

  // Pagination Logic
  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);
  const hasMoreItems = visibleCount < filteredBlogs.length;

  // Split Data for Layout
  const featuredPost = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const gridPosts =
    filteredBlogs.length > 1 ? filteredBlogs.slice(1, visibleCount) : [];

  const getCategoryCount = (catId) => {
    if (catId === "all") return blogs.length;
    return blogs.filter((b) => b.category === catId).length;
  };

  return (
    <>
      <SEO
        title={t("seo.blog_page.title")}
        description={t("seo.blog_page.description")}
        canonical={t("seo.blog_page.canonical")}
        ogImage={t("seo.blog_page.ogImage")}
      />

      <div className="w-full bg-white font-sans flex flex-col items-center">
        {/* --- Hero Banner --- */}
        <div className="w-full">
          <div className="w-full h-[18vw] hidden md:block bg-gradient-to-r from-[#4F378A] to-[#2a1b52] relative overflow-hidden">
            <img
              src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx-faq-banner.webp"
              alt="Blog Banner"
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
          </div>
          <div className="w-full h-[30vw] md:hidden bg-gradient-to-r from-[#4F378A] to-[#2a1b52]" />
        </div>

        {/* --- Main Content --- */}
        <main className="flex flex-col items-center w-full max-w-[100vw] px-[5vw] py-[8vw] md:px-[8vw] md:py-[4vw] gap-y-[6vw] md:gap-y-[3vw]">
          {/* Header & Search */}
          <div className="text-center w-full flex flex-col items-center">
            <span className="inline-block py-[2vw] px-[4vw] md:py-[0.5vw] md:px-[1vw] rounded-full bg-[#F3F1FF] text-[#FF00E5] text-[3vw] md:text-[0.8vw] font-bold mb-[3vw] md:mb-[1vw]">
              ● Blogs and Articles
            </span>
            <h1 className="text-[7vw] md:text-[2.5vw] font-bold leading-tight mb-[2vw] text-[#1A1A1A]">
              The Cross-Border{" "}
              <span className="text-[#FF00E5]">Logistics Hub</span>
            </h1>
            <p className="text-[#1A1A1A]/70 text-[3.5vw] md:text-[1.1vw] max-w-[90%] md:max-w-[40%] mb-[6vw] md:mb-[2.5vw]">
              Expert insights, strategic guides, and the latest trends to help
              ASEAN sellers navigate global trade.
            </p>

            {/* Search Input */}
            <div className="w-full md:w-[60%] relative">
              <div className="flex flex-row items-center bg-white shadow-[0px_0px_20px_0px_#FF00E533] rounded-[2vw] md:rounded-[1vw] p-[2vw] md:p-[0.7vw] gap-[2vw] md:gap-[0.7vw]">
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/faq_search_icon.svg"
                  alt="Search"
                  className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw] object-contain opacity-50"
                />
                <input
                  type="text"
                  placeholder="Start typing to find blogs and articles..."
                  className="grow w-full bg-transparent focus:outline-none text-[#1A1A1A] placeholder-[#99A1AF] italic text-[3.5vw] md:text-[1vw]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="w-full overflow-x-auto no-scrollbar py-2">
            <div className="flex flex-row justify-start md:justify-center gap-[2vw] md:gap-[0.8vw] min-w-max px-2">
              {categories.map((cat) => (
                <BlogFilterPill
                  key={cat.id}
                  label={cat.label}
                  count={getCategoryCount(cat.id)}
                  isActive={activeCategoryId === cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                />
              ))}
            </div>
          </div>

          {/* Blogs Display */}
          <div className="w-full flex flex-col gap-[6vw] md:gap-[3vw] mt-[2vw]">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-[10vw] text-gray-400">
                No articles found matching your criteria.
              </div>
            ) : (
              <>
                {/* Featured Blog Component */}
                <FeaturedBlog post={featuredPost} />

                {/* Grid Component */}
                <BlogsGrid posts={gridPosts} />
              </>
            )}

            {/* Load More */}
            {hasMoreItems && (
              <div className="text-center mt-[4vw] md:mt-[2vw]">
                <button
                  onClick={handleLoadMore}
                  className="group relative inline-flex items-center justify-center p-px rounded-full bg-gradient-to-b from-[#FF00E5] to-[#4F378A] transition-transform active:scale-95"
                >
                  <span className="block w-full h-full rounded-full bg-white text-[#1A1A1A] px-[8vw] py-[2.5vw] md:px-[2vw] md:py-[0.5vw] text-[3.5vw] md:text-[0.9vw] font-medium transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                    Load More Articles
                  </span>
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default BlogList;
