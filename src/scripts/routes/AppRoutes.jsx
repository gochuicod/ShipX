import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MultiStepLoader from "../components/ui/MultiStepLoader";

const Main = lazy(() => import("../components/pages/homepage/Main"));
const PrivacyPolicy = lazy(
  () => import("../components/pages/privacy_policy/PrivacyPolicy"),
);
const TermsAndConditions = lazy(
  () => import("../components/pages/terms_and_conditions/TermsAndConditions"),
);
const BookADemo = lazy(
  () => import("../components/pages/book_a_demo/BookADemo"),
);
const BlogPage = lazy(() => import("../components/pages/blogs/BlogPage"));
const Blog = lazy(() => import("../components/pages/blogs/Blog"));
const NotFound = lazy(() => import("../components/pages/not_found/NotFound"));
const ShipmentTracker = lazy(
  () => import("../components/pages/toolkit/shipment_tracker/ShipmentTracker"),
);
const ClaimsPage = lazy(
  () => import("../components/pages/toolkit/file_a_claim/ClaimsPage"),
);
const HsCodeGenerator = lazy(
  () => import("../components/pages/toolkit/hs_code_generator/HsCodeGenerator"),
);
const FAQPage = lazy(
  () => import("../components/pages/frequently_asked_questions/FAQPage"),
);
const ComponentLibrary = lazy(
  () => import("../components/library/ComponentShowcase"),
);

const AppRoutes = ({ margin }) => (
  <Suspense fallback={<MultiStepLoader />}>
    <Routes>
      <Route path="/:lang?/">
        <Route index element={<Main margin={margin} />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="book-a-demo" element={<BookADemo />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="blog/:slug" element={<Blog />} />
        <Route path="shipment-tracker" element={<ShipmentTracker />} />
        <Route path="hs-code-generator" element={<HsCodeGenerator />} />
        <Route path="file-a-claim" element={<ClaimsPage />} />
        <Route path="frequently-asked-questions" element={<FAQPage />} />
        <Route path="component-library" element={<ComponentLibrary />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
