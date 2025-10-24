import "./index.css";
import "./i18n";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ReactDOM from "react-dom/client";

import Layout from "./scripts/Layout";
import GtmLoader from "./scripts/components/ui/GtmLoader";
import ScrollToHash from "./scripts/components/ui/ScrollToHash";
import ResetOnRefresh from "./scripts/components/ui/ResetOnRefresh";
import AppRoutes from "./scripts/routes/AppRoutes";
const CookieBanner = lazy(() => import("./scripts/components/ui/CookieBanner"));
const LanguagePrompt = lazy(
  () => import("./scripts/components/ui/LanguagePrompt"),
);
import { LenisProvider } from "./scripts/hooks/useLenis";
import { margin } from "./scripts/utils/constants";

const helmetContext = {};

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
            <AppRoutes margin={margin} />
            <CookieBanner />
          </Layout>
        </LenisProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#render");
  if (root) {
    const reactRoot = ReactDOM.createRoot(root);
    reactRoot.render(<App />);
  }
});
