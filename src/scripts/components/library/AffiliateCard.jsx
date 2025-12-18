import {
  AffiliateCard,
  AffiliateCardContent,
  AffiliateCardIllustration,
  AffiliateCardFooter,
} from "../../../styles/affiliate-card";
import { Badge } from "../../../styles/badge";
import AppButton from "./AppButton";

export default function PromoSection() {
  return (
    <div className="p-1 md:p-10">
      <AffiliateCard variant="default">
        {/* The 3D Illustration */}
        <AffiliateCardIllustration>
          {/* Replace this img with your actual 3D asset */}
          <img
            src="/assets/3d-globe-bags.png"
            alt="Global Shipping"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl"
          />
        </AffiliateCardIllustration>

        <AffiliateCardContent>
          {/* Logo Area */}
          <div className="mb-2">
            <img
              src="/assets/shipx-logo.png"
              alt="ShipX Logo"
              className="h-8 md:h-10"
            />
          </div>

          {/* Title with Highlighted Text */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            <span className="text-fuchsia-600">Expand your business</span>{" "}
            abroad with SG Link’s cross-border expertise
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Ship products to global markets quickly and securely with end-to-end
            delivery solutions tailored for eCommerce sellers.
          </p>

          {/* Specialties / Badges */}
          {/* UPDATED: Added flex-col, items-center for mobile centering. md:items-start restores desktop alignment. */}
          <div className="mt-2 space-y-2 flex flex-col items-center md:items-start">
            <p className="text-sm font-semibold text-slate-800">Specialties:</p>
            {/* UPDATED: Added justify-center for mobile centering. */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="affiliate" size="default">
                Express Delivery
              </Badge>
              <Badge variant="affiliate" size="default">
                Asia-Pacific Routes
              </Badge>
              <Badge variant="affiliate" size="default">
                Customs Brokerage
              </Badge>
            </div>
          </div>
        </AffiliateCardContent>

        {/* Buttons */}
        {/* UPDATED: justify-center for mobile, md:justify-end for desktop */}
        <AffiliateCardFooter className="justify-center md:justify-end">
          {/* Ghost/White Button */}
          <AppButton
            variant="secondary"
            onClick={() =>
              window.open("https://admin.sglinkapi.com/", "_blank")
            }
          >
            Login with SG Link
          </AppButton>

          {/* Gradient/Primary Button */}
          <AppButton
            variant="main"
            onClick={() =>
              window.open("https://admin.sglinkapi.com/", "_blank")
            }
          >
            Sign Up
          </AppButton>
        </AffiliateCardFooter>
      </AffiliateCard>
    </div>
  );
}
