import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Reusable SEO component to manage meta tags, title, and social sharing headers.
 * * NOTE: For production Headless WordPress SEO, ensure this data is fetched
 * via the WordPress REST API and passed as props (title, description, etc.).
 * * @param {object} props - The component props.
 * @param {string} props.title - The specific title for the current page.
 * @param {string} props.description - The meta description for the current page.
 * @param {string} props.url - The canonical URL for the current page (e.g., window.location.href).
 * @param {string} props.image - The URL for the social sharing image (Open Graph/Twitter).
 */
const SEO = ({ title, description, url, image }) => {
  const currentUrl = url || window.location.href;
  // You might fetch the base site title from a central config or a global WordPress endpoint
  const siteName = "ShipX Asia | ASEAN's Next Generation Platform";

  const defaultTitle = title || "Home";
  const finalTitle = title ? `${defaultTitle} | ShipX Asia` : siteName;

  const defaultDescription =
    "Empowering businesses to ship globally with confidence. ShipX simplifies international shipping, customs, and logistics across ASEAN.";
  const finalDescription = description || defaultDescription;

  // Placeholder image path - replace with a default image from your assets
  const defaultImage = "https://shipx.asia/default-social-image.jpg";
  const finalImage = image || defaultImage;

  return (
    <Helmet>
      {/* Primary HTML Title */}
      <title>{finalTitle}</title>

      {/* Primary Meta Tags */}
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph (Social Sharing) Tags - Facebook/LinkedIn etc. */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="ShipX Asia" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* Ensure character set is set early */}
      <meta charset="utf-8" />
    </Helmet>
  );
};

export default SEO;
