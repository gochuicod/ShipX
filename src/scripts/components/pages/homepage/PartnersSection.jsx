import Description from "../../library/Description";
import HighlightedHeading from "../../library/HighlightedHeading";
import AppButton from "../../library/AppButton";

import { Badge } from "../../../../styles/badge";
import { themeGuide } from "../../../../styles/themeGuide";

import { cn } from "../../../../lib/util";

import { CircleArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { partnersSectionData } from "../../../utils/constants";

function PartnerCard({ logo, name, className }) {
  return (
    <div
      className={cn(
        "group flex min-h-[60px] w-full items-center justify-center",
        className,
      )}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
      />
    </div>
  );
}

function PartnerGrid({ partners }) {
  return (
    <div>
      <Swiper
        grid={{ rows: 5, fill: "row" }}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 },
          640: {
            slidesPerView: 5,
            grid: {
              rows: 3,
              fill: "row",
            },
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            grid: {
              rows: 3,
              fill: "row",
            },
            spaceBetween: 30,
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Grid, Pagination, Autoplay]}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <PartnerCard logo={partner.logo} name={partner.name} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #4c3794 !important;
        }
        .swiper-pagination {
          bottom: 0px !important;
          position: relative !important;
          margin-top: 16px;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: transparent;
          border: 2px solid #4c3794;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #4c3794;
        }
      `}</style>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <div
      className={cn(
        themeGuide.paddingX,
        "2xl:py-32 md:py-16 py-12 flex 2xl:flex-row flex-col justify-center items-start gap-x-8",
      )}
    >
      {/* Left side of the section */}
      <div
        className="
                    flex flex-col
                    2xl:w-[35%] w-full
                    2xl:justify-end justify-center
                    2xl:items-end items-center
                "
      >
        <Badge variant="toolkit" size="default">
          Our Partners
        </Badge>
        <HighlightedHeading
          text="Powering Growth\nwith World-Class Partners"
          highlight="World-Class Partners"
          className="
                        text-2xl
                        2xl:text-end text-center
                        font-semibold
                        mt-2
                    "
        />
        <Description
          className="
                        md:text-base text-sm
                        2xl:text-end text-center
                        mb-4
                        2xl:w-auto md:w-[80%] w-full
                    "
        >
          We've built a unified network of leading marketplaces, logistics
          carriers, and technology providers to ensure your business thrives
          globally.
        </Description>
        <AppButton
          text="Partner with Us"
          withRightIcon={true}
          rightIcon={<CircleArrowRight className="size-5" />}
        />
      </div>
      <div className="2xl:w-[65%] w-full 2xl:mt-0 mt-8">
        <PartnerGrid partners={partnersSectionData} />
      </div>
    </div>
  );
}
