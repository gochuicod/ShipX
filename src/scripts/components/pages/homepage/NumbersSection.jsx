import StatItems from "../../library/StatItems";
import Container from "../../library/Container";

import { Badge } from "../../../../styles/badge";
import HighlightedHeading from "../../library/HighlightedHeading";
import { getNumbersSectionStatsData } from "../../../utils/constants";
import { useTranslation } from "react-i18next";

export default function NumbersSection() {
  const { t } = useTranslation();
  const statsData = getNumbersSectionStatsData(t);

  return (
    <Container className="flex flex-col justify-center items-center w-full px-2 lg:pt-32 lg:pb-0 pt-16">
      <div className="flex flex-col justify-center items-center">
        <Badge variant="toolkit" size="default">
          {t("our_numbers_section.badge")}
        </Badge>
        <HighlightedHeading
          text={t("our_numbers_section.title")}
          highlight={t("our_numbers_section.title_highlighted")}
          className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
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
    </Container>
  );
}
