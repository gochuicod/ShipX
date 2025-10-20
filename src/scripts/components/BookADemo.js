import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "./ui/SEO";
import MultiStepLoader from "./ui/MultiStepLoader";

const BookADemo = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // optional smooth scroll
  }, [pathname]);

  return (
    <>
      <SEO
        title="ShipX - Book A Demo"
        description="Book a Demo with ShipX!"
        canonical="https://shipx.asia/book-a-demo"
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/logo-shipx.webp"
      />

      <div style={{ width: "100%", height: "100vh" }}>
        {loading && <MultiStepLoader />}

        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2xm9gkOC9hplYucI1nHkQApNfYFGrcfsjxq96a-TR3S8ZwacBAz-2lRcgARMGJx9F40_9OP_uO?gv=true"
          title="Book a Demo with ShipX"
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
