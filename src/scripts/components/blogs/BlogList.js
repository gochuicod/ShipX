import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../ui/SEO";
import BlogResponsiveFilterBar from "./BlogResponsiveFilterBar";
import FeaturedBlog from "./FeaturedBlog";
import BlogsGrid from "./BlogsGrid";

const BlogList = () => {
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
      const matchesSearch =
        (post.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.content || "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [blogs, activeCategoryId, searchQuery]);

  // Pagination Logic
  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);
  const hasMoreItems = visibleCount < filteredBlogs.length;

  // Split Data for Layout
  const featuredPost = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const gridPosts =
    filteredBlogs.length > 1 ? filteredBlogs.slice(1, visibleCount) : [];

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
          {/* Desktop Image */}
          <div className="w-full h-[18vw] hidden md:block relative overflow-hidden">
            <img
              src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx-all-blogs-banner.webp"
              alt="Blog Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile Image */}
          <div className="w-full h-[50vw] md:hidden relative overflow-hidden">
            <img
              src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipx-all-blogs-banner-mobile.webp"
              alt="Blog Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* --- Main Content --- */}
        <main className="flex flex-col items-center w-full max-w-[100vw] px-[5vw] py-[8vw] md:px-[8vw] md:py-[4vw] gap-y-[6vw] md:gap-y-[3vw]">
          {/* Header Block & Search */}
          <div className="w-full bg-white md:p-[2vw] p-[2vw] text-center">
            {/* Badge */}
            <span
              className="
                inline-block
                py-[2.1vw] pl-[2.7vw] pr-[3.5vw] rounded-[2.1vw] text-[2.5vw] mb-[4vw]
                md:py-[0.42vw] md:pl-[0.52vw] md:pr-[0.68vw] md:rounded-[0.42vw] md:text-[0.7vw] md:mb-[1vw]
                bg-[#F3F1FF] text-[#FF00E5] font-bold tracking-wide
              "
            >
              ● {pageData.badge_title || "Blogs and Articles"}
            </span>

            {/* Title */}
            <h1 className="md:text-[3vw] text-[7vw] font-bold text-[#1A1A1A] md:leading-[3.5vw] leading-[8vw] md:mb-[1vw] mb-[3vw]">
              {pageData.title_section?.title_prefix}{" "}
              <span className="text-[#FF00E5]">
                {pageData.title_section?.title_suffix}
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#0E0E0E]/70 md:text-[1.1vw] text-[3.5vw] md:leading-[1.6vw] leading-[5vw] md:max-w-[40vw] w-full mx-auto md:mb-[2vw] mb-[6vw]">
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
                  onChange={(e) => setSearchQuery(e.target.value)}
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
          <div className="w-full flex flex-col gap-[6vw] md:gap-[3vw]">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-[10vw] text-gray-400">
                No articles found matching your criteria.
              </div>
            ) : (
              <>
                {/* Featured Blog Component - Only show when NO search query */}
                {!searchQuery && <FeaturedBlog post={featuredPost} />}

                {/* Grid Component - Show all filtered posts when searching, else skip first */}
                <BlogsGrid posts={searchQuery ? filteredBlogs : gridPosts} />
              </>
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

export default BlogList;
