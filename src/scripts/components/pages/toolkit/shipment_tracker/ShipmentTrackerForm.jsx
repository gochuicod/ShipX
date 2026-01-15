import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useShipment } from "../../../../hooks/useShipment";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import ToolTipError from "../hs_code_generator/ToolTipError";
import AppButton from "../../../library/AppButton";
import { Input } from "../../../../../styles/input";
import { cn } from "../../../../../lib/util";
import { themeGuide } from "../../../../../styles/themeGuide";

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

  const { shipmentData, setShipmentData, setTrackingNumber } = useShipment();

  const displayError =
    errors.trackingNumber?.message || shipmentData?.errors?.[0];

  useEffect(() => {
    if (initialTrackingNumber && autoSubmit) {
      setValue("trackingNumber", initialTrackingNumber);
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
        const errorData = await response.json();
        setShipmentData(errorData);
        return;
      }

      const result = await response.json();
      setShipmentData(result);
      reset();
    } catch (error) {
      setShipmentData({ errors: ["An error occurred. Please try again."] });
    }
  };

  return (
    <div className="w-full max-w-[640px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "flex flex-col justify-center items-start p-4 gap-2",
          "w-full h-auto min-h-[116px]",
          "bg-linear-to-br from-[#FFE6FF]/5 to-[#AA00FF]/5",
          "backdrop-blur-md rounded-2xl",
        )}
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        {/* Label positioned above the bar */}
        <label className={themeGuide.inputLabel} htmlFor="trackingNumber">
          {t("shipment_tracker.track_order_section.form.label")}
        </label>

        {/* White Search Bar Container */}
        <div className="relative flex flex-row items-center p-1 gap-2 w-full bg-white border-b border-[#7F22FE] rounded-lg">
          {/* Error Tooltip anchors to the bar */}
          {isSubmitted && displayError && (
            <ToolTipError message={displayError} />
          )}

          {/* Icon and Input Section */}
          <div className="flex items-center gap-2 pl-3 grow min-w-0">
            <Search className="text-[#99A1AF] shrink-0" size={20} />

            <Input
              id="trackingNumber"
              aria-invalid={errors.trackingNumber ? "true" : "false"}
              placeholder="Enter tracking number (e.g., SX1234567890)"
              disableFocusRing={true}
              className={cn(
                themeGuide.inputPlaceholder,
                "border-none h-10 shadow-none px-0 py-0 w-full",
                "md:min-w-[340px]", // Ensures space for long placeholder on desktop
                errors.trackingNumber
                  ? "placeholder-red-500"
                  : "text-[#1E2939] placeholder-[#99A1AF] font-['Inter']",
              )}
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
                  if (shipmentData?.errors) setShipmentData(null);
                },
              })}
              autoComplete="off"
            />
          </div>

          {/* Submit Button */}
          <AppButton
            type="submit"
            disabled={isSubmitting}
            style="primary"
            text={
              isSubmitting
                ? t("shipment_tracker.track_order_section.form.submitting")
                : t("shipment_tracker.track_order_section.form.submit_button")
            }
          />
        </div>
      </form>
    </div>
  );
};

export default ShipmentTrackerForm;
