import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../../../../lib/util";

import { CalendarDays, CircleArrowRight, ChevronDown } from "lucide-react";

// Same folder lazy imports
const MessengerButton = lazy(() => import("./MessengerButton"));
const HeroCarousel = lazy(() => import("./HeroCarousel"));
const PartnersSection = lazy(() => import("./PartnersSection"));
const ServicesSection = lazy(() => import("./ServicesSection"));
const ToolkitSection = lazy(() => import("./ToolkitSection/ToolkitSection"));
const NumbersSection = lazy(() => import("./NumbersSection"));
const PlatformSection = lazy(() => import("./PlatformSection"));
const OfficesSection = lazy(() => import("./OfficesSection"));
const AffiliateSection = lazy(() => import("./AffiliateSection"));
const FAQSection = lazy(() => import("./FAQSection"));
const ContactUsNew = lazy(() => import("./ContactUsNew"));
const Blogs = lazy(() => import("./BlogsSection"));

// External folder lazy imports
const SEO = lazy(() => import("../../ui/SEO"));

const Main = () => {
  const { t } = useTranslation();

  const heroSlides = [
    {
      id: 1,
      image:
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/hero_image_1.webp",
      title: t("hero_section.title"),
      titleHighlight: t("hero_section.title_highlighted"),
      description:
        "Enter and scale in the U.S. market with custom logistics solutions built to support sellers from launch to nationwide expansion",
      descriptionClassName: "lg:w-[85%] md:w-[80%] w-full lg:mx-0 mx-auto",
      note: t("hero_section.note"),
      primaryButton: {
        text: t("header.book_a_demo"),
        to: "/book-a-demo",
        icon: <CalendarDays className="size-5" />,
      },
      secondaryButton: {
        text: "Learn More",
        to: "/#services",
        icon: <ChevronDown className="size-5" />,
      },
    },
    {
      id: 2,
      image:
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/hero_image_2.webp",
      bgClassName: cn(
        "lg:bg-size-[1508px_1206px] md:bg-size-[1093px_1036px] bg-size-[924px_845px]",
        "lg:bg-position-[calc(50vw-320px)_calc(0vw-40px)] md:bg-position-[calc(22vw-320px)_calc(30vw-40px)] bg-position-[calc(25vw-320px)_calc(70vw-40px)]",
      ),
      title: "Delivering To 190+ Countries With Ease",
      titleClassName: "lg:w-full md:w-[70%] lg:mx-0 mx-auto",
      titleHighlight: "190+ Countries",
      description:
        "Reach Customers Worldwide With Seamless Logistics That Simplify Cross-Border Sales, Ensuring Smooth Growth Without Operational Headaches",
      descriptionClassName: "lg:w-full md:w-[80%] w-full lg:mx-0 mx-auto",
      note: "Take Your Brand Global, Stress-Free",
      primaryButton: {
        text: t("header.book_a_demo"),
        to: "/book-a-demo",
        icon: <CalendarDays className="size-5" />,
      },
      secondaryButton: {
        text: t(
          "hs_code_generator_page.form_section.input_images.upload_files_button",
        ),
        to: "/hs-code-generator",
        icon: <CircleArrowRight className="size-5" />,
      },
    },
    {
      id: 3,
      image:
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/hero_image_3.webp",
      bgClassName: cn(
        "lg:bg-size-[1139px_636px] md:bg-size-[1293px_636px] bg-size-[924px_545px]",
        "lg:bg-position-[calc(55vw-320px)_calc(18vw-40px)] md:bg-position-[calc(-23vw-40px)_calc(65vw-40px)] bg-position-[calc(-23vw-40px)_calc(150vw-40px)]",
      ),
      title: "Everything you need to grow Internationally",
      titleClassName: "lg:w-full md:w-[80%] lg:mx-0 mx-auto",
      titleHighlight: "Internationally",
      description:
        "From Economy Shipping To Express Delivery, FBA Fulfillment To Marketplace integrations, ShipX Equips You With The Tools To Scale Worldwide",
      descriptionClassName: "lg:w-[90%] md:w-[80%] w-full lg:mx-0 mx-auto",
      note: "Community Of 1000+ International Shippers From ASEAN",
      primaryButton: {
        text: t("header.book_a_demo"),
        to: "/book-a-demo",
        icon: <CalendarDays className="size-5" />,
      },
      secondaryButton: {
        text: t(
          "hs_code_generator_page.form_section.input_images.upload_files_button",
        ),
        to: "/hs-code-generator",
        icon: <CircleArrowRight className="size-5" />,
      },
    },
  ];

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
          <HeroCarousel
            slides={heroSlides}
            autoPlayInterval={15000}
            autoPlay={true}
          />
          <PartnersSection />
          <ServicesSection />
          <ToolkitSection />
          <NumbersSection />
          <PlatformSection />
          <OfficesSection />
          <AffiliateSection />
          <Blogs />
          <FAQSection />
          <ContactUsNew />
        </div>
      </div>
    </>
  );
};

export default Main;
