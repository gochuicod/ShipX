import { lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import { themeGuide } from "../../../../styles/themeGuide";
import { cn } from "../../../../lib/util";
import AffiliateCard from "../../library/AffiliateCard";
import MobileAffiliateCard from "../../library/MobileAffiliateCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Container from "../../library/Container";

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
      heading: t("sg_link_and_amilo_section.sg_link_card.title"),
      headingHighlight: t(
        "sg_link_and_amilo_section.sg_link_card.title_highlighted",
      ),
      subheading: t("sg_link_and_amilo_section.sg_link_card.description"),
      badges: [
        {
          label: t(
            "sg_link_and_amilo_section.sg_link_card.specialties.specialty_1",
          ),
        },
        {
          label: t(
            "sg_link_and_amilo_section.sg_link_card.specialties.specialty_2",
          ),
        },
        {
          label: t(
            "sg_link_and_amilo_section.sg_link_card.specialties.specialty_3",
          ),
        },
      ],
      actions: [
        {
          text: t("sg_link_and_amilo_section.sg_link_card.login_button"),
          style: "secondary",
          onClick: () => window.open("https://admin.sglinkapi.com", "_blank"),
        },
        {
          text: t("sg_link_and_amilo_section.sg_link_card.signup_button"),
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
      heading: t("sg_link_and_amilo_section.amilo_card.title"),
      headingHighlight: t(
        "sg_link_and_amilo_section.amilo_card.title_highlighted",
      ),
      subheading: t("sg_link_and_amilo_section.amilo_card.description"),
      badges: [
        {
          label: t(
            "sg_link_and_amilo_section.amilo_card.specialties.specialty_1",
          ),
        },
        {
          label: t(
            "sg_link_and_amilo_section.amilo_card.specialties.specialty_2",
          ),
        },
        {
          label: t(
            "sg_link_and_amilo_section.amilo_card.specialties.specialty_3",
          ),
        },
      ],
      actions: [
        {
          text: t("sg_link_and_amilo_section.amilo_card.login_button"),
          style: "secondary",
          onClick: () => window.open("https://vip.amilo.co/", "_blank"),
        },
        {
          text: t("sg_link_and_amilo_section.amilo_card.signup_button"),
          style: "primary",
          onClick: () => window.open("https://vip.amilo.co/", "_blank"),
        },
      ],
    },
  ];

  return (
    <Container
      className={cn(
        "relative w-full overflow-visible",
        themeGuide.sectionPaddingY,
      )}
    >
      {/* Desktop and Tablet Layout */}
      <div
        className={`hidden md:flex md:flex-col lg:flex-row justify-center px-0 md:px-20 lg:px-0 items-center gap-12 overflow-visible w-full`}
      >
        {cards.map((card) => (
          <AffiliateCard
            key={card.id}
            containerClassName="w-full"
            className="w-full"
            variant={card.variant}
            badgeVariant={card.badgeVariant}
            logo={card.logo}
            illustration={card.illustration}
            heading={card.heading}
            headingHighlight={card.headingHighlight}
            subheading={card.subheading}
            badges={card.badges}
            actions={card.actions}
          />
        ))}
      </div>

      {/* Mobile Swiper Carousel */}
      <div className="md:hidden overflow-visible w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-bullet",
            bulletActiveClass: "swiper-bullet-active",
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          className="w-full overflow-visible"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="w-full overflow-visible">
              <MobileAffiliateCard
                variant={card.variant}
                badgeVariant={card.badgeVariant}
                logo={card.logo}
                illustration={card.illustration}
                heading={card.heading}
                headingHighlight={card.headingHighlight}
                subheading={card.subheading}
                badges={card.badges}
                actions={card.actions}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination swiper-pagination flex justify-center gap-2 mt-8"></div>
        <style>{`
          .md\:hidden { overflow: visible !important; }
          .md\:hidden .swiper { overflow: visible !important; }
          .md\:hidden .swiper-viewport { overflow: visible !important; }
          .md\:hidden .swiper-wrapper { overflow: visible !important; }
          .custom-pagination {
            position: relative !important;
            display: flex !important;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 8px;
            width: auto !important;
            height: 15px;
            margin-top: 16px;
          }
          .swiper-bullet {
            box-sizing: border-box;
            width: 15px;
            height: 15px;
            background: transparent;
            border: 2px solid #4F378A;
            border-radius: 9999px;
            cursor: pointer;
            transition: all 300ms ease-in-out;
            opacity: 1;
            flex: none;
            margin: 0 !important;
          }
          .swiper-bullet-active {
            width: 30px;
            height: 15px;
            background: #4F378A !important;
            border: none;
            border-radius: 9999px;
          }
          .swiper-slide { padding: 0 12px; display: flex !important; overflow: visible !important; align-items: center; justify-content: center; }
        `}</style>
      </div>
    </Container>
  );
};

export default AffiliateSection;
