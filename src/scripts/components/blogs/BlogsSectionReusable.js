import { useTranslation } from "react-i18next";
import { Calendar, ArrowRight } from "lucide-react";
import SmartNavLink from "../ui/SmartNavLink";
import SEO from "../ui/SEO";
import Badge from "../shipment_tracker/Badge";

const BlogSection = () => {
  const { t } = useTranslation();

  const blogs =
    t("service_headline_section.blogs", { returnObjects: true }) || [];

  const isRecent = (dateString) => {
    try {
      const postDate = new Date(dateString);
      const diffTime = Math.abs(new Date() - postDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    } catch (e) {
      return false;
    }
  };

  // Helper to strip HTML and limit characters
  const getTruncatedContent = (content, limit = 100) => {
    if (!content) return "";
    const plainText = content.replace(/<[^>]*>?/gm, ""); // Strip HTML tags
    if (plainText.length <= limit) return plainText;
    return plainText.substring(0, limit) + "...";
  };

  return (
    <>
      <SEO
        title={t("seo.blog_page.title")}
        description={t("seo.blog_page.description")}
        canonical={t("seo.blog_page.canonical")}
        ogImage={t("seo.blog_page.ogImage")}
      />

      <section
        className="py-12 bg-none"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <div className="md:max-w-[80vw] max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid Layout */}
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {blogs
                .slice()
                .reverse()
                .slice(0, 3)
                .map((post) => {
                  const isNew = isRecent(post.date);
                  const tags = post.tags || ["E-commerce", "Logistics"];

                  return (
                    <SmartNavLink
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="group flex flex-row md:flex-col bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-[0px_4px_25px_0px_#FF00E54D] transition-shadow duration-300 p-2.5 md:p-0 gap-3 md:gap-0 items-stretch hover:cursor-pointer"
                    >
                      {/* Image Container */}
                      <div className="relative w-[35%] md:w-full md:h-[13vw] shrink-0 block">
                        <img
                          src={post.cover}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover rounded-lg md:rounded-none transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Badge: Visible on Desktop Only */}
                        {isNew && (
                          <span className="hidden md:block absolute top-4 right-4 bg-[#FF00E5] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                            NEW
                          </span>
                        )}
                      </div>

                      {/* Content Body */}
                      <div className="flex flex-col grow w-[65%] md:w-full md:p-6 bg-white md:bg-[#F9FAFB] justify-between md:justify-start">
                        <div>
                          {/* Title */}
                          <h3 className="text-sm md:text-[1.1vw] font-bold text-[#121212] leading-tight md:leading-normal line-clamp-3 md:line-clamp-2 group-hover:text-[#CC00B7] transition-colors">
                            {/* MOBILE: Truncated Title (Limit 50 chars) */}
                            <span className="md:hidden">
                              {getTruncatedContent(post.title, 50)}
                            </span>

                            {/* DESKTOP: Full Title */}
                            <span className="hidden md:block">
                              {post.title}
                            </span>
                          </h3>

                          {/* Tags */}
                          <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
                            {tags.slice(0, 2).map((tag, index) => (
                              <span
                                key={index}
                                className="bg-[#F8E3F5] text-[#CC00B7] text-[10px] md:text-[0.6vw] font-medium px-2 py-0.5 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Date */}
                          <div className="flex items-center text-gray-400 text-[10px] md:text-xs font-medium md:mb-4">
                            <Calendar className="w-3 h-3 mr-1" />
                            {post.date}
                          </div>
                        </div>

                        {/* Description - DESKTOP ONLY */}
                        {post.content && (
                          <p className="hidden md:block text-gray-600 md:text-[0.8vw] md:leading-[1vw] line-clamp-3 mb-6 grow">
                            {getTruncatedContent(post.content, 120)}
                          </p>
                        )}

                        {/* Footer Actions */}
                        <div
                          className="flex items-center justify-between mt-1 md:mt-auto md:pt-4 md:border-t border-gray-100"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="flex items-center text-[#CC00B7] font-semibold text-xs md:text-sm group-hover:text-[#CC00B7]/80 transition-colors">
                            Read More
                            <img
                              src="https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@main/src/assets/blogs-arrow-right-icon.svg"
                              alt="Arrow Right"
                              className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 transition-transform group-hover:translate-x-1"
                            />
                          </span>

                          <button
                            className="text-[#CC00B7] group-hover:text-[#CC00B7]/80 group-hover:bg-fuchsia-50 p-1 md:p-2 rounded-full transition-all"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              // navigator.share logic
                            }}
                          >
                            <img
                              src="https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@main/src/assets/blogs-share-icon.svg"
                              alt="Share"
                              className="w-3 h-3 md:w-4 md:h-4"
                            />
                          </button>
                        </div>
                      </div>
                    </SmartNavLink>
                  );
                })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No blog posts found.</p>
            </div>
          )}

          {/* Read More - All Blogs Button */}
          <div className="text-center md:mt-[2vw] mt-[5vw]">
            <SmartNavLink
              to="/blog"
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
                  flex items-center justify-center gap-[0.52vw]
                "
              >
                Read More
                <ArrowRight className="hidden md:inline-block md:w-[0.9vw] md:h-[0.9vw] transition-transform group-hover:translate-x-1 text-[#FF00E5] md:group-hover:text-white" />
              </span>
            </SmartNavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
