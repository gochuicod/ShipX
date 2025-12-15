import AppButton from "./AppButton";
import Logo from "./Logo";
import Badge from "./Badge";
import { cn } from "../../../lib/util";
import { CalendarDays, CircleArrowRight } from "lucide-react";

// A wrapper to provide some styling for each component showcase
const ComponentWrapper = ({ title, children, className = "" }) => (
  <div className="p-8 my-8 border rounded-lg bg-white shadow">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    <div className={cn("space-y-4", className)}>{children}</div>
  </div>
);

export default function ComponentShowcase() {
  return (
    <div className="py-5 px-24 bg-gray-50 font-sans">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        ShipX Component Library
      </h1>

      <ComponentWrapper title="Logo">
        <Logo />
      </ComponentWrapper>

      <ComponentWrapper title="Buttons" className="flex flex-wrap gap-4">
        <AppButton
          variant="primary"
          className="flex flex-row justify-center items-center"
        >
          <CalendarDays className="size-5 stroke-[1.5px]" />
          Book a Demo
        </AppButton>
        <AppButton
          variant="secondary"
          className="flex flex-row-reverse justify-center items-center"
        >
          <CircleArrowRight className="size-5 stroke-[1.3px]" />
          Learn More
        </AppButton>
        <AppButton variant="tertiary">Thailand</AppButton>
      </ComponentWrapper>

      <ComponentWrapper title="Badge">
        <Badge />
      </ComponentWrapper>
    </div>
  );
}
