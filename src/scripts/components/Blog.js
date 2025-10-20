import { useParams } from "react-router-dom";
import SEO from "./ui/SEO";
import SmartNavLink from "./ui/SmartNavLink";
import NotFound from "./ui/NotFound";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const { t } = useTranslation();

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <SEO
        title={t("service_headline_section.blogs.blog_1.title")}
        description={t(
          "service_headline_section.blogs.blog_1.description",
        ).slice(0, 120)}
        canonical={`https://shipx.asia/blog/${slug}`}
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/logo-shipx.webp"
      />
      <article
        className="flex flex-col justify-center items-center md:px-[18vw] px-[10vw] md:py-[5vw] py-[10vw] md:gap-y-[2vw] gap-y-[5vw]"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        {/* Breadcrumb Navigation */}
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
              {t("service_headline_section.blogs.blog_1.title")}
            </li>
          </ol>
        </nav>
        <img
          src={t("service_headline_section.blogs.blog_1.cover")}
          alt={t("service_headline_section.blogs.blog_1.title")}
          className="w-full rounded-[2vw] shadow-[0_0vw_1vw_rgba(79,55,138,0.15)]"
          loading="lazy"
        />
        <div className="flex flex-row gap-x-[1vw] md:text-[0.8vw] text-[2.2vw]">
          <span>{t("service_headline_section.blogs.blog_1.author")}</span>
          <span className="text-[#FF00E5]">
            {t("service_headline_section.blogs.blog_1.date")}
          </span>
        </div>
        <h1 className="md:text-[3vw] text-[5vw] font-bold text-center md:leading-[3.5vw] leading-[5.5vw]">
          {t("service_headline_section.blogs.blog_1.title")}
        </h1>
        <div
          className="md:px-[5vw] px-0 md:text-[1.1vw] text-[3vw] md:leading-[1.6vw] leading-[4.5vw] text-normal text-[#1A1A1A]/80"
          dangerouslySetInnerHTML={{
            __html: t("service_headline_section.blogs.blog_1.content"),
          }}
        />
      </article>
    </>
  );
};

export default Blog;
