import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHsCode } from "../../../../hooks/useHsCode";
import ToolTipError from "./ToolTipError";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import Textarea from "./Textarea";
import Button from "../../../ui/Button";

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

  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setHsCodeResult } = useHsCode();
  const { t } = useTranslation();
  const [touchedProductDescription, setTouchedProductDescription] =
    useState(false);

  const productDescriptionValue = watch("productDescription");

  const currentLength = productDescriptionValue?.length || 0;

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    validateAndAddFiles(selectedFiles);
    e.target.value = "";
  };

  const validateAndAddFiles = (newFiles) => {
    const validFiles = [];
    let errorMessage = "";

    if (files.length + newFiles.length > MAX_FILES) {
      errorMessage = `Maximum ${MAX_FILES} files allowed.`;
    } else {
      newFiles.forEach((file) => {
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

    if (errorMessage) {
      alert(errorMessage);
    }

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("productDescription", data.productDescription);
      formData.append("primaryMaterials", data.primaryMaterials);
      formData.append("intendedUse", data.intendedUse);
      formData.append("targetSystem", data.targetSystem);

      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.message || responseData.error || "Classification failed",
        );
      }

      setHsCodeResult(responseData);
      reset();
      setFiles([]);
    } catch (err) {
      setHsCodeResult({
        error: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  const [searchParams] = useSearchParams();
  const productDescriptionRef = useRef();
  const initialProductDescription = searchParams.get("productDescription");

  useEffect(() => {
    if (initialProductDescription) {
      setValue("productDescription", initialProductDescription);
      setTimeout(() => {
        productDescriptionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 500);
    }
  }, [initialProductDescription, setValue]);

  return (
    <form
      className="
                flex flex-wrap
                justify-center items-center
                md:px-[10vw] px-[5vw]
                my-[5vw]
                gap-x-[2vw]
                gap-y-[1.5vw]
            "
      onSubmit={handleSubmit(onSubmit)}
      style={{
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Product description */}
      <div
        className="
                    flex flex-col
                    md:w-[35vw] w-[90vw]
                    md:mt-0 mt-[5vw]
                    relative
                "
      >
        <div className="flex justify-between items-end mb-[0.5vw] md:mb-[0.3vw]">
          <div>
            <label
              ref={productDescriptionRef}
              className="
                        md:text-[1vw] text-[3vw]
                        text-[#1E2939]
                        font-semibold
                        md:leading-[1.2vw] leading-[3.2vw]
                    "
            >
              {t("hs_code_generator_page.form_section.input_1.label")}&nbsp;
              <span className="text-red-500">*</span>
            </label>
            <p
              className="
                        text-[#4A5565]/80
                        md:text-[0.8vw] text-[2.5vw]
                        md:leading-[1.5vw] leading-[3vw]
                    "
            >
              {t("hs_code_generator_page.form_section.input_1.note")}
            </p>
          </div>
          <span
            className={`md:text-[0.7vw] text-[2.2vw] font-medium md:leading-[1.5vw] leading-[3vw] ${
              currentLength < MIN_DESC_LENGTH
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            {currentLength}/{MIN_DESC_LENGTH}
          </span>
        </div>
        <div className="relative">
          {/* Tooltip Error */}
          {isSubmitted &&
            !touchedProductDescription &&
            errors.productDescription && (
              <ToolTipError message={errors.productDescription.message} />
            )}

          <Textarea
            id="productDescription"
            aria-invalid={errors.productDescription ? "true" : "false"}
            placeholder={t(
              "hs_code_generator_page.form_section.input_1.placeholder",
            )}
            error={errors.productDescription}
            {...register("productDescription", {
              required: "Product description is required",
              minLength: {
                value: MIN_DESC_LENGTH,
                message: "Description must be at least 15 characters",
              },
              onChange: (e) => {
                clearErrors("productDescription");
                if (!touchedProductDescription)
                  setTouchedProductDescription(true);
              },
            })}
          />
        </div>
      </div>
      {/* Intended Use */}
      <div
        className="
                    flex flex-col
                    md:w-[35vw] w-[90vw]
                    md:mt-0 mt-[2vw]
                "
      >
        <label
          className="
                        md:text-[1vw] text-[3vw]
                        text-[#1E2939]
                        font-semibold
                        md:leading-[1.2vw] leading-[3.2vw]
                    "
        >
          {t("hs_code_generator_page.form_section.input_2.label")}
        </label>
        <p
          className="
                    text-[#4A5565]/80
                    md:text-[0.8vw] text-[2.5vw]
                    md:leading-[1.5vw] leading-[3vw]
                    mb-[0.5vw] md:mb-[0.3vw]
                    "
        >
          {t("hs_code_generator_page.form_section.input_2.note")}
        </p>
        <Textarea
          placeholder={t(
            "hs_code_generator_page.form_section.input_2.placeholder",
          )}
          error={errors.intendedUse}
          {...register("intendedUse")}
        />
      </div>
      {/* Primary Materials */}
      <div
        className="
                    flex flex-col
                    md:w-[35vw] w-[90vw]
                    md:mt-0 mt-[2vw]
                "
      >
        <label
          className="
                        md:text-[1vw] text-[3vw]
                        text-[#1E2939]
                        font-semibold
                        md:leading-[1.2vw] leading-[3.2vw]
                    "
        >
          {t("hs_code_generator_page.form_section.input_3.label")}
        </label>
        <p
          className="
                        text-[#4A5565]/80
                        md:text-[0.8vw] text-[2.5vw]
                        md:leading-[1.5vw] leading-[3vw]
                        mb-[0.5vw] md:mb-[0.3vw]
                    "
        >
          {t("hs_code_generator_page.form_section.input_3.note")}
        </p>
        <Textarea
          placeholder={t(
            "hs_code_generator_page.form_section.input_3.placeholder",
          )}
          error={errors.primaryMaterials}
          {...register("primaryMaterials")}
        />
      </div>
      {/* File Upload Area */}
      <div
        className="
                    flex flex-col
                    md:w-[35vw] w-[90vw]
                    md:mt-0 mt-[2vw]
                "
      >
        <div className="flex justify-between items-end mb-[0.5vw] md:mb-[0.3vw]">
          <div>
            <label
              className="
                            md:text-[1vw] text-[3vw]
                            text-[#1E2939]
                            font-semibold
                            md:leading-[1.2vw] leading-[3.2vw]
                        "
            >
              {t("hs_code_generator_page.form_section.input_images.label")}
            </label>
            <p
              className="
                            text-[#4A5565]/80
                            md:text-[0.8vw] text-[2.5vw]
                            md:leading-[1.5vw] leading-[3vw]
                        "
            >
              {t("hs_code_generator_page.form_section.input_images.note")}
            </p>
          </div>
          <button
            type="button"
            className="md:p-[0.16vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer"
            onClick={handleUploadButtonClick}
          >
            {/* Gradient border */}
            <div className="absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

            {/* Inner white area */}
            <div
              className="
                relative
                flex flex-row
                items-center
                gap-x-[1vw]
                md:px-[2vw] px-[5vw]
                md:py-[0.5vw] py-[1vw]
                bg-white
                rounded-full
                md:text-[0.8vw] text-[2.5vw]
              "
            >
              {t(
                "hs_code_generator_page.form_section.input_images.upload_files_button",
              )}
            </div>
          </button>
        </div>
        <div
          className="
                        border border-[#B9AFD0]
                        md:rounded-[0.7vw] rounded-[2vw]
                        md:h-[3.5vw] h-[10vw]
                        hover:bg-slate-50 transition-colors
                        relative
                        md:mt-0 mt-[1.5vw]
                    "
        >
          {/* Invisible Input for Drag & Drop / Click */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/png, image/jpeg, application/pdf"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            disabled={files.length >= MAX_FILES}
          />

          {/* File List (Inside the Box) */}
          {files.length > 0 && (
            <div
              className="
                                flex flex-row
                                w-full
                                z-20
                                relative
                                md:gap-[0.35vw] gap-[1vw]
                                justify-start items-center
                                md:h-[3.5vw] h-[10vw]
                                md:p-[0.35vw] p-[1vw]
                                overflow-x-auto
                            "
            >
              {files.map((file, index) => (
                <div
                  key={index}
                  className="
                                        flex
                                        items-center justify-between
                                        bg-[#E5E7EB]
                                        md:rounded-[0.5vw] rounded-[1vw]
                                        text-start
                                        md:px-[0.5vw] px-[2.5vw]
                                        md:py-[0.75vw] py-[2vw]
                                        relative
                                        shrink-0
                                    "
                >
                  <span className="md:text-[0.7vw] text-[2.2vw] text-[#1A1A1A] truncate">
                    {file.name}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="
                                            text-slate-400 hover:text-red-500
                                            rounded-full
                                            cursor-pointer
                                            absolute -right-[0.25vw] -top-[0.35vw]
                                        "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#E5E7EB"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#364153"
                      className="md:size-[1vw] size-[2.5vw]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* "Required" Section */}
      <div
        className="
                    md:flex hidden flex-col
                    md:w-[35vw] w-[90vw]
                    self-end
                "
      >
        <p
          className="
                        text-[#1E2939]
                        text-[0.8vw]
                        leading-[1.5vw]
                        font-semibold
                    "
        >
          {t("hs_code_generator_page.form_section.important_note.label_1")}
          &nbsp;
          <span className="text-red-500">*</span>
          &nbsp;
          {t("hs_code_generator_page.form_section.important_note.label_2")}
        </p>
        <p
          className="
                        text-[#1E2939]
                        text-[0.8vw]
                        leading-[1.5vw]
                        font-normal
                    "
        >
          {t("hs_code_generator_page.form_section.important_note.note")}
        </p>
      </div>
      {/* Target System */}
      <div
        className="
                    flex flex-col
                    md:w-[35vw] w-[90vw]
                    md:mt-0 mt-[2vw]
                "
      >
        <label
          className="
                        md:text-[1vw] text-[3vw]
                        text-[#1E2939]
                        font-semibold
                        md:leading-[1.2vw] leading-[3.2vw]
                    "
        >
          {t("hs_code_generator_page.form_section.input_4.label")}&nbsp;
          <span className="text-red-500">*</span>
        </label>
        <p
          className="
                        text-[#4A5565]/80
                        md:text-[0.8vw] text-[2.5vw]
                        md:leading-[1.5vw] leading-[3vw]
                        mb-[0.5vw] md:mb-[0.3vw]
                    "
        >
          {t("hs_code_generator_page.form_section.input_4.note")}
        </p>
        <Controller
          name="targetSystem"
          control={control}
          render={({ field }) => (
            <div
              className="
                            flex
                            bg-white
                            md:p-[0.2vw] p-[0.5vw]
                            md:rounded-[0.7vw] rounded-[2vw]
                            border border-[#B9AFD0]
                            md:mt-0 mt-[2vw]
                        "
            >
              <button
                type="button"
                onClick={() => field.onChange("USA")}
                className={`
                            flex-1 flex
                            items-center justify-center
                            md:py-[0.5vw] py-[1.5vw]
                            md:text-[0.8vw] text-[2.5vw]
                            font-normal
                            md:rounded-[0.55vw] rounded-[1.35vw]
                            transition-all duration-500
                            cursor-pointer
                            ${
                              field.value === "USA"
                                ? "bg-[#4F378A]/90 text-white"
                                : "text-[#4F378A]/90 hover:bg-slate-200/50"
                            }`}
              >
                {t("hs_code_generator_page.form_section.input_4.option_1")}
              </button>

              <button
                type="button"
                onClick={() => field.onChange("ROW")}
                className={`
                            flex-1 flex
                            items-center justify-center
                            md:py-[0.5vw] py-[1.5vw]
                            md:text-[0.8vw] text-[2.5vw]
                            font-normal
                            md:rounded-[0.55vw] rounded-[1.35vw]
                            transition-all duration-500
                            cursor-pointer
                            ${
                              field.value === "ROW"
                                ? "bg-[#4F378A]/90 text-white"
                                : "text-[#4F378A]/90 hover:bg-slate-200/50"
                            }`}
              >
                {t("hs_code_generator_page.form_section.input_4.option_2")}
              </button>
            </div>
          )}
        />
      </div>
      <div
        className="
                  flex flex-col
                  md:w-[35vw] w-[90vw]
                "
      >
        {/* blank space for find hs code to fit */}
      </div>
      <div
        className="
                  flex flex-row-reverse
                  md:w-[35vw] w-[90vw]
                  md:mt-0 mt-[2vw]
                "
      >
        <Button
          type="submit"
          disabled={isLoading}
          className="md:py-[0.6vw] py-[2vw] md:px-[1.5vw] px-[5vw] md:text-[0.8vw] text-[2.5vw] font-medium"
        >
          {isLoading
            ? t(
                "hs_code_generator_page.form_section.find_hs_code_button_submitting",
              )
            : t("hs_code_generator_page.form_section.find_hs_code_button")}
        </Button>
      </div>
    </form>
  );
}
