import { lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import { margin } from "../../../utils/constants";
import AffiliateCard from "../../library/AffiliateCard";
import { themeGuide } from "../../../../styles/themeGuide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const ParallaxSection = lazy(() => import("../../ui/ParallaxSection"));

const AffiliateSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      id: "shipx",
      variant: "default",
      badgeVariant: "affiliate",
      logo: {
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/main_svg_14.svg",
        alt: "ShipX Logo",
      },
      illustration: {
        src: "https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@shipx-v2/src/assets/affiliate_card/sglink-affiliate-card.webp",
        alt: "Global Shipping",
      },
      heading: (
        <>
          <span className="text-(--secondary)">Expand your business</span>{" "}
          abroad with SG Link's cross-border expertise
        </>
      ),
      subheading:
        "Ship Your all-in-one partner for logistics, fulfillment and global shippingproducts to global markets quickly and securely with end-to-end delivery solutions.",
      badges: [
        { label: "Express Delivery" },
        { label: "Asia-Pacific Routes" },
        { label: "Customs Brokerage" },
      ],
      actions: [
        {
          text: "Login with SG Link",
          style: "secondary",
          onClick: () => window.open("https://admin.sglinkapi.com", "_blank"),
        },
        {
          text: "Sign Up",
          style: "primary",
          onClick: () => window.open("https://admin.sglinkapi.com", "_blank"),
        },
      ],
    },
    {
      id: "amilo",
      variant: "amilo",
      badgeVariant: "affiliateOrange",
      logo: {
        src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/main_svg_15.svg",
        alt: "Amilo Logo",
      },
      illustration: {
        src: "https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@shipx-v2/src/assets/affiliate_card/amilo-affiliate-card.webp",
        alt: "Amilo Illustration",
      },
      heading: (
        <>
          <span className="text-(--secondary)">Your all-in-one partner</span>{" "}
          for logistics, fulfillment and global shipping
        </>
      ),
      subheading:
        "From warehousing to last-mile delivery, Amilo streamlines every step of your supply chain so you can focus on scaling your brand.",
      badges: [
        { label: "Express Delivery" },
        { label: "Asia-Pacific Routes" },
        { label: "Customs Brokerage" },
      ],
      actions: [
        {
          text: "Login with Amilo",
          style: "secondary",
          onClick: () => window.open("https://vip.amilo.co/", "_blank"),
        },
        {
          text: "Sign Up",
          style: "primary",
          onClick: () => window.open("https://vip.amilo.co/", "_blank"),
        },
      ],
    },
  ];

  return (
    <ParallaxSection>
      <div className={`mx-auto relative ${themeGuide.paddingX} w-full`}>
        {/* Desktop and Tablet Layout */}
        <div
          className={`hidden md:flex lg:flex-row md:flex-col justify-center items-stretch gap-32 lg:gap-8 md:gap-22`}
        >
          {cards.map((card) => (
            <AffiliateCard
              key={card.id}
              containerClassName="h-full w-full"
              className="flex-1 w-full"
              variant={card.variant}
              badgeVariant={card.badgeVariant}
              logo={card.logo}
              illustration={card.illustration}
              heading={card.heading}
              subheading={card.subheading}
              badges={card.badges}
              actions={card.actions}
            />
          ))}
        </div>

        {/* Mobile Swiper Carousel Layout */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "swiper-bullet",
              bulletActiveClass: "swiper-bullet-active",
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            className="w-full pt-20! pb-2!"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="w-full">
                <AffiliateCard
                  containerClassName="h-full w-full"
                  className="w-full"
                  variant={card.variant}
                  badgeVariant={card.badgeVariant}
                  logo={card.logo}
                  illustration={card.illustration}
                  heading={card.heading}
                  subheading={card.subheading}
                  badges={card.badges}
                  actions={card.actions}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="custom-pagination swiper-pagination mt-4 flex justify-center gap-2"></div>
          <style>{`
            .custom-pagination {
              display: flex;
              justify-content: center;
              gap: 8px;
            }
            .swiper-bullet {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: transparent;
              border: 2px solid #4F378A;
              cursor: pointer;
              transition: all 0.3s ease;
              flex: none;
              order: 0;
              flex-grow: 0;
            }
            .swiper-bullet-active {
              background: #4F378A;
              border: 2px solid #4F378A;
            }
            .swiper-slide {
              padding: 0 12px;
            }
          `}</style>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default AffiliateSection;
