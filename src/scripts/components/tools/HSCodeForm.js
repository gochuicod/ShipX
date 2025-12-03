import TextArea from "./TextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import ToolTipError from "./ToolTipError";

const HSCodeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors, isSubmitted },
  } = useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const productDescriptionValue = watch("productDescription");
  const minLength = 15;
  const currentLength = productDescriptionValue?.length || 0;

  const onSubmit = (data) => {
    navigate(
      `/hs-code-generator?productDescription=${data.productDescription}`,
    );
  };

  const [touchedProductDescription, setTouchedProductDescription] =
    useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6"
    >
      <TextArea
        currentLength={currentLength}
        minLength={minLength}
        {...register("productDescription", {
          required: "Product description is required.",
          minLength: {
            value: minLength,
            message: `Description must be at least ${minLength} characters.`,
          },
          onChange: (e) => {
            clearErrors("productDescription");
            if (!touchedProductDescription) setTouchedProductDescription(true);
          },
        })}
        label={t("hs_code_generator_page.form_section.input_1.label")}
        id="productDescription"
        required
        placeholder={t(
          "hs_code_generator_page.form_section.input_1.placeholder",
        )}
        error={errors.productDescription}
        isSubmitted={isSubmitted}
      />
      <div className="flex justify-end md:mt-[0.5vw] mt-[1vw]">
        <Button type="submit">Continue adding details</Button>
      </div>
    </form>
  );
};

export default HSCodeForm;
