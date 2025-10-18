import i18n from "../i18n";

const changeLanguage = async (lang) => {
  if (!["en", "vn", "my", "ind", "thai"].includes(lang)) return;

  try {
    await i18n.changeLanguage(lang); // automatically loads from CDN
    localStorage.setItem("lang", lang); // persist user preference
  } catch (err) {
    console.error("Failed to load language:", err);
  }
};

export default changeLanguage;
