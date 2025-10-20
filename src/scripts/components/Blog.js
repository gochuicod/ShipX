// src/scripts/components/Blog.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "./ui/SEO";
import SmartNavLink from "./ui/SmartNavLink";
import NotFound from "./ui/NotFound";

const Blog = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadBlog = () => {
    setLoading(true);
    const blogs =
      t("service_headline_section.blogs", { returnObjects: true }) || [];
    const foundPost = blogs.find((b) => b.slug === slug) || null;
    setPost(foundPost);
    setLoading(false);
  };

  useEffect(() => {
    loadBlog(); // load on mount

    const handleLangChange = () => loadBlog(); // reload on language change
    i18n.on("languageChanged", handleLangChange);

    return () => i18n.off("languageChanged", handleLangChange);
  }, [slug, i18n]);

  if (loading) return <p>Loading blog...</p>;
  if (!post) return <NotFound />;

  return (
    <>
      <SEO
        title={post.title}
        description={post.content.slice(0, 120)}
        canonical={`https://shipx.asia/blog/${slug}`}
        ogImage={post.cover}
      />

      <article
        className="flex flex-col justify-center items-center md:px-[18vw] px-[10vw] md:py-[5vw] py-[10vw] md:gap-y-[2vw] gap-y-[5vw]"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <nav
          aria-label="breadcrumb"
          className="w-full mb-4 text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw] text-left"
        >
          <ol className="flex flex-wrap items-center gap-x-[0.5vw]">
            <li>
              <SmartNavLink
                to="/"
                className="hover:text-[#1A1A1A]/70 transition-colors"
              >
                Home
              </SmartNavLink>
            </li>
            <li>/</li>
            <li>
              <SmartNavLink
                to="/blog"
                className="hover:text-[#1A1A1A]/70 transition-colors"
              >
                Blog
              </SmartNavLink>
            </li>
            <li>/</li>
            <li className="text-[#1A1A1A] font-semibold truncate max-w-[20vw]">
              {post.title}
            </li>
          </ol>
        </nav>

        <img
          src={post.cover}
          alt={post.title}
          className="w-full md:rounded-[2vw] rounded-[3vw] shadow-[0_0vw_1vw_rgba(79,55,138,0.15)]"
          loading="lazy"
        />

        <div className="flex flex-row gap-x-[1vw] md:text-[0.8vw] text-[2.2vw]">
          <span>{post.author}</span>
          <span className="text-[#FF00E5]">{post.date}</span>
        </div>

        <h1 className="md:text-[3vw] text-[5vw] font-bold text-center md:leading-[3.5vw] leading-[5.5vw]">
          {post.title}
        </h1>

        <div
          className="md:px-[5vw] px-0 md:text-[1.1vw] text-[3vw] md:leading-[1.6vw] leading-[4.5vw] text-normal text-[#1A1A1A]/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
};

export default Blog;
