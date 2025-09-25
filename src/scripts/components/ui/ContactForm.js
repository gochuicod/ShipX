import { useForm } from "react-hook-form";
import { useState } from "react";
import * as motion from 'motion/react-client'

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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-[1.5vw] md:text-[0.8vw] text-[2.5vw] font-normal z-10 select-none md:w-auto w-full font-['Inter']"
    >
      <div className="flex md:flex-row flex-col gap-x-[1vw] md:gap-y-0 gap-y-[5vw]">
        <div className="flex flex-col">
          <label className="text-nowrap">Your Name</label>
          <input
            className="border-b border-[#CACACA] w-full p-2 focus:outline-none"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="text-nowrap">Email Address</label>
          <input
            type="email"
            className="border-b border-[#CACACA] w-full p-2 focus:outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-nowrap">Phone Number (optional)</label>
          <input
            type="tel"
            className="border-b border-[#CACACA] w-full p-2 focus:outline-none"
            {...register("phone", {
              pattern: {
                value: /^\+?[\d\s\-()]{7,}$/,
                message: "Invalid phone number",
              },
            })}
            inputMode="tel"
            autoComplete="tel"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col md:mt-[1vw] mt-0 md:pt-0 pt-[5vw]">
        <label className="text-nowrap">Message</label>
        <textarea
          className="border-b border-[#CACACA] w-full resize-none md:h-[5vw] h-[15vw] focus:outline-none"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.5vw] font-normal font-['Karla'] justify-start items-center md:mt-[1vw] mt-0 md:pt-0 pt-[5vw]">
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
          {isSubmitting ? "Sending..." : isSent ? "Sent!" : "Send a Message"}
        </button>

        <motion.button
          className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden"
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
