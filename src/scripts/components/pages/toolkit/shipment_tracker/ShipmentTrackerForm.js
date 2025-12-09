import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useShipment } from "../../../../hooks/useShipment";
import { useTranslation } from "react-i18next";
import ToolTipError from "../hs_code_generator/ToolTipError";
import Button from "../../../ui/Button";

const ShipmentTrackerForm = ({ initialTrackingNumber, autoSubmit = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
    clearErrors,
    setValue,
  } = useForm();
  const { t } = useTranslation();

  // This assumes useShipment is refactored to expose a `trackShipment` function
  // and an `error` state.
  const { setShipmentData, setTrackingNumber, error: apiError } = useShipment();

  // Combine form errors and API errors for a single source of truth.
  const displayError = errors.trackingNumber?.message || apiError;

  // Effect to handle auto-submission when redirected
  useEffect(() => {
    if (initialTrackingNumber && autoSubmit) {
      setValue("trackingNumber", initialTrackingNumber);
      // Trigger the form submission programmatically
      handleSubmit(onSubmit)();
    }
  }, [initialTrackingNumber, autoSubmit, setValue, handleSubmit]);

  const onSubmit = async (data) => {
    const trackingNumber = data.trackingNumber;

    setTrackingNumber(trackingNumber);

    try {
      const response = await fetch(
        `https://shipx.asia/wp-json/shipx/v1/track/${trackingNumber}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ae6fkmMv7nw6A-pBqgocXN6BNn3pdfiesJf-hgOeJJJWDFDmLvkFxvzUJWRLw6Rw`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Something went wrong with the tracking request.");
      }

      const result = await response.json();
      setShipmentData(result);

      reset();
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
                    flex flex-row
                    md:gap-x-[1vw] gap-x-[2vw]
                    justify-center items-end
                    bg-white
                    shadow-[0_0_5vw_rgba(255,0,229,0.10)]
                    md:py-[1.5vw] py-[3vw]
                    md:px-[2.5vw] px-[4vw]
                    md:rounded-[1vw] rounded-[3vw]
                    md:text-[0.8vw] text-[2.6vw]
                    md:w-full w-[90vw]
                "
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <img
          className="w-[2.2vw] h-[2.2vw] md:block hidden"
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_1.svg"
          alt="ShipX - globe"
        />
        <div
          className="
            flex flex-col
            md:gap-y-0 gap-y-[1.5vw]
          "
        >
          <label
            className="
                            flex flex-row
                            md:gap-x-0 gap-x-[2vw]
                            text-nowrap
                            font-semibold
                            md:text-[1vw] text-[2.7vw]
                            text-[#1E2939]
                        "
            htmlFor="trackingNumber"
          >
            <img
              className="w-[4vw] h-[4vw] md:hidden block"
              src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_1.svg"
              alt="ShipX - globe"
            />
            {t("shipment_tracker.track_order_section.form.label")}
          </label>
          <div className="relative">
            {isSubmitted && displayError && (
              <ToolTipError message={displayError} />
            )}
            <input
              aria-invalid={errors.trackingNumber ? "true" : "false"}
              id="trackingNumber"
              className={`
                              bg-[#F9FAFB]
                              border border-[#B9AFD0]
                              md:w-full w-full
                              md:h-[2.2vw] h-[6.5vw]
                              md:rounded-[0.5vw] rounded-[2vw]
                              p-2
                              focus:outline-none
                              ${errors.trackingNumber ? "placeholder-red-500" : "placeholder-black/50"}
                          `}
              {...register("trackingNumber", {
                required: "Tracking number is required",
                pattern: {
                  value: /^[A-Za-z0-9]{2,20}$/,
                  message: "Please enter a valid tracking number",
                },
                validate: (value) => {
                  if (/\s/.test(value))
                    return "Tracking number cannot contain spaces";
                  return true;
                },
                onChange: () => {
                  clearErrors("trackingNumber");
                  // Also clear API error from useShipment if it exists
                  if (apiError) setShipmentData(null);
                },
              })}
              autoComplete="number"
              placeholder="e.g., SGL2510001808"
            />
          </div>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? t("shipment_tracker.track_order_section.form.submitting")
            : t("shipment_tracker.track_order_section.form.submit_button")}
        </Button>
      </form>
    </div>
  );
};

export default ShipmentTrackerForm;
