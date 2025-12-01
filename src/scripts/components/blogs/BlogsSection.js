import { useTranslation } from "react-i18next";
import { MoveRight, Share2, Calendar } from 'lucide-react';
import SmartNavLink from "../ui/SmartNavLink";
import SEO from "../ui/SEO";
import Badge from "../shipment_tracker/Badge";

const BlogSection = () => {
  const { t } = useTranslation();

  const blogs = t("service_headline_section.blogs", { returnObjects: true }) || [];

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

  return (
    <>
      {/* SEO Logic from old component */}
      <SEO
        title={t("seo.blog_page.title")}
        description={t("seo.blog_page.description")}
        canonical={t("seo.blog_page.canonical")}
        ogImage={t("seo.blog_page.ogImage")}
      />

      <section className="py-12 bg-none" style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}>
        <div className="md:max-w-[80vw] max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center md:mb-[1vw]">
                <Badge
                    className="md:text-[0.8vw] text-[2.5vw]"
                    badge_text="Blogs and Articles"
                    text_color="#FF00E5"
                    bg_color="#F3F1FF"
                />
            </div>
          
          {/* Header */}
          <div className="mb-10 flex justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
               Latest Insights & Ideas
            </h1>
          </div>

          {/* Grid Layout */}
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs
                .slice()
                .reverse()
                .slice(0,3)
                .map((post) => {
                  const isNew = isRecent(post.date);
                  // Fallback for tags if your translation file doesn't have them yet
                  const tags = post.tags || ["Blog", "Update"];

                  return (
                    <article 
                      key={post.slug} 
                      className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full"
                    >
                      {/* Image Container - Linked */}
                      <SmartNavLink to={`/blog/${post.slug}`} className="relative md:h-[13vw] w-full overflow-hidden group block">
                        <img 
                          src={post.cover} 
                          alt={post.title} 
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Dynamic NEW Badge */}
                        {isNew && (
                          <span className="absolute top-4 right-4 bg-[#FF00E5] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                            NEW
                          </span>
                        )}
                      </SmartNavLink>

                      {/* Content Body */}
                      <div className="flex flex-col grow p-6 bg-[#F9FAFB]">
                        
                        {/* Title - Linked */}
                        <SmartNavLink to={`/blog/${post.slug}`} className="block">
                          <h3 className="md:text-[1.1vw] text-[3vw] font-bold text-[#121212] mb-3 line-clamp-2 hover:text-[#CC00B7] transition-colors">
                            {post.title}
                          </h3>
                        </SmartNavLink>

                        {/* Metadata Row */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex gap-2 flex-wrap">
                            {tags.map((tag, index) => (
                              <span key={index} className="bg-[#F8E3F5] text-[#CC00B7] md:text-[0.6vw] text-[2.1vw] font-medium px-2.5 py-0.5 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-gray-400 text-xs font-medium whitespace-nowrap ml-2">
                             <Calendar className="w-3 h-3 mr-1"/>
                             {post.date}
                          </div>
                        </div>

                        {/* Description */}
                        {post.content && (
                          <p className="text-gray-600 md:text-[0.8vw] text-[2.3vw] md:leading-[1vw] leading-[2.5vw] line-clamp-4 mb-6 grow">
                            {/* Strip simple HTML or just use raw text depending on your data */}
                             {post.content.replace(/<[^>]*>?/gm, '')} 
                          </p>
                        )}

                        {/* Footer Actions */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                          <SmartNavLink 
                            to={`/blog/${post.slug}`} 
                            className="group flex items-center text-[#CC00B7] font-semibold text-sm hover:text-[#CC00B7]/80 transition-colors"
                          >
                            Read More 
                            <MoveRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </SmartNavLink>
                          
                          <button 
                            className="text-[#CC00B7] hover:text-[#CC00B7]/80 hover:bg-fuchsia-50 p-2 rounded-full transition-all"
                            aria-label="Share post"
                            onClick={(e) => {
                                e.preventDefault();
                                // Add share logic here (e.g., navigator.share)
                            }}
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>

                      </div>
                    </article>
                  );
                })}
            </div>
          ) : (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No blog posts found.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogSection;