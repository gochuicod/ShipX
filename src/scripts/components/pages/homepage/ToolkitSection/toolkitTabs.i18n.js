// toolkitTabs.i18n.js
import { TOOLKIT_TABS } from "./tabs.config";

export const getTranslatedToolkitTabs = (t) =>
  TOOLKIT_TABS.map((tab) => {
    const base = `trade_and_logistics_toolkit_section.tools.${tab.i18nKey}`;

    return {
      ...tab,
      label: t(`${base}.tab_name`),
      title: t(`${base}.title`),
      description: t(`${base}.description`),
      badge: t(`trade_and_logistics_toolkit_section.badge`),
    };
  });
