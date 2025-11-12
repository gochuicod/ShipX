// scripts/utils/LanguageRouterListener.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import i18n from "../../i18n";
import { languages } from "./constants";

const LanguageRouterListener = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const langFromPath = pathname.split("/")[1];
    const matchedLang = languages.find((l) => l.key === langFromPath);

    // Default to English if no prefix
    i18n.changeLanguage(matchedLang ? matchedLang.key : "en");
  }, [pathname]);

  return null; // It’s just a listener, no UI
};

export default LanguageRouterListener;
