import { cn } from "../../../lib/util";
import { useTranslation } from "react-i18next";

export default function ServiceCard({
  title,
  description,
  illustration,
  partners = [],
  countryCodes = [],
  ctaText,
  onCtaClick,
  servicesCovered = [],
  className,
}) {
  const { t } = useTranslation();

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
          <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/75 to-white/75 border border-white rounded-2xl opacity-50 pointer-events-none" />
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
          <button
            onClick={onCtaClick}
            className="mt-2 w-full md:w-auto px-6 py-2 bg-[#4D179A] rounded-lg hover:bg-[#3d127a] transition-colors shadow-md active:scale-95"
          >
            <span className="font-['Inter'] font-bold text-[14px] leading-4 text-white text-center block">
              {ctaText}
            </span>
          </button>
        </div>
      </div>

      {/* --- BOTTOM: Services Covered (Responsive Alignment) --- */}
      {servicesCovered.length > 0 && (
        <div className="flex flex-col items-center xl:items-start p-4 md:px-4 md:py-2 gap-2 self-stretch bg-white rounded-b-[12px] w-full">
          <h4 className="font-['Inter'] font-bold text-[16px] leading-5 text-[#1E2939]">
            {t("services_section.cards.express.services_covered_label")}:
          </h4>

          <div className="flex flex-row flex-wrap justify-center xl:justify-start items-start gap-[5px] w-full">
            {servicesCovered.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-row justify-center items-center px-4 py-2 gap-2.5 bg-[#FAF5FF] rounded-lg h-8"
              >
                <span className="font-['Inter'] font-medium text-[14px] leading-4 text-[#7F22FE] whitespace-nowrap">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
