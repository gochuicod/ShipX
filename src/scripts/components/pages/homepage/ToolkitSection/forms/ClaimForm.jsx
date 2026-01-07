import { useState } from "react";
import { Button } from "../../../../../../styles/button";
import { Input } from "../../../../../../styles/input";
import { useLangNavigate } from "../../../../../hooks/useLangNavigate";
import { useTranslation } from "react-i18next";

const claimIllustration =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/toolkit/file_a_claim.webp";

export default function ClaimForm() {
  const [tracking, setTracking] = useState("");
  const [description, setDescription] = useState("");
  const navigateWithLang = useLangNavigate();
  const { t } = useTranslation();

  const handleClaimForm = () => {
    navigateWithLang(
      `/file-a-claim?trackingNumber=${encodeURIComponent(tracking)}&description=${encodeURIComponent(description)}`,
    );
  };

  return (
    <div className="relative flex flex-col gap-3 bg-white p-3 rounded-xl shadow-lg max-w-[500px]">
      <img
        src={claimIllustration}
        alt="Shipment Tracker"
        className="absolute top-0 -right-[200px] lg:w-[151px] md:w-[186px] object-contain pointer-events-none"
      />

      <Input
        value={tracking}
        onChange={(e) => setTracking(e.target.value)}
        placeholder={t(
          "trade_and_logistics_toolkit_section.tools.file_a_claim.form.placeholder_1",
        )}
      />

      <Input
        multiline
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={t(
          "trade_and_logistics_toolkit_section.tools.file_a_claim.form.placeholder_2",
        )}
      />

      <div className="flex flex-row justify-between">
        <div
          className={`flex justify-end text-sm ${description.length >= 25 ? "text-green-600" : "text-red-500"}`}
        >
          <span>{description.length}/25</span>
          <span>&nbsp;characters remaining</span>
        </div>

        <Button
          variant="primary"
          className="self-end"
          disabled={description.length < 25 || tracking < 2}
          onClick={handleClaimForm}
        >
          {t(
            "trade_and_logistics_toolkit_section.tools.file_a_claim.form.submit_button",
          )}
        </Button>
      </div>
    </div>
  );
}
