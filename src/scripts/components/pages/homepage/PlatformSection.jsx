import { Badge } from "../../../../styles/badge";
import { themeGuide } from "../../../../styles/themeGuide";

import { cn } from "../../../../lib/util";

import HighlightedHeading from "../../library/HighlightedHeading";
import Description from "../../library/Description";
import PartnerCard from "../../library/PartnerCard";

const partners = [
  {
    logo: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/shopify.webp",
    name: "shopify",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/lazada.webp",
    name: "lazada",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/shopee.webp",
    name: "shopee",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/amazon.webp",
    name: "amazon",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ebay.webp",
    name: "ebay",
  },
];

export default function PlatformSection() {
  return (
    <div
      className={cn(
        themeGuide.paddingX,
        "2xl:py-32 md:py-16 py-12 flex 2xl:flex-row flex-col justify-center items-center gap-x-8",
      )}
    >
      {/* Left side of the section */}
      <div
        className="
                    flex flex-col
                    2xl:w-[35%] w-full
                    2xl:justify-end justify-center
                    2xl:items-end items-center
                "
      >
        <Badge variant="toolkit" size="default">
          Our Platform
        </Badge>
        <HighlightedHeading
          text="Our Unified Platform for\nGlobal Logistics"
          highlight="Global Logistics"
          className="
                        text-2xl
                        2xl:text-end text-center
                        font-semibold
                        mt-2
                    "
        />
        <Description
          className="
                        md:text-base text-sm
                        2xl:text-end text-center
                        mb-4
                        2xl:w-[70%] md:w-[80%] w-full
                    "
        >
          Simplify cross-border trade with a single dashboard for shipping,
          fulfillment and compliance.
        </Description>
        <div className="flex flex-row gap-x-8">
          {partners.map((partner, index) => {
            return (
              <PartnerCard
                key={index}
                logo={partner.logo}
                name={partner.name}
                size="small"
                className="w-fit"
              />
            );
          })}
        </div>
      </div>
      {/* Right side of the section */}
      <div className="2xl:w-[65%] w-full 2xl:mt-0 mt-8">
        <img
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/platform_section/shipx_dashboard_mockup.webp"
          alt="ShipX Dashboard Mockup"
          className="p-1"
        />
      </div>
    </div>
  );
}
