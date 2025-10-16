import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResetOnRefresh = ({ paths = [] }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only redirect if the page was refreshed
    const navigationType = performance.getEntriesByType("navigation")[0]?.type;
    if (navigationType === "reload" && paths.includes(location.pathname)) {
      navigate("/", { replace: true }); // redirect to home or any default route
    }
  }, [location.pathname, navigate, paths]);

  return null;
};

export default ResetOnRefresh;
