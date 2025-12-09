import { TRANSLATIONS } from "../components/pages/homepage/toolkit/translations";

export const useTranslation = () => ({ t: (key) => TRANSLATIONS[key] || key });
