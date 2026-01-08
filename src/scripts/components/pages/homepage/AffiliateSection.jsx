import { lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import { themeGuide } from "../../../../styles/themeGuide";
import AffiliateCard from "../../library/AffiliateCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
      heading: (
        <>
          <span className="text-(--secondary)">
            {t("sg_link_and_amilo_section.sg_link_card.title_highlighted")}
          </span>{" "}
          {t("sg_link_and_amilo_section.sg_link_card.title")}
        </>
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
      heading: (
        <>
          <span className="text-(--secondary)">
            {t("sg_link_and_amilo_section.amilo_card.title_highlighted")}
          </span>{" "}
          {t("sg_link_and_amilo_section.amilo_card.title")}
        </>
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
    <Container className="relative w-full lg:pt-32 lg:pb-0 pt-16">
      {/* Desktop and Tablet Layout */}
      <div
        className={`hidden md:flex lg:flex-row md:flex-col justify-center items-stretch gap-32 lg:gap-8 md:gap-22`}
      >
        {cards.map((card) => (
          <AffiliateCard
            key={card.id}
            containerClassName="h-full w-full"
            className="flex-1 w-full h-full"
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

      {/* Mobile Swiper Carousel */}
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

        <div className="custom-pagination swiper-pagination mt-4 flex justify-center gap-2"></div>
        <style>{`
          .custom-pagination { display: flex; justify-content: center; gap: 8px; }
          .swiper-bullet {
            width: 10px; height: 10px; border-radius: 50%; background: transparent;
            border: 2px solid #4F378A; cursor: pointer; transition: all 0.3s ease;
          }
          .swiper-bullet-active { background: #4F378A; border: 2px solid #4F378A; }
          .swiper-slide { padding: 0 12px; }
        `}</style>
      </div>
    </Container>
  );
};

export default AffiliateSection;
