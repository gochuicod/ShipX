import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHsCode } from "../../../../hooks/useHsCode";
import ToolTipError from "./ToolTipError";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import AppButton from "../../../library/AppButton";
import { Input } from "../../../../../styles/input";
import { cn } from "../../../../../lib/util";
import { themeGuide } from "../../../../../styles/themeGuide";

import { UserRound, CircleArrowRight } from "lucide-react";

const API_URL = "https://hs-code-generator.replit.app/api/classify";
const MIN_DESC_LENGTH = 15;
const MAX_FILES = 5;
const MAX_FILE_SIZE_MB = 5;

export default function HsCodeGeneratorForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
    watch,
    reset,
    clearErrors,
    setValue,
  } = useForm({
    defaultValues: {
      targetSystem: "USA",
      productDescription: "",
      primaryMaterials: "",
      intendedUse: "",
    },
  });

  const { setHsCodeResult } = useHsCode();
  const { t } = useTranslation();

  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [touchedProductDescription, setTouchedProductDescription] =
    useState(false);

  const productDescriptionValue = watch("productDescription");
  const currentLength = productDescriptionValue?.length || 0;

  const fileInputRef = useRef(null);
  const productDescriptionRef = useRef(null);

  const [searchParams] = useSearchParams();
  const initialProductDescription = searchParams.get("productDescription");

  useEffect(() => {
    if (initialProductDescription) {
      setValue("productDescription", initialProductDescription);
      setTimeout(() => {
        productDescriptionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 500);
    }
  }, [initialProductDescription, setValue]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = [];
    let errorMessage = "";

    if (files.length + selectedFiles.length > MAX_FILES) {
      errorMessage = `Maximum ${MAX_FILES} files allowed.`;
    } else {
      selectedFiles.forEach((file) => {
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
          errorMessage = `File ${file.name} is too large (Max 5MB).`;
        } else if (
          !["image/jpeg", "image/png", "application/pdf"].includes(file.type)
        ) {
          errorMessage = `File ${file.name} is not a valid format (JPG, PNG, PDF only).`;
        } else {
          validFiles.push(file);
        }
      });
    }

    if (errorMessage) alert(errorMessage);

    setFiles((prev) => [...prev, ...validFiles]);
    e.target.value = "";
  };

  const removeFile = (index) =>
    setFiles((prev) => prev.filter((_, i) => i !== index));

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("productDescription", data.productDescription);
      formData.append("primaryMaterials", data.primaryMaterials);
      formData.append("intendedUse", data.intendedUse);
      formData.append("targetSystem", data.targetSystem);
      files.forEach((file) => formData.append("files", file));

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      if (!response.ok)
        throw new Error(
          responseData.message || responseData.error || "Classification failed",
        );

      setHsCodeResult(responseData);
      reset();
      setFiles([]);
    } catch (err) {
      setHsCodeResult({ error: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current && files.length < MAX_FILES) {
      fileInputRef.current.click();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(themeGuide.paddingX, "my-16 font-['Inter']")}
    >
      <div
        className="
          flex flex-wrap
          justify-center items-center
          gap-x-8
          lg:gap-y-6 md:gap-y-8 gap-y-12
          w-full
          rounded-2xl
          md:p-8 p-4
          bg-linear-to-br from-[#FFE6FF]/5 to-[#AA00FF]/5
        "
      >
        {/* PRODUCT DESCRIPTION */}
        <div className="flex flex-col lg:w-[35vw] w-full relative">
          <label ref={productDescriptionRef} className={themeGuide.inputLabel}>
            {t("hs_code_generator_page.form_section.input_1.label")}
            <span className="text-red-500"> *</span>
          </label>
          <p className={themeGuide.inputLabelNote}>
            {t("hs_code_generator_page.form_section.input_1.note")}
          </p>

          {isSubmitted &&
            !touchedProductDescription &&
            errors.productDescription && (
              <ToolTipError message={errors.productDescription.message} />
            )}

          <Input
            placeholder={t(
              "hs_code_generator_page.form_section.input_1.placeholder",
            )}
            className={cn(
              themeGuide.inputPlaceholder,
              errors.productDescription && "placeholder-red-500",
              "mt-0", // remove extra top margin
            )}
            {...register("productDescription", {
              required: "Product description is required",
              minLength: {
                value: MIN_DESC_LENGTH,
                message: "Description must be at least 15 characters",
              },
              onChange: () => {
                clearErrors("productDescription");
                if (!touchedProductDescription)
                  setTouchedProductDescription(true);
              },
            })}
          />

          {/* Counter, absolute like file upload */}
          <span className="absolute -bottom-5 right-0 text-xs text-[#4A5565]">
            {currentLength}/{MIN_DESC_LENGTH} characters minimum
          </span>
        </div>

        {/* INTENDED USE */}
        <div className="flex flex-col lg:w-[35vw] w-full">
          <label className={themeGuide.inputLabel}>
            {t("hs_code_generator_page.form_section.input_2.label")}
          </label>
          <p className={themeGuide.inputLabelNote}>
            {t("hs_code_generator_page.form_section.input_2.note")}
          </p>
          <Input
            className={themeGuide.inputPlaceholder}
            placeholder={t(
              "hs_code_generator_page.form_section.input_2.placeholder",
            )}
            {...register("intendedUse")}
          />
        </div>

        {/* PRIMARY MATERIALS */}
        <div className="flex flex-col lg:w-[35vw] w-full">
          <label className={themeGuide.inputLabel}>
            {t("hs_code_generator_page.form_section.input_3.label")}
          </label>
          <p className={themeGuide.inputLabelNote}>
            {t("hs_code_generator_page.form_section.input_3.note")}
          </p>
          <Input
            className={themeGuide.inputPlaceholder}
            placeholder={t(
              "hs_code_generator_page.form_section.input_3.placeholder",
            )}
            {...register("primaryMaterials")}
          />
        </div>

        {/* FILE UPLOAD AREA */}
        <div className="flex flex-col lg:w-[35vw] w-full relative">
          <label className={themeGuide.inputLabel}>
            {t("hs_code_generator_page.form_section.input_images.label")}
          </label>
          <p className={themeGuide.inputLabelNote}>
            {t("hs_code_generator_page.form_section.input_images.note")}
          </p>

          <div className="relative rounded-lg h-14 bg-white overflow-hidden flex items-center pr-2">
            {/* AppButton on left */}
            <AppButton
              type="button"
              size="default"
              style="tertiary"
              text={t(
                "hs_code_generator_page.form_section.input_images.upload_files_button",
              )}
              onClick={handleUploadButtonClick}
              className="ms-2"
              withLeftIcon
              withRightIcon
              leftIcon={UserRound}
              rightIcon={CircleArrowRight}
            />

            {/* Image inputs */}
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/png, image/jpeg, application/pdf"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
              disabled={files.length >= MAX_FILES}
            />

            <div className="flex items-center gap-2 h-full px-2 overflow-x-auto flex-1">
              {files.length > 0 &&
                files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-[#E5E7EB] rounded-md px-3 py-1 text-sm shrink-0"
                  >
                    <span className="max-w-[140px] truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-slate-500 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Helper text, absolute */}
          <p className="absolute -bottom-5 right-0 text-xs text-[#4A5565]">
            5MB limit per file · {files.length}/{MAX_FILES} files uploaded
          </p>
        </div>

        {/* TARGET SYSTEM */}
        <div className="flex flex-col lg:w-[35vw] w-full">
          <label className={themeGuide.inputLabel}>
            {t("hs_code_generator_page.form_section.input_4.label")}
            <span className="text-red-500"> *</span>
          </label>
          <p className={themeGuide.inputLabelNote}>
            Select the applicable tariff system
          </p>

          <Controller
            name="targetSystem"
            control={control}
            render={({ field }) => (
              <div
                className="
                  flex
                  p-2
                  rounded-lg
                  bg-[rgba(0,0,0,0.001)]
                  shadow-[inset_1px_1px_2px_rgba(20,0,99,0.45)]
                "
              >
                {[
                  { key: "USA", label: "USA (HTSUS - 10 digits)" },
                  { key: "ROW", label: "Rest of World (HS - 6 digits)" },
                ].map((opt) => {
                  const active = field.value === opt.key;

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => field.onChange(opt.key)}
                      className={cn(
                        "flex-1 py-2 px-4 rounded-md text-center transition-all cursor-pointer",
                        active
                          ? `
                            bg-[#CC00B7]
                            text-white
                            shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55)]
                            font-semibold
                          `
                          : `
                            text-[#1E2939]
                            font-normal
                            hover:bg-slate-100
                          `,
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            )}
          />
        </div>

        {/* SUBMIT */}
        <div className="flex flex-col md:flex-row justify-between items-center lg:w-[35vw] w-full lg:mt-14 mt-0">
          <p className="text-sm text-[#4D525C] max-w-full md:max-w-[70%] text-left">
            <span className="font-semibold">
              Fields marked with <span className="text-red-500">*</span> are
              required.
            </span>
            <br />
            It is recommended to fill all inputs to maximize the AI&apos;s
            classification accuracy.
          </p>

          <div className="flex justify-end mt-4 md:mt-0 md:ml-4 w-full md:w-auto">
            <AppButton
              type="submit"
              disabled={isLoading}
              style="primary"
              text={
                isLoading
                  ? t(
                      "hs_code_generator_page.form_section.find_hs_code_button_submitting",
                    )
                  : t("hs_code_generator_page.form_section.find_hs_code_button")
              }
            />
          </div>
        </div>
      </div>
    </form>
  );
}
