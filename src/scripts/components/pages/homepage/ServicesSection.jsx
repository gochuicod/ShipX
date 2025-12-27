import { useState } from "react";
import { cn } from "../../../../lib/util";
import { themeGuide } from "../../../../styles/themeGuide";
import ServicesItems from "../../library/ServicesItems";
import ServiceCard from "../../library/ServiceCard";
import { Badge } from "../../../../styles/badge";
import HighlightedHeading from "../../library/HighlightedHeading";
import Description from "../../library/Description";
import AppButton from "../../library/AppButton";
import { CalendarDays } from "lucide-react";

const services = [
  {
    id: "express",
    title: "Express",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplaneairplane-delivery-1.svg",
  },
  {
    id: "postal",
    title: "Postal",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanebell.svg",
  },
  {
    id: "postal-e-commerce",
    title: "Postal (E-Commerce)",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanebasket.svg",
  },
  {
    id: "sea-freight",
    title: "Sea freight",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanelocation-maps.svg",
  },
  {
    id: "us-domestic",
    title: "US Domestic",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanebasket-1.svg",
  },
];

const SERVICES_CARD_DATA = {
  express: {
    title: "Express",
    description:
      "Accelerate your business with premium, time-sensitive global shipping solutions powered by world-class carriers.",
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/services_express.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/dhl.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/fedex.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ups.webp",
    ],
    countryCodes: ["vn", "sg"],
    ctaText: "International Express Delivery",
    servicesCovered: [
      "Premium Express",
      "Priority Express",
      "Economy Express",
      "Preferred Express",
      "Prime Express",
      "Regular Express",
      "Plus Express",
      "Standard Express",
      "Saver Express",
    ],
  },
  postal: {
    title: "Postal",
    description:
      "Specialized logistics lines and special handling tailored for unique commercial shipping requirements.",
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/services_postal.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/singapore_post.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/bpost.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/postnl.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/pos_malaysia.webp",
    ],
    countryCodes: ["sg", "my"],
    ctaText: "Cross border Packet Delivery",
    servicesCovered: [
      "Standard epacket",
      "Economy Pak",
      "Economy epacket",
      "Expedited epacket",
    ],
  },
  "postal-e-commerce": {
    title: "Postal (E-Commerce)",
    description:
      "Cost-effective, cross-border packet delivery designed specifically to scale your e-commerce reach.",
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/services_postal_e_commerce.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/singapore_post.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/bpost.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/uniuni.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/postnl.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/pos_malaysia.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ups.webp",
    ],
    countryCodes: ["my", "sg", "us"],
    ctaText: "Cross border Packet Delivery",
    servicesCovered: [
      "Economy epacket",
      "Plus economy epacket",
      "Standard epacket",
      "Economy Pak",
      "Expedited epacket",
      "Saver Direct epacket",
      "Direct epacket",
    ],
  },
  "sea-freight": {
    title: "Sea Freight",
    description:
      "Reliable and scalable ocean freight solutions, including FBA and LCL, for high-volume logistics.",
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/services_sea_freight.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/vina_link_group.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/vina_dowell.webp",
    ],
    countryCodes: ["vn"],
    ctaText: "Sea Freight Inquiry",
    servicesCovered: ["FBA", "LCL Shipping", "FCL Shipping"],
  },
  "us-domestic": {
    title: "US Domestic",
    description:
      "Complete nationwide coverage across the USA, ranging from economy ground to priority expedited options.",
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/services_domestic.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/dhl.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/fedex.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ups.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/uniuni.webp",
    ],
    countryCodes: ["us"],
    ctaText: "US Destination Delivery",
    servicesCovered: [
      "Standard Mail",
      "Express Mail",
      "Economy Mail",
      "Priority Mail",
    ],
  },
};

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState("express");
  const activeData = SERVICES_CARD_DATA[activeServiceId];

  return (
    <div
      id="services"
      className={cn(
        themeGuide.paddingX,
        "py-12 md:py-16 2xl:py-46 flex flex-col items-center overflow-hidden",
      )}
    >
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 max-md:gap-4 w-full max-w-[1200px]">
        <div className="flex flex-col w-full lg:w-[35%] items-center lg:items-end text-center lg:text-right">
          <Badge variant="toolkit" size="default">
            Our Services
          </Badge>
          <HighlightedHeading
            text="A Unified Platform for\nCross-Border Logistics"
            highlight="Unified Platform"
            className="text-2xl font-semibold mt-2"
          />
        </div>
        <div className="flex flex-col flex-1 items-center lg:items-start text-center lg:text-left">
          <Description className="mb-4 md:text-base text-sm lg:w-[85%]">
            ShipX aggregates solutions from Amilo & SG Link to offer a
            comprehensive suite of services. Whether you need Express Worldwide
            shipping, USA Destination Fulfillment, or specialized FBA handling,
            we manage the complexities of global compliance and documentation
            for you.
          </Description>
          <AppButton
            text="Book a Demo"
            withLeftIcon={true}
            leftIcon={<CalendarDays className="size-5" />}
            className="w-fit"
            to="/book-a-demo"
          />
        </div>
      </div>

      {/* --- INTERACTIVE CONTENT SECTION --- */}
      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start w-full mt-12 gap-8 md:gap-12">
        {/* NAV: Horizontal Wrap on Tablet/Mobile, Vertical on Desktop */}
        <div className="flex flex-wrap justify-center xl:flex-col gap-4 w-full xl:w-fit shrink-0 md:max-w-[704px] xl:max-w-none">
          {services.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveServiceId(item.id)}
              className="cursor-pointer transition-transform duration-200 active:scale-95"
            >
              <ServicesItems
                variant="list"
                isActive={activeServiceId === item.id}
                icon={item.icon}
                heading={item.title}
              />
            </div>
          ))}
        </div>

        {/* DISPLAY: Centered Card Area */}
        <div className="flex justify-center w-full max-w-[714px]">
          {activeData && (
            <ServiceCard
              key={activeServiceId}
              {...activeData}
              onCtaClick={() => console.log(`Inquiry for ${activeData.title}`)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
