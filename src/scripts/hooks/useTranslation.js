import { TRANSLATIONS } from "../components/tools/translations";

export const useTranslation = () => ({ t: (key) => TRANSLATIONS[key] || key });
