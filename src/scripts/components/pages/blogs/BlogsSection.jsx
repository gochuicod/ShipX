import { useTranslation } from "react-i18next";
import { CircleArrowRight } from "lucide-react";
import SmartNavLink from "../../ui/SmartNavLink";
import { Badge } from "../../../../styles/badge";
import AppButton from "../../library/AppButton";
import BlogCard from "../../library/BlogCard";

const BlogSection = () => {
  const { t } = useTranslation();

  const blogs =
    t("service_headline_section.blogs", { returnObjects: true }) || [];

  return (
    <>
      <section
        className="py-12 bg-none"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <div className="w-full flex flex-col items-center px-4 sm:px-6">
          <div className="flex justify-center items-center mb-2">
            <Badge variant="toolkit" size="default">
              Blogs and Articles
            </Badge>
          </div>

          {/* Header */}
          <div className="mb-4 md:mb-8 flex justify-center items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              Latest Insights & Ideas
            </h1>
          </div>

          {/* Grid Layout */}
          {blogs.length > 0 ? (
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
                    <BlogCard post={post} />
                  </SmartNavLink>
                ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No blog posts found.</p>
            </div>
          )}

          {/* Read More - All Blogs Button */}
          <div className="text-center md:mt-[2vw] mt-[5vw]">
            <AppButton
              to="/blog"
              variant="secondary"
              text="Read More"
              withRightIcon={true}
              rightIcon={<CircleArrowRight className="size-5" />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
