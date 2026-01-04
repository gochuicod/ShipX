import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../../../lib/util";
import { Button } from "../../../styles/button";
import { themeGuide } from "../../../styles/themeGuide";

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

  // Extract current language (e.g. /vn/services → vn)
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLang = pathSegments[0];

  const handleTabClick = (tab) => {
    // 🟢 HOMEPAGE / LOCAL MODE
    if (onChange) {
      onChange(tab.id);
      return;
    }

    // 🔵 PAGE NAVIGATION MODE
    if (tab.path) {
      navigate(`/${currentLang}${tab.path}`);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-row items-center p-2 gap-2 w-fit",
        "backdrop-blur-xl rounded-xl",
        border && `border border-${borderColor}`,
        "max-md:max-w-[332px] max-md:h-[103px]",
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
              "max-md:flex-col max-md:flex-none max-md:w-[100px] max-md:h-[87px]",
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
