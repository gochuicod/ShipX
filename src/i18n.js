import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

const languages = ["en", "vn", "my", "ind", "thai"];

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    supportedLngs: languages,
    interpolation: { escapeValue: false },
    backend: {
      loadPath:
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@85f71cb2442807a0f282d7413b828adf9bd366c0/src/locales/{{lng}}.json",
    },
    react: {
      useSuspense: true,
    },
  });

languages.forEach((lang) => {
  if (lang !== i18n.language) {
    i18n.loadLanguages(lang).catch((err) => {
      console.warn(`Failed to preload language ${lang}:`, err);
    });
  }
});

export default i18n;
