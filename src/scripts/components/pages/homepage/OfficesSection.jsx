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

      <div className="flex flex-wrap justify-center 2xl:justify-start gap-4 2xl:mt-6 relative z-20">
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
                iconRounded
                onClick={() => handleClick(countryName)}
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
          "flex 2xl:flex-row flex-col-reverse",
          themeGuide.sectionPaddingY,
          "justify-center items-center gap-x-8",
        )}
      >
        {/* LEFT: Map + mobile buttons */}
        <div className="2xl:w-[50%] w-full flex flex-col items-center">
          <div className="relative w-full h-auto my-6">
            <Map activeCountry={activeCountry} />
          </div>

          {/* Buttons below map on mobile */}
          <div className="block 2xl:hidden w-full">
            <CountryButtons onActiveChange={setActiveCountry} />
          </div>
        </div>

        {/* RIGHT: Text + desktop buttons */}
        <div
          className="
            flex flex-col
            2xl:w-[50%] w-full
            2xl:items-start items-center
          "
        >
          <Badge variant="toolkit" size="default">
            {t("our_offices_section.badge")}
          </Badge>

          <HighlightedHeading
            text={t("our_offices_section.title")}
            highlight={t("our_offices_section.title_highlighted")}
            className="
              text-2xl
              2xl:text-start text-center
              font-semibold
              mt-2
            "
          />

          <Description
            className="
              md:text-base text-sm
              2xl:text-start text-center
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

          {/* Buttons on the right for xl+ */}
          <div className="hidden 2xl:block w-full">
            <CountryButtons onActiveChange={setActiveCountry} />
          </div>
        </div>
      </Container>
    </div>
  );
}
