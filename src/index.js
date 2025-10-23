import "./index.css";
import "./i18n";
import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { getCookieConsentValue } from "react-cookie-consent";

import { LenisProvider } from "./scripts/hooks/useLenis";
import Layout from "./scripts/Layout";
import { margin } from "./scripts/utils/constants";

import ScrollToHash from "./scripts/components/ui/ScrollToHash";
import MultiStepLoader from "./scripts/components/ui/MultiStepLoader";
import ResetOnRefresh from "./scripts/components/ui/ResetOnRefresh";
import BlogList from "./scripts/components/BlogList";
import CookieBanner from "./scripts/components/ui/CookieBanner";
import LanguagePrompt from "./scripts/components/ui/LanguagePrompt";

const Main = lazy(() => import("./scripts/components/Main"));
const PrivacyPolicy = lazy(() => import("./scripts/components/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("./scripts/components/TermsAndConditions"),
);
const BookADemo = lazy(() => import("./scripts/components/BookADemo"));
const Blog = lazy(() => import("./scripts/components/Blog"));
const NotFound = lazy(() => import("./scripts/components/ui/NotFound"));

const helmetContext = {};

// SET DEFAULT CONSENT (BEFORE REACT LOADS)
window.dataLayer = window.dataLayer || [];
// ATTACH gtag TO THE WINDOW OBJECT (prevents 'not found' error)
window.gtag = function () {
  dataLayer.push(arguments);
};
gtag("consent", "default", {
  analytics_storage: "denied",
  ad_storage: "denied",
});
// --- END CONSENT SNIPPET ---

// ✅ HELPER FUNCTION FOR GTM
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

const App = () => {
  // ADD GTM LOADER STATE
  const [isGtmLoaded, setIsGtmLoaded] = useState(false);

  // LOAD GTM FOR ALL USERS (RUNS ONCE)
  useEffect(() => {
    // We import from './tagmanager' since index.js is in the root /src
    import("./tagmanager")
      .then(({ initGTM }) => {
        initGTM();
        console.log("GTM initialized (consent 'denied' by default)");
        setIsGtmLoaded(true);
      })
      .catch((err) => console.error("Failed to load GTM:", err));
  }, []); // Empty array ensures it runs only once

  //STEP 3: HANDLE RETURNING VISITORS
  useEffect(() => {
    // Only run this check *after* GTM has loaded
    if (isGtmLoaded) {
      const consent = getCookieConsentValue("analyticsConsent");
      // If user already said 'true', update consent
      if (consent === "true") {
        updateGtmConsent("granted");
      }
      // If 'false' or undefined, we do nothing (it correctly stays 'denied')
    }
  }, [isGtmLoaded]); // Runs when isGtmLoaded becomes true

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <LanguagePrompt />
        <LenisProvider>
          <ResetOnRefresh paths={["/"]} />
          <Layout>
            <ScrollToHash />
            <Suspense fallback={<MultiStepLoader />}>
              <Routes>
                <Route path="/" element={<Main margin={margin} />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />
                <Route path="/book-a-demo" element={<BookADemo />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <CookieBanner />
          </Layout>
        </LenisProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

if (document.querySelector("#render")) {
  const root = ReactDOM.createRoot(document.querySelector("#render"));
  root.render(<App />);
}
