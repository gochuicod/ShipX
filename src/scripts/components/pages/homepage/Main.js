import { lazy } from "react";
import { useTranslation } from "react-i18next";

// Same folder lazy imports
const Carousel = lazy(() => import("./CarouselNav"));
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

// const ServiceHeadline = lazy(() => import("./ui/ServiceHeadline"));
// const AnnouncementBanner = lazy(() => import("./ui/AnnouncementBanner"));

const Main = ({ margin }) => {
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
        <div className="absolute top-[-5vw] left-[-10vw] size-[10vw] rounded-full shadow-[5vw_0.5vw_15vw_rgba(79,55,138,1)] z-40"></div>
        <div className="absolute top-[8vw] right-[-15vw] size-[15vw] rounded-full shadow-[-5vw_0.5vw_20vw_rgba(255,0,229,0.2)] z-40"></div>
        <div className="absolute top-1/2 left-[-30vw] size-[30vw] rounded-full shadow-[15vw_-10vw_20vw_rgba(255,0,229,0.1)] -z-10"></div>
        <div className="flex flex-col">
          <Carousel margin={margin} />
          <Services />
          <Toolkit />
          <Statistics />
          <Platform />
          <SGAmiloCards />
          <FreightAndCustoms />
          <Offices />
          <Blogs />
          <FAQSection />
          <ContactUs />
          {/* Disabled sections below for now */}
          {/* <ServiceHeadline /> */}
          {/* <AnnouncementBanner /> */}
        </div>
      </div>
    </>
  );
};

export default Main;
