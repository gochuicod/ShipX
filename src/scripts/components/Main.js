import { lazy } from "react";
const Carousel = lazy(() => import("./ui/CarouselNav"));
const MessengerButton = lazy(() => import("./ui/MessengerButton"));
const ServiceHeadline = lazy(() => import("./ui/ServiceHeadline"));
const Statistics = lazy(() => import("./ui/Statistics"));
const Services = lazy(() => import("./ui/Services"));
const Platform = lazy(() => import("./ui/Platform"));
const SGAmiloCards = lazy(() => import("./ui/SGAmiloCards"));
const FreightAndCustoms = lazy(() => import("./ui/FreightAndCustoms"));
const Offices = lazy(() => import("./ui/Offices"));
const AnnouncementBanner = lazy(() => import("./ui/AnnouncementBanner"));
const ContactUs = lazy(() => import("./ui/ContactUs"));
const SEO = lazy(() => import("./ui/SEO"));

const Main = ({ margin }) => {
  return (
    <>
      <SEO
        title="ShipX - ASEAN's Next Generation Platform"
        description="Enter And Scale In The U.S. Market With Custom Logistics Solutions Built To Support Sellers From Launch To Nationwide Expansion"
        canonical="https://shipx.asia"
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
      />

      <div className="relative overflow-hidden">
        <MessengerButton />
        <div className="absolute top-[-5vw] left-[-10vw] size-[10vw] rounded-full shadow-[5vw_0.5vw_15vw_rgba(79,55,138,1)] z-40"></div>
        <div className="absolute top-[8vw] right-[-15vw] size-[15vw] rounded-full shadow-[-5vw_0.5vw_20vw_rgba(255,0,229,0.2)] z-40"></div>
        <div className="absolute top-1/2 left-[-30vw] size-[30vw] rounded-full shadow-[15vw_-10vw_20vw_rgba(255,0,229,0.1)] -z-10"></div>
        <div className="flex flex-col">
          <Carousel margin={margin} />
          <ServiceHeadline />
          <Statistics />
          <Services />
          <Platform />
          <SGAmiloCards />
          <FreightAndCustoms />
          <Offices />
          <AnnouncementBanner />
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Main;
