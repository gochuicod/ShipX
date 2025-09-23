import "./index.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./scripts/Layout";
import Main from "./scripts/components/Main";
import ScrollToHash from "./scripts/components/ui/ScrollToHash";
import { margin } from "./scripts/utils/constants";
import Lenis from "@studio-freight/lenis";

function PrivacyPolicy() {
  return <div>Privacy Policy Page</div>;
}

function TermsAndServices() {
  return <div>Terms & Services Page</div>;
}

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // smoothing factor (0–1, lower = smoother, slower)
      duration: 1.2, // scroll duration
      smoothWheel: true, // enable wheel smoothing
      smoothTouch: false, // optional: disable on touch devices
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
          <Route path="/terms-and-services" element={<TermsAndServices />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

if (document.querySelector("#render")) {
  const root = ReactDOM.createRoot(document.querySelector("#render"));
  root.render(<App />);
}
