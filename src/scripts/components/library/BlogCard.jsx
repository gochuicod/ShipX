import {
  CardRoot,
  CardImageWrapper,
  CardImage,
  CardBadge,
  CardBody,
  CardMetaRow,
  CardDate,
  CardTitle,
  CardExcerpt,
  CardFooter,
  CardReadMore,
  CardShareButton,
} from "../../../styles/blog-card";
import { Badge } from "../../../styles/badge";
import { useTranslation } from "react-i18next";

const BlogCard = ({ post: postProp, variant = "default" }) => {
  const { t } = useTranslation();

  // Fetch blogs from JSON via i18n
  const blogs =
    t("service_headline_section.blogs", { returnObjects: true }) || [];
  // 1. Helper Logic
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

  const getTruncatedContent = (content, limit = 100) => {
    if (!content) return "";
    const plainText = content.replace(/<[^>]*>?/gm, "");
    if (plainText.length <= limit) return plainText;
    return plainText.substring(0, limit) + "...";
  };

  // 2. Data Destructuring
  const {
    title = "The ASEAN Seller's Complete Guide for Going Global",
    date = "",
    cover = "/api/placeholder/400/250",
    tags = ["Logistics"],
    content = "Are you an ASEAN-based seller ready to expand your business beyond Southeast Asia? This guide provides the essential strategies.",
    slug = "#",
  } = postProp || blogs[0] || {};

  const isNew = isRecent(date);
  const category = tags.length > 0 ? tags[0] : "General";

  // 3. Render
  return (
    <CardRoot variant={variant}>
      {/* Image Section */}
      <CardImageWrapper variant={variant}>
        <CardImage src={cover} alt={title} variant={variant} />
        {isNew && <CardBadge variant="new">NEW</CardBadge>}
      </CardImageWrapper>

      {/* Content Section */}
      <CardBody variant={variant}>
        <CardMetaRow>
          <Badge variant="secondary" size="sm">
            {category}
          </Badge>
          <CardDate>{date}</CardDate>
        </CardMetaRow>

        <CardTitle>{title}</CardTitle>

        <CardDate className="md:hidden">{date}</CardDate>

        <CardExcerpt className="md:flex hidden">
          {getTruncatedContent(content, 120)}
        </CardExcerpt>

        {/* Footer Actions */}
        <CardFooter>
          <CardReadMore className="text-xs text-nowrap md:text-base">
            {t("blogs_section.read_more_button", "Read More")}
            <img
              src="https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@main/src/assets/blogs-arrow-right-icon.svg"
              alt="Arrow Right"
              className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform group-hover:translate-x-1"
            />
          </CardReadMore>

          <CardShareButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add share logic here
            }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@main/src/assets/blogs-share-icon.svg"
              alt="Share"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </CardShareButton>
        </CardFooter>
      </CardBody>
    </CardRoot>
  );
};

export default BlogCard;
