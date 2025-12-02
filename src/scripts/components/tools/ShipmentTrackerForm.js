import { useForm } from "react-hook-form";
import { useTranslation } from "../../hooks/useTranslation";
import { useShipment } from "../../hooks/useShipment";
import Input from "./Input";
import Button from "./Button";
import ToolTipError from "./ToolTipError";

const ShipmentTrackerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const { t } = useTranslation();
  const { shipmentData, setTrackingNumber } = useShipment();

  const onSubmit = async (data) => {
    setTrackingNumber(data.trackingNumber);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Tracked:", data.trackingNumber);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <label className="text-lg font-semibold text-gray-800">
        {t("lbl.tracking")}
      </label>

      <div className="relative flex flex-col md:flex-row gap-3 items-stretch md:items-start">
        <div className="grow relative">
          {shipmentData?.errors?.[0] && (
            <ToolTipError message={shipmentData.errors[0]} />
          )}

          <Input
            {...register("trackingNumber", {
              required: "Tracking number is required",
              minLength: { value: 8, message: "Minimum 8 characters" },
            })}
            id="trackingNumber"
            placeholder="5048704544"
            error={errors.trackingNumber}
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t("btn.submitting") : t("btn.track")}
        </Button>
      </div>
    </form>
  );
};

export default ShipmentTrackerForm;
