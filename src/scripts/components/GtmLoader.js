import { useState, useEffect } from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { initGTM, updateGtmConsent } from "../../tagmanager";

//Invisible component that handles loading GTM
//and checking for returning visitor consent.

const GtmLoader = () => {
  const [isGtmLoaded, setIsGtmLoaded] = useState(false);

  // Load GTM for ALL users (runs once)
  useEffect(() => {
    initGTM();
    console.log("GTM initialized (consent 'denied' by default)");
    setIsGtmLoaded(true);
  }, []); // Empty array ensures it runs only once

  // Handle returning visitors
  useEffect(() => {
    // Only run this check *after* GTM has loaded
    if (isGtmLoaded) {
      const consent = getCookieConsentValue("analyticsConsent");

      // If user already said 'true', update consent
      if (consent === "true") {
        updateGtmConsent("granted");
      }
      // If 'false' or undefined, we do nothing
      // as consent correctly remains 'denied'
    }
  }, [isGtmLoaded]); // Runs when isGtmLoaded becomes true

  // This component doesn't render any visible UI
  return null;
};

export default GtmLoader;
