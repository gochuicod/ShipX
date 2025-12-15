import AppButton from "./AppButton";
import Logo from "./Logo";
import Badge from "./Badge";
import { useState } from "react";

// A wrapper to provide some styling for each component showcase
const ComponentWrapper = ({ title, children }) => (
  <div className="p-8 my-8 border rounded-lg bg-white shadow">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

export default function ComponentShowcase() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="p-10 bg-gray-50 font-sans">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Component Library
      </h1>

      <ComponentWrapper title="Logo">
        <Logo />
      </ComponentWrapper>

      <ComponentWrapper title="Book A Demo Button">
        <AppButton variant="main">Book a Demo</AppButton>
      </ComponentWrapper>

      <ComponentWrapper title="Learn More Button">
        <AppButton variant="secondary">Learn More</AppButton>
      </ComponentWrapper>

      <ComponentWrapper title="Badge">
        <Badge badge_text="Trusted Network" />
      </ComponentWrapper>
    </div>
  );
}
