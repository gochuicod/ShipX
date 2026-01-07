import { useTranslation } from "react-i18next";
import { cn } from "../../../lib/util";

export default function OfficePopover({ office, className }) {
  const { t } = useTranslation();

  if (!office) return null;

  return (
    <div
      className={cn(
        // Positioning
        "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50",
        // Styling
        "bg-white rounded-xl shadow-xl border border-gray-100 p-5 w-[280px]",
        // Animation (optional)
        "animate-in fade-in zoom-in-95 duration-200",
        className,
      )}
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing it
    >
      {/* Content */}
      <div className="flex items-start gap-3">
        {office.icon && (
          <img
            src={office.icon}
            alt={office.country_name}
            className="w-8 h-8 object-cover rounded-full shrink-0 mt-1 shadow-sm"
          />
        )}

        <div className="flex flex-col text-left">
          <h2 className="text-base font-bold text-gray-900 leading-tight">
            {t(office.country_name)}
          </h2>

          {office.address && (
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              {t(office.address)}
            </p>
          )}

          {office.email && (
            <a
              href={`mailto:${t(office.email)}`}
              className="mt-2 text-xs font-semibold text-[#FF00E5] hover:underline"
            >
              {t(office.email)}
            </a>
          )}
        </div>
      </div>

      {/* Little Triangle Arrow pointing down */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b border-r border-gray-100" />
    </div>
  );
}
