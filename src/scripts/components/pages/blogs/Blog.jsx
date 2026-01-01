import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../../ui/SEO";
import SmartNavLink from "../../ui/SmartNavLink";
import NotFound from "../not_found/NotFound";
import MoreBlogs from "./MoreBlogs";
import ShareSection from "../../library/ShareSection";
import { Badge } from "../../../../styles/badge";
import { themeGuide } from "../../../../styles/themeGuide";

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
        <article className={`mx-auto ${themeGuide.paddingX} py-16`}>
          {/* Header Section: Tags, Headline, Author Meta & Hero Image */}
          <div className="flex flex-col gap-2 md:items-start items-center md:py-0 py-0 md:px-20">
            {/* 1. Tags Container */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-row items-center gap-1.5">
                {post.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* 2. Headline */}
            <h1 className="text-2xl md:text-4xl font-semibold text-[#121212] text-center md:text-left leading-10 md:leading-10 tracking-tight letter-spacing-[-1px]">
              {post.title}
            </h1>

            {/* 3. Author Meta & Date */}
            <div className="flex flex-row items-center gap-6 md:gap-6">
              {/* Author Section */}
              <div className="flex flex-row items-center gap-2">
                {/* Placeholder Avatar - replace with post.author_avatar if available */}
                <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <svg
                    className="w-full h-full text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-[#4D525C] text-sm md:text-base font-normal leading-5">
                  {post.author}
                </span>
              </div>

              {/* Date Section */}
              <span className="text-[#4D525C] text-sm md:text-base font-normal leading-5">
                {post.date}
              </span>
            </div>
          </div>

          {/* 4. Hero Image */}
          <div className="w-full mt-6 md:mt-8 h-52 md:h-80 lg:h-[500px] rounded-3xl overflow-hidden relative">
            <img
              src={
                i18n.language === "vn" && post.cover_vn
                  ? post.cover_vn
                  : post.cover
              }
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* 5. Rich Text Content */}
          <div
            className="
              w-full my-4 md:px-20
              flex flex-col gap-4
              text-[#1E2939] 
              md:text-base text-sm
              md:leading-6 leading-[21px]
              [&>p]:mb-4 [&>p]:text-[#1E2939] [&>p]:opacity-90
              [&>h2]:text-[#1E2939] [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:leading-tight
              [&>h3]:text-[#1E2939] [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3
              [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>ul]:space-y-2
              [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-4 [&>ol]:space-y-2
              [&>a]:text-blue-600 [&>a]:underline hover:[&>a]:text-blue-700
              font-['Inter']
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* 6. Share Section (Bottom CTA) */}
          <ShareSection />
        </article>

        {/* 7. Read Next Section */}
        {/* MoreBlogs component displays latest blog posts */}
        <MoreBlogs />
      </div>
    </>
  );
};

export default Blog;
