import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../../../lib/util";
import { Button } from "../../../styles/button";
import { themeGuide } from "../../../styles/themeGuide";

// Define your supported languages here to match i18n.js
const SUPPORTED_LANGS = ["en", "vn", "my", "ind", "thai"];

export default function TabSwitcher({
  tabs,
  activeTab,
  onChange,
  containerBg,
  activeTabBg,
  border = true,
  borderColor = "white/20",
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleTabClick = (tab) => {
    // 🟢 HOMEPAGE / LOCAL MODE
    if (onChange) {
      onChange(tab.id);
      return;
    }

    // 🔵 PAGE NAVIGATION MODE
    if (tab.path) {
      const pathSegments = pathname.split("/").filter(Boolean);
      const firstSegment = pathSegments[0];

      // Check if the first segment is a valid language
      const isLangPrefix = SUPPORTED_LANGS.includes(firstSegment);

      // LOGIC:
      // If we are currently in a language path (e.g., /vn/...), keep the language.
      // If we are not (e.g., /shipment-tracker), just go to the root path (e.g., /hs-code-generator).
      const finalPath = isLangPrefix ? `/${firstSegment}${tab.path}` : tab.path;

      navigate(finalPath);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-row items-center p-2 gap-2 w-full h-auto",
        "backdrop-blur-xl rounded-xl",
        border && `border border-${borderColor}`,
        !containerBg && "bg-[rgba(245,243,255,0.12)]",
      )}
      style={{ backgroundColor: containerBg }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <Button
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            variant={isActive ? "tabActive" : "tabInactive"}
            style={{
              backgroundColor:
                isActive && activeTabBg ? activeTabBg : undefined,
            }}
            className={cn(
              themeGuide.toolsHeroDescription,
              "flex-1 h-9 px-4 py-2 gap-2 rounded-lg transition-all duration-200 cursor-pointer",
              "flex items-center justify-center",
              "md:flex-row flex-col h-full",
            )}
          >
            <span className="flex items-center justify-center w-6 h-6 shrink-0">
              {tab.icon}
            </span>
            <span
              className={cn(
                "max-md:whitespace-pre-line whitespace-nowrap",
                isActive ? "text-white" : "text-white/90",
              )}
            >
              {tab.label}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
