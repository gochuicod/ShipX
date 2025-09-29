import { useForm } from "react-hook-form";
import { useState } from "react";
import * as motion from "motion/react-client";

const NewsletterForm = () => {
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row md:justify-start justify-center gap-x-[1vw] md:text-[0.8vw] text-[2.5vw] font-normal z-10 select-none md:w-auto w-full md:pt-[1vw] pt-[5vw]"
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <div className="flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#4F378A] to-[#FF00E5] rounded-full" />
        <input
          type="email"
          className={`relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-[#8E3CAD] rounded-full ${errors.email ? "placeholder-red-500" : "placeholder-white/50"} text-white focus:outline-none`}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          placeholder={errors.email ? errors.email.message : "Enter Email"}
        />
      </div>

      <motion.button
        type="submit"
        className="md:p-[0.10vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer"
        disabled={isSubmitting}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#4F378A] to-[#FF00E5] rounded-full" />

        {/* Inner white area */}
        <div className="relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-[#8E3CAD] text-white rounded-full">
          {isSubmitting ? "Sending..." : isSent ? "Sent!" : "Book a Demo"}
        </div>
      </motion.button>
    </form>
  );
};

export default NewsletterForm;
