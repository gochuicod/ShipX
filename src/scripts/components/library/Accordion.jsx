import { createContext, useContext, useState } from "react";
import {
  StyledItem,
  StyledTrigger,
  StyledContent,
  accordionFontStyle,
} from "../../../styles/accordion-styles";

const AccordionContext = createContext(null);
const AccordionItemContext = createContext(null);

/**
 * @param {Array} children - AccordionItem components
 * @param {string} className - Grid/layout classes for accordion container
 * @param {boolean} allowMultiple - Allow multiple items open simultaneously (default: false)
 * @param {string} defaultOpen - Item ID to open by default
 */

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
      <div className={className} style={accordionFontStyle}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

/**
 * @param {string} value - Unique identifier for this item
 * @param {Array} children - AccordionTrigger and AccordionContent
 * @param {string} className - Additional classes for the item container
 * @param {string} variant - Style variant (reserved for future use)
 */
export const AccordionItem = ({
  value,
  children,
  className,
  variant = "default",
}) => {
  const { openItems, toggle } = useContext(AccordionContext);
  const isOpen = openItems.has(value);

  return (
    <AccordionItemContext.Provider value={{ isOpen, variant }}>
      <StyledItem
        isOpen={isOpen}
        className={className}
        onClick={() => toggle(value)}
      >
        {children}
      </StyledItem>
    </AccordionItemContext.Provider>
  );
};

// ===========================================
// ACCORDION TRIGGER COMPONENT
// ===========================================

/**
 * AccordionTrigger - Clickable header for accordion item
 * Displays content and animated chevron icon
 *
 * @param {React.ReactNode} children - Content to display in trigger (question, label, etc.)
 * @param {string} className - Additional classes for the trigger
 */
export const AccordionTrigger = ({ children, className }) => {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <StyledTrigger
      isOpen={isOpen}
      textContent={children}
      className={className}
    />
  );
};

/**
 * AccordionContent - Collapsible content area for accordion item
 * Expands/collapses based on item open state
 *
 * @param {React.ReactNode} children - Content to display when expanded
 * @param {string} className - Additional classes for the content wrapper
 */
export const AccordionContent = ({ children, className }) => {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <StyledContent isOpen={isOpen} className={className}>
      {children}
    </StyledContent>
  );
};
