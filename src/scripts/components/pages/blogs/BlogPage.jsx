import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../../ui/SEO";
import BlogResponsiveFilterBar from "./BlogResponsiveFilterBar";
import BlogCard from "../../library/BlogCard";
import SmartNavLink from "../../ui/SmartNavLink";
import SubPageHero from "../../library/SubPageHero";
import SearchBar from "../../library/SearchBar";
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
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/blogs/hero/blogs_hero_desktop.webp"
          srcMobile="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/blogs/hero/blogs_hero_mobile.webp"
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
            <p className="flex items-center justify-center text-center mx-auto w-full font-['Inter'] font-normal text-[#63666D] opacity-90 text-[14px] leading-[18px] max-w-[376px] md:text-[16px] md:leading-[20px] md:max-w-[822px] md:mb-[2vw] mb-[6vw]">
              {pageData.title_section?.subtitle}
            </p>

            {/* --- UPDATED SEARCH BAR USAGE --- */}
            {/* The styling is now handled internally by SearchBar's default variant */}
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
              // Removed the img submitIcon to allow the new "Search" text button style to render
              submitLabel="Search"
              className="w-full md:w-[822px] mx-auto"
            />
          </div>

          {/* Filter Bar (Using New Component) */}
          <div className="w-full flex flex-col items-center gap-4">
            {/* Filter by Category Label */}
            <h3 className="font-['Inter'] font-bold text-[16px] leading-[20px] flex items-center text-center text-black mb-[1.5vw] md:mb-[0.8vw]">
              <span className="md:hidden">Filter by:</span>
              <span className="hidden md:inline">Select a Category</span>
            </h3>
            <BlogResponsiveFilterBar
              filters={categories}
              activeFilterId={activeCategoryId}
              onFilterChange={setActiveCategoryId}
            />
          </div>

          {/* Blogs Display */}
          <div className="w-full flex flex-col">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-[10vw] text-gray-400">
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
