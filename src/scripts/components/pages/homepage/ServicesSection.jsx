import { themeGuide } from "../../../../styles/themeGuide";

import { cn } from "../../../../lib/util";

import { Badge } from "../../../../styles/badge";
import HighlightedHeading from "../../library/HighlightedHeading";
import Description from "../../library/Description";
import AppButton from "../../library/AppButton";
import ServicesItems from "../../library/ServicesItems";

import {
  CalendarDays,
  Plane,
  ShoppingBasket,
  Flag,
  MapPin,
  Box,
} from "lucide-react";

const services = [
  { id: 1, title: "Express", icon: <Plane /> },
  { id: 2, title: "Postal (E-Commerce)", icon: <ShoppingBasket /> },
  { id: 3, title: "US Domestic", icon: <Flag /> },
  { id: 4, title: "Sea freight", icon: <MapPin /> },
  { id: 5, title: "Commercial", icon: <Box /> },
];

export default function ServicesSection() {
  return (
    <div
      className={cn(
        themeGuide.paddingX,
        "2xl:py-46 md:py-16 py-12 flex 2xl:flex-row flex-col justify-center items-start",
      )}
    >
      <div className="flex flex-row justify-center items-start gap-x-8">
        {/* Left side of the section */}
        <div
          className="
                        flex flex-col
                        2xl:w-[40%] w-full
                        2xl:justify-end justify-center
                        2xl:items-end items-center
                    "
        >
          <Badge variant="toolkit" size="default">
            Our Services
          </Badge>
          <HighlightedHeading
            text="A Unified Platform for\nCross-Border Logistics"
            highlight="Unified Platform"
            className="
                            text-2xl
                            2xl:text-end text-center
                            font-semibold
                            mt-2
                        "
          />
        </div>
        <div className="flex flex-col flex-1">
          <Description
            className="
                            md:text-base text-sm
                            2xl:text-start text-center
                            mb-4
                            2xl:w-[90%] md:w-[80%] w-full
                        "
          >
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
      {/* Right side of the section */}
      <div className="flex flex-row justify-center items-start">
        {/* Services Items */}
        <div className="flex flex-col gap-4 max-w-md">
          {services.map((item, index) => (
            <ServicesItems
              key={item.id}
              variant="list"
              isActive={index === 0}
              icon={item.icon}
              heading={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
