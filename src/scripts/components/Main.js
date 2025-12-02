import { lazy } from "react";
import { useTranslation } from "react-i18next";
const Carousel = lazy(() => import("./ui/CarouselNav"));
const MessengerButton = lazy(() => import("./ui/MessengerButton"));
const Statistics = lazy(() => import("./ui/Statistics"));
const Services = lazy(() => import("./ui/Services"));
const Platform = lazy(() => import("./ui/Platform"));
const SGAmiloCards = lazy(() => import("./ui/SGAmiloCards"));
const FreightAndCustoms = lazy(() => import("./ui/FreightAndCustoms"));
const Offices = lazy(() => import("./ui/Offices"));
const ContactUs = lazy(() => import("./ui/ContactUs"));
const SEO = lazy(() => import("./ui/SEO"));
const FAQSection = lazy(() => import("./ui/FAQSection"));
const Blogs = lazy(() => import("./blogs/BlogsSection"));
// const Toolkit = lazy(() => import("./tools/ToolKitLayout"));
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
          <Statistics />
          <Platform />
          <SGAmiloCards />
          <FreightAndCustoms />
          <Offices />
          <Blogs />
          <FAQSection />
          <ContactUs />
          {/* Disabled sections below for now */}
          {/* <Toolkit /> */}
          {/* <ServiceHeadline /> */}
          {/* <AnnouncementBanner /> */}
        </div>
      </div>
    </>
  );
};

export default Main;
