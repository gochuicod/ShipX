import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../../../../../../styles/button";
import { useLangNavigate } from "../../../../../hooks/useLangNavigate";
import { useTranslation } from "react-i18next";

// Illustration URL
const trackerIllustration =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/shipment_tracker.webp";

export default function TrackerForm() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigateWithLang = useLangNavigate();
  const { t } = useTranslation();

  const handleTrackShipment = () => {
    if (!trackingNumber.trim()) return;
    navigateWithLang(
      `/shipment-tracker?trackingNumber=${encodeURIComponent(trackingNumber)}&autosubmit=true`,
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleTrackShipment();
  };

  return (
    <div className="relative flex flex-col max-w-[500px] md:items-start items-center">
      {/* Illustration */}
      <img
        src={trackerIllustration}
        alt="Shipment Tracker"
        className="md:block hidden absolute lg:-top-20 md:-top-12 lg:-right-80 md:-right-[200px] lg:w-[307px] md:w-[186px] object-contain pointer-events-none"
      />

      {/* Label */}
      <label
        htmlFor="trackingNumber"
        className="xl:text-start md:text-start text-center text-sm font-medium text-white/90 font-['Inter'] mb-2"
      >
        {t(
          "trade_and_logistics_toolkit_section.tools.shipment_tracker.form.label",
        )}
      </label>

      {/* Input + Button */}
      <div className="flex flex-row items-center p-1 gap-2 bg-white rounded-xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2 pl-3 grow">
          <Search className="text-[#63666D]" size={20} />
          <input
            id="trackingNumber"
            type="text"
            placeholder={t(
              "trade_and_logistics_toolkit_section.tools.shipment_tracker.form.placeholder",
            )}
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
          {t(
            "trade_and_logistics_toolkit_section.tools.shipment_tracker.form.submit_button",
          )}
        </Button>
      </div>
    </div>
  );
}
