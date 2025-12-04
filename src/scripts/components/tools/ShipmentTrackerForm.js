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
  } = useForm();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate(
      `/shipment-tracker?trackingNumber=${data.trackingNumber}&autosubmit=true`,
    );
  };

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
            })}
            id="trackingNumber"
            placeholder={"e.g., SGL2510001808"}
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
