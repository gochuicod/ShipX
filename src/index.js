import "./index.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Lenis from "@studio-freight/lenis";
import { margin } from "./scripts/utils/constants";
import ScrollToHash from "./scripts/components/ui/ScrollToHash";
import Layout from "./scripts/Layout";
import Main from "./scripts/components/Main";
import PrivacyPolicy from "./scripts/components/PrivacyPolicy";
import TermsAndConditions from "./scripts/components/TermsAndConditions";
import "./i18n";

const App = () => {
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

  return (
    <BrowserRouter>
      <Layout>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Main margin={margin} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

if (document.querySelector("#render")) {
  const root = ReactDOM.createRoot(document.querySelector("#render"));
  root.render(<App />);
}
