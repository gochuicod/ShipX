import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

// Supported languages
const languages = ["en", "vn", "my", "ind", "thai"];

i18n
  .use(HttpBackend) // Load translations via HTTP
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    supportedLngs: languages,
    interpolation: { escapeValue: false },
    backend: {
      loadPath:
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@afbd4230abde3c81631a281a85510639dd612369/src/locales/{{lng}}.json",
    },
    react: {
      useSuspense: true, // you already use Suspense in your app
    },
  });

["en", "vn"].forEach((lang) => {
  if (lang !== i18n.language) {
    i18n.loadLanguages(lang).catch((err) => {
      console.warn(`Failed to preload language ${lang}:`, err);
    });
  }
});

export default i18n;
