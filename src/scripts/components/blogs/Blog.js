import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../ui/SEO";
import SmartNavLink from "../ui/SmartNavLink";
import NotFound from "../ui/NotFound";
import BlogsSectionReusable from "./BlogsSectionReusable";
import ShareSection from "./ShareSection";

const Blog = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadBlog = () => {
    setLoading(true);
    const blogs =
      JSON.parse(
        JSON.stringify(
          t("service_headline_section.blogs", { returnObjects: true }),
        ),
      ) || [];
    const foundPost = blogs.find((b) => b.slug === slug) || null;
    setPost(foundPost);
    setLoading(false);
  };

  useEffect(() => {
    loadBlog();
    const handleLangChange = () => loadBlog();
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, [slug, i18n.language]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading blog...</p>
      </div>
    );
  if (!post) return <NotFound />;

  return (
    <>
      <SEO
        title={post.title}
        description={post.content.slice(0, 120)}
        canonical={`https://shipx.asia/blog/${slug}`}
        ogImage={post.cover}
      />

      <div
        className="w-full bg-white"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        {/* Main Article Container */}
        <article className="max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] mx-auto pt-[12vh] pb-[5vw]">
          {/* 1. Breadcrumbs & Tags */}
          <div className="flex flex-col items-start gap-y-6 mb-6">
            <nav
              aria-label="breadcrumb"
              className="w-full text-[#1A1A1A] md:text-[0.8vw] text-[3vw] text-left"
            >
              <ol className="flex flex-wrap items-center gap-x-[0.5vw]">
                <li>
                  <SmartNavLink
                    to="/"
                    className="hover:text-[#1A1A1A]/70 transition-colors"
                  >
                    {t("service_headline_section.breadcrumbs.home")}
                  </SmartNavLink>
                </li>
                <li>/</li>
                <li>
                  <SmartNavLink
                    to="/blog"
                    className="hover:text-[#1A1A1A]/70 transition-colors"
                  >
                    {t("service_headline_section.breadcrumbs.blog")}
                  </SmartNavLink>
                </li>
                <li>/</li>
                <li className="text-[#1A1A1A] font-semibold truncate max-w-[20vw]">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
                {post.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#F8E3F5] text-[#CC00B7] text-[10px] md:text-[0.6vw] font-medium px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* 2. Headline */}
          <h1 className="text-[8vw] md:text-[3.5vw] font-bold text-[#1A1A1A] leading-[1.1] text-left mb-6">
            {post.title}
          </h1>

          {/* 3. Author Meta */}
          <div className="flex items-center gap-x-4 mb-8 text-sm md:text-base text-gray-600 border-b border-gray-100 pb-8 w-full">
            {/* Placeholder Avatar - replace with post.author_avatar if available */}
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <svg
                className="w-full h-full text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-x-2">
              <span className="font-semibold text-black">{post.author}</span>
              <span className="hidden md:block text-gray-400">•</span>
              <span className="text-gray-500">{post.date}</span>
            </div>
          </div>

          {/* 4. Hero Image */}
          <div className="w-full mb-12">
            <img
              src={
                i18n.language === "vn" && post.cover_vn
                  ? post.cover_vn
                  : post.cover
              }
              alt={post.title}
              className="w-full md:rounded-[2vw] rounded-[3vw] shadow-[0_0vw_1vw_rgba(79,55,138,0.15)]"
              loading="eager"
            />
          </div>

          {/* 5. Rich Text Content */}
          {/* We use arbitrary styling for standard HTML tags appearing inside the content.
             This handles the spacing, fonts, and images layout inside the article body.
          */}
          <div
            className="
              w-full 
              text-[#1A1A1A] 
              text-[4.5vw] md:text-[1.2vw] 
              leading-[1.6] md:leading-[1.7]
              [&>p]:mb-6 [&>p]:text-gray-700
              [&>h2]:text-[5vw] md:[&>h2]:text-[2vw] [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:leading-tight
              [&>h3]:text-[4.5vw] md:[&>h3]:text-[1.5vw] [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3
              [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul]:space-y-2
              [&>img]:rounded-xl [&>img]:my-8 [&>img]:w-full [&>img]:shadow-sm
              [&>a]:text-blue-600 [&>a]:underline
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 6. Share Section (Bottom CTA) */}
          <ShareSection />
        </article>

        {/* 7. Read Next Section */}
        {/* Placeholder for your existing BlogsSection component. 
            Ensure BlogsSection is imported and accepts any necessary props. */}
        <div className="w-full bg-white py-4 px-[5vw] md:px-[10vw]">
          <h3 className="text-3xl font-bold text-center mb-5">
            What to read next
          </h3>
          <BlogsSectionReusable />
        </div>
      </div>
    </>
  );
};

export default Blog;
