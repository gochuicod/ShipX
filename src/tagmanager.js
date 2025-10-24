import TagManager from "react-gtm-module";

// Initializes GTM with consent denied by default
export const initGTM = () => {
  // Define dataLayer and gtag manually first
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  // Set consent to denied *before* GTM loads
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
  });

  // Now initialize GTM (react-gtm-module will inject the script)
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
      ad_storage: state,
    });
  } else {
    console.warn("window.gtag function not found. GTM may not be loaded.");
  }
};
