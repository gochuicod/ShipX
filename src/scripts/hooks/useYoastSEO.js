import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DEFAULT_SEO = {
  title: "My Website",
  description: "Default description for my website.",
  canonical: window.location.href,
  og_title: "My Website",
  og_description: "Default OG description for my website.",
  og_image: [{ url: "/default-og-image.jpg" }],
};

export default function useYoastSEO(customSeo = {}) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [seo, setSeo] = useState(DEFAULT_SEO);

  useEffect(() => {
    // You can fetch WP REST API SEO fields here if you have Yoast meta in WP
    // For SPA routes, merge defaults + custom SEO + language
    const langPrefix = i18n.language === "en" ? "" : `/${i18n.language}`;

    const updatedSeo = {
      title: customSeo.title || DEFAULT_SEO.title,
      description: customSeo.description || DEFAULT_SEO.description,
      canonical: `${window.location.origin}${langPrefix}${location.pathname}`,
      og_title: customSeo.og_title || customSeo.title || DEFAULT_SEO.title,
      og_description:
        customSeo.og_description ||
        customSeo.description ||
        DEFAULT_SEO.description,
      og_image: customSeo.og_image || DEFAULT_SEO.og_image,
    };

    setSeo(updatedSeo);
  }, [location.pathname, i18n.language, customSeo]);

  return seo;
}
