import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function ShowcaseSlider({ children }) {
  return (
    <div className="w-auto flex-1 min-w-0">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        effect="fade" // Smooth fade transition fits the "Premium" look
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        className="showcase-swiper w-full h-auto"
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* Reusing your custom pagination styles logic */}
      <style jsx global>{`
        .showcase-swiper .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 20px;
          display: flex;
          justify-content: start;
          gap: 8px;
        }

        .showcase-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: transparent;
          border: 1px solid #4f378a;
          opacity: 1;
          margin: 0 !important;
        }

        .showcase-swiper .swiper-pagination-bullet-active {
          background: #4f378a !important;
        }

        /* ✅ FIX */
        .showcase-swiper .swiper-slide {
          padding: 0;
        }
      `}</style>
    </div>
  );
}
