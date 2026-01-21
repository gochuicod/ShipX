import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { cn } from "../../../lib/util";

import PartnerCard from "./PartnerCard";

export default function PartnerGrid({ partners }) {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <Swiper
        grid={{ rows: 5, fill: "row" }}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 },
          768: {
            slidesPerView: 5,
            grid: { rows: 3, fill: "row" },
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            grid: { rows: 3, fill: "row" },
            spaceBetween: 20,
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Grid, Pagination, Autoplay]}
      >
        {partners.map((partner) => (
          <SwiperSlide
            key={partner.id}
            className="flex justify-center items-center"
          >
            <PartnerCard logo={partner.logo} name={partner.name} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper {
          width: 100%;
        }

        .swiper-pagination {
          position: relative !important;
          margin-top: 16px;
          display: flex !important;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 2px;
          width: auto !important;
          height: 15px;
        }

        .swiper-pagination-bullet {
          width: 15px;
          height: 15px;
          background: transparent;
          border: 2px solid #4f378a;
          border-radius: 9999px;
          opacity: 1;
          flex: none;
          flex-grow: 0;
          cursor: pointer;
          transition: all 500ms ease-in-out;
          margin: 0;
          padding: 0;
        }

        .swiper-pagination-bullet-active {
          width: 30px;
          height: 15px;
          background: #4f378a !important;
          border: none;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}
