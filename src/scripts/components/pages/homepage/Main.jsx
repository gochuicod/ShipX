import { lazy } from "react";
import { useTranslation } from "react-i18next";

// Same folder lazy imports
const MessengerButton = lazy(() => import("./MessengerButton"));
const Statistics = lazy(() => import("./Statistics"));
const Services = lazy(() => import("./Services"));
const Platform = lazy(() => import("./Platform"));
const SGAmiloCards = lazy(() => import("./SGAmiloCards"));
const FreightAndCustoms = lazy(() => import("./FreightAndCustoms"));
const Offices = lazy(() => import("./Offices"));
const ContactUs = lazy(() => import("./ContactUs"));
const FAQSection = lazy(() => import("./FAQSection"));
const Toolkit = lazy(() => import("./toolkit/ToolKitLayout"));

// External folder lazy imports
const Blogs = lazy(() => import("../blogs/BlogsSectionReusable"));
const SEO = lazy(() => import("../../ui/SEO"));

const HeroSection = lazy(() => import("./HeroSection"));
const PartnersSection = lazy(() => import("./PartnersSection"));

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
          <SGAmiloCards />

          {/* <Services /> */}
          {/* <Toolkit />
          <Statistics />
          <Platform />
          <FreightAndCustoms />
          <Offices />
          <Blogs />
          <FAQSection />
          <ContactUs /> */}
        </div>
      </div>
    </>
  );
};

export default Main;
