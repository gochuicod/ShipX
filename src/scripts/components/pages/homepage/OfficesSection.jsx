import AppButton from "../../library/AppButton";
import Description from "../../library/Description";
import HighlightedHeading from "../../library/HighlightedHeading";
import OfficePopover from "../../library/OfficePopover";
import Container from "../../library/Container";

import { cn } from "../../../../lib/util";
import { themeGuide } from "../../../../styles/themeGuide";
import { Badge } from "../../../../styles/badge";

import { officesSectionCountries } from "../../../utils/constants";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

import Map from "../../svgs/Map";

function CountryButtons({ onHover }) {
  const { t } = useTranslation();

  // Track which country is currently active (string | null)
  const [activeCountryName, setActiveCountryName] = useState(null);

  // Detect touch devices (Mobile/Tablet)
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // --- Handlers ---

  // Desktop: Hover triggers popover + map highlight
  const handleMouseEnter = (name) => {
    if (!isTouch) {
      setActiveCountryName(name);
      onHover && onHover(name);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch) {
      setActiveCountryName(null);
      onHover && onHover(null);
    }
  };

  // Mobile: Click toggles popover + map highlight
  const handleClick = (name) => {
    if (isTouch) {
      if (activeCountryName === name) {
        // If clicking the same one, close it
        setActiveCountryName(null);
        onHover && onHover(null);
      } else {
        // Open new one
        setActiveCountryName(name);
        onHover && onHover(name);
      }
    }
  };

  // Mobile: Close when clicking background
  const handleBackgroundClick = () => {
    setActiveCountryName(null);
    onHover && onHover(null);
  };

  return (
    <>
      {/* Mobile Backdrop: Only visible on touch when a popover is open */}
      {isTouch && activeCountryName && (
        <div
          className="fixed inset-0 z-10 cursor-default bg-transparent"
          onClick={handleBackgroundClick}
        />
      )}

      <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-6">
        {officesSectionCountries.map((item) => {
          const officeKey = item.country_key;
          const countryName = t(item.country_key);

          const office = {
            country_name: countryName,
            address: item.location_key ? t(item.location_key) : "",
            email: item.email_key ? t(item.email_key) : "",
            icon: item.icon,
          };

          const isOpen = activeCountryName === countryName;

          return (
            <div
              key={officeKey}
              className={cn("relative transition-all", isOpen ? "z-20" : "z-0")}
              onMouseEnter={() => handleMouseEnter(countryName)}
              onMouseLeave={handleMouseLeave}
            >
              <AppButton
                variant={"quaternary"}
                text={countryName}
                withLeftIcon
                leftIcon={item.icon}
                iconRounded
                // We handle click manually for mobile support
                onClick={() => handleClick(countryName)}
              />

              {/* Render Popover if active */}
              {isOpen && <OfficePopover office={office} />}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function OfficesSection() {
  const { t } = useTranslation();
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <div className={cn("bg-linear-to-b from-[#FAF5FF] to-[#FFFFFF]")}>
      <Container
        className={cn(
          "flex xl:flex-row flex-col-reverse justify-center items-center gap-x-8 py-32",
        )}
      >
        {/* LEFT: Image + mobile buttons */}
        <div className="lg:w-[50%] w-full flex flex-col items-center">
          <div className="relative w-full h-auto">
            {/* 3. Pass the dynamic state instead of the hardcoded string */}
            <Map activeCountry={hoveredCountry} />
          </div>

          {/* Buttons BELOW image on md and below */}
          <div className="block xl:hidden w-full">
            <CountryButtons onHover={setHoveredCountry} />
          </div>
        </div>

        {/* RIGHT: Text + desktop buttons */}
        <div
          className="
            flex flex-col
            xl:w-[50%] w-full
            xl:justify-start justify-center
            xl:items-start items-center
          "
        >
          <Badge variant="toolkit" size="default">
            {t("our_offices_section.badge")}
          </Badge>

          <HighlightedHeading
            text={t("our_offices_section.title")}
            highlight={t("our_offices_section.title_heading")}
            className="
              text-2xl
              xl:text-start text-center
              font-semibold
              mt-2
            "
          />

          <Description
            className="
              md:text-base text-sm
              xl:text-start text-center
              mb-4
              w-full
            "
          >
            {t("our_offices_section.description")}
          </Description>

          {/* Buttons on the RIGHT for xl+ */}
          <div className="hidden xl:block w-full">
            <CountryButtons onHover={setHoveredCountry} />
          </div>
        </div>
      </Container>
    </div>
  );
}
