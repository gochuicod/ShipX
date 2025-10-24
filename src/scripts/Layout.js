import { lazy } from "react";
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="drop-shadow-black" />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
