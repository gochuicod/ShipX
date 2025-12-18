import AppButton from "./AppButton";
import Logo from "./Logo";
import Badge from "./Badge";
import AffiliateCard from "./AffiliateCard";
import BlogCard from "./BlogCard";
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
    <div className="py-5 px-5 bg-gray-50 font-sans">
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

      <ComponentWrapper title="Blog Card">
        <BlogCard />
      </ComponentWrapper>

      <ComponentWrapper
        title="Affiliate Card"
        className="flex md:flex-row flex-col gap-8"
      >
        {/* CARD 1: ShipX / Default */}
        <AffiliateCard
          variant="default"
          badgeVariant="affiliate"
          logo={{
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_14.svg",
            alt: "ShipX Logo",
          }}
          illustration={{
            src: "https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@5bf78b31e0206596d7313b84c16a1d0ebdabf957/src/assets/affiliate_card/sglink-affiliate-card.webp",
            alt: "Global Shipping",
          }}
          heading={
            <>
              <span className="text-(--secondary)">Expand your business</span>{" "}
              abroad with SG Link's cross-border expertise
            </>
          }
          subheading="Ship Your all-in-one partner for logistics, fulfillment and global shippingproducts to global markets quickly and securely with end-to-end delivery solutions."
          badges={[
            { label: "Express Delivery" },
            { label: "Asia-Pacific Routes" },
            { label: "Customs Brokerage" },
          ]}
          actions={[
            {
              text: "Login with SG Link",
              style: "secondary",
              onClick: () =>
                window.open("https://admin.sglinkapi.com", "_blank"),
            },
            {
              text: "Sign Up",
              style: "primary",
              onClick: () => console.log("Sign up clicked"),
            },
          ]}
        />

        {/* CARD 2: Amilo */}

        <AffiliateCard
          variant="amilo"
          badgeVariant="affiliateOrange"
          logo={{
            src: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_15.svg",
            alt: "Amilo Logo",
          }}
          illustration={{
            src: "https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@5bf78b31e0206596d7313b84c16a1d0ebdabf957/src/assets/affiliate_card/amilo-affiliate-card.webp",
            alt: "Amilo Illustration",
          }}
          heading={
            <>
              <span className="text-(--secondary)">Expand your business</span>{" "}
              abroad with SG Link's cross-border expertise
            </>
          }
          subheading="Ship Your all-in-one partner for logistics, fulfillment and global shippingproducts to global markets quickly and securely with end-to-end delivery solutions."
          badges={[
            { label: "Express Delivery" },
            { label: "Asia-Pacific Routes" },
            { label: "Customs Brokerage" },
          ]}
          actions={[
            {
              text: "Login with Amilo",
              style: "secondary",
              onClick: () => window.open("https://vip.amilo.co/", "_blank"),
            },
            {
              text: "Sign Up",
              style: "primary",
              onClick: () => console.log("Sign up clicked"),
            },
          ]}
        />
      </ComponentWrapper>
    </div>
  );
}
