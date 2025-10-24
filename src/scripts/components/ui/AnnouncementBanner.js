import { lazy } from "react";
import { useTranslation } from "react-i18next";
const ParallaxSection = lazy(() => import("./ParallaxSection"));
const NewsletterForm = lazy(() => import("./NewsletterForm"));

const AnnouncementBanner = () => {
  const { t } = useTranslation();

  return (
    <ParallaxSection>
      <div className="w-full justify-center items-center flex md:px-0 px-[5vw]">
        <div
          className={`flex md:flex-row flex-col w-fit justify-center items-center md:gap-x-[3vw] gap-x-[11vw] bg-gradient-to-r from-[#4F378A] from-5% to-[#FF00E5] to-100% md:rounded-[2vw] rounded-[4vw] md:pl-[8vw] pl-[5vw] md:pt-0 pt-[5vw] md:pb-0 pb-[5vw] md:pr-0 pr-[5vw] md:my-[5vw] my-[10vw]`}
        >
          <div className="flex flex-col">
            <span
              className="text-[#FFFFFF] md:text-[2.3vw] text-[6vw] font-semibold md:text-start text-center"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              {t("newsletter_section.header_1")}
            </span>
            <p className="text-[#FFFFFF] md:text-[0.85vw] text-[2.5vw] md:text-start text-center md:pt-[0.5vw] pt-[2vw]">
              {t("newsletter_section.description_1")}
              <br className="md:block hidden" />
              {t("newsletter_section.description_2")}
            </p>
            <NewsletterForm />
          </div>
          <div className="flex flex-col">
            <div
              className="md:flex hidden md:w-[25vw] w-[80vw] md:h-[15vw] h-[30vw] md:bg-size-[25vw_15vw] bg-size-[100vw_50vw] bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_13.svg")`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default AnnouncementBanner;
