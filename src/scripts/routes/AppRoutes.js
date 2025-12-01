import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MultiStepLoader from "../components/ui/MultiStepLoader";

const Main = lazy(() => import("../components/Main"));
const PrivacyPolicy = lazy(() => import("../components/PrivacyPolicy"));
const TermsAndConditions = lazy(
  () => import("../components/TermsAndConditions"),
);
const BookADemo = lazy(() => import("../components/BookADemo"));
const BlogList = lazy(() => import("../components/BlogList"));
const Blog = lazy(() => import("../components/Blog"));
const NotFound = lazy(() => import("../components/ui/NotFound"));
const ShipmentTracker = lazy(
  () => import("../components/shipment_tracker/ShipmentTracker"),
);
const ClaimsPage = lazy(() => import("../components/file_a_claim/ClaimsPage"));
const HsCodeGenerator = lazy(
  () => import("../components/hs_code_generator/HsCodeGenerator"),
);
const FAQPage = lazy(
  () => import("../components/frequently_asked_questions/FAQPage"),
);

const AppRoutes = ({ margin }) => (
  <Suspense fallback={<MultiStepLoader />}>
    <Routes>
      <Route path="/:lang?/">
        <Route index element={<Main margin={margin} />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="book-a-demo" element={<BookADemo />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:slug" element={<Blog />} />
        <Route path="shipment-tracker" element={<ShipmentTracker />} />
        <Route path="hs-code-generator" element={<HsCodeGenerator />} />
        <Route path="file-a-claim" element={<ClaimsPage />} />
        <Route path="frequently-asked-questions" element={<FAQPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
