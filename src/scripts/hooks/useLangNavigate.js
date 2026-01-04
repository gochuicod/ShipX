import { useNavigate, useParams } from "react-router-dom";

/**
 * Language-aware navigation helper
 * Automatically prefixes routes with `/:lang?`
 */
export function useLangNavigate() {
  const navigate = useNavigate();
  const { lang } = useParams();

  const navigateWithLang = (path, options) => {
    const basePath = lang ? `/${lang}` : "";
    navigate(`${basePath}${path}`, options);
  };

  return navigateWithLang;
}
