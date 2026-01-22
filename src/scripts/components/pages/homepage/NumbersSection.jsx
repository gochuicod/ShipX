import StatItems from "../../library/StatItems";
import Container from "../../library/Container";
import HighlightedHeading from "../../library/HighlightedHeading";
import AppButton from "../../library/AppButton";

import { Badge } from "../../../../styles/badge";
import { getNumbersSectionStatsData } from "../../../utils/constants";

import { useTranslation } from "react-i18next";
import { CalendarDays } from "lucide-react";

import { cn } from "../../../../lib/util";
import { themeGuide } from "../../../../styles/themeGuide";

export default function NumbersSection() {
  const { t } = useTranslation();
  const statsData = getNumbersSectionStatsData(t);

  return (
    <Container
      className={cn(
        "flex flex-col justify-center items-center w-full px-2 md:gap-8 gap-4",
        themeGuide.sectionPaddingY,
      )}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <Badge variant="toolkit" size="default">
          {t("our_numbers_section.badge")}
        </Badge>
        <HighlightedHeading
          text={t("our_numbers_section.title")}
          highlight={t("our_numbers_section.title_highlighted")}
          className="lg:text-[32px] lg:leading-10 md:text-[28px] md:leading-8 text-[28px] leading-8 font-semibold mt-2 text-center"
        />
      </div>

      {/*
        Mobile: max-w-[390px] allows 3 items with gap-x-2 to fit 3x2.
        Tablet (MD): max-w-[700px] for a spacious 3x2.
        Desktop (LG): flex-nowrap for the 6x1 single row.
      */}
      <div
        className="
              flex flex-wrap lg:flex-row
              justify-center items-start
              w-full max-w-[376px] md:max-w-[632px] lg:max-w-[1248px]
              py-6 md:gap-8 gap-4
          "
      >
        {statsData.map((stat) => (
          <StatItems
            key={stat.id}
            icon={stat.icon}
            headingValue={stat.headingValue}
            headingSuffix={stat.headingSuffix}
            description={stat.description}
          />
        ))}
      </div>

      <AppButton
        to="/book-a-demo"
        text={t("header.book_a_demo")}
        withLeftIcon={true}
        leftIcon={<CalendarDays className="size-5" />}
      />
    </Container>
  );
}
