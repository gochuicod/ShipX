import "./index.css";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import AppRoutes from "./scripts/routes/AppRoutes";
import { LenisProvider } from "./scripts/hooks/useLenis";
import Layout from "./scripts/Layout";
import { margin } from "./scripts/utils/constants";
import { initGTMConsent } from "./scripts/utils/InitGTMConsent";
import GtmLoader from "./scripts/components/ui/GtmLoader";
import ScrollToHash from "./scripts/components/ui/ScrollToHash";
import ResetOnRefresh from "./scripts/components/ui/ResetOnRefresh";
import CookieBanner from "./scripts/components/ui/CookieBanner";
import LanguagePrompt from "./scripts/components/ui/LanguagePrompt";

const helmetContext = {};

initGTMConsent();

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

if (document.querySelector("#render")) {
  const root = ReactDOM.createRoot(document.querySelector("#render"));
  root.render(<App />);
}
