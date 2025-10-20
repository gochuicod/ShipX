import { NavLink, useLocation, useNavigate } from "react-router-dom";

const SmartNavLink = ({
  to = "/",
  end = false,
  className,
  children,
  delay = 1000,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    const [pathname, hash] = to.split("#"); // Split route and hash (if any)
    const isSamePath = location.pathname === pathname;

    // Case 1: Link with a hash (e.g. /#services)
    if (hash) {
      e.preventDefault();

      // If on another page, navigate first then scroll
      if (!isSamePath) {
        navigate(pathname);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      } else {
        // Already on same page: scroll directly to section
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }

      // Optional: clean up hash from URL after a delay
      setTimeout(() => {
        window.history.replaceState(null, "", pathname);
      }, delay);
    }

    // Case 2: Normal route navigation (no hash)
    else {
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
    <NavLink to={to} end={end} className={className} onClick={handleClick}>
      {children}
    </NavLink>
  );
};

export default SmartNavLink;
