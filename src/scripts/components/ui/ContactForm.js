import { useForm } from "react-hook-form";
import { useState } from "react";
import * as motion from "motion/react-client";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/wp-json/mytheme/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  const { t } = useTranslation();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-[1.5vw] md:text-[0.8vw] text-[2.5vw] font-normal z-10 select-none md:w-auto w-full"
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <div className="flex md:flex-row flex-col gap-x-[1vw] md:gap-y-0 gap-y-[5vw]">
        <div className="flex flex-col">
          <label className="text-nowrap">
            {t("contact_us_section.form.name")}
          </label>
          <input
            className={`border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`}
            {...register("name", {
              required: t("contact_us_section.form.name_placeholder"),
            })}
            placeholder={errors.name ? errors.name.message : ""}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-nowrap">
            {t("contact_us_section.form.email")}
          </label>
          <input
            type="email"
            className={`border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.email ? "placeholder-red-500" : "placeholder-black/50"}`}
            {...register("email", {
              required: t("contact_us_section.form.email_placeholder_1"),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t("contact_us_section.form.email_placeholder_2"),
              },
            })}
            placeholder={errors.email ? errors.email.message : ""}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-nowrap">
            {t("contact_us_section.form.phone")}
          </label>
          <input
            type="tel"
            className={`border-b border-[#CACACA] w-full p-2 focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`}
            {...register("phone", {
              pattern: {
                value: /^\+?[\d\s\-()]{7,}$/,
                message: t("contact_us_section.form.phone_placeholder"),
              },
            })}
            inputMode="tel"
            autoComplete="tel"
            placeholder={errors.phone ? errors.phone.message : ""}
          />
        </div>
      </div>

      <div className="flex flex-col md:mt-[1vw] mt-0 md:pt-0 pt-[5vw]">
        <label className="text-nowrap">
          {t("contact_us_section.form.message")}
        </label>
        <textarea
          className={`border-b border-[#CACACA] w-full resize-none md:h-[5vw] h-[15vw] focus:outline-none ${errors.name ? "placeholder-red-500" : "placeholder-black/50"}`}
          {...register("message", {
            required: t("contact_us_section.form.message_placeholder"),
          })}
          placeholder={errors.message ? errors.message.message : ""}
        />
      </div>

      <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.5vw] font-normal justify-start items-center md:mt-[1vw] mt-0 md:pt-0 pt-[5vw]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
            bg-[length:200%_100%] bg-[position:0%_0%]
            hover:bg-[position:100%_0%]
            transition-[background-position] duration-1000 ease-in-out
            md:py-[0.6vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer
            text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)]
          "
        >
          {isSubmitting
            ? t("contact_us_section.form.button_sending")
            : isSent
              ? t("contact_us_section.form.button_sent")
              : t("contact_us_section.form.button_default")}
        </button>

        <motion.button
          className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer"
          whileHover={{
            y: -5,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { type: "spring", stiffness: 500, damping: 10 },
          }}
        >
          {/* Gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

          {/* Inner white area */}
          <div className="relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full">
            <span className="text-[#4F378A] font-semibold">Book a Demo</span>
          </div>
        </motion.button>
      </div>
    </form>
  );
};

export default ContactForm;
