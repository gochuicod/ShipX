import AppButton from "../../library/AppButton";
import Description from "../../library/Description";
import HighlightedHeading from "../../library/HighlightedHeading";
import OfficePopover from "../../library/OfficePopover";
import Container from "../../library/Container";

import { cn } from "../../../../lib/util";
import { Badge } from "../../../../styles/badge";

import { officesSectionCountries } from "../../../utils/constants";

import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

import Map from "../../svgs/Map";
import { CalendarDays } from "lucide-react";
import { themeGuide } from "../../../../styles/themeGuide";

/* --------------------------------------------
 * CountryButtons
 * ------------------------------------------ */

function CountryButtons({ onActiveChange }) {
  const { t } = useTranslation();

  const [activeCountry, setActiveCountry] = useState(null);
  const [pinnedCountry, setPinnedCountry] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  /* ---------- helpers ---------- */

  const activate = (name) => {
    setActiveCountry(name);
    onActiveChange?.(name);
  };

  const deactivate = () => {
    setActiveCountry(null);
    setPinnedCountry(null);
    onActiveChange?.(null);
  };

  /* ---------- desktop hover ---------- */

  const handleMouseEnter = (name) => {
    if (isTouch || pinnedCountry) return;

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    activate(name);
  };

  const handleMouseLeave = () => {
    if (isTouch || pinnedCountry) return;

    closeTimeoutRef.current = setTimeout(() => {
      deactivate();
    }, 200);
  };

  /* ---------- click (desktop + mobile) ---------- */

  const handleClick = (name) => {
    if (activeCountry === name) {
      deactivate();
    } else {
      setPinnedCountry(name);
      activate(name);
    }
  };

  /* ---------- mobile backdrop ---------- */

  const handleBackdropClick = () => {
    deactivate();
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isTouch && activeCountry && (
        <div
          className="fixed inset-0 z-10 bg-transparent"
          onClick={handleBackdropClick}
        />
      )}

      {/* Country Button Styling */}
      <div className="flex flex-wrap justify-center md:justify-center lg:justify-start gap-4 md:gap-4 lg:mt-6 relative z-20">
        {officesSectionCountries.map((item) => {
          const countryName = t(item.country_key);

          const office = {
            country_name: countryName,
            address: item.location_key ? t(item.location_key) : "",
            email: item.email_key ? t(item.email_key) : "",
            icon: item.icon,
          };

          const isOpen = activeCountry === countryName;

          return (
            <div
              key={item.country_key}
              className={cn("relative transition-all")}
              onMouseEnter={() => handleMouseEnter(countryName)}
              onMouseLeave={handleMouseLeave}
            >
              <AppButton
                variant="quaternary"
                text={countryName}
                withLeftIcon
                leftIcon={item.icon}
                leftIconClassName={
                  "relative after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.4)]"
                }
                iconRounded
                onClick={() => handleClick(countryName)}
                className={cn(isOpen && "bg-[rgba(204,0,183,0.12)]")}
              />

              {isOpen && <OfficePopover office={office} />}
            </div>
          );
        })}
      </div>
    </>
  );
}

/* --------------------------------------------
 * OfficesSection
 * ------------------------------------------ */

export default function OfficesSection() {
  const { t } = useTranslation();
  const [activeCountry, setActiveCountry] = useState(null);

  return (
    <div className="bg-linear-to-b from-[#FAF5FF] to-[#FFFFFF]">
      <Container
        className={cn(
          "flex lg:flex-row flex-col-reverse",
          themeGuide.sectionPaddingY,
          "justify-center items-center gap-x-8",
        )}
      >
        {/* LEFT: Map + mobile buttons */}
        <div className="lg:w-[50%] md:w-full w-full flex flex-col md:gap-8 lg:gap-8 gap-4 items-center">
          <div className="relative w-full h-auto my-6">
            <Map activeCountry={activeCountry} />
          </div>

          {/* Buttons below map on mobile */}
          <div className="block lg:hidden w-full">
            <CountryButtons onActiveChange={setActiveCountry} />
          </div>
        </div>

        {/* RIGHT: Text + desktop buttons */}
        <div
          className="
            flex flex-col
            lg:w-[50%] md:w-full w-full
            lg:items-start md:items-center items-center md:gap-4 lg:gap-2 gap-2
          "
        >
          <Badge variant="toolkit" size="default">
            {t("our_offices_section.badge")}
          </Badge>

          <HighlightedHeading
            text={t("our_offices_section.title")}
            highlight={t("our_offices_section.title_highlighted")}
            className="
              lg:text-[32px] lg:leading-10 md:text-[28px] md:leading-8 text-[28px] leading-8
              lg:text-start md:text-center text-center
              font-semibold
              mt-2
            "
          />

          <Description
            className="
              md:text-base text-sm
              lg:text-start md:text-center text-center
              mb-2
              w-full
            "
          >
            {t("our_offices_section.description")}
          </Description>

          <AppButton
            to="/book-a-demo"
            text={t("header.book_a_demo")}
            withLeftIcon
            leftIcon={<CalendarDays className="size-5" />}
          />

          {/* Buttons on the right for lg+ */}
          <div className="hidden lg:block w-full">
            <CountryButtons onActiveChange={setActiveCountry} />
          </div>
        </div>
      </Container>
    </div>
  );
}
