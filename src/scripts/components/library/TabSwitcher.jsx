import { cn } from "../../../lib/util";
import { Button } from "../../../styles/button";

export default function TabSwitcher({ tabs, activeTab, onChange }) {
  return (
    <div
      className={cn(
        "flex flex-row items-center p-2 gap-2 w-full max-w-[572px]",
        "bg-[rgba(245,243,255,0.12)] backdrop-blur-xl",
        "border border-white/20",
        "rounded-[8px]",
        "max-md:max-w-[332px] max-md:h-[103px]",
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <Button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            variant={isActive ? "tabActive" : "tabInactive"}
            className={cn(
              "flex-1 h-[36px] px-4 py-2 gap-2 rounded-[8px] transition-all duration-200 cursor-pointer",
              "font-['Inter'] text-[16px] leading-[20px] text-center",
              "max-md:flex-col",
              "max-md:flex-none max-md:w-[100px] max-md:h-[87px]",
              "max-md:px-3 max-md:py-3",
              "max-md:text-[14px] max-md:leading-[18px]",
            )}
          >
            <span className={isActive ? "text-white" : "text-[#FF99F5]"}>
              {tab.icon}
            </span>
            <span className="max-md:whitespace-pre-line whitespace-nowrap">
              {tab.label}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
