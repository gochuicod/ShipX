import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/wp-json/mytheme/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setIsSent(true)
      setTimeout(() => setIsSent(false), 5000)
      reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-[1.5vw] text-[0.8vw] font-normal z-10 select-none">
      <div className="flex flex-row gap-x-[1vw]">
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
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } 
            })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="text-nowrap">Phone Number (optional)</label>
          <input
            type="tel"
            className="border-b border-[#CACACA] w-full p-2 focus:outline-none"
            {...register("phone", {
              pattern: {
                value: /^\+?[\d\s\-()]{7,}$/,
                message: "Invalid phone number"
              }
            })}
            inputMode="tel"
            autoComplete="tel"
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="flex flex-col mt-[1vw]">
        <label className="text-nowrap">Message</label>
        <textarea
          className="border-b border-[#CACACA] w-full resize-none h-[5vw] focus:outline-none"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>

      <div className="flex flex-row gap-x-[1vw] text-[0.8vw] font-normal justify-start items-center mt-[1vw]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
            bg-[length:200%_100%] bg-[position:0%_0%]
            hover:bg-[position:100%_0%]
            transition-[background-position] duration-1000 ease-in-out
            py-[0.5vw] px-[1.5vw] rounded-[2vw] cursor-pointer
            text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)]
          "
        >
          {
            isSubmitting ? "Sending..." 
            : isSent ? "Sent!" 
            : "Send a Message"
          }
        </button>

        <div
          className="
            bg-gradient-to-t from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
            bg-[length:100%_200%] bg-[position:0%_100%]
            hover:bg-[position:0%_0%]
            transition-[background-position] duration-1000 ease-in-out
            p-[0.1vw] rounded-[2vw]
            text-white font-medium
          "
        >
          <button
            className="
            bg-white
              py-[0.4vw] px-[1.5vw] rounded-[2vw] font-medium
              text-[#4F378A] relative z-10
              border-none cursor-pointer
            "
            style={{ outline: "none" }}
          >
            Book a Demo
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm