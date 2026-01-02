import TrackerForm from "./forms/TrackerForm";
import HsCodeForm from "./forms/HsCodeForm";
import ClaimForm from "./forms/ClaimForm";

// CDN URLs for icons
const shipmentTrackerIcon =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/shipment_tracker.svg";
const hsCodeGeneratorIcon =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/hs_code_generator.svg";
const fileAClaimIcon =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/file_a_claim.svg";

export const TOOLKIT_TABS = [
  {
    id: "shipment-tracker", // Changed from 'tracker' to match URL/props
    path: "/shipment-tracker", // Added for navigation
    label: "Shipment Tracker",
    icon: (
      <img
        src={shipmentTrackerIcon}
        alt="Shipment Tracker"
        className="w-full h-full object-contain"
      />
    ),
    Form: TrackerForm,
    badge: "Trade and Logistics Toolkit",
    title: "Track your Order",
    description:
      "Use your tracking number to instantly access up-to-the-minute updates on your package's journey.",
  },
  {
    id: "hs-code-generator", // Changed from 'hscode'
    path: "/hs-code-generator",
    label: "HS Code Generator",
    icon: (
      <img
        src={hsCodeGeneratorIcon}
        alt="HS Code Generator"
        className="w-full h-full object-contain"
      />
    ),
    Form: HsCodeForm,
    badge: "Trade and Logistics Toolkit",
    title: "Generate HS Codes",
    description:
      "Input your product details and instantly handle the complexity of HS code selection.",
  },
  {
    id: "file-a-claim", // Changed from 'claim'
    path: "/file-a-claim",
    label: "File a Claim",
    icon: (
      <img
        src={fileAClaimIcon}
        alt="File a Claim"
        className="w-full h-full object-contain"
      />
    ),
    Form: ClaimForm,
    badge: "Trade and Logistics Toolkit",
    title: "File a Claim",
    description:
      "Please complete the form below to help our support team investigate the situation.",
  },
];
