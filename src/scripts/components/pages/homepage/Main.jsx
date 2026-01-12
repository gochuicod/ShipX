import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../../../../lib/util";

import { CalendarDays, ChevronDown } from "lucide-react";

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
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/hero_image_1.png",
      bgClassName: cn(
        "2xl:bg-size-[1139px_636px] md:bg-size-[1093px_636px] bg-size-[724px_445px]",
        "2xl:bg-position-[30vw_center] bg-position-[center_bottom]",
      ),
      title: t("hero_section.slides.slide_1.title"),
      titleHighlight: t("hero_section.slides.slide_1.title_highlighted"),
      description: t("hero_section.slides.slide_1.description"),
      note: t("hero_section.slides.slide_1.note"),
      primaryButton: {
        text: t("hero_section.slides.slide_1.button_1"),
        to: "/book-a-demo",
        icon: <CalendarDays className="size-5" />,
      },
      secondaryButton: {
        text: t("hero_section.slides.slide_1.button_2"),
        to: "/#partners",
        icon: <ChevronDown className="size-5" />,
      },
    },
    {
      id: 2,
      image:
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/hero_image_2.png",
      bgClassName: cn(
        "2xl:bg-size-[1239px_auto] md:bg-size-[1093px_auto] bg-size-[724px_auto]",
        "2xl:bg-position-[30vw_0vw] md:bg-position-[center_5vw] sm:bg-position-[center_30vw] bg-position-[center_50vw]",
      ),
      title: t("hero_section.slides.slide_2.title"),
      titleHighlight: t("hero_section.slides.slide_2.title_highlighted"),
      description: t("hero_section.slides.slide_2.description"),
      note: t("hero_section.slides.slide_2.note"),
      primaryButton: {
        text: t("hero_section.slides.slide_2.button_1"),
        to: "/book-a-demo",
        icon: <CalendarDays className="size-5" />,
      },
      secondaryButton: {
        text: t("hero_section.slides.slide_1.button_2"),
        to: "/#partners",
        icon: <ChevronDown className="size-5" />,
      },
    },
    {
      id: 3,
      image:
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/hero_image_3_v2.png",
      bgClassName: cn(
        "2xl:bg-size-[1139px_636px] md:bg-size-[1093px_636px] bg-size-[724px_445px]",
        "2xl:bg-position-[30vw_center] bg-position-[center_bottom]",
      ),
      title: t("hero_section.slides.slide_3.title"),
      titleHighlight: t("hero_section.slides.slide_3.title_highlighted"),
      description: t("hero_section.slides.slide_3.description"),
      note: t("hero_section.slides.slide_3.note"),
      primaryButton: {
        text: t("hero_section.slides.slide_3.button_1"),
        to: "/book-a-demo",
        icon: <CalendarDays className="size-5" />,
      },
      secondaryButton: {
        text: t("hero_section.slides.slide_1.button_2"),
        to: "/#partners",
        icon: <ChevronDown className="size-5" />,
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
          {/* <HeroCarousel
            slides={heroSlides}
            autoPlayInterval={15000}
            autoPlay={true}
          />
          <PartnersSection />
          <ServicesSection />
          <ToolkitSection />
          <NumbersSection />
          <PlatformSection /> */}
          <OfficesSection />
          {/* <AffiliateSection />
          <Blogs />
          <FAQSection />
          <ContactUsNew /> */}
        </div>
      </div>
    </>
  );
};

export default Main;
