import { useHsCode } from "../../../../hooks/useHsCode";
import { useRef, useEffect } from "react";
import { Clipboard, Check } from "lucide-react";
import HierarchyPill from "./HierarchyPill";
import SmartNavLink from "../../../ui/SmartNavLink";
import { useTranslation } from "react-i18next";
import { useClipboard } from "../../../../hooks/useClipboard";
import ConfidenceMeter from "./ConfidenceMeter";
import Button from "../../../ui/Button";

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
      className="
                flex flex-col
                md:mb-[10vw] mb-[15vw]
                md:mt-0 mt-[10vw]
                justify-center items-center
            "
      style={{
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
    >
      <span
        className="
                    text-[#FF00E5]
                    md:text-[2.5vw] text-[4vw]
                    text-center
                    font-semibold
                    md:mb-[3vw] mb-[5vw]
                "
      >
        {t("hs_code_generator_page.result_section.title")}
      </span>
      <div
        className="
                    flex
                    md:flex-row flex-col
                    justify-between
                    md:w-[80vw] w-[90vw]
                    md:px-[3vw] px-[5vw]
                    md:py-[2vw] py-[5vw]
                    mx-auto
                    bg-white
                    md:rounded-[1vw] rounded-[3vw]
                    shadow-[0_0_5vw_rgba(255,0,229,0.10)]
                "
      >
        <div className="flex flex-col gap-y-[1.5vw]">
          {/* Recommended HS Code */}
          <div
            className="
                            flex flex-col
                            md:w-[35.5vw] w-[80vw]
                        "
          >
            <span
              className="
                                md:text-[1vw] text-[2.5vw]
                                text-[#1E2939]
                                font-semibold
                                md:leading-0 leading-[2.7vw]
                            "
            >
              {t("hs_code_generator_page.result_section.output_1.label")}
            </span>
            <p
              className="
                                text-[#4A5565]/80
                                md:text-[0.8vw] text-[2.3vw]
                                md:leading-[2vw] leading-[3vw]
                            "
            >
              {t("hs_code_generator_page.result_section.output_1.note")}
            </p>
            <div
              className="
                                flex relative
                                items-center justify-between
                                bg-[#F8F7FF]
                                md:rounded-[1vw] rounded-[2vw]
                                md:px-[2vw] px-[2.5vw]
                                md:py-[0.5vw] py-[1vw]
                                md:mt-0 mt-[2vw]
                            "
            >
              <span
                className="
                                    font-mono
                                    md:text-[2.5vw] text-[5vw]
                                    font-semibold
                                    text-[#4B5563]
                                    tracking-wide
                                "
              >
                {hsCodeResult?.code}
              </span>
              <button
                type="button"
                onClick={() => copy(hsCodeResult?.code)}
                className={`
                                    absolute
                                    md:block hidden
                                    right-[0.5vw] bottom-[0.5vw]
                                    p-2.5 rounded-[0.5vw] transition-all duration-200
                                    cursor-pointer
                                    ${
                                      isCopied
                                        ? "bg-green-100 text-green-600"
                                        : "bg-[#EBE8FB] text-[#402B73] hover:bg-[#EBE8FB]/80 hover:text-[#402B73]/80"
                                    }
                                `}
                title="Copy to clipboard"
              >
                {isCopied ? (
                  <Check className="w-[1vw] h-[1vw]" />
                ) : (
                  <Clipboard className="w-[1vw] h-[1vw]" />
                )}
              </button>
            </div>
          </div>
          {/* Confidence Level */}
          <div
            className="
                            flex flex-col
                            md:w-[35.5vw] w-[80vw]
                        "
          >
            <span
              className="
                                md:text-[1vw] text-[2.5vw]
                                text-[#1E2939]
                                font-semibold
                                md:leading-[1vw] leading-[2.7vw]
                                md:mt-0 mt-[3vw]
                            "
            >
              {t("hs_code_generator_page.result_section.output_3.label")}
            </span>
            <p
              className="
                                text-[#4A5565]/80
                                md:text-[0.8vw] text-[2.3vw]
                                md:leading-[1vw] leading-[3vw]
                                md:mb-[0.5vw] mb-[2vw]
                            "
            >
              {t("hs_code_generator_page.result_section.output_3.note")}
            </p>
            <ConfidenceMeter confidence={hsCodeResult?.confidence} />
          </div>
        </div>
        <div className="flex flex-col gap-y-[1.5vw]">
          {/* AI Justification */}
          <div
            className="
                            flex flex-col
                            md:w-[35.5vw] w-[80vw]
                            md:mt-0 mt-[2vw]
                        "
          >
            <span
              className="
                                md:text-[1vw] text-[2.5vw]
                                text-[#1E2939]
                                font-semibold
                                md:leading-0 leading-[2.7vw]
                            "
            >
              {t("hs_code_generator_page.result_section.output_2.label")}
            </span>
            <p
              className="
                                text-[#4A5565]/80
                                md:text-[0.8vw] text-[2.3vw]
                                md:leading-[2vw] leading-[3vw]
                            "
            >
              {t("hs_code_generator_page.result_section.output_2.note")}
            </p>
            <p
              className="
                                overflow-auto
                                md:h-[6vw] h-[23vw]
                                bg-[#F8F7FF]
                                md:rounded-[1vw] rounded-[3vw]
                                md:px-[1vw] px-[3vw]
                                md:py-[0.5vw] py-[2vw]
                                md:text-[0.8vw] text-[2.3vw]
                                text-[#4A5565]
                                md:mt-0 mt-[2vw]
                            "
            >
              {hsCodeResult?.justification}
            </p>
          </div>
          {/* Tariff Heirarchy */}
          <div
            className="
                            flex flex-col
                            md:w-[35.5vw] w-[80vw]
                            md:mt-0 mt-[2vw]
                        "
          >
            <span
              className="
                                md:text-[1vw] text-[2.5vw]
                                text-[#1E2939]
                                font-semibold
                                md:leading-[1vw] leading-[2.7vw]
                            "
            >
              {t("hs_code_generator_page.result_section.output_4.label")}
            </span>
            <p
              className="
                                text-[#4A5565]/80
                                md:text-[0.8vw] text-[2.3vw]
                                md:leading-[1vw] leading-[3vw]
                                md:mb-[0.5vw] mb-[2vw]
                            "
            >
              {t("hs_code_generator_page.result_section.output_4.note")}
            </p>
            <div
              className="
                                flex flex-row
                                md:gap-x-[0.5vw] gap-x-[1.5vw]
                                bg-[#F8F7FF]
                                md:rounded-[1vw] rounded-[2vw]
                                md:px-[0.5vw] px-[3vw]
                                md:py-[1.5vw] py-[2.5vw]
                            "
            >
              {hsCodeResult?.tariffHierarchy &&
                hsCodeResult?.tariffHierarchy.map((item, index) => (
                  <HierarchyPill key={index} item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <SmartNavLink
        className="md:mt-[3vw] mt-[8vw]"
        to="hs-code-generator/#"
        end
      >
        <Button
          onClick={handleGenerateAnotherHSCode}
          className="w-fit md:mb-[2vw] mb-[7vw]"
        >
          {t(
            "hs_code_generator_page.result_section.generate_another_hs_code_button",
          )}
        </Button>
      </SmartNavLink>
    </div>
  );
}
