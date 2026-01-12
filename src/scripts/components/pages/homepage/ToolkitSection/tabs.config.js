// tabs.config.js
import TrackerForm from "./forms/TrackerForm";
import HsCodeForm from "./forms/HsCodeForm";
import ClaimForm from "./forms/ClaimForm";

// --- CDN URLs for Icons ---
const shipmentTrackerIcon =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/shipment_tracker.svg";
const hsCodeGeneratorIcon =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/hs_code_generator.svg";
const fileAClaimIcon =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/file_a_claim.svg";

// --- CDN URLs for Illustrations (NEW) ---
const shipmentTrackerImg =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/shipment_tracker.png";
// ⚠️ Verify this file name exists in your assets
const hsCodeGeneratorImg =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/hs_code_generator.png";
// ⚠️ Verify this file name exists in your assets
const fileAClaimImg =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/file_a_claim.png";

export const TOOLKIT_TABS = [
  {
    id: "shipment-tracker",
    path: "/shipment-tracker",
    i18nKey: "shipment_tracker",
    Form: TrackerForm,
    // Add illustration here
    illustration: shipmentTrackerImg,
    icon: (
      <img
        src={shipmentTrackerIcon}
        alt="Shipment Tracker"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    id: "hs-code-generator",
    path: "/hs-code-generator",
    i18nKey: "hs_code_generator",
    Form: HsCodeForm,
    // Add illustration here
    illustration: hsCodeGeneratorImg,
    icon: (
      <img
        src={hsCodeGeneratorIcon}
        alt="HS Code Generator"
        className="w-full h-full object-contain"
      />
    ),
  },
  {
    id: "file-a-claim",
    path: "/file-a-claim",
    i18nKey: "file_a_claim",
    Form: ClaimForm,
    // Add illustration here
    illustration: fileAClaimImg,
    icon: (
      <img
        src={fileAClaimIcon}
        alt="File a Claim"
        className="w-full h-full object-contain"
      />
    ),
  },
];
