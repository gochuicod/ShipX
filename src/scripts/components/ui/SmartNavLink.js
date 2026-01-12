import { NavLink, useLocation, useNavigate } from "react-router-dom";
import i18n from "../../../i18n";

const SmartNavLink = ({
  to = "/",
  end = false,
  className,
  children,
  delay = 1000,
  onClick,
  // New prop: defaults to 'start' (top). Options: 'top', 'bottom', 'center', 'nearest'
  scrollAlign = "start",
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Prepend language prefix if not default
  const langPrefix = i18n.language !== "en" ? `/${i18n.language}` : "";
  let fullPath = to.startsWith("/")
    ? `${langPrefix}${to}`
    : `${langPrefix}/${to}`;

  // Remove double slashes if any
  fullPath = fullPath.replace(/\/+/g, "/");

  // Helper to map user-friendly terms to scrollIntoView API terms
  const getBlockAlign = (align) => {
    if (align === "top") return "start";
    if (align === "bottom") return "end";
    return align; // Returns 'center', 'nearest', 'start', or 'end' as is
  };

  const handleClick = (e) => {
    const [pathname, hash] = fullPath.split("#");
    const isSamePath = location.pathname === pathname;

    // If an external onClick handler is provided, execute it.
    if (onClick) {
      onClick(e);
    }

    if (hash) {
      e.preventDefault();

      const scrollOptions = {
        behavior: "smooth",
        block: getBlockAlign(scrollAlign),
      };

      if (!isSamePath) {
        navigate(pathname);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) target.scrollIntoView(scrollOptions);
        }, 300);
      } else {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView(scrollOptions);
      }

      setTimeout(() => {
        window.history.replaceState(null, "", pathname);
      }, delay);
    } else {
      // Logic for non-hash links (scrolls to absolute top of page)
      if (isSamePath) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          window.history.replaceState(null, "", location.pathname);
        }, delay);
      } else {
        e.preventDefault();
        navigate(pathname);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.replaceState(null, "", pathname);
        }, 300);
      }
    }
  };

  return (
    <NavLink
      to={fullPath}
      end={end}
      className={className}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
};

export default SmartNavLink;
