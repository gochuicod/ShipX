import AppButton from "./AppButton";
import Logo from "./Logo";
import Badge from "./Badge";
import AffiliateCard from "./AffiliateCard";
import BlogCard from "./BlogCard";
import ServicesItems from "./ServicesItems";
import IconBox from "./IconBox";
import SubPageHero from "./SubPageHero";
import VisualContactForm from "./VisualContactForm";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";
import { cn } from "../../../lib/util";
import { Box, Truck, Globe, Mail } from "lucide-react"; // Example icons
import { CalendarDays, CircleArrowRight } from "lucide-react";

// A wrapper to provide some styling for each component showcase
const ComponentWrapper = ({ title, children, className = "" }) => (
  <div className="p-8 my-8 border rounded-lg bg-white shadow">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    <div className={cn("space-y-4", className)}>{children}</div>
  </div>
);

const demoImage =
  "https://placehold.co/1440x350/F7F7F7/800080?text=Logistics+Hero";

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
          text="Book a Demo"
          withLeftIcon={true}
          leftIcon={<CalendarDays className="size-5 stroke-[1.5px]" />}
        />
        <AppButton
          variant="secondary"
          text="Learn More"
          withLeftIcon={true}
          leftIcon={<CircleArrowRight className="size-5 stroke-[1.3px]" />}
          className="flex flex-row-reverse justify-center items-center"
        />
        <AppButton variant="tertiary" text="Thailand" withLeftIcon={true} />
      </ComponentWrapper>

      <ComponentWrapper title="Services Items">
        <ServicesItems text="test" icon="t" />
      </ComponentWrapper>

      <ComponentWrapper title="Badge">
        <Badge />
      </ComponentWrapper>

      <ComponentWrapper title="Accordion" className="items-stretch">
        <Accordion className="flex flex-row gap-4">
          <AccordionItem value="item-1" variant="purple">
            <AccordionTrigger>What is ShipX?</AccordionTrigger>
            <AccordionContent>
              ShipX is a logistics and fulfillment platform that helps
              businesses manage their shipping and delivery operations
              efficiently.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" variant="purple">
            <AccordionTrigger>What is Amilo?</AccordionTrigger>
            <AccordionContent>
              Amilo is a logistics and fulfillment platform that helps
              businesses manage their shipping and delivery operations
              efficiently.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ComponentWrapper>

      <ComponentWrapper title="Blog Card">
        <BlogCard variant="default" />
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

      <ComponentWrapper title="Icon Box" className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Default Layout (Icon on Top)
          </h3>
          <div className="flex flex-wrap gap-6">
            {/* Default Layout - Responsive */}
            <IconBox
              layout="default"
              icon={<Box className="size-8 stroke-purple-600" />}
              title="Logistics"
            >
              Manage your shipping and delivery operations efficiently with our
              tools.
            </IconBox>

            {/* Default Layout - Wide */}
            <IconBox
              layout="default"
              size="wide"
              icon={<Truck className="size-8 stroke-blue-600" />}
              title="International Express"
            >
              Ship products to global markets quickly and securely.
            </IconBox>

            {/* Default Layout - Compact */}
            <IconBox
              layout="default"
              size="compact"
              icon={<Globe className="size-8 stroke-orange-500" />}
              title="Global Reach"
            >
              Access Asia-Pacific routes instantly.
            </IconBox>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Horizontal Layout (Icon on Left)
          </h3>
          <div className="flex flex-wrap gap-6">
            {/* Horizontal Layout - Responsive */}
            <IconBox
              layout="horizontal"
              icon={<Box className="size-8 stroke-purple-600" />}
              title="Logistics"
              size="compact"
            >
              Manage your shipping and delivery operations efficiently with our
              tools.
            </IconBox>

            {/* Horizontal Layout - Wide */}
            <IconBox
              layout="horizontal"
              size="wide"
              icon={<Truck className="size-8 stroke-blue-600" />}
              title="International Express"
            >
              Ship products to global markets quickly and securely.
            </IconBox>

            {/* Horizontal Layout - Compact */}
            <IconBox
              layout="horizontal"
              size="default"
              icon={<Mail className="size-8 stroke-purple-600" />}
              title="Email Us"
              value="info@shipx.asia"
            >
              We reply within 24 hours
            </IconBox>
          </div>
        </div>
      </ComponentWrapper>

      {/* --- SubPageHero Section --- */}
      <ComponentWrapper title="Sub Page Hero">
        <div className="flex flex-col gap-6 p-6 border border-dashed border-purple-400 rounded-lg">
          {/* Display 1: Default Styling */}
          <div>
            <p className="mb-2 text-sm text-gray-500 font-semibold">
              Default (Responsive)
            </p>
            <SubPageHero src={demoImage} />
          </div>

          {/* Display 2: Custom Alignment & Overlay */}
          <div>
            <p className="mb-2 text-sm text-gray-500 font-semibold">
              With Overlay & Bottom Align
            </p>
            <SubPageHero src={demoImage} align="bottom">
              <div className="flex items-center justify-center h-full bg-black/20">
                <h2 className="bg-white px-4 py-2 rounded font-bold">
                  Overlay Content
                </h2>
              </div>
            </SubPageHero>
          </div>
        </div>
      </ComponentWrapper>

      <ComponentWrapper title="Contact Form (Visual Demo)">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-500">
            This illustrates the form styling using composed atoms. The email
            field is forced into an <strong>error state</strong> for
            demonstration.
          </p>
          <div className="w-full max-w-[600px] border border-gray-200 p-6 rounded-xl bg-white mx-auto">
            {/* Clean usage, no logic attached */}
            <VisualContactForm />
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
}
