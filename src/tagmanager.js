import TagManager from "react-gtm-module";

// Initializes the GTM script.
export const initGTM = () => {
  TagManager.initialize({ gtmId: "GTM-M77NXRBD" });
};

/**
 * Updates the Google Consent state.
 * @param {'granted' | 'denied'} state - The consent state to update.
 */
export const updateGtmConsent = (state) => {
  if (window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: state,
    });
    // console.log(`GTM consent updated to '${state}'`);
  } else {
    console.warn("window.gtag function not found. GTM may not be loaded.");
  }
};
