import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "../../../../../lib/util";
import ClaimSubmissionModal from "./ClaimSubmissionModal"; // Adjust path
import FileAClaimToolTipError from "./FileAClaimToolTipError"; // Adjust path
import AppButton from "../../../library/AppButton"; // Adjust path
import {
  claimsLabelVariants,
  claimsInputVariants,
  claimsInputContainerVariants,
  claimsCardVariants,
  claimsHeaderVariants,
  claimsHeaderTitleVariants,
  claimsHeaderDescriptionVariants,
  claimsHeaderIconContainerVariants,
  claimsTabSwitchVariants,
  claimsTabButtonVariants,
} from "../../../../../styles/form-styles";

const ClaimsForm = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  // Define the initial state
  const initialFormState = {
    fullName: "",
    email: "",
    phone: "",
    phoneCode: "+63",
    role: "Sender",
    accountNumber: "",
    country: "",
    claimType: "",
    trackingNumber: "",
    description: "",
  };

  // State Management
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [descriptionError, setDescriptionError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    claimType: "",
    trackingNumber: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    status: "success",
    claimId: "",
    message: "",
  });

  // Handle URL Params for pre-filling
  const trackingNumberRef = useRef();
  const initialTrackingNumber = searchParams.get("trackingNumber");
  const initialDescription = searchParams.get("description");

  useEffect(() => {
    if (initialTrackingNumber) {
      setFormData((prev) => ({
        ...prev,
        trackingNumber: initialTrackingNumber,
        description: initialDescription || prev.description,
      }));
      setTimeout(() => {
        trackingNumberRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 500);
    }
  }, [initialTrackingNumber, initialDescription]);

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const mapClaimType = (type) => {
    const map = {
      lost: "Missing",
      damaged: "Damage",
      late: "Late",
      customs: "Customs",
    };
    return map[type] || "Other";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    // --- VALIDATION START ---
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.claimType) newErrors.claimType = "Claim type is required";

    if (!formData.trackingNumber.trim()) {
      newErrors.trackingNumber = "Tracking number is required";
    } else if (formData.trackingNumber.trim().length < 8) {
      newErrors.trackingNumber =
        "Tracking number must be at least 8 characters";
    }

    if (formData.description.length < 25) {
      setDescriptionError(
        `Description is too short. Please add ${25 - formData.description.length} more characters.`,
      );
    } else {
      setDescriptionError("");
    }

    if (Object.keys(newErrors).length > 0 || formData.description.length < 25) {
      setFieldErrors(newErrors);
      return;
    }

    setFieldErrors({});
    // --- VALIDATION END ---

    setIsSubmitting(true);

    const payload = {
      customerName: formData.fullName,
      customerEmail: formData.email,
      customerPhone: `${formData.phoneCode}${formData.phone}`,
      accountNumber:
        formData.role === "Sender" && formData.accountNumber
          ? formData.accountNumber
          : "N/A",
      claimantType: formData.role === "Sender" ? "shipper" : "receiver",
      country: formData.country,
      claimType: mapClaimType(formData.claimType),
      trackingNumber: formData.trackingNumber,
      description: formData.description,
    };

    try {
      const response = await fetch(
        "https://file-a-claim.replit.app/api/claims/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        result = null;
      }

      if (response.ok && result?.success !== false) {
        const backendReference = result?.referenceId || result?.reference_id;

        setModalConfig({
          status: "success",
          claimId: backendReference || "RECEIVED",
          message: "Claim submitted successfully.",
        });
        setShowModal(true);
        setFormData(initialFormState);
      } else {
        let errorMessage;
        if (response.status === 400) {
          errorMessage = "Tracking number not found in our system.";
        } else {
          errorMessage =
            result?.details ||
            result?.message ||
            result?.error ||
            "Submission failed. Please check your details.";
        }

        setModalConfig({
          status: "error",
          claimId: "",
          message: errorMessage,
        });
        setShowModal(true);
      }
    } catch (error) {
      console.error("Network/System Error:", error);
      setModalConfig({
        status: "error",
        claimId: "",
        message: "Network error. Please try again later.",
      });
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ClaimSubmissionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        status={modalConfig.status}
        claimId={modalConfig.claimId}
        message={modalConfig.message}
      />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[854px] mx-auto"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          {/* LEFT COLUMN: Personal Details */}
          <div className={cn(claimsCardVariants(), "flex-1")}>
            {/* Header */}
            <div className={claimsHeaderVariants()}>
              <div className={claimsHeaderIconContainerVariants()}>
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/person-laptop.svg"
                  alt="Personal Details"
                  className="w-[26px] h-[25px]"
                />
                <h3 className={claimsHeaderTitleVariants()}>
                  {t("file_a_claim.form_section.personal_details.title")}
                </h3>
              </div>
              <p className={claimsHeaderDescriptionVariants()}>
                {t("file_a_claim.form_section.personal_details.description")}
              </p>
            </div>

            {/* Name */}
            <div>
              <label className={claimsLabelVariants()}>
                {t("file_a_claim.form_section.fields.full_name.label")}{" "}
                <span className="text-[#E7000B]">*</span>
              </label>
              <div className={claimsInputContainerVariants()}>
                {isFormSubmitted && fieldErrors.fullName && (
                  <FileAClaimToolTipError message={fieldErrors.fullName} />
                )}
                <input
                  type="text"
                  name="fullName"
                  placeholder={t(
                    "file_a_claim.form_section.fields.full_name.placeholder",
                  )}
                  className={claimsInputVariants()}
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className={claimsLabelVariants()}>
                {t("file_a_claim.form_section.fields.email.label")}{" "}
                <span className="text-[#E7000B]">*</span>
              </label>
              <div className={claimsInputContainerVariants()}>
                {isFormSubmitted && fieldErrors.email && (
                  <FileAClaimToolTipError message={fieldErrors.email} />
                )}
                <input
                  type="email"
                  name="email"
                  placeholder={t(
                    "file_a_claim.form_section.fields.email.placeholder",
                  )}
                  className={claimsInputVariants()}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phone (Split Inputs per Figma visual) */}
            <div>
              <label className={claimsLabelVariants()}>
                {t("file_a_claim.form_section.fields.phone_number.label")}{" "}
                <span className="text-[#E7000B]">*</span>
              </label>
              <div className={claimsInputContainerVariants()}>
                {isFormSubmitted && fieldErrors.phone && (
                  <FileAClaimToolTipError message={fieldErrors.phone} />
                )}
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="phoneCode"
                    placeholder="+123"
                    className={cn(
                      claimsInputVariants(),
                      "w-[61px] flex-shrink-0",
                    )}
                    value={formData.phoneCode}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t(
                      "file_a_claim.form_section.fields.phone_number.placeholder",
                    )}
                    className={cn(claimsInputVariants(), "flex-1")}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Claimant Role (Styled as Tab Switch) */}
            <div>
              <label className={claimsLabelVariants()}>
                {t("file_a_claim.form_section.fields.claimant_role.label")}{" "}
                <span className="text-[#E7000B]">*</span>
              </label>

              {/* Tab Switch Container */}
              <div className={claimsTabSwitchVariants()}>
                {["Sender", "Receiver"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => handleRoleChange(role)}
                    className={cn(
                      claimsTabButtonVariants({
                        isActive: formData.role === role,
                      }),
                    )}
                  >
                    {role === "Sender"
                      ? t(
                          "file_a_claim.form_section.fields.claimant_role.options.sender",
                        )
                      : t(
                          "file_a_claim.form_section.fields.claimant_role.options.receiver",
                        )}
                  </button>
                ))}
              </div>
            </div>

            {/* Account Number (Conditional) */}
            {formData.role === "Sender" && (
              <div>
                <label className={claimsLabelVariants()}>
                  {t("file_a_claim.form_section.fields.account_number.label")}
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  placeholder={t(
                    "file_a_claim.form_section.fields.account_number.placeholder",
                  )}
                  className={claimsInputVariants()}
                  value={formData.accountNumber}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Shipment Details */}
          <div className={cn(claimsCardVariants(), "flex-1")}>
            {/* Header */}
            <div className={claimsHeaderVariants()}>
              <div className={claimsHeaderIconContainerVariants()}>
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/airplane.svg"
                  alt="Shipment Details"
                  className="w-[26px] h-[25px]"
                />
                <h3 className={claimsHeaderTitleVariants()}>
                  {t("file_a_claim.form_section.shipment_details.title")}
                </h3>
              </div>
              <p className={claimsHeaderDescriptionVariants()}>
                {t("file_a_claim.form_section.shipment_details.description")}
              </p>
            </div>

            {/* Row: Country & Claim Type */}
            <div className="flex flex-row gap-4 w-full">
              {/* Country */}
              <div className="flex-1">
                <label className={claimsLabelVariants()}>
                  {t("file_a_claim.form_section.fields.country.label")}{" "}
                  <span className="text-[#E7000B]">*</span>
                </label>
                <div className={claimsInputContainerVariants()}>
                  {isFormSubmitted && fieldErrors.country && (
                    <FileAClaimToolTipError message={fieldErrors.country} />
                  )}
                  <select
                    name="country"
                    className={cn(
                      claimsInputVariants(),
                      "appearance-none cursor-pointer",
                    )}
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">
                      {t(
                        "file_a_claim.form_section.fields.country.default_option",
                      )}
                    </option>
                    <option value="VN">Vietnam</option>
                    <option value="MY">Malaysia</option>
                    <option value="TH">Thailand</option>
                    <option value="PH">Philippines</option>
                    <option value="SG">Singapore</option>
                    <option value="ID">Indonesia</option>
                  </select>
                </div>
              </div>

              {/* Claim Type */}
              <div className="flex-1">
                <label className={claimsLabelVariants()}>
                  {t("file_a_claim.form_section.fields.claim_type.label")}{" "}
                  <span className="text-[#E7000B]">*</span>
                </label>
                <div className={claimsInputContainerVariants()}>
                  {isFormSubmitted && fieldErrors.claimType && (
                    <FileAClaimToolTipError message={fieldErrors.claimType} />
                  )}
                  <select
                    name="claimType"
                    className={cn(
                      claimsInputVariants(),
                      "appearance-none cursor-pointer",
                    )}
                    value={formData.claimType}
                    onChange={handleChange}
                  >
                    <option value="">
                      {t(
                        "file_a_claim.form_section.fields.claim_type.default_option",
                      )}
                    </option>
                    <option value="lost">
                      {t(
                        "file_a_claim.form_section.fields.claim_type.options.lost",
                      )}
                    </option>
                    <option value="damaged">
                      {t(
                        "file_a_claim.form_section.fields.claim_type.options.damaged",
                      )}
                    </option>
                    <option value="late">
                      {t(
                        "file_a_claim.form_section.fields.claim_type.options.late",
                      )}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tracking Number */}
            <div>
              <label ref={trackingNumberRef} className={claimsLabelVariants()}>
                {t("file_a_claim.form_section.fields.tracking_number.label")}{" "}
                <span className="text-[#E7000B]">*</span>
              </label>
              <div className={claimsInputContainerVariants()}>
                {isFormSubmitted && fieldErrors.trackingNumber && (
                  <FileAClaimToolTipError
                    message={fieldErrors.trackingNumber}
                  />
                )}
                <input
                  type="text"
                  name="trackingNumber"
                  placeholder={t(
                    "file_a_claim.form_section.fields.tracking_number.placeholder",
                  )}
                  className={claimsInputVariants()}
                  value={formData.trackingNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col grow">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[#1E2939] font-semibold text-[16px] leading-[20px]">
                  {t("file_a_claim.form_section.fields.description.label")}{" "}
                  <span className="text-[#E7000B]">*</span>
                </label>
                <span
                  className={`text-[12px] ${
                    formData.description.length < 25
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {formData.description.length}/25
                </span>
              </div>

              <div className={claimsInputContainerVariants()}>
                {isFormSubmitted && descriptionError && (
                  <FileAClaimToolTipError message={descriptionError} />
                )}
                <textarea
                  name="description"
                  placeholder={t(
                    "file_a_claim.form_section.fields.description.placeholder",
                  )}
                  // Height set to match Figma ~172px/200px
                  className={cn(
                    claimsInputVariants(),
                    "h-[172px] resize-none pt-3",
                  )}
                  value={formData.description}
                  onChange={(e) => {
                    handleChange(e);
                    if (descriptionError) setDescriptionError("");
                  }}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-end mt-4">
              <AppButton
                as="button"
                text={
                  isSubmitting
                    ? "Sending..."
                    : t("file_a_claim.form_section.buttons.submit_claim")
                }
                style="primary"
                disabled={isSubmitting}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ClaimsForm;
