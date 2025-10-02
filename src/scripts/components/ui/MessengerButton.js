import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const MessengerButton = () => {
  const messengerLink = "https://m.me/YOUR_PAGE_USERNAME_OR_ID";
  const [messengerVisibility, setMessengerVisibility] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessengerVisibility(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={messengerLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${messengerVisibility ? "fixed" : "hidden"} flex justify-center items-center md:gap-x-[0.5vw] gap-x-[2vw] md:bottom-[1vw] bottom-[2vw] md:right-[1vw] right-[2vw] bg-blue-600 hover:bg-blue-700 text-white md:py-[0.6vw] py-[2vw] md:px-[1vw] px-[2.4vw] rounded-full z-[1001] animate-bounce hover:animate-none md:text-[0.8vw] text-[2.2vw]`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        className="md:size-[2vw] size-[6vw]"
      >
        <path d="M12 0C5.373 0 0 5.118 0 11.439c0 3.594 1.792 6.802 4.616 8.886V24l4.229-2.335c1.047.288 2.162.444 3.33.444 6.627 0 12-5.118 12-11.439C24 5.118 18.627 0 12 0zm1.093 15.599l-2.93-3.126-5.824 3.126 6.475-6.818 2.97 3.125 5.778-3.125-6.469 6.818z" />
      </svg>
      {t("messenger_bubble.message")}
    </a>
  );
};

export default MessengerButton;
