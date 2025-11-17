import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "./ui/SEO";
import MultiStepLoader from "./ui/MultiStepLoader";

const BookADemo = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // optional smooth scroll
  }, [pathname]);

  return (
    <>
      <SEO
        title={t("seo.book_a_demo_page.title")}
        description={t("seo.book_a_demo_page.description")}
        canonical={t("seo.book_a_demo_page.canonical")}
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
      />

      <div className="w-full md:h-[70vw] h-screen">
        <h1 className="sr-only">{t("seo.book_a_demo_page.title")}</h1>

        {loading && <MultiStepLoader />}

        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2xm9gkOC9hplYucI1nHkQApNfYFGrcfsjxq96a-TR3S8ZwacBAz-2lRcgARMGJx9F40_9OP_uO?gv=true"
          title={t("book_a_demo_page.seo.iframeTitle")}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          onLoad={() => setLoading(false)}
          loading="lazy"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default BookADemo;
