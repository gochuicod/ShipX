import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../../../../../../styles/button";

export default function TrackerForm() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrackShipment = () => {
    if (!trackingNumber.trim()) return;

    const targetUrl = `/shipment-tracker?trackingNumber=${encodeURIComponent(
      trackingNumber,
    )}&autosubmit=true`;
    window.location.href = targetUrl;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleTrackShipment();
  };

  return (
    <div className="flex flex-col gap-2 max-w-[500px]">
      {/* Label */}
      <label
        htmlFor="trackingNumber"
        className="xl:text-start md:text-start text-center text-sm font-medium text-white/90 font-['Inter']"
      >
        Input your shipment tracking number
      </label>

      {/* Input + Button */}
      <div className="flex flex-row items-center p-1 gap-2 bg-white rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2 pl-3 flex-grow">
          <Search className="text-[#63666D]" size={20} />
          <input
            id="trackingNumber"
            type="text"
            placeholder="Enter tracking number (e.g., SX1234567890)"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full py-2 outline-none text-[#1E2939] placeholder-[#99A1AF] font-['Inter'] text-[16px]"
          />
        </div>

        <Button
          variant="primary"
          onClick={handleTrackShipment}
          className="w-[151px] h-[42px]"
          disabled={trackingNumber.length < 2}
        >
          Track Shipment
        </Button>
      </div>
    </div>
  );
}
