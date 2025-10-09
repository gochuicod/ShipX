import "./index.css";
import "./i18n";
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
import BookADemo from "./scripts/components/BookADemo";
import UserConfirmation from "./scripts/components/emails/UserConfirmation";

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
          <Route path="/book-a-demo" element={<BookADemo />} />
          <Route
            path="/user-confirmation"
            element={
              <UserConfirmation
                name="Darelle"
                email="darelle@example.com"
                phone="123-456-7890"
                message="Hello, this is a test message."
              />
            }
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
