import { useEffect } from "react";

const useVersionCheck = () => {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        const res = await fetch("/version.json", { cache: "no-store" });
        const data = await res.json();
        const currentVersion = localStorage.getItem("site_version");

        if (currentVersion && currentVersion !== data.version) {
          localStorage.setItem("site_version", data.version);
          window.location.reload(); // force reload
        } else if (!currentVersion) {
          localStorage.setItem("site_version", data.version);
        }
      } catch (err) {
        console.error("Failed to check version:", err);
      }
    };

    checkVersion();
  }, []);
};

export default useVersionCheck;
