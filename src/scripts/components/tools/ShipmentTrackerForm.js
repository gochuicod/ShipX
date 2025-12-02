import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import ToolTipError from "./ToolTipError";

const ShipmentTrackerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    watch,
    clearErrors,
  } = useForm();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(
      `/shipment-tracker?trackingNumber=${data.trackingNumber}&autosubmit=true`,
    );
  };

  const trackingNumberValue = watch("trackingNumber");

  useEffect(() => {
    if (errors.trackingNumber) {
      clearErrors("trackingNumber");
    }
  }, [trackingNumberValue, clearErrors]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-y-[0.5vw]"
    >
      <label className="md:text-[1vw] text-[2.5vw] font-semibold text-[#1E2939]">
        {t("shipment_tracker.track_order_section.form.label")}
      </label>

      <div className="relative flex flex-row md:gap-x-[1vw] gap-x-[3vw]">
        <div className="grow relative">
          {isSubmitted && errors.trackingNumber && (
            <ToolTipError message={errors.trackingNumber.message} />
          )}

          <Input
            {...register("trackingNumber", {
              required: t("toolkit.shipment_tracker.form.validation.required"),
              pattern: {
                value: /^[A-Za-z0-9]{8,20}$/,
                message: t("toolkit.shipment_tracker.form.validation.invalid"),
              },
            })}
            id="trackingNumber"
            placeholder={t(
              "shipment_tracker.track_order_section.form.placeholder",
            )}
            error={errors.trackingNumber}
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? t("shipment_tracker.track_order_section.form.submitting")
            : t("shipment_tracker.track_order_section.form.submit_button")}
        </Button>
      </div>
    </form>
  );
};

export default ShipmentTrackerForm;
