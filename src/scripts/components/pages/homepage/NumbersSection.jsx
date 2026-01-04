import {
  TrendingUp,
  Package,
  Globe,
  Users,
  Warehouse,
  Truck,
} from "lucide-react";

import StatItems from "../../library/StatItems";
import { Badge } from "../../../../styles/badge";
import HighlightedHeading from "../../library/HighlightedHeading";
import ParallaxSection from "../../ui/ParallaxSection";

const STATS_DATA = [
  {
    id: 1,
    icon: <TrendingUp />,
    heading: "60 million+",
    description: "GMV Per\nYear",
  },
  { id: 2, icon: <Package />, heading: "13 million+", description: "orders" },
  { id: 3, icon: <Globe />, heading: "192", description: "countries\nserved" },
  { id: 4, icon: <Users />, heading: "2,500+", description: "customers" },
  {
    id: 5,
    icon: <Warehouse />,
    heading: "40+",
    description: "tech enabled\nwarehouses",
  },
  { id: 6, icon: <Truck />, heading: "300+", description: "trucks\noperated" },
];

export default function NumbersSection() {
  return (
    <ParallaxSection className="my-32 max-md:my-16">
      <div className="flex flex-col justify-center items-center w-full px-2">
        <div className="flex flex-col justify-center items-center">
          <Badge variant="toolkit" size="default">
            Our Numbers
          </Badge>
          <HighlightedHeading
            text="Delivering Excellence at Scale"
            highlight="Excellence"
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
          {STATS_DATA.map((stat) => (
            <StatItems
              key={stat.id}
              icon={stat.icon}
              heading={stat.heading}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
