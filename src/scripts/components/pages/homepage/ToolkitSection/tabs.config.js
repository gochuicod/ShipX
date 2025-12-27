import { Box, Send, MessageSquare } from "lucide-react";
import TrackerForm from "./forms/TrackerForm";
import HsCodeForm from "./forms/HsCodeForm";
import ClaimForm from "./forms/ClaimForm";

export const TOOLKIT_TABS = [
  {
    id: "tracker",
    label: "Shipment Tracker",
    icon: <Box size={18} />,
    Form: TrackerForm,
    badge: "Trade and Logistics Toolkit",
    title: "Track your Order",
    description:
      "Use your tracking number to instantly access up-to-the-minute updates on your package's journey, from warehouse to doorstep.",
  },
  {
    id: "hscode",
    label: "HS Code Generator",
    icon: <Send size={18} />,
    Form: HsCodeForm,
    badge: "Trade and Logistics Toolkit",
    title: "Generate HS Codes",
    description:
      "Input your product details, and let our system instantly handle the complexity of HTSUS (US) and HS (ROW) code selection, giving you the certainty required to ship anywhere.",
  },
  {
    id: "claim",
    label: "File a Claim",
    icon: <MessageSquare size={14} />,
    Form: ClaimForm,
    badge: "Trade and Logistics Toolkit",
    title: "File a Claim",
    description:
      "We apologize if you experienced an issue with your delivery. Please complete the form below to help our support team investigate the situation and find a resolution for you as quickly as possible.",
  },
];
