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
    <div className="flex flex-col gap-3 bg-white p-3 rounded-xl shadow-lg max-w-[500px]">
      <Input
        multiline
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t(
          "trade_and_logistics_toolkit_section.tools.hs_code_generator.form.placeholder",
        )}
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
        >
          {t(
            "trade_and_logistics_toolkit_section.tools.hs_code_generator.form.submit_button",
          )}
        </Button>
      </div>
    </div>
  );
}
