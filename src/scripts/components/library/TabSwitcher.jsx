import { cn } from "../../../lib/util";
import { Button } from "../../../styles/button";

export default function TabSwitcher({ tabs, activeTab, onChange }) {
  return (
    <div
      className={cn(
        "flex flex-row items-center p-2 gap-2 w-full max-w-[572px]",
        "bg-[rgba(245,243,255,0.1)] rounded-[8px] backdrop-blur-md",
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <Button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            // Dynamically switching based on your Figma logic
            variant={isActive ? "tabActive" : "tabInactive"}
            className={cn(
              "flex-1 h-[36px] px-4 py-2 gap-2 rounded-[8px] transition-all duration-200 cursor-pointer",
              // Applying manual font overrides from your spec
              "font-['Inter'] text-[16px] leading-[20px] text-center",
            )}
          >
            {/* SVG Icons with specific Figma-sourced colors */}
            <span className={isActive ? "text-white" : "text-[#FF99F5]"}>
              {tab.icon}
            </span>
            <span className="whitespace-nowrap">{tab.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
