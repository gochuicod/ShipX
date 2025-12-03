import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import ToolTipError from "./ToolTipError";

const FileClaimForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // formState: { errors, isSubmitted },
    clearErrors,
    watch,
  } = useForm();
  const navigate = useNavigate();
  // const { t } = useTranslation();

  const fileClaimDescription = watch("fileClaimDescription");
  const minLength = 25;
  const currentLength = fileClaimDescription?.length || 0;

  const onSubmit = (data) => {
    navigate(
      `/file-a-claim?trackingNumber=${data.fileClaimTrackingNumber}&description=${data.fileClaimDescription}`,
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <div className="relative">
        {/* {isSubmitted && errors.fileClaimTrackingNumber && (
          <ToolTipError message={errors.fileClaimTrackingNumber.message} />
        )} */}
        <Input
          {...register("fileClaimTrackingNumber", {
            required: "Tracking number is required.",
            minLength: { value: 8, message: "Minimum 8 characters." },
            onChange: () => clearErrors("fileClaimTrackingNumber"),
          })}
          label="Tracking Number"
          id="fileClaimTrackingNumber"
          required
          placeholder="Enter tracking number (min 8 characters)"
          error={errors.fileClaimTrackingNumber}
        />
      </div>
      <div className="relative">
        {/* {isSubmitted && errors.fileClaimDescription && (
          <ToolTipError message={errors.fileClaimDescription.message} />
        )} */}
        <TextArea
          currentLength={currentLength}
          minLength={minLength}
          {...register("fileClaimDescription", {
            required: "A description of the claim is required.",
            onChange: () => clearErrors("fileClaimDescription"),
          })}
          label="Description"
          id="fileClaimDescription"
          required
          placeholder="Please provide as much detail as possible about your claim..."
          error={errors.fileClaimDescription}
        />
      </div>
      <div className="flex justify-end mt-2">
        <Button type="submit">Continue adding details</Button>
      </div>
    </form>
  );
};

export default FileClaimForm;
