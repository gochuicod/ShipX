import { useState } from "react";
import { Search, Box, Send, MessageSquare } from "lucide-react";
import SectionGlow from "../../library/SectionGlow";
import TabSwitcher from "../../library/TabSwitcher";
import { Button } from "../../../../styles/button";
import { Badge } from "../../../../styles/badge";

export default function ToolkitSection() {
  const [activeTab, setActiveTab] = useState("tracker");
  const [trackingNumber, setTrackingNumber] = useState("");

  const tabs = [
    { id: "tracker", label: "Shipment Tracker", icon: <Box size={18} /> },
    { id: "hscode", label: "HS Code Generator", icon: <Send size={18} /> },
    { id: "claim", label: "File a Claim", icon: <MessageSquare size={14} /> },
  ];

  const handleTrackShipment = () => {
    if (!trackingNumber.trim()) return;

    // Redirecting to the URL path provided in the prompt
    const targetUrl = `https://shipx.asia/shipment-tracker?trackingNumber=${encodeURIComponent(trackingNumber)}&autosubmit=true`;
    window.location.href = targetUrl;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleTrackShipment();
  };

  return (
    <section
      className="relative w-full min-h-[408px] flex flex-col xl:flex-row items-center justify-center px-6 py-16 lg:px-24 gap-8 overflow-hidden isolation-isolate"
      style={{
        background: "linear-gradient(180deg, #4F378A 0%, #66005C 159.37%)",
      }}
    >
      {/* Background Glows (Figma-sourced positions) */}
      <SectionGlow className="left-[1072px] top-[20px]" />
      <SectionGlow className="left-[148px] top-[-12px]" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-col items-center xl:items-end text-center xl:text-right w-full max-w-[390px] gap-2">
        <Badge variant="toolkit" size="default">
          Trade and Logistics Toolkit
        </Badge>

        <h2 className="font-['Inter'] font-semibold text-[32px] md:text-[40px] text-white opacity-90 leading-[40px] tracking-[-1px]">
          Track your Order
        </h2>

        <p className="font-['Inter'] font-normal text-[16px] leading-[20px] text-white opacity-90">
          Use your tracking number to instantly access up-to-the-minute updates
          on your package's journey, from warehouse to doorstep.
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative z-10 flex flex-col gap-6 w-full max-w-[608px]">
        <TabSwitcher
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <div className="flex flex-col gap-2">
          <label className="font-['Inter'] font-semibold text-[16px] leading-[20px] text-white">
            Input your shipment tracking number
          </label>

          {/* Tracking Form (Frame 1618873432) */}
          <div className="flex flex-row items-center p-1 gap-2 bg-white rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] max-w-[500px]">
            <div className="flex items-center gap-2 pl-3 flex-grow">
              <Search className="text-[#63666D]" size={20} />
              <input
                type="text"
                placeholder="Enter tracking number (e.g., SX1234567890)"
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyDown={handleKeyPress}
                className="w-full py-2 outline-none text-[#1E2939] placeholder-[#99A1AF] font-['Inter'] text-[16px]"
              />
            </div>

            <Button
              variant="primary"
              onClick={handleTrackShipment}
              className="w-[151px] h-[42px]"
            >
              Track Shipment
            </Button>
          </div>
        </div>
      </div>

      {/* 3D Illustration (image-container) */}
      <div className="hidden 2xl:block absolute right-[-5%] bottom-[-40px] z-20">
        <img
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/delivery-van-3d.webp"
          alt="Delivery Van"
          className="w-[450px] object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
