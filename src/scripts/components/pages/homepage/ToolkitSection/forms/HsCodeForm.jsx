import { useState } from "react";
import { Button } from "../../../../../../styles/button";
import { Input } from "../../../../../../styles/input";
import { useLangNavigate } from "../../../../../hooks/useLangNavigate";
import { useTranslation } from "react-i18next";

export default function HsCodeForm() {
  const [value, setValue] = useState("");
  const navigateWithLang = useLangNavigate();
  const { t } = useTranslation();

  const handleHsCodeGenerator = () => {
    navigateWithLang(
      `/hs-code-generator?productDescription=${encodeURIComponent(value)}`,
    );
  };

  return (
    <div className="relative flex flex-col bg-transparent rounded-xl w-full max-w-[600px]">
      <label
        htmlFor="productDescription"
        className="text-start gap-px text-sm font-medium text-white/90 font-['Inter']"
      >
        {t("hs_code_generator_page.form_section.input_1.label")}
        <span className="text-red-500">*</span>
      </label>
      <p
        htmlFor="productDescription"
        className="text-start text-sm font-normal text-white/90 font-['Inter'] mb-2"
      >
        {t("hs_code_generator_page.form_section.input_1.note")}
      </p>

      <Input
        id="productDescription"
        multiline
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t(
          "trade_and_logistics_toolkit_section.tools.hs_code_generator.form.placeholder",
        )}
        className="border-none"
      />

      <div className="flex flex-row justify-between">
        <div
          className={`flex justify-end text-sm ${value.length >= 15 ? "text-green-600" : "text-red-500"}`}
        >
          <span>{value.length}/15</span>
          <span>&nbsp;characters remaining</span>
        </div>

        <Button
          variant="primary"
          disabled={value.length < 15}
          className="self-end"
          onClick={handleHsCodeGenerator}
          className="mt-6"
        >
          {t(
            "trade_and_logistics_toolkit_section.tools.hs_code_generator.form.submit_button",
          )}
        </Button>
      </div>
    </div>
  );
}
