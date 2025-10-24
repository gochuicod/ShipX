import "./index.css";
import "./i18n";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import { LenisProvider } from "./scripts/hooks/useLenis";
import Layout from "./scripts/Layout";
import { margin } from "./scripts/utils/constants";

import GtmLoader from "./scripts/components/GtmLoader";
import ScrollToHash from "./scripts/components/ui/ScrollToHash";
import MultiStepLoader from "./scripts/components/ui/MultiStepLoader";
import ResetOnRefresh from "./scripts/components/ui/ResetOnRefresh";
import CookieBanner from "./scripts/components/ui/CookieBanner";
import LanguagePrompt from "./scripts/components/ui/LanguagePrompt";

const Main = lazy(() => import("./scripts/components/Main"));
const PrivacyPolicy = lazy(() => import("./scripts/components/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("./scripts/components/TermsAndConditions"),
);
const BookADemo = lazy(() => import("./scripts/components/BookADemo"));
const BlogList = lazy(() => import("./scripts/components/BlogList"));
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

const App = () => {
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <GtmLoader />
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
