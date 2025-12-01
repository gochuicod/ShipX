import React from "react";
import faqCtaBg from "../../../assets/faq_cta_bg.webp";
import faqCtaBgMobile from "../../../assets/faq_cta_bg_mobile.webp";

const FAQCTASection = () => {
  return (
    <div
      className="
        flex flex-col md:flex-row
        items-center justify-between
        mx-auto
        px-[4vw]
        w-full md:w-[55vw]
        
        md:mb-[4vw] mb-0
        
        bg-contain bg-center bg-no-repeat
        bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]
        
        rounded-[20px] md:rounded-[1.4vw]
        
        overflow-hidden
        relative
        
        /* Top & Bottom Padding: 30px -> 2.1vw */
        py-8 md:py-[4.5vw]
      "
      style={{
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        "--bg-mobile": `url(${faqCtaBgMobile})`,
        "--bg-desktop": `url(${faqCtaBg})`,
      }}
    >
      {/* --- Center Content --- */}
      <div
        className="
          flex flex-col
          items-center justify-center
          text-center
          flex-1
          z-10
          
          /* Mobile Padding */
          px-6 
          
          /* Desktop Left/Right Padding: 60px -> 4.2vw */
          md:px-[4.2vw]
        "
      >
        <span
          className="
            text-[#1a1a1a]
            font-bold
            leading-tight
            mb-3
            
            /* Text Size: 30px -> 2.1vw */
            text-xl md:text-[1.6vw]
          "
        >
          Didn’t find what you were looking for?
        </span>

        <span
          className="
            text-[#555555]
            font-normal
            leading-relaxed
            max-w-xl
            mb-6
            
            /* Text Size: 16px -> 1.1vw */
            text-sm md:text-[0.75vw]
          "
        >
          Don't let a question slow down your supply chain. Reach out to our
          support team directly and we'll get your goods moving in the right
          direction.
        </span>

        <a href="/#contact-us">
          <button
            type="button"
            className="
              flex items-center justify-center
              
              /* Background Gradient */
              bg-gradient-to-r from-[#4F378A] to-[#FF00E5]
              hover:opacity-90
              transition-all duration-300
              
              text-white
              font-medium
              shadow-lg shadow-purple-500/30
              cursor-pointer
              rounded-full

              /* Mobile Styles */
              px-6 py-2 text-sm

              /* Desktop VW Conversions */
              /* Padding L/R: 20px -> 1.4vw */
              /* Padding T/B: 7px -> 0.5vw */
              md:px-[1.4vw] md:py-[0.5vw]
              
              /* Font Size: 12px -> 0.85vw */
              md:text-[0.85vw]
            "
          >
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default FAQCTASection;
