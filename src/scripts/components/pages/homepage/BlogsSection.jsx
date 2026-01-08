import { useTranslation } from "react-i18next";
import { CircleArrowRight } from "lucide-react";
import SmartNavLink from "../../ui/SmartNavLink";

import AppButton from "../../library/AppButton";
import BlogCard from "../../library/BlogCard";
import HighlightedHeading from "../../library/HighlightedHeading";
import Container from "../../library/Container";

import { Badge } from "../../../../styles/badge";
import { themeGuide } from "../../../../styles/themeGuide";

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

  return (
    <Container
      className="relative flex flex-col justify-center items-center lg:pt-32 lg:pb-0 pt-16"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex justify-center items-center mb-4">
        <Badge variant="toolkit" size="default">
          {t("blogs_section.badge", "Blogs and Articles")}
        </Badge>
      </div>

      {/* Header */}
      <div className="mb-8 md:mb-10 flex justify-center items-center">
        <HighlightedHeading
          text={t("blogs_section.title", "Latest Insights & Ideas")}
          className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
        />
      </div>

      {/* Grid Layout */}
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {blogs
            .slice()
            .reverse()
            .slice(0, 3)
            .map((post, idx) => (
              <SmartNavLink
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={`hover:cursor-pointer ${idx === 2 ? "md:hidden lg:block" : ""}`}
              >
                <BlogCard post={post} variant="section" />
              </SmartNavLink>
            ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No blog posts found.</p>
        </div>
      )}

      {/* Read More - All Blogs Button */}
      <div className="text-center mt-8">
        <AppButton
          to="/blogs"
          variant="secondary"
          text={t("blogs_section.read_more_button", "Read More")}
          withRightIcon={true}
          rightIcon={<CircleArrowRight className="size-5" />}
        />
      </div>
    </Container>
  );
};

export default BlogSection;
