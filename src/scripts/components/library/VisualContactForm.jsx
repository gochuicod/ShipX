import React from "react";
import { Send, CalendarDays } from "lucide-react";
import AppButton from "./AppButton";
// Import your Definition Layer atoms
import { FormInput, FormLabel, FormTextarea, InputGroup } from "./FormElements";

const VisualContactForm = () => {
  return (
    <form
      className="flex flex-col items-start gap-4 w-full mx-auto"
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      onSubmit={(e) => e.preventDefault()} // Prevent actual submission
    >
      {/* --- Row 1: Name, Email, Phone --- */}
      <div className="flex flex-col md:flex-row items-start gap-4 w-full h-auto md:h-[70px]">
        {/* Name: Standard State */}
        <InputGroup>
          <FormLabel htmlFor="visual-name" required>
            Name
          </FormLabel>
          <FormInput id="visual-name" placeholder="Enter your name" />
        </InputGroup>

        {/* Email: Error State (Hardcoded for Demo) */}
        <InputGroup>
          <FormLabel htmlFor="visual-email" required>
            Email
          </FormLabel>
          <FormInput
            id="visual-email"
            type="email"
            hasError={true} // Forces the red border styling
            defaultValue="invalid-email"
            placeholder="user@example.com"
          />
          {/* visual representation of error message */}
          <span className="text-red-500 text-xs mt-1">
            Invalid email address (Demo)
          </span>
        </InputGroup>

        {/* Phone: Optional State */}
        <InputGroup>
          <FormLabel htmlFor="visual-tel">Phone</FormLabel>
          <FormInput id="visual-tel" type="tel" placeholder="+1 234 567 8900" />
        </InputGroup>
      </div>

      {/* --- Row 2: Message --- */}
      <InputGroup>
        <FormLabel htmlFor="visual-message" required>
          Message
        </FormLabel>
        <FormTextarea id="visual-message" placeholder="How can we help you?" />
      </InputGroup>

      {/* --- Row 3: Buttons --- */}
      <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-end md:gap-4 w-full mt-4">
        <AppButton
          as="button"
          text="Send Message"
          style="secondary"
          withLeftIcon={true}
          leftIcon={<Send className="size-4 md:size-5" />}
          className="w-full md:w-auto text-xs md:text-base px-2 md:px-6 justify-center whitespace-nowrap"
        />
      </div>
    </form>
  );
};

export default VisualContactForm;
