import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { useTranslation } from "react-i18next";

// ✅ HELPER FUNCTION (same as in index.js)
// This component needs it to send updates
const updateGtmConsent = (state) => {
  if (window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: state,
    });
    console.log(`GTM consent updated to '${state}'`);
  } else {
    console.warn("window.gtag function not found.");
  }
};

export default function () {
  // const [gtmInitialized, setGtmInitialized] = useState(false);
  const [textSize, setTextSize] = useState("0.8vw");
  const { t } = useTranslation();

  // REMOVED: The entire useEffect for loading GTM, index.js now handles all GTM loading.
  // Initialize GTM if user already consented earlier
  // useEffect(() => {
  //   const handle = () => {
  //     const consent = getCookieConsentValue("analyticsConsent");
  //     if (consent === "true" && !gtmInitialized) {
  //       import("../../../tagmanager") // dynamically import GTM code
  //         .then(({ initGTM }) => {
  //           initGTM();
  //           setGtmInitialized(true);
  //         })
  //         .catch((err) => console.error("Failed to load GTM:", err));
  //     }
  //   };

  //   if (document.readyState === "complete") {
  //     handle();
  //   } else {
  //     window.addEventListener("DOMContentLoaded", handle);
  //   }

  //   return () => window.removeEventListener("DOMContentLoaded", handle);
  // }, [gtmInitialized]);

  useEffect(() => {
    const updateTextSize = () => {
      if (window.innerWidth < 768) {
        // 📱 Mobile screens
        setTextSize("2.2vw");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // 💻 Tablet screens
        setTextSize("0.8vw");
      } else {
        // 🖥️ Desktop screens
        setTextSize("0.8vw");
      }
    };

    updateTextSize(); // run on mount
    window.addEventListener("resize", updateTextSize);

    return () => window.removeEventListener("resize", updateTextSize);
  }, []);

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="analyticsConsent"
        style={{
          background: "#FFF",
          color: "#1A1A1A",
          fontSize: "14px",
          textAlign: "center",
          boxShadow: "0 -0.5vw 0.5vw rgba(255, 0, 229, 0.15)",
          flexWrap: "wrap",
          justifyContent: "center",
          fontSize: textSize,
        }}
        buttonStyle={{
          background: "#FFF",
          color: "#1A1A1A",
          fontWeight: "bold",
          borderRadius: "10px",
          padding: "8px 16px",
          margin: "6px",
        }}
        declineButtonStyle={{
          background: "#FFF",
          color: "#1A1A1A",
          borderRadius: "10px",
          margin: "6px",
        }}
        expires={150}
        // HANDLE NEW USER CLICKS
        onAccept={() => {
          updateGtmConsent("granted");
        }}
        // ADD onDecline HANDLER
        onDecline={() => {
          updateGtmConsent("denied");
        }}
      >
        {t("cookies.text")}
      </CookieConsent>
    </>
  );
}
