import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Badge from "../shipment_tracker/Badge";
import ClaimSubmissionModal from "./ClaimSubmissionModal";
import FileAClaimToolTipError from "./FileAClaimToolTipError";
import Button from "../ui/Button";

const FileAClaimForm = () => {
  const { t } = useTranslation();

  // Define the initial state in a constant so we can reuse it for resetting
  const initialFormState = {
    fullName: "",
    email: "",
    phone: "",
    role: "Sender",
    accountNumber: "",
    country: "",
    claimType: "",
    trackingNumber: "",
    description: "",
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, role }));
    // Role doesn't need error handling as it has a default
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

    // Validate required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.country) {
      newErrors.country = "Country is required";
    }
    if (!formData.claimType) {
      newErrors.claimType = "Claim type is required";
    }
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

    // If there are errors, set them and stop
    if (Object.keys(newErrors).length > 0 || formData.description.length < 25) {
      setFieldErrors(newErrors);
      return;
    }

    // Clear all errors if validation passes
    setFieldErrors({});
    // --- VALIDATION END ---

    setIsSubmitting(true);

    const payload = {
      customerName: formData.fullName,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      // Only send account number if role is Sender, otherwise N/A
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

        // CLEAR FORM DATA HERE
        // We reset the state back to the initialFormState defined at the top
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

  // Common styling classes using vw
  const labelClass = "text-gray-700 font-bold text-[3.5vw] md:text-[1vw]";
  const inputClass =
    "border border-[#B9AFD0] rounded-lg p-[3vw] md:p-[0.7vw] focus:outline-none focus:border-[#99008A] w-full bg-white text-[3.5vw] md:text-[0.9vw]";

  const [searchParams] = useSearchParams();
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

  return (
    <>
      <ClaimSubmissionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        status={modalConfig.status}
        claimId={modalConfig.claimId}
        message={modalConfig.message}
      />

      <div className="flex flex-col items-center justify-center w-full py-[10vw] md:py-[5vw] px-[5vw]">
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center gap-y-[2vw] md:gap-y-[0.8vw] mb-[6vw] md:mb-[3vw]">
          <Badge
            className="text-[2.5vw] md:text-[0.8vw]"
            badge_text={t("file_a_claim.header_section.badge_text")}
            text_color="#FF00E5"
            bg_color="#F3F1FF"
          />
          <h2 className="font-bold text-[#1E2939] text-center text-[6vw] md:text-[2.5vw]">
            {t("file_a_claim.header_section.title")}
          </h2>
          <p className="text-[#63666D]/75 font-medium md:text-[0.9vw] text-[3.5vw] text-center w-full md:max-w-[40vw] leading-[1.4]">
            {t("file_a_claim.header_section.description")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full md:w-[65vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[6vw] md:gap-y-0 md:gap-x-[2vw]">
            {/* LEFT COLUMN */}
            <div className="flex flex-col h-full">
              <div className="p-[4vw] md:p-[1.5vw]">
                <div className="flex items-center gap-x-[2vw] md:gap-x-[0.8vw] mb-[1vw] md:mb-[0.5vw]">
                  <img
                    src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/person-laptop.svg"
                    alt="Personal Details"
                    className="w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw]"
                  />
                  <h3 className="text-[#FF00E5] font-bold text-[4.5vw] md:text-[1.2vw]">
                    {t("file_a_claim.form_section.personal_details.title")}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-[3.2vw] md:text-[0.85vw]">
                  {t("file_a_claim.form_section.personal_details.description")}
                </p>
              </div>

              <div className="flex flex-col gap-y-[4vw] md:gap-y-[1.2vw] bg-[#FBF9FF] p-[4vw] md:p-[1.5vw] rounded-[4vw] md:rounded-[1vw] h-full">
                <div className="flex flex-col gap-[1vw] md:gap-[0.3vw]">
                  <label className={labelClass}>
                    {t("file_a_claim.form_section.fields.full_name.label")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    {isFormSubmitted && fieldErrors.fullName && (
                      <FileAClaimToolTipError message={fieldErrors.fullName} />
                    )}
                    <input
                      type="text"
                      name="fullName"
                      placeholder={t(
                        "file_a_claim.form_section.fields.full_name.placeholder",
                      )}
                      className={inputClass}
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[1vw] md:gap-[0.3vw]">
                  <label className={labelClass}>
                    {t("file_a_claim.form_section.fields.email.label")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    {isFormSubmitted && fieldErrors.email && (
                      <FileAClaimToolTipError message={fieldErrors.email} />
                    )}
                    <input
                      type="email"
                      name="email"
                      placeholder={t(
                        "file_a_claim.form_section.fields.email.placeholder",
                      )}
                      className={inputClass}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[1vw] md:gap-[0.3vw]">
                  <label className={labelClass}>
                    {t("file_a_claim.form_section.fields.phone_number.label")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    {isFormSubmitted && fieldErrors.phone && (
                      <FileAClaimToolTipError message={fieldErrors.phone} />
                    )}
                    <div className="flex gap-[2vw] md:gap-[0.5vw]">
                      <input
                        type="text"
                        placeholder="+123"
                        className={`${inputClass} w-[25%] bg-gray-50`}
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder={t(
                          "file_a_claim.form_section.fields.phone_number.placeholder",
                        )}
                        className={inputClass}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Claimant Type */}
                <div className="flex flex-col gap-[1vw] md:gap-[0.3vw]">
                  <label className={labelClass}>
                    {t("file_a_claim.form_section.fields.claimant_role.label")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex bg-white md:p-[0.2vw] p-[0.5vw] md:rounded-[0.7vw] rounded-[2vw] border border-[#B9AFD0] w-full">
                    <button
                      type="button"
                      onClick={() => handleRoleChange("Sender")}
                      className={`
                        flex-1 flex items-center justify-center
                        md:py-[0.5vw] py-[1.5vw]
                        md:text-[0.8vw] text-[2.5vw]
                        font-normal
                        md:rounded-[0.55vw] rounded-[1.35vw]
                        transition-all duration-500
                        cursor-pointer
                        gap-[0.5vw] md:gap-[0.25vw]
                        ${
                          formData.role === "Sender"
                            ? "bg-[#4F378A]/90 text-white"
                            : "text-[#4F378A]/90 hover:bg-slate-200/50"
                        }
                      `}
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/file_a_claim_box-return.svg"
                        alt="Sender"
                        className="w-[4vw] h-[4vw] md:w-[1vw] md:h-[1vw]"
                      />
                      {t(
                        "file_a_claim.form_section.fields.claimant_role.options.sender",
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRoleChange("Receiver")}
                      className={`
                        flex-1 flex items-center justify-center
                        md:py-[0.5vw] py-[1.5vw]
                        md:text-[0.8vw] text-[2.5vw]
                        font-normal
                        md:rounded-[0.55vw] rounded-[1.35vw]
                        transition-all duration-500
                        cursor-pointer
                        gap-[0.5vw] md:gap-[0.25vw]
                        ${
                          formData.role === "Receiver"
                            ? "bg-[#4F378A]/90 text-white"
                            : "text-[#4F378A]/90 hover:bg-slate-200/50"
                        }
                      `}
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/file_a_claim_parachute.svg"
                        alt="Receiver"
                        className="w-[4vw] h-[4vw] md:w-[1vw] md:h-[1vw]"
                      />
                      {t(
                        "file_a_claim.form_section.fields.claimant_role.options.receiver",
                      )}
                    </button>
                  </div>
                </div>

                {/* Account Number - Only visible when role is 'Sender' */}
                {formData.role === "Sender" && (
                  <div className="flex flex-col gap-[1vw] md:gap-[0.3vw]">
                    <label className={labelClass}>
                      {t(
                        "file_a_claim.form_section.fields.account_number.label",
                      )}
                    </label>
                    <p className="text-[2.8vw] md:text-[0.75vw] text-gray-400">
                      {t(
                        "file_a_claim.form_section.fields.account_number.hint",
                      )}
                    </p>
                    <input
                      type="text"
                      name="accountNumber"
                      placeholder={t(
                        "file_a_claim.form_section.fields.account_number.placeholder",
                      )}
                      className={inputClass}
                      value={formData.accountNumber}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col h-full">
              <div className="p-[4vw] md:p-[1.5vw]">
                <div className="flex items-center gap-x-[2vw] md:gap-x-[0.8vw] mb-[1vw] md:mb-[0.5vw]">
                  <img
                    src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/airplane.svg"
                    alt="Shipment Details"
                    className="w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw]"
                  />
                  <h3 className="text-[#FF00E5] font-bold text-[4.5vw] md:text-[1.2vw]">
                    {t("file_a_claim.form_section.shipment_details.title")}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-[3.2vw] md:text-[0.85vw]">
                  {t("file_a_claim.form_section.shipment_details.description")}
                </p>
              </div>

              <div className="flex flex-col gap-y-[4vw] md:gap-y-[1.2vw] bg-[#FBF9FF] p-[4vw] md:p-[1.5vw] rounded-[4vw] md:rounded-[1vw] h-full">
                <div className="flex flex-row gap-[3vw] md:gap-[1vw] w-full">
                  <div className="flex flex-col gap-[1vw] md:gap-[0.3vw] w-1/2">
                    <label className={labelClass}>
                      {t("file_a_claim.form_section.fields.country.label")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      {isFormSubmitted && fieldErrors.country && (
                        <FileAClaimToolTipError message={fieldErrors.country} />
                      )}
                      <select
                        name="country"
                        className={`${inputClass} hover:cursor-pointer`}
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option value="">
                          {t(
                            "file_a_claim.form_section.fields.country.default_option",
                          )}
                        </option>
                        <option value="VN">
                          {t(
                            "file_a_claim.form_section.fields.country.options.vn",
                          )}
                        </option>
                        <option value="MY">
                          {t(
                            "file_a_claim.form_section.fields.country.options.my",
                          )}
                        </option>
                        <option value="TH">
                          {t(
                            "file_a_claim.form_section.fields.country.options.th",
                          )}
                        </option>
                        <option value="PH">
                          {t(
                            "file_a_claim.form_section.fields.country.options.ph",
                          )}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[1vw] md:gap-[0.3vw] w-1/2">
                    <label className={labelClass}>
                      {t("file_a_claim.form_section.fields.claim_type.label")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      {isFormSubmitted && fieldErrors.claimType && (
                        <FileAClaimToolTipError
                          message={fieldErrors.claimType}
                        />
                      )}
                      <select
                        name="claimType"
                        className={`${inputClass} hover:cursor-pointer`}
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

                <div className="flex flex-col gap-[1vw] md:gap-[0.3vw]">
                  <label ref={trackingNumberRef} className={labelClass}>
                    {t(
                      "file_a_claim.form_section.fields.tracking_number.label",
                    )}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
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
                      className={inputClass}
                      value={formData.trackingNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[1vw] md:gap-[0.3vw] grow">
                  <div className="flex justify-between items-center">
                    <label className={labelClass}>
                      {t("file_a_claim.form_section.fields.description.label")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <span
                      className={`text-[3vw] md:text-[0.75vw] ${
                        formData.description.length < 25
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      {formData.description.length}/25
                    </span>
                  </div>

                  <div className="relative">
                    {/* Tooltip Error */}
                    {isFormSubmitted && descriptionError && (
                      <FileAClaimToolTipError message={descriptionError} />
                    )}
                    <textarea
                      name="description"
                      placeholder={t(
                        "file_a_claim.form_section.fields.description.placeholder",
                      )}
                      className={`${inputClass} h-[35vw] md:h-full resize-none`}
                      value={formData.description}
                      onChange={(e) => {
                        handleChange(e);
                        // Clear error when user starts typing
                        if (descriptionError) setDescriptionError("");
                      }}
                    ></textarea>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end w-full md:mt-0 mt-[2vw]">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="md:py-[0.6vw] py-[2vw] md:px-[1.5vw] px-[5vw] md:text-[0.8vw] text-[2.5vw] font-medium"
                  >
                    {isSubmitting
                      ? "Sending..."
                      : t("file_a_claim.form_section.buttons.submit_claim")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FileAClaimForm;
