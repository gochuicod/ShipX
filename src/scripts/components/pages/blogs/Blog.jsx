import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../../ui/SEO";
import NotFound from "../not_found/NotFound";
import MoreBlogs from "./MoreBlogs";
import ShareSection from "../../library/ShareSection";
import { Badge } from "../../../../styles/badge";
import { themeGuide } from "../../../../styles/themeGuide";

// Helper to parse the raw HTML string into structured blocks
const parseContent = (htmlString) => {
  if (!htmlString) return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const children = Array.from(doc.body.childNodes);

  const blocks = [];
  let currentBuffer = [];

  children.forEach((node) => {
    // If it's an image, flush the buffer as a full-width text block, then add the image
    if (node.tagName === "IMG") {
      if (currentBuffer.length > 0) {
        blocks.push({
          type: "text_full",
          content: currentBuffer
            .map((n) => n.outerHTML || n.textContent)
            .join(""),
        });
        currentBuffer = [];
      }
      blocks.push({
        type: "image",
        src: node.getAttribute("src"),
        alt: node.getAttribute("alt"),
      });
    } else if (node.tagName === "SECTION" && node.querySelector("img")) {
      // Handle cases where img is nested deeply in a section (recursive strategy simplified)
      // For your specific JSON, images seem to be top level or inside simple wrappers
      // This block handles the standard text content
      currentBuffer.push(node);
    } else {
      // It's text, paragraphs, uls, etc.
      currentBuffer.push(node);
    }
  });

  // Flush remaining text
  if (currentBuffer.length > 0) {
    blocks.push({
      type: "text_full",
      content: currentBuffer.map((n) => n.outerHTML || n.textContent).join(""),
    });
  }

  // Post-processing: Pair Images with the Text block immediately following them
  // This creates the "Split" view from Figma
  const finalLayout = [];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (block.type === "image") {
      // Look ahead for the next text block to pair with this image
      const nextBlock = blocks[i + 1];
      if (nextBlock && nextBlock.type === "text_full") {
        finalLayout.push({
          type: "split",
          imageSrc: block.src,
          imageAlt: block.alt,
          content: nextBlock.content,
        });
        i++; // Skip the next block since we just used it
      } else {
        // Orphan image (no text after it), render as full width or hidden
        finalLayout.push({
          type: "image_full",
          src: block.src,
          alt: block.alt,
        });
      }
    } else {
      finalLayout.push(block);
    }
  }

  return finalLayout;
};

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

  // Memoize the parsing so it doesn't run on every re-render
  const contentBlocks = useMemo(() => {
    if (!post?.content) return [];
    return parseContent(post.content);
  }, [post]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading blog...</p>
      </div>
    );
  if (!post) return <NotFound />;

  // Counter to toggle Left/Right alignment for split views
  let splitViewCount = 0;

  return (
    <>
      <SEO
        title={post.title}
        description={post.content.slice(0, 120)}
        canonical={`https://shipx.asia/blog/${slug}`}
        ogImage={post.cover}
      />

      {/* Load Source Serif Pro Font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap');`}
      </style>

      <div className="w-full bg-white font-['Inter']">
        <article className="mx-auto px-4 sm:px-8 lg:px-24 py-16 max-w-[1248px]">
          {/* --- HEADER SECTION --- */}
          <div className="flex flex-col gap-2 items-center sm:items-start max-w-[1034px] mx-auto mb-16">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-row items-center gap-1.5">
                {post.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#121212] leading-10 sm:leading-10 lg:leading-[3rem] tracking-tight text-center sm:text-left">
              {post.title}
            </h1>
            <div className="flex flex-row items-center gap-6 pt-2">
              <span className="text-sm sm:text-base text-[#4D525C]">
                {post.author}
              </span>
              <span className="text-sm sm:text-base text-[#4D525C]">
                {post.date}
              </span>
            </div>
          </div>
          {/* --- HERO IMAGE --- */}
          <div className="w-full max-w-[1248px] mx-auto h-48 sm:h-80 lg:h-[500px] rounded-2xl lg:rounded-3xl overflow-hidden relative mb-16">
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
          {/* --- DYNAMIC CONTENT RENDERING BASED ON FIGMA --- */}
          <div className="flex flex-col gap-8 w-full items-center">
            {contentBlocks.map((block, index) => {
              // 1. FULL WIDTH TEXT BLOCK (Regular font weight 400)
              // Figma: 1034px width, 16px font size, 24px line height, #1E2939 color
              if (block.type === "text_full") {
                return (
                  <div
                    key={index}
                    className="w-full max-w-[1034px] flex flex-col justify-center items-start gap-4 px-4 lg:px-0 font-['Source_Serif_Pro'] font-normal text-base leading-6 text-[#1E2939] opacity-90
                    [&>p]:text-base [&>p]:leading-6 [&>p]:mb-0
                    [&>h2]:text-base [&>h2]:leading-6 [&>h2]:font-bold [&>h2]:mb-0 
                    [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-0 [&>li]:text-base [&>li]:leading-6"
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  />
                );
              }

              // 2. SPLIT VIEW (IMAGE + TEXT STACKED)
              // Figma: 1034px width content, 648px image width, 408px image height, 16px border-radius, 16px gap
              if (block.type === "split") {
                splitViewCount++;

                return (
                  <div
                    key={index}
                    className="w-full max-w-[1034px] flex flex-col justify-center items-center gap-4 px-4 lg:px-0"
                  >
                    {/* Image Container - 648px x 408px with 16px border-radius */}
                    <div className="w-full max-w-[648px] h-[408px] rounded-[16px] overflow-hidden relative">
                      <img
                        src={block.imageSrc}
                        alt={block.imageAlt || "Blog image"}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* Text Container: Bold variant (weight 700) */}
                    {/* Figma: 1034px width, 16px font size, 24px line height, #1A1A1A color */}
                    <div
                      className="w-full font-['Source_Serif_Pro'] font-bold text-base leading-6 text-[#1A1A1A] opacity-90 flex flex-col justify-center items-start gap-4
                      [&>p]:text-base [&>p]:leading-6 [&>p]:mb-0
                      [&>h3]:text-base [&>h3]:leading-6 [&>h3]:font-bold [&>h3]:mb-0 
                      [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-0 [&>li]:text-base [&>li]:leading-6"
                      dangerouslySetInnerHTML={{ __html: block.content }}
                    />
                  </div>
                );
              }

              return null;
            })}
          </div>
          {/* --- FOOTER SECTION --- */}
          <div className="max-w-[1034px] mx-auto mt-12 sm:mt-12 lg:mt-16">
            <ShareSection />
          </div>
        </article>

        <MoreBlogs />
      </div>
    </>
  );
};

export default Blog;
