import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { hreflang } from "../../utils/constants";

const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = "https://shipx.asia";

  const canonicalUrl = canonical || `${baseUrl}${currentPath}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {hreflang.map((lang) => {
        if (lang.key === "en") return null;

        const href = `${baseUrl}/${lang.key}${currentPath.replace(/^\/+/, "")}`;

        return (
          <link
            key={lang.key}
            rel="alternate"
            hrefLang={lang.key}
            href={href}
          />
        );
      })}

      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
