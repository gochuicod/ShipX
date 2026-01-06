import { useHsCode } from "../../../../hooks/useHsCode";
import { useRef, useEffect } from "react";
import { Clipboard, Check } from "lucide-react";
import HierarchyPill from "./HierarchyPill";
import SmartNavLink from "../../../ui/SmartNavLink";
import { useTranslation } from "react-i18next";
import { useClipboard } from "../../../../hooks/useClipboard";
import ConfidenceMeter from "./ConfidenceMeter";
import AppButton from "../../../library/AppButton";

const UI_DELAY_MS = 500;

export default function HsCodeGeneratorResult() {
  const { hsCodeResult, setHsCodeResult } = useHsCode();
  const { isCopied, copy } = useClipboard();
  const { t } = useTranslation();

  const hsCodeResultRef = useRef(null);

  useEffect(() => {
    if (!hsCodeResult?.error && hsCodeResultRef.current) {
      setTimeout(() => {
        hsCodeResultRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, UI_DELAY_MS);
    }
  }, [hsCodeResult]);

  const handleGenerateAnotherHSCode = () => {
    setTimeout(() => {
      setHsCodeResult(null);
    }, UI_DELAY_MS);
  };

  return (
    <div
      ref={hsCodeResultRef}
      className="flex flex-col items-center justify-center w-full px-4 md:px-8 py-8 md:py-12"
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <h2 className="text-[#FF00E5] text-[24px] md:text-[32px] font-semibold text-center mb-8">
        {t("hs_code_generator_page.result_section.title")}
      </h2>

      {/* ===== MAIN FRAME (Frame 2147236755) ===== */}
      <div
        className="
          flex flex-col lg:flex-row
          justify-center items-stretch
          gap-4 lg:gap-8
          w-full max-w-[1248px]
          p-4 lg:p-8
          rounded-2xl
          bg-[linear-gradient(135deg,rgba(255,230,255,0.05)_0%,rgba(170,0,255,0.05)_100%)]
          border border-white/20
        "
      >
        {/* ===== LEFT COLUMN ===== */}
        <div className="flex flex-col gap-8 w-full lg:w-xl shrink-0">
          {/* Output 1: HS Code */}
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-[16px] text-[#1E2939]">
              {t("hs_code_generator_page.result_section.output_1.label")}
            </label>
            <p className="text-[16px] text-[#4A5565] leading-[120%]">
              {t("hs_code_generator_page.result_section.output_1.note")}
            </p>

            <div
              className="
                box-border flex flex-row justify-between items-center
                p-2 gap-4
                w-full h-[55px]
                bg-white rounded-lg
              "
            >
              <span className="font-['DM_Mono',monospace] font-medium text-[28px] lg:text-[35px] text-[#4A5565] truncate pl-2">
                {hsCodeResult?.code}
              </span>

              <button
                type="button"
                onClick={() => copy(hsCodeResult?.code)}
                className="
                  flex justify-center items-center
                  w-8 h-8
                  bg-white
                  shadow-[1px_1px_2px_rgba(20,0,99,0.25),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-1px_-1px_1px_rgba(154,4,129,0.1)]
                  rounded-lg
                  cursor-pointer
                  hover:bg-gray-50 transition
                "
              >
                {isCopied ? (
                  <Check className="w-[18px] h-[18px] text-green-600" />
                ) : (
                  <Clipboard className="w-[18px] h-[18px] text-[#1E2939]" />
                )}
              </button>
            </div>
          </div>

          {/* Output 3: Confidence */}
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-[16px] text-[#1E2939]">
              {t("hs_code_generator_page.result_section.output_3.label")}
            </label>
            <p className="text-[16px] text-[#4A5565] leading-[120%]">
              {t("hs_code_generator_page.result_section.output_3.note")}
            </p>

            <div className="py-2">
              <ConfidenceMeter confidence={hsCodeResult?.confidence} />
            </div>
          </div>

          {/* Output 4: Tariff Hierarchy (MOVED LEFT) */}
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-[16px] text-[#1E2939]">
              {t("hs_code_generator_page.result_section.output_4.label")}
            </label>
            <p className="text-[16px] text-[#4A5565] leading-[120%]">
              {t("hs_code_generator_page.result_section.output_4.note")}
            </p>

            <div className="flex flex-row gap-2 mt-2 bg-white rounded-lg p-3.5 md:justify-center justify-start overflow-hidden">
              {hsCodeResult?.tariffHierarchy &&
                hsCodeResult?.tariffHierarchy.map((item, index) => (
                  <HierarchyPill key={index} item={item} />
                ))}
            </div>
          </div>
        </div>

        {/* ===== RIGHT COLUMN (FULL HEIGHT) ===== */}
        <div className="flex flex-col w-full lg:w-xl shrink-0">
          <div className="flex flex-col gap-2 h-full">
            <label className="font-semibold text-[16px] text-[#1E2939]">
              {t("hs_code_generator_page.result_section.output_2.label")}
            </label>
            <p className="text-[16px] text-[#4A5565] leading-[120%]">
              {t("hs_code_generator_page.result_section.output_2.note")}
            </p>

            <div
              className="
                box-border flex-1
                p-4
                w-full
                bg-white rounded-lg
                overflow-auto
              "
            >
              <p className="text-[16px] text-[#4D525C] leading-[120%]">
                {hsCodeResult?.justification}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Another */}
      <div className="mt-10">
        <SmartNavLink to="hs-code-generator/#" end>
          <AppButton
            text={t(
              "hs_code_generator_page.result_section.generate_another_hs_code_button",
            )}
            onClick={handleGenerateAnotherHSCode}
            style="primary"
            className="px-8 py-3"
          />
        </SmartNavLink>
      </div>
    </div>
  );
}
