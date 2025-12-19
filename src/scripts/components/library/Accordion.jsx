import { createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/util";

// --- Context ---
const AccordionContext = createContext(null);
const AccordionItemContext = createContext(null);

// --- 1. Root Component ---
export const Accordion = ({
  children,
  className,
  allowMultiple = false,
  defaultOpen = null,
}) => {
  const [openItems, setOpenItems] = useState(
    defaultOpen ? new Set([defaultOpen]) : new Set(),
  );

  const toggle = (id) => {
    const newOpen = new Set(allowMultiple ? openItems : []);
    if (openItems.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div
        className={className}
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// --- 2. Item Component ---
const itemVariants = cva(
  "w-full transition-all duration-300 overflow-hidden rounded-[8px] mb-4",
  {
    variants: {
      state: {
        closed:
          "bg-[#F9FAFB] border-0 shadow-[2px_2px_4px_rgba(25,33,61,0.06)]",
        open: "bg-white border border-[#FFD6FA] shadow-[2px_2px_4px_rgba(115,0,169,0.25)] bg-[linear-gradient(135deg,rgba(227,28,255,0.1)_0%,rgba(255,255,255,0.03)_54%,rgba(215,39,194,0.12)_100%)]",
      },
    },
    defaultVariants: { state: "closed" },
  },
);

export const AccordionItem = ({
  value,
  children,
  className,
  variant = "default",
}) => {
  const { openItems, toggle } = useContext(AccordionContext);
  const isOpen = openItems.has(value);
  const state = isOpen ? "open" : "closed";

  return (
    <AccordionItemContext.Provider value={{ isOpen, variant }}>
      <div className={cn(itemVariants({ state }), className)}>
        {/* We pass the toggle function down to children via Context implicit logic if needed, 
            but usually Trigger handles the click. We expose the toggle wrapper here. */}
        <div onClick={() => toggle(value)}>{children}</div>
      </div>
    </AccordionItemContext.Provider>
  );
};

// --- 3. Trigger Component ---
const triggerTextVariants = cva("font-normal text-left transition-colors", {
  variants: {
    state: {
      open: "text-[#99008A]",
      closed: "text-[#1E2939]",
    },
  },
  defaultVariants: { state: "closed" },
});

const chevronButtonVariants = cva(
  "flex items-center justify-center rounded-full transition-transform duration-300 shrink-0 w-[34.42px] h-[34.42px]",
  {
    variants: {
      state: {
        open: "bg-[#99008A] text-white shadow-[0px_2px_6px_rgba(74,58,255,0.1),inset_0px_-1px_1px_rgba(0,0,0,0.12)]",
        closed: "bg-[#F3F4F6] text-[#1E2939]",
      },
      isOpen: {
        true: "rotate-180",
        false: "rotate-0",
      },
    },
  },
);

export const AccordionTrigger = ({ children, className }) => {
  const { isOpen, variant } = useContext(AccordionItemContext);
  const state = isOpen ? "open" : "closed";

  return (
    <div
      className={cn(
        "flex items-start md:items-center justify-between p-4 md:px-8 md:py-4 cursor-pointer gap-4",
        className,
      )}
    >
      <div
        className={cn(
          triggerTextVariants({ state }),
          "flex-grow font-inter text-base",
        )}
      >
        {children}
      </div>

      <div className={cn(chevronButtonVariants({ state, isOpen }))}>
        <ChevronDown
          strokeWidth={2}
          className="w-[20.42px] h-[20.42px] text-current"
        />
      </div>
    </div>
  );
};

// --- 4. Content Component ---
export const AccordionContent = ({ children, className }) => {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <div
      className={cn(
        "grid transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            "pt-0 pb-4 px-4 md:px-8 text-sm text-[#4D525C] text-justify font-inter",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
