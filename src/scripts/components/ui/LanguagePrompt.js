"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import i18n from "../../../i18n";

const countryToLangMap = {
  ID: "ind", // Indonesia
  MY: "my", // Malaysia
  TH: "thai", // Thailand
  VN: "vn", // Vietnam
};

const countryNames = {
  ID: "Indonesia",
  MY: "Malaysia",
  TH: "Thailand",
  VN: "Vietnam",
};

export default function LanguagePrompt() {
  const [open, setOpen] = useState(false);
  const [detected, setDetected] = useState({ country: null, lang: "en" });
  const [initialized, setInitialized] = useState(false);

  // detect visitor country
  useEffect(() => {
    const checkGeo = setInterval(() => {
      if (window.ShipXGeo?.country) {
        const countryCode = window.ShipXGeo.country.toUpperCase();
        const detectedLang = countryToLangMap[countryCode] || "en";
        setDetected({ country: countryCode, lang: detectedLang });
        clearInterval(checkGeo);
      }
    }, 500);
    return () => clearInterval(checkGeo);
  }, []);

  // determine if modal should open
  useEffect(() => {
    if (!detected.country || initialized) return;

    const savedLang = localStorage.getItem("lang") || "en";
    const dismissed = localStorage.getItem("lang_prompt_dismissed");
    setInitialized(true);

    // Only show prompt if language differs and user hasn't dismissed it
    if (detected.lang !== "en" && detected.lang !== savedLang && !dismissed) {
      setOpen(true);
    }
  }, [detected, initialized]);

  // user accepts switching language
  const handleAccept = async () => {
    localStorage.setItem("lang", detected.lang);
    localStorage.setItem("lang_prompt_dismissed", "true");
    try {
      await i18n.changeLanguage(detected.lang);
    } catch (err) {
      console.error("Language switch failed:", err);
    }
    setOpen(false);
  };

  // user declines
  const handleDecline = () => {
    localStorage.setItem("lang_prompt_dismissed", "true");
    setOpen(false);
  };

  if (!open) return null;

  const modal = (
    <Dialog open={open} onClose={setOpen} className="relative z-[9999]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/60 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200"
      />

      <div className="fixed inset-0 z-[9999] w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center text-center items-center">
          <DialogPanel
            transition
            className="relative transform overflow-hidden md:rounded-[2vw] rounded-[3vw] bg-white text-[#1A1A1A] transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex flex-col md:gap-y-[2vw] gap-y-[3vw] md:px-[3vw] px-[5vw] md:py-[1vw] py-[3vw]">
              <DialogTitle
                as="h3"
                className="md:text-[1vw] text-[3vw] font-semibold text-[#1A1A1A]"
              >
                Switch Language?
              </DialogTitle>
              <p className="md:text-[0.8vw] text-[2.2vw] text-[#1A1A1A]">
                It looks like you’re visiting from{" "}
                <strong>
                  {countryNames[detected.country] || detected.country}
                </strong>
                .<br />
                Would you like to switch the site’s language?
              </p>
            </div>
            <div className="bg-white flex flex-row-reverse justify-center items-center md:gap-x-[1vw] gap-x-[3vw] md:px-[3vw]] px-[5vw] md:py-[1vw] py-[3vw] md:text-[0.8vw] text-[2.2vw]">
              <button
                type="button"
                onClick={handleAccept}
                className="
                  bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                  bg-[length:200%_100%] bg-[position:0%_0%]
                  hover:bg-[position:100%_0%]
                  transition-[background-position] duration-1000 ease-in-out
                  md:py-[0.6vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full
                  text-white font-medium cursor-pointer
                "
              >
                Yes, switch
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="
                  flex justify-center items-center cursor-pointer
                  bg-white text-[#1A1A1A] font-medium
                  md:rounded-[2vw] rounded-full
                  md:py-[0.6vw] py-[1vw] md:px-[1.5vw] px-[3vw]
                  md:shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] shadow-[0_0vw_5vw_rgba(79,55,138,0.15)]
                "
              >
                No, stay
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );

  return ReactDOM.createPortal(modal, document.body);
}
