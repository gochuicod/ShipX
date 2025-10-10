import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as motion from "motion/react-client";
import { NavLink } from "react-router-dom";
import { header_svg_1, header_svg_2 } from "../../../assets/assets";

const LoginDropdown = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative md:px-0 px-[5vw] md:w-auto w-full"
      ref={dropdownRef}
    >
      {/* Login/Signup Trigger */}
      <span
        onClick={() => setOpen(!open)}
        className="text-[#FF00E5] hover:text-shadow-[0_0_0.5vw_rgba(255,0,229,0.5)] transition-text-shadow duration-500 ease-in-out cursor-pointer font-bold"
      >
        {t("header.login_signup")}
      </span>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute top-full md:mt-[1vw] mt-[3vw]
            left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0
            md:w-auto w-[90vw]
            bg-white md:rounded-[1vw] rounded-[3vw] md:shadow-[0_0_0.5vw_rgba(255,0,229,0.2)] shadow-[0_0_1.5vw_rgba(255,0,229,0.3)]
            z-[1000] md:p-[2vw] p-[5vw] flex md:flex-row flex-col md:gap-[2vw] gap-[5vw]
          "
        >
          {/* Amilo */}
          <div className="flex flex-col gap-y-[0.5vw] md:w-[15vw] w-auto">
            <span className="text-[#19191D] font-bold md:text-[1vw] text-[3.5vw]">
              {t("header.login_modal.amilo.title")}
            </span>
            <span className="text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal">
              {t("header.login_modal.amilo.description")}
            </span>
            <motion.button
              className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => (window.location.href = "https://vip.amilo.co/")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />
              <div className="relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full">
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[3.3vw]">
                  {t("header.login_modal.amilo.button")}
                </span>
                <img
                  src={header_svg_1}
                  alt="Amilo Logo"
                  className="md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
                />
              </div>
            </motion.button>
          </div>

          {/* SGLink */}
          <div className="flex flex-col gap-y-[0.5vw] md:w-[15vw] w-auto">
            <span className="text-[#19191D] font-bold md:text-[1vw] text-[3.5vw]">
              {t("header.login_modal.sglink.title")}
            </span>
            <span className="text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal">
              {t("header.login_modal.sglink.description")}
            </span>
            <motion.button
              className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() =>
                (window.location.href = "https://admin.sglinkapi.com/")
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />
              <div className="relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full">
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[3.3vw]">
                  {t("header.login_modal.sglink.button")}
                </span>
                <img
                  src={header_svg_2}
                  alt="SG Link Logo"
                  className="md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
                />
              </div>
            </motion.button>
          </div>

          {/* Sign Up */}
          <div className="flex flex-col gap-y-[0.5vw] md:w-[15vw] w-auto">
            <span className="text-[#19191D] font-bold md:text-[1vw] text-[3.5vw]">
              {t("header.login_modal.sign_up.title")}
            </span>
            <span className="text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal">
              {t("header.login_modal.sign_up.description")}
            </span>
            <NavLink
              to="/#contact-us"
              end
              className="
                bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                bg-[length:200%_100%] bg-[position:0%_0%]
                hover:bg-[position:100%_0%]
                transition-[background-position] duration-1000 ease-in-out
                md:py-[0.6vw] py-[0.5vw] md:px-[1.5vw] px-[3vw] rounded-full
                text-white font-medium w-fit md:text-[0.8vw] text-[3.3vw]
              "
            >
              {t("header.login_modal.sign_up.button")}
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import * as motion from "motion/react-client";
// import { NavLink } from "react-router-dom";

// import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

// import { header_svg_1, header_svg_2 } from "../../../assets/assets";

// const LoginModal = () => {
//   const [open, setOpen] = useState(false);
//   const { t } = useTranslation();

//   return (
//     <div className="md:px-0 px-[5vw]">
//       <span
//         onClick={() => setOpen(true)}
//         className="text-[#FF00E5] hover:text-shadow-[0_0_0.5vw_rgba(255,0,229,0.5)] transition-text-shadow duration-500 ease-in-out cursor-pointer font-bold mr-[1vw]"
//       >
//         {t("header.login_signup")}
//       </span>
//       <Dialog open={open} onClose={setOpen} className="relative z-[2000]">
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-black/70 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
//         />

//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full justify-center text-center items-center">
//             <DialogPanel
//               transition
//               className="flex md:flex-row flex-col md:gap-x-[2vw] gap-x-0 md:gap-y-0 gap-y-[4vw] bg-white md:rounded-[1vw] rounded-[3vw] md:p-[1.5vw] p-[5vw] md:w-fit w-[90vw]"
//             >
//               <div className="flex flex-col md:gap-y-[0.5vw] gap-y-[1vw]">
//                 <span
//                   className="text-[#19191D] text-start font-bold md:text-[1vw] text-[3.5vw]"
//                   style={{
//                     fontFamily:
//                       "Public_Sans, system-ui, -apple-system, sans-serif",
//                   }}
//                 >
//                   {t("header.login_modal.amilo.title")}
//                 </span>
//                 <span
//                   className="text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal text-wrap text-left"
//                   style={{
//                     fontFamily:
//                       "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
//                   }}
//                 >
//                   {t("header.login_modal.amilo.description")}
//                 </span>
//                 <motion.button
//                   className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.8 }}
//                   onClick={() =>
//                     (window.location.href = "https://vip.amilo.co/")
//                   }
//                 >
//                   {/* Gradient border */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

//                   {/* Inner white area */}
//                   <div className="relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full">
//                     <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[3.3vw]">
//                       {t("header.login_modal.amilo.button")}
//                     </span>
//                     <img
//                       src={header_svg_1}
//                       alt="Amilo Logo"
//                       className="md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
//                     />
//                   </div>
//                 </motion.button>
//               </div>
//               <div className="flex flex-col gap-y-[0.5vw]">
//                 <span
//                   className="text-[#19191D] text-start font-bold md:text-[1vw] text-[3.5vw]"
//                   style={{
//                     fontFamily:
//                       "Public_Sans, system-ui, -apple-system, sans-serif",
//                   }}
//                 >
//                   {t("header.login_modal.sglink.title")}
//                 </span>
//                 <span
//                   className="text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal text-wrap text-left"
//                   style={{
//                     fontFamily:
//                       "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
//                   }}
//                 >
//                   {t("header.login_modal.sglink.description")}
//                 </span>
//                 <motion.button
//                   className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.8 }}
//                   onClick={() =>
//                     (window.location.href = "https://admin.sglinkapi.com/")
//                   }
//                 >
//                   {/* Gradient border */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

//                   {/* Inner white area */}
//                   <div className="relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full">
//                     <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[3.3vw]">
//                       {t("header.login_modal.sglink.button")}
//                     </span>
//                     <img
//                       src={header_svg_2}
//                       alt="Amilo Logo"
//                       className="md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
//                     />
//                   </div>
//                 </motion.button>
//               </div>
//               <div className="flex flex-col gap-y-[0.5vw]">
//                 <span
//                   className="text-[#19191D] text-start font-bold md:text-[1vw] text-[3.5vw]"
//                   style={{
//                     fontFamily:
//                       "Public_Sans, system-ui, -apple-system, sans-serif",
//                   }}
//                 >
//                   {t("header.login_modal.sign_up.title")}
//                 </span>
//                 <span
//                   className="text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal text-wrap text-left"
//                   style={{
//                     fontFamily:
//                       "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
//                   }}
//                 >
//                   {t("header.login_modal.sign_up.description")}
//                 </span>
//                 <NavLink
//                   to="/#contact-us"
//                   end
//                   className="
//                             bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
//                             bg-[length:200%_100%] bg-[position:0%_0%]
//                             hover:bg-[position:100%_0%]
//                             transition-[background-position] duration-1000 ease-in-out
//                             md:py-[0.6vw] py-[0.5vw] md:px-[1.5vw] px-[3vw] rounded-full
//                             text-white font-medium w-fit md:text-[0.8vw] text-[3.3vw]
//                         "
//                 >
//                   {t("header.login_modal.sign_up.button")}
//                 </NavLink>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default LoginModal;
