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
        "flex flex-col justify-center items-center w-full px-2",
        themeGuide.sectionPaddingY,
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <Badge variant="toolkit" size="default">
          {t("our_numbers_section.badge")}
        </Badge>
        <HighlightedHeading
          text={t("our_numbers_section.title")}
          highlight={t("our_numbers_section.title_highlighted")}
          className="2xl:text-[32px] 2xl:leading-10 text-[28px] leading-8 font-semibold mt-2 text-center"
        />
      </div>

      {/*
        SM (Mobile): max-w-[390px] allows 3 items (110px each) with gap-x-2 to fit 3x2.
        MD (Tablet): max-w-[632px] for a spacious 3x2.
        2XL (Desktop): flex-nowrap for the 6x1 single row.
      */}
      <div
        className="
              flex flex-wrap 2xl:flex-nowrap
              justify-center items-start
              mt-10 2xl:mt-14
              mb-10.5
              p-[24px_0px]
              gap-y-10
              gap-x-2 sm:gap-x-4 md:gap-x-12 2xl:gap-8
              w-full max-w-[390px] md:max-w-[700px] 2xl:max-w-[1248px]
              mx-auto
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
