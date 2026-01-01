import { useTranslation } from "react-i18next";
import { CircleArrowRight } from "lucide-react";
import SmartNavLink from "../../ui/SmartNavLink";
import { Badge } from "../../../../styles/badge";
import AppButton from "../../library/AppButton";
import BlogCard from "../../library/BlogCard";
import { lazy } from "react";
import { themeGuide } from "../../../../styles/themeGuide";

const ParallaxSection = lazy(() => import("../../ui/ParallaxSection"));

const MoreBlogs = () => {
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
    <ParallaxSection
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <div
        className={`mx-auto relative ${themeGuide.paddingX} flex flex-col justify-center items-center mb-20`}
      >
        <div className="flex justify-center items-center mb-4">
          <Badge variant="toolkit" size="default">
            More Blogs and Articles
          </Badge>
        </div>

        {/* Header */}
        <div className="mb-8 md:mb-10 flex justify-center items-center">
          <h1 className="md:text-4xl text-2xl font-semibold md:font-bold text-[0E0E0E]">
            What to Read Next
          </h1>
        </div>

        {/* Grid Layout */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {blogs
              .slice()
              .reverse()
              .slice(0, 3)
              .map((post) => (
                <SmartNavLink
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="hover:cursor-pointer"
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
            text="Read More"
            withRightIcon={true}
            rightIcon={<CircleArrowRight className="size-5" />}
          />
        </div>
      </div>
    </ParallaxSection>
  );
};

export default MoreBlogs;
