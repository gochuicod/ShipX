import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function ShowcaseSlider({ children }) {
  return (
    <div className="w-full flex-1 min-w-0">
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
          margin-top: 16px;
          display: flex !important;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;

          /* Figma Spec: Gap 8px */
          gap: 8px;

          width: auto !important;
          height: 15px;
        }

        .showcase-swiper .swiper-pagination-bullet {
          /* Figma Spec: Box-sizing ensures border is inside the 15px width */
          box-sizing: border-box;

          width: 15px;
          height: 15px;
          background: transparent;

          /* Border styling */
          border: 2px solid #4f378a;
          border-radius: 9999px;

          opacity: 1;
          flex: none;
          cursor: pointer;
          transition: all 300ms ease-in-out;

          /* Reset swiper default margins so 'gap' works correctly */
          margin: 0 !important;
        }

        .showcase-swiper .swiper-pagination-bullet-active {
          width: 30px;
          height: 15px;
          background: #4f378a !important;

          /* Remove border for the filled active state */
          border: none;
          border-radius: 9999px;
        }

        /* ✅ FIX */
        .showcase-swiper .swiper-slide {
          padding: 0;
        }
      `}</style>
    </div>
  );
}
