import "./index.css";
import "./i18n";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Lenis from "@studio-freight/lenis";
import { margin } from "./scripts/utils/constants";
import ScrollToHash from "./scripts/components/ui/ScrollToHash";
import Layout from "./scripts/Layout";
import Main from "./scripts/components/Main";
import PrivacyPolicy from "./scripts/components/PrivacyPolicy";
import TermsAndConditions from "./scripts/components/TermsAndConditions";
import BookADemo from "./scripts/components/BookADemo";
import NotFound from "./scripts/components/ui/NotFound";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { initGTM } from "./tagmanager";

const App = () => {
  const [gtmInitialized, setGtmInitialized] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // ✅ Initialize GTM if user already consented earlier
  useEffect(() => {
    const consent = getCookieConsentValue("analyticsConsent");
    if (consent === "true" && !gtmInitialized) {
      initGTM();
      setGtmInitialized(true);
    }
  }, [gtmInitialized]);

  return (
    <BrowserRouter>
      <Layout>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Main margin={margin} />} />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy slug="privacy-policy" />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions slug="terms-and-conditions" />}
          />
          <Route
            path="/book-a-demo"
            element={<BookADemo slug="book-a-demo" />}
          />
          <Route path="*" element={<NotFound slug="not-found" />} />
        </Routes>

        {/* ✅ Cookie Banner for consent */}
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          cookieName="analyticsConsent"
          style={{
            background: "#2B373B",
            color: "#fff",
            fontSize: "14px",
            textAlign: "center",
          }}
          buttonStyle={{
            background: "#fff",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "4px",
            padding: "6px 12px",
          }}
          declineButtonStyle={{
            background: "#555",
            color: "#fff",
            borderRadius: "4px",
          }}
          expires={150}
          onAccept={() => {
            initGTM();
            setGtmInitialized(true);
          }}
        >
          We use cookies for analytics and marketing. You can accept or decline
          tracking.
        </CookieConsent>
      </Layout>
    </BrowserRouter>
  );
};

if (document.querySelector("#render")) {
  const root = ReactDOM.createRoot(document.querySelector("#render"));
  root.render(<App />);
}
