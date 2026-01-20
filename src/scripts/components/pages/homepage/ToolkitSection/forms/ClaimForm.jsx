import { useState } from "react";
import { Button } from "../../../../../../styles/button";
import { Input } from "../../../../../../styles/input";
import { useLangNavigate } from "../../../../../hooks/useLangNavigate";
import { useTranslation } from "react-i18next";

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
    <div className="relative flex flex-col rounded-xl bg-transparent w-full max-w-[600px]">
      <label
        htmlFor="trackingNumber"
        className="gap-px text-start text-sm font-medium text-white/90 font-['Inter'] mb-2"
      >
        {t("file_a_claim.form_section.fields.tracking_number.label")}
        <span className="text-red-500">*</span>
      </label>
      <Input
        id="trackingNumber"
        value={tracking}
        className="border-0 mb-3"
        onChange={(e) => setTracking(e.target.value)}
        placeholder={t(
          "file_a_claim.form_section.fields.tracking_number.placeholder",
        )}
      />

      <label
        htmlFor="description"
        className="gap-px text-start text-sm font-medium text-white/90 font-['Inter'] mb-2"
      >
        {t("file_a_claim.form_section.fields.description.label")}
        <span className="text-red-500">*</span>
      </label>
      <Input
        id="description"
        multiline
        value={description}
        className="border-0"
        onChange={(e) => setDescription(e.target.value)}
        placeholder={t(
          "file_a_claim.form_section.fields.description.placeholder",
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
          className="mt-6"
        >
          {t(
            "trade_and_logistics_toolkit_section.tools.file_a_claim.form.submit_button",
          )}
        </Button>
      </div>
    </div>
  );
}
