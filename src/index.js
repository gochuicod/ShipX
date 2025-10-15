import "./index.css";
import "./i18n";
import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Lenis from "@studio-freight/lenis";
import { margin } from "./scripts/utils/constants";
import ScrollToHash from "./scripts/components/ui/ScrollToHash";
import Layout from "./scripts/Layout";
import MultiStepLoader from "./scripts/components/ui/MultiStepLoader";

const Main = lazy(() => import("./scripts/components/Main"));
const PrivacyPolicy = lazy(() => import("./scripts/components/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("./scripts/components/TermsAndConditions"),
);
const BookADemo = lazy(() => import("./scripts/components/BookADemo"));
const NotFound = lazy(() => import("./scripts/components/ui/NotFound"));

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
        <Suspense fallback={<MultiStepLoader />}>
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
        </Suspense>

        {/* ✅ Cookie Banner for consent */}
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
