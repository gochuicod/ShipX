import { NavLink, useLocation, useNavigate } from "react-router-dom";
import i18n from "../../../i18n";

const SmartNavLink = ({
  to = "/",
  end = false,
  className,
  children,
  delay = 1000,
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

  const handleClick = (e) => {
    const [pathname, hash] = fullPath.split("#");
    const isSamePath = location.pathname === pathname;

    if (hash) {
      e.preventDefault();

      if (!isSamePath) {
        navigate(pathname);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }

      setTimeout(() => {
        window.history.replaceState(null, "", pathname);
      }, delay);
    } else {
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
