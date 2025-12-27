import { lazy } from "react";
import { useTranslation } from "react-i18next";

// Same folder lazy imports
const MessengerButton = lazy(() => import("./MessengerButton"));
const SGAmiloCards = lazy(() => import("./SGAmiloCards"));
const FAQSection = lazy(() => import("./FAQSection"));
const ContactUsNew = lazy(() => import("./ContactUsNew"));

// External folder lazy imports
const Blogs = lazy(() => import("../blogs/BlogsSection"));
const SEO = lazy(() => import("../../ui/SEO"));

const HeroSection = lazy(() => import("./HeroSection"));
const PartnersSection = lazy(() => import("./PartnersSection"));
const ServicesSection = lazy(() => import("./ServicesSection"));
const NumbersSection = lazy(() => import("./NumbersSection"));
const ToolkitSection = lazy(() => import("./ToolkitSection/ToolkitSection"));

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t("seo.home_page.title")}
        description={t("seo.home_page.description")}
        canonical={t("seo.home_page.canonical")}
        ogImage={t("seo.home_page.ogImage")}
      />

      <div className="relative overflow-hidden min-h-screen">
        <MessengerButton />
        <div className="flex flex-col">
          <HeroSection />
          <PartnersSection />
          <ServicesSection />
          <ToolkitSection />
          <NumbersSection />
          <SGAmiloCards />
          <Blogs />
          <FAQSection />
          <ContactUsNew />
        </div>
      </div>
    </>
  );
};

export default Main;
