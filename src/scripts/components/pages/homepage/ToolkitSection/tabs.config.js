import { Box, Send, MessageSquare } from "lucide-react";
import TrackerForm from "./forms/TrackerForm";
import HsCodeForm from "./forms/HsCodeForm";
import ClaimForm from "./forms/ClaimForm";

export const TOOLKIT_TABS = [
  {
    id: "shipment-tracker", // Changed from 'tracker' to match URL/props
    path: "/shipment-tracker", // Added for navigation
    label: "Shipment Tracker",
    icon: <Box size={18} />,
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
    icon: <Send size={18} />,
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
    icon: <MessageSquare size={14} />,
    Form: ClaimForm,
    badge: "Trade and Logistics Toolkit",
    title: "File a Claim",
    description:
      "Please complete the form below to help our support team investigate the situation.",
  },
];
