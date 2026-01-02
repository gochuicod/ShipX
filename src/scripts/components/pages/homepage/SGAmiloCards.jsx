import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { margin } from "../../../utils/constants";
import AffiliateCard from "../../library/AffiliateCard";
import { themeGuide } from "../../../../styles/themeGuide";
const ParallaxSection = lazy(() => import("../../ui/ParallaxSection"));

const SGAmiloCards = () => {
  const { t } = useTranslation();

  return (
    <ParallaxSection>
      <div
        className={`mx-auto relative ${themeGuide.paddingX} w-full flex lg:flex-row md:flex-col flex-col justify-center items-stretch gap-32 lg:gap-8 md:gap-22`}
      >
        {/* CARD 1: ShipX / Default */}
        <AffiliateCard
          containerClassName="h-full w-full"
          className="flex-1 w-full"
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
          containerClassName="h-full w-full"
          className="flex-1 w-full"
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
              <span className="text-(--secondary)">
                Your all-in-one partner
              </span>{" "}
              for logistics, fulfillment and global shipping
            </>
          }
          subheading="From warehousing to last-mile delivery, Amilo streamlines every step of your supply chain so you can focus on scaling your brand."
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
      </div>
    </ParallaxSection>
  );
};

export default SGAmiloCards;
