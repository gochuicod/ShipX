import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../../ui/SEO";
import ResponsiveFilterBar from "../../library/ResponsiveFilterBar";
import BlogCard from "../../library/BlogCard";
import SmartNavLink from "../../ui/SmartNavLink";
import SubPageHero from "../../library/SubPageHero";
import SearchBar from "../../library/SearchBar";
import ParallaxSection from "../../ui/ParallaxSection";
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

      <div className="w-full bg-white font-sans flex flex-col items-center mb-20">
        {/* --- Hero Banner --- */}
        <SubPageHero
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/blogs/hero/blogs_hero_desktop.webp"
          srcMobile="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/blogs/hero/blogs_hero_mobile.webp"
          alt="Blog Banner"
        />
        <ParallaxSection>
          {/* --- Main Content --- */}
          <main
            className={`mx-auto relative ${themeGuide.paddingX} flex flex-col items-center md:px-8 w-full md:gap-y-8 gap-y-4 lg:-mt-6 -mt-10`}
          >
            {/* Header Block & Search */}
            <div className="w-full flex flex-col md:gap-y-4 gap-y-2 items-center text-center">
              <Badge variant="toolkit" size="default">
                {t("blogs_section.badge", "Blogs and Articles")}
              </Badge>

              <div className="w-full flex flex-col md:gap-y-4 gap-y-2 items-center text-center">
                <HighlightedHeading
                  text={`${pageData.title_section.title_prefix} ${pageData.title_section.title_suffix}`}
                  highlight={pageData.title_section.title_suffix}
                  className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
                  highlightClass="text-[#FF00E5]"
                />

                {/* Description */}
                <p className="flex items-center justify-center text-center mx-auto w-full font-['Inter'] font-normal text-[#63666D] opacity-90 text-sm leading-[1.125] max-w-[376px] md:text-base md:leading-5 md:max-w-[522px] lg:max-w-[822px] md:mb-0 mb-4">
                  {pageData.title_section?.subtitle}
                </p>
              </div>

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
                  pageData.placeholder ||
                  "Start typing to find blogs and articles..."
                }
                submitLabel="Search"
                className="w-full lg:w-[822px] lg:mx-auto md:w-xl md:mx-auto"
              />
            </div>

            {/* Filter Bar (Using New Component) */}
            <div className="w-full flex flex-col items-center gap-4 lg:py-5 md:py-4 py-0">
              {/* Filter by Category Label */}
              <h3 className="hidden md:inline lg:inline font-['Inter'] font-bold text-base leading-5 items-center text-center text-black gap-y-2 md:gap-y-4">
                <span className="md:hidden">
                  {pageData.filter_section?.title || "Filter by:"}
                </span>
                <span className="hidden md:inline">
                  {pageData.filter_section?.title || "Select a Category"}
                </span>
              </h3>
              <ResponsiveFilterBar
                filters={categories}
                activeFilterId={activeCategoryId}
                onFilterChange={setActiveCategoryId}
              />
            </div>

            {/* Blogs Display */}
            <div className="w-full flex flex-col">
              {filteredBlogs.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                  No articles found matching your criteria.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                  {paginatedBlogs.map((post) => (
                    <SmartNavLink
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="no-underline"
                    >
                      <BlogCard post={post} variant="fluid" />
                    </SmartNavLink>
                  ))}
                </div>
              )}

              {/* Load More */}
              {hasMoreItems && (
                <div className="text-center mt-8 md:mt-4">
                  <button
                    onClick={handleLoadMore}
                    className="group relative inline-flex items-center justify-center p-px rounded-full bg-linear-to-b from-[#FF00E5] to-[#4F378A] transition-transform active:scale-95"
                  >
                    <span className="block w-full h-full rounded-full bg-white text-[#1A1A1A] px-6 py-3 md:px-2 md:py-1 text-lg md:text-sm font-medium transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                      Load More Articles
                    </span>
                  </button>
                </div>
              )}
            </div>
          </main>
        </ParallaxSection>
      </div>
    </>
  );
};

export default BlogPage;
