import React, { Suspense, lazy } from "react";
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

const AppRoutes = ({ margin }) => (
  <Suspense fallback={<MultiStepLoader />}>
    <Routes>
      <Route path="/" element={<Main margin={margin} />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/book-a-demo" element={<BookADemo />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
