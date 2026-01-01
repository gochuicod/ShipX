import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../../../lib/util";
import { Button } from "../../../styles/button";

export default function TabSwitcher({
  tabs,
  activeTab,
  onChange,
  // Custom props with OKLCH defaults
  containerBg,
  activeTabBg,
  border = true,
  borderColor = "white/20",
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleTabClick = (tab) => {
    if (pathname === "/") {
      onChange?.(tab.id);
    } else {
      navigate(tab.path);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-row items-center p-2 gap-2 w-full max-w-[572px]",
        "backdrop-blur-xl rounded-xl",
        border && `border border-${borderColor}`,
        "max-md:max-w-[332px] max-md:h-[103px]",
        // Only apply the default class if no custom containerBg is provided
        !containerBg && "bg-[rgba(245,243,255,0.12)]",
      )}
      style={{
        // Use the prop if provided, otherwise the browser ignores this inline style
        backgroundColor: containerBg,
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <Button
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            variant={isActive ? "tabActive" : "tabInactive"}
            style={{
              // Overrides the variant's background if activeTabBg is passed
              backgroundColor:
                isActive && activeTabBg ? activeTabBg : undefined,
            }}
            className={cn(
              "flex-1 h-9 px-4 py-2 gap-2 rounded-lg transition-all duration-200 cursor-pointer",
              "flex items-center justify-center font-['Inter'] text-[16px] leading-5",
              "max-md:flex-col max-md:flex-none max-md:w-[100px] max-md:h-[87px]",
              "max-md:text-[14px] max-md:leading-[18px]",
            )}
          >
            <span className={isActive ? "text-white" : "text-[#FF99F5]"}>
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
