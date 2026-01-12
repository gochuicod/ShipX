import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { div as MotionDiv } from "motion/react-client";
import { ChevronDown, CalendarDays } from "lucide-react";
import AppButton from "./AppButton";
import LoginModal from "./LoginModal"; // Imported LoginModal
import { cn } from "../../../lib/util";
import SmartNavLink from "../ui/SmartNavLink";

const MobileMenu = ({
  isOpen,
  navLinks,
  languages,
  selectedLang,
  onLanguageChange,
  onLinkClick,
  t,
}) => {
  return (
    <MotionDiv
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "absolute top-[70px] right-6 z-[60]",
        "flex flex-col items-start gap-4",
        "w-[263px] h-auto min-h-[550px]",
        "rounded-[8px] border border-white/20 shadow-xl",
        "px-[32px] py-[16px]",
      )}
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 230, 255, 0.05) 0%, rgba(170, 0, 255, 0.05) 100%), #FFFFFF",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* 1. LANGUAGE SELECTOR (Fixed Dropdown) */}
      <div className="w-full flex justify-end relative z-20">
        <Listbox value={selectedLang} onChange={onLanguageChange}>
          {({ open }) => (
            <div className="relative">
              <ListboxButton className="flex flex-row justify-center items-center px-2 py-1 gap-1 w-[54px] h-[24px] bg-white shadow-sm rounded-[4px] text-[14px] text-[#1E2939] border border-gray-100">
                <span className="uppercase">{selectedLang.key}</span>
                <ChevronDown
                  className={`size-3 stroke-[2.5px] transition-transform ${open ? "rotate-180" : ""}`}
                />
              </ListboxButton>

              <ListboxOptions className="absolute right-0 top-full mt-1 w-[140px] bg-white border border-[#FF00E5] rounded-lg shadow-xl py-1 z-50 focus:outline-none">
                {languages.map((lang) => (
                  <ListboxOption
                    key={lang.id}
                    value={lang}
                    className="px-4 py-2 text-sm hover:bg-pink-50 cursor-pointer text-[#1A1A1A] ui-selected:font-bold ui-selected:text-[#FF00E5]"
                  >
                    {lang.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          )}
        </Listbox>
      </div>

      {/* 2. NAVIGATION LINKS */}
      <nav className="flex flex-col w-full gap-2 z-10">
        {navLinks.map((link, idx) => (
          <div key={link.label} className="flex flex-col w-full">
            {link.items ? (
              <div className="flex flex-col gap-1">
                <span className="px-1 py-1 text-[16px] font-medium text-[#4D525C] opacity-70">
                  {link.label}
                </span>
                <div className="flex flex-col gap-2 pl-4">
                  {link.items.map((item) => (
                    <SmartNavLink
                      key={item.to}
                      to={item.to}
                      onClick={onLinkClick}
                      className="px-1 py-1 text-[16px] font-normal text-[#4D525C] hover:text-[#FF00E5] transition-colors"
                    >
                      {item.label}
                    </SmartNavLink>
                  ))}
                </div>
              </div>
            ) : (
              <SmartNavLink
                to={link.to}
                onClick={onLinkClick}
                className="px-1 py-1 text-[16px] font-normal text-[#4D525C] hover:text-[#FF00E5] transition-colors"
              >
                {link.label}
              </SmartNavLink>
            )}

            {/* Separators */}
            {(idx === 1 || idx === 2 || idx === 3 || idx === 4) && (
              <div className="w-full h-[1px] bg-[#4D525C] opacity-20 my-2" />
            )}
          </div>
        ))}
      </nav>

      {/* 3. ACTION BUTTONS */}
      <div className="flex flex-col w-full gap-3 mt-auto pb-2 z-10">
        {/* Login Modal Wrapper - [&>div]:w-full forces the inner LoginModal trigger to fill width */}
        <div className="w-full [&>div]:w-full [&>div]:justify-start">
          <LoginModal footer={true} />
        </div>

        {/* <AppButton
          to="/book-a-demo"
          onClick={onLinkClick} // Close menu when clicked
          text={t("header.book_a_demo")}
          withLeftIcon={true}
          leftIcon={<CalendarDays className="size-5" />}
          className="w-full h-[40px] text-[16px] flex justify-center items-center"
        />*/}
      </div>
    </MotionDiv>
  );
};

export default MobileMenu;
