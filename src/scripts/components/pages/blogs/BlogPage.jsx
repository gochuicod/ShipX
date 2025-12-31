import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../../ui/SEO";
import BlogResponsiveFilterBar from "./BlogResponsiveFilterBar";
import BlogCard from "../../library/BlogCard";
import SmartNavLink from "../../ui/SmartNavLink";
import SubPageHero from "../../library/SubPageHero";
import { Badge } from "../../../../styles/badge";
import HighlightedHeading from "../../library/HighlightedHeading";
import { themeGuide } from "../../../../styles/themeGuide";

const BlogPage = () => {
  const { t } = useTranslation();

  // --- 1. Data Retrieval ---
  const blogs =
    t("service_headline_section.blogs", { returnObjects: true }) || [];

  const pageData = t("all_blog_posts_page", { returnObjects: true }) || {};

  // --- 2. State ---
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(7);

  // --- 3. Derived Data (Categories & Filtering) ---
  const categories = useMemo(() => {
    // Helper to get count locally within useMemo
    const getCount = (tagId) => {
      if (tagId === "all") return blogs.length;
      return blogs.filter((b) => (b.tags || []).includes(tagId)).length;
    };

    // Flatten all tags from all blogs
    const allTags = blogs.flatMap((b) => b.tags || []);
    const uniqueTags = [...new Set(allTags)].sort();

    return [
      { id: "all", label: "All Categories", count: getCount("all") },
      ...uniqueTags.map((tag) => ({
        id: tag,
        label: tag,
        count: getCount(tag),
      })),
    ];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    const sorted = [...blogs].reverse();
    return sorted.filter((post) => {
      const matchesTag =
        activeCategoryId === "all" ||
        (post.tags || []).includes(activeCategoryId);

      // If no search query, show all posts matching category
      if (!searchQuery.trim()) {
        return matchesTag;
      }

      // If search query exists, filter by both tag and search
      const matchesSearch =
        (post.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.content || "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [blogs, activeCategoryId, searchQuery]);

  // Pagination Logic
  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);
  const hasMoreItems = visibleCount < filteredBlogs.length;

  // Paginated blogs for grid display
  const paginatedBlogs = filteredBlogs.slice(0, visibleCount);

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
        <SubPageHero
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx-all-blogs-banner.webp"
          srcMobile="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx-all-blogs-banner-mobile.webp"
          alt="Blog Banner"
        />

        {/* --- Main Content --- */}
        <main
          className={`mx-auto relative ${themeGuide.paddingX} flex flex-col items-center w-full py-[8vw] md:py-[4vw] gap-y-[6vw] md:gap-y-[3vw]`}
        >
          {/* Header Block & Search */}
          <div className="w-full flex flex-col gap-2 items-center text-center">
            <Badge variant="toolkit" size="default">
              Blogs and Articles
            </Badge>

            <HighlightedHeading
              text="The Cross-Border Logistics Hub"
              highlight="Cross-Border"
              className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
            />

            {/* Description */}
            <p
              className="
                /* Layout & Alignment */
                flex items-center justify-center text-center
                mx-auto w-full

                /* Typography - Family & Weight */
                font-['Inter'] font-normal
                
                /* Color & Opacity */
                text-[#63666D] opacity-90

                /* Mobile Sizing (Based on Snippet 3) */
                text-[14px] leading-[18px]
                max-w-[376px] 

                /* Desktop Sizing (Based on Snippet 1) */
                md:text-[16px] md:leading-[20px]
                md:max-w-[822px]

                /* Spacing (Preserved from original) */
                md:mb-[2vw] mb-[6vw]
            "
            >
              {pageData.title_section?.subtitle}
            </p>

            {/* --- SEARCH BAR --- */}
            <div className="w-full md:w-[58%] mx-auto">
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
                  placeholder={
                    pageData.placeholder ||
                    "Start typing to find blogs and articles..."
                  }
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
                    // Reset to "all" categories when user types
                    if (e.target.value.trim() && activeCategoryId !== "all") {
                      setActiveCategoryId("all");
                    }
                  }}
                />

                {/* Clear Search Button */}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="shrink-0 flex items-center justify-center cursor-pointer hover:opacity-60 transition-opacity text-[#99A1AF]"
                    title="Clear search"
                  >
                    <svg
                      className="md:w-[2.1vw] md:h-[2.1vw] w-[6vw] h-[6vw]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}

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

          {/* Filter Bar (Using New Component) */}
          <div className="w-[75%] md:w-[60%] md:mb-[0.5vw] mb-[2vw] mx-auto md:mx-0">
            {/* Filter by Category Label */}
            <h3 className="md:text-[1.1vw] text-[3.5vw] font-semibold text-[#1A1A1A] mb-[1.5vw] md:mb-[0.8vw] text-center">
              <span className="md:hidden">Filter by:</span>
              <span className="hidden md:inline">Filter by Category</span>
            </h3>
            <BlogResponsiveFilterBar
              filters={categories}
              activeFilterId={activeCategoryId}
              onFilterChange={setActiveCategoryId}
            />
          </div>

          {/* Blogs Display */}
          <div className="w-full flex flex-col gap-8">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-[10vw] text-gray-400">
                No articles found matching your criteria.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
                {paginatedBlogs.map((post) => (
                  <SmartNavLink
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="no-underline"
                  >
                    <BlogCard post={post} />
                  </SmartNavLink>
                ))}
              </div>
            )}

            {/* Load More */}
            {hasMoreItems && (
              <div className="text-center mt-[4vw] md:mt-[2vw]">
                <button
                  onClick={handleLoadMore}
                  className="group relative inline-flex items-center justify-center p-px rounded-full bg-linear-to-b from-[#FF00E5] to-[#4F378A] transition-transform active:scale-95"
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

export default BlogPage;
