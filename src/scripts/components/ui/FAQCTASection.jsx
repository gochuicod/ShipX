const FAQCTASection = ({ ctaData }) => {
  // Use CDN URLs directly instead of importing
  const bgDesktop =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/faq_cta_bg.webp";
  const bgMobile =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/faq_cta_bg_mobile.webp";

  return (
    <div
      className="
        flex flex-col md:flex-row
        items-center justify-between
        mx-auto
        
        w-full md:w-[50vw]
        
        md:mb-[4vw] mb-0
        
        /* bg-contain ensures the whole image is visible */ bg-center bg-no-repeat
        bg-(image:--bg-mobile) md:bg-(image:--bg-desktop)
        
        /* Apply corners on all devices */
        rounded-[20px] md:rounded-[1.4vw]
        
        overflow-hidden
        relative
        
        /* Top & Bottom Padding */
        py-8 md:py-[2.1vw]
      "
      style={{
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        "--bg-mobile": `url(${bgMobile})`,
        "--bg-desktop": `url(${bgDesktop})`,
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
          
          /* Desktop Left/Right Padding */
          md:px-[4.2vw]
        "
      >
        <span
          className="
            text-[#1a1a1a]
            font-bold
            leading-tight
            mb-3
            
            /* Text Size */
            text-2xl md:text-[1.6vw]
          "
        >
          {ctaData?.title || "Didn’t find what you were looking for?"}
        </span>

        <span
          className="
            text-[#555555]
            font-semibold
            leading-relaxed
            max-w-xl
            mb-6
            
            /* Text Size */
            text-sm md:text-[0.75vw]
          "
        >
          {ctaData?.subtitle ||
            "Don't let a question slow down your supply chain. Reach out to our support team directly and we'll get your goods moving in the right direction."}
        </span>

        <a href="/#contact-us">
          <button
            type="button"
            className="
              flex items-center justify-center
              
              /* Background Gradient */
              bg-linear-to-r from-[#4F378A] to-[#FF00E5]
              hover:opacity-90
              transition-all duration-300
              
              text-white
              font-medium
              shadow-lg shadow-purple-500/30
              cursor-pointer
              rounded-full

              /* Mobile Styles */
              px-6 py-2 text-sm

              /* Desktop VW Styles */
              md:px-[1.4vw] md:py-[0.5vw]
              md:text-[0.75vw]
            "
          >
            {ctaData?.buttons?.contact_us || "Contact Us"}
          </button>
        </a>
      </div>
    </div>
  );
};

export default FAQCTASection;
