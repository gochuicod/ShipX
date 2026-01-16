import { cn } from "../../../lib/util"; // Adjust path as needed
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function ServiceCard({
  title,
  description,
  illustration,
  partners = [],
  countryCodes = [],
  ctaText,
  onCtaClick,
  pricingData = [], // <--- NEW PROP: Pass the specific array from services_pricing here
  className,
}) {
  const { t } = useTranslation();

  // Initialize state with the first item in the pricing list
  const [selectedService, setSelectedService] = useState(
    pricingData[0] || null,
  );

  // Update state if the prop changes (e.g., switching languages)
  useEffect(() => {
    if (pricingData && pricingData.length > 0) {
      setSelectedService(pricingData[0]);
    }
  }, [pricingData]);

  return (
    <div className={cn("flex flex-col w-full max-w-[714px] gap-2", className)}>
      {/* --- TOP: Glassmorphism Card --- */}
      <div
        className={cn(
          "relative flex flex-col md:flex-row items-center",
          "p-8 gap-8 rounded-2xl",
          "bg-[linear-gradient(135deg,rgba(242,148,255,0.2)_0%,rgba(255,230,255,0.1)_41.83%,rgba(242,148,255,0.2)_100%)]",
          "border border-white/50 shadow-sm",
        )}
      >
        {/* LEFT: Dynamic Illustration */}
        <div className="relative w-full md:w-[319px] h-[258px] shrink-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/75 to-white/75 rounded-2xl opacity-50 pointer-events-none" />
          <img
            src={illustration}
            alt={`${title} Illustration`}
            className="relative z-10 w-full h-full object-contain drop-shadow-xl"
          />
        </div>

        {/* RIGHT: Content Area */}
        <div className="flex flex-col items-center md:items-start w-full gap-5">
          <div className="flex flex-col gap-2 w-full text-center md:text-left">
            <h3 className="font-['Inter'] font-bold text-[20px] leading-6 text-[#FF00E5]">
              {title}
            </h3>
            <p className="font-['Inter'] font-normal text-[14px] leading-4 text-[#364153]">
              {description}
            </p>
          </div>

          {/* Delivery Partners */}
          {partners.length > 0 && (
            <div className="flex flex-col gap-1 w-full items-center md:items-start">
              <span className="font-['Inter'] font-bold text-[12px] leading-3.5 text-[#1E2939]">
                {t("services_section.cards.express.partners_label")}:
              </span>
              <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-3 mt-1">
                {partners.map((logoUrl, index) => (
                  <img
                    key={index}
                    src={logoUrl}
                    alt="Partner"
                    className="h-5 w-auto object-contain transition-all"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Country Origin */}
          {countryCodes.length > 0 && (
            <div className="flex flex-col gap-1 w-full items-center md:items-start">
              <span className="font-['Inter'] font-bold text-[12px] leading-3.5 text-[#1E2939]">
                {t("services_section.cards.express.country_label")}:
              </span>
              <div className="flex flex-row items-center gap-2 mt-1">
                {countryCodes.map((code) => (
                  <div
                    key={code}
                    className="w-[30px] h-[30px] rounded-full overflow-hidden shadow-sm border border-white"
                  >
                    <img
                      src={`https://flagcdn.com/${code}.svg`}
                      alt={code}
                      className="w-full h-full object-cover scale-150"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Button */}
          <span
            onClick={onCtaClick}
            className="mt-2 w-full md:w-auto px-6 py-2 bg-[#FBE0FF] rounded-lg transition-colors cursor-pointer hover:bg-[#f0caff]"
          >
            <span className="font-['Inter'] font-bold text-[14px] leading-4 text-[#4D525C] text-center block">
              {ctaText}
            </span>
          </span>
        </div>
      </div>

      {/* --- BOTTOM: Services Covered (Dynamic) --- */}
      {pricingData.length > 0 && selectedService && (
        <div className="flex flex-col items-center xl:items-start gap-2 self-stretch bg-white rounded-b-[12px] w-full">
          <h4 className="font-['Inter'] font-bold text-[16px] leading-5 text-[#1E2939]">
            {t("services_section.cards.express.services_covered_label")}:
          </h4>

          {/* Dynamic Pricing Display Box */}
          <div
            className={cn(
              "bg-[linear-gradient(135deg,rgba(242,148,255,0.2)_0%,rgba(255,230,255,0.1)_41.83%,rgba(242,148,255,0.2)_100%)]",
              "flex flex-row",
              "justify-between items-center",
              "w-full",
              "p-4 rounded-lg",
            )}
          >
            {/* Service Name */}
            <span className="font-['Inter'] font-bold md:text-[16px] text-[14px] leading-4 text-[#4D525C] whitespace-nowrap truncate mr-2">
              {selectedService.service_name}
            </span>

            {/* Price / Weight */}
            <span className="bg-[#FBE0FF] border border-white text-[#4F378A] px-4 py-2 rounded-sm font-medium whitespace-nowrap">
              {selectedService.price} per {selectedService.weight}
            </span>
          </div>

          {/* Clickable Tags */}
          <div className="flex flex-row flex-wrap justify-center xl:justify-start items-start gap-[5px] w-full">
            {pricingData.map((service, idx) => {
              const isSelected =
                selectedService.service_name === service.service_name;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedService(service)}
                  className={cn(
                    "flex flex-row justify-center items-center px-4 py-2 gap-2.5 rounded-sm h-8 cursor-pointer transition-all border",
                    isSelected
                      ? "bg-[#CC00B7] border-transparent" // Active Styles
                      : "border-[#DAB2FF] hover:border-[#DAB2FF]/30", // Inactive Styles
                  )}
                >
                  <span
                    className={cn(
                      "font-['Inter'] font-medium text-[14px] leading-4 whitespace-nowrap",
                      isSelected ? "text-white font-bold" : "text-[#7F22FE]",
                    )}
                  >
                    {service.service_name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
