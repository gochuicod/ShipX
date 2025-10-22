import "./index.css";
import "./i18n";
import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";

import Layout from "./scripts/Layout";
import { margin } from "./scripts/utils/constants";
import ScrollToHash from "./scripts/components/ui/ScrollToHash";
import MultiStepLoader from "./scripts/components/ui/MultiStepLoader";
import ResetOnRefresh from "./scripts/components/ui/ResetOnRefresh";

const Main = lazy(() => import("./scripts/components/Main"));
const PrivacyPolicy = lazy(() => import("./scripts/components/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("./scripts/components/TermsAndConditions"),
);
const BookADemo = lazy(() => import("./scripts/components/BookADemo"));
const Blog = lazy(() => import("./scripts/components/Blog"));
const NotFound = lazy(() => import("./scripts/components/ui/NotFound"));

import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import BlogList from "./scripts/components/BlogList";

const helmetContext = {};

const App = () => {
  const [gtmInitialized, setGtmInitialized] = useState(false);

  useEffect(() => {
    let lenis;
    const initLenis = async () => {
      const LenisModule = await import("@studio-freight/lenis");
      lenis = new LenisModule.default({
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };
    initLenis();

    return () => lenis?.destroy();
  }, []);

  // ✅ Initialize GTM if user already consented earlier
  useEffect(() => {
    const handle = () => {
      const consent = getCookieConsentValue("analyticsConsent");
      if (consent === "true" && !gtmInitialized) {
        import("./tagmanager") // dynamically import GTM code
          .then(({ initGTM }) => {
            initGTM();
            setGtmInitialized(true);
          })
          .catch((err) => console.error("Failed to load GTM:", err));
      }
    };

    if (document.readyState === "complete") {
      handle();
    } else {
      window.addEventListener("DOMContentLoaded", handle);
    }

    return () => window.removeEventListener("DOMContentLoaded", handle);
  }, [gtmInitialized]);

  const [textSize, setTextSize] = useState("0.8vw");

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
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
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
            onAccept={async () => {
              try {
                const mod = await import(
                  /* webpackChunkName: "tagmanager" */ "./tagmanager"
                );
                if (mod && typeof mod.initGTM === "function") {
                  mod.initGTM();
                  setGtmInitialized(true);
                  console.log("GTM initialized after consent");
                } else {
                  console.error("initGTM not found in tagmanager module:", mod);
                }
              } catch (err) {
                console.error("Failed to dynamically import tagmanager:", err);
              }
            }}
          >
            We use cookies for analytics and marketing. You can accept or
            decline tracking.
          </CookieConsent>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
};

if (document.querySelector("#render")) {
  const root = ReactDOM.createRoot(document.querySelector("#render"));
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
  );
}
