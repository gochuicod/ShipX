import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Badge from "../shipment_tracker/Badge";
// Adjust paths as needed based on your folder structure
import personLaptopIcon from "../../../assets/person-laptop.svg";
import airplaneIcon from "../../../assets/airplane.svg";
import boxReturnIcon from "../../../assets/file_a_claim_box-return.svg";
import parachuteIcon from "../../../assets/file_a_claim_parachute.svg";

const FileAClaimForm = () => {
  const { t } = useTranslation();

  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Sender", // Default to Sender
    accountNumber: "",
    country: "",
    claimType: "",
    trackingNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Claim Submitted:", formData);
    // Add API submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center w-full md:py-[5vw] py-[10vw] px-[5vw]">
      {/* Page Header Section */}
      <div className="flex flex-col items-center gap-y-[1vw] mb-[4vw]">
        <Badge
          className="md:text-[0.8vw] text-[2.5vw]"
          badge_text={t("file_a_claim.header_section.badge_text")}
          text_color="#FF00E5"
          bg_color="#F3F1FF"
        />
        <h2 className="text-[24px] font-bold md:text-[2.5vw] text-[#1E2939] text-center">
          {t("file_a_claim.header_section.title")}
        </h2>
        <p className="text-[#63666D] md:text-[0.9vw] text-[14px] text-center w-full md:max-w-[40vw] leading-[1.4]">
          {t("file_a_claim.header_section.description")}
        </p>
      </div>

      {/* Main Form Container - Reduced width to compress the layout */}
      <form onSubmit={handleSubmit} className="w-full md:w-[60vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[2vw] gap-y-[4vw]">
          {/* LEFT COLUMN: Personal Details */}
          <div className="flex flex-col h-full">
            {/* Heading & Subheading Wrapper with 20px padding */}
            <div className="p-[20px]">
              <div className="flex items-center gap-x-3 mb-[0.5vw]">
                <img
                  src={personLaptopIcon}
                  alt="Personal Details"
                  className="w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw]"
                />
                <h3 className="text-[#FF00E5] font-bold text-[4.5vw] md:text-[1.2vw]">
                  {t("file_a_claim.form_section.personal_details.title")}
                </h3>
              </div>
              <p className="text-gray-500 text-[3vw] md:text-[0.8vw] mb-[1.5vw] leading-relaxed">
                {t("file_a_claim.form_section.personal_details.description")}
              </p>
            </div>

            {/* Fields Container (Colored Background) */}
            <div className="flex flex-col gap-y-[1vw] bg-[#FBF9FF] p-[1.5vw] rounded-2xl h-full">
              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-bold text-[14px] md:text-[18px]">
                  {t("file_a_claim.form_section.fields.full_name.label")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder={t(
                    "file_a_claim.form_section.fields.full_name.placeholder",
                  )}
                  className="border border-[#B9AFD0] rounded-lg md:p-[0.6vw] p-3 focus:outline-none focus:border-[#99008A] w-full bg-white text-[14px] md:text-[0.9vw]"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-bold text-[14px] md:text-[18px]">
                  {t("file_a_claim.form_section.fields.email.label")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t(
                    "file_a_claim.form_section.fields.email.placeholder",
                  )}
                  className="border border-[#B9AFD0] rounded-lg md:p-[0.6vw] p-3 focus:outline-none focus:border-[#99008A] w-full bg-white text-[14px] md:text-[0.9vw]"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-bold text-[14px] md:text-[18px]">
                  {t("file_a_claim.form_section.fields.phone_number.label")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="+123"
                    className="border border-[#B9AFD0] rounded-lg md:p-[0.6vw] p-3 w-[25%] focus:outline-none focus:border-[#99008A] bg-gray-50 text-[14px] md:text-[0.9vw]"
                    disabled
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t(
                      "file_a_claim.form_section.fields.phone_number.placeholder",
                    )}
                    className="border border-[#B9AFD0] rounded-lg md:p-[0.6vw] p-3 w-full focus:outline-none focus:border-[#99008A] bg-white text-[14px] md:text-[0.9vw]"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Claimant Role */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-bold text-[14px] md:text-[18px]">
                  {t("file_a_claim.form_section.fields.claimant_role.label")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex w-full border border-[#B9AFD0] rounded-lg overflow-hidden bg-white">
                  <button
                    type="button"
                    onClick={() => handleRoleChange("Sender")}
                    className={`w-1/2 md:p-[0.6vw] p-3 flex items-center justify-center gap-2 transition-colors font-medium text-[3vw] md:text-[0.9vw] hover:cursor-pointer ${
                      formData.role === "Sender"
                        ? "bg-[#4F378A] text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <img
                      src={boxReturnIcon}
                      alt="Sender"
                      className="w-[4vw] h-[4vw] md:w-[1.2vw] md:h-[1.2vw]"
                    />
                    {t(
                      "file_a_claim.form_section.fields.claimant_role.options.sender",
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRoleChange("Receiver")}
                    className={`w-1/2 md:p-[0.6vw] p-3 flex items-center justify-center gap-2 transition-colors font-medium text-[3vw] md:text-[0.9vw] hover:cursor-pointer ${
                      formData.role === "Receiver"
                        ? "bg-[#4F378A] text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <img
                      src={parachuteIcon}
                      alt="Receiver"
                      className="w-[4vw] h-[4vw] md:w-[1.2vw] md:h-[1.2vw]"
                    />
                    {t(
                      "file_a_claim.form_section.fields.claimant_role.options.receiver",
                    )}
                  </button>
                </div>
              </div>

              {/* Account Number */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-bold text-[14px] md:text-[18px]">
                  {t("file_a_claim.form_section.fields.account_number.label")}
                </label>
                <p className="text-[2.5vw] md:text-[0.7vw] text-gray-400">
                  {t("file_a_claim.form_section.fields.account_number.hint")}
                </p>
                <input
                  type="text"
                  name="accountNumber"
                  placeholder={t(
                    "file_a_claim.form_section.fields.account_number.placeholder",
                  )}
                  className="border border-[#B9AFD0] rounded-lg md:p-[0.6vw] p-3 focus:outline-none focus:border-[#99008A] w-full bg-white text-[14px] md:text-[0.9vw]"
                  value={formData.accountNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Shipment Details */}
          <div className="flex flex-col h-full">
            {/* Heading & Subheading Wrapper with 20px padding */}
            <div className="p-[20px]">
              <div className="flex items-center gap-x-3 mb-[0.5vw]">
                <img
                  src={airplaneIcon}
                  alt="Shipment Details"
                  className="w-[6vw] h-[6vw] md:w-[1.5vw] md:h-[1.5vw]"
                />
                <h3 className="text-[#FF00E5] font-bold text-[4.5vw] md:text-[1.2vw]">
                  {t("file_a_claim.form_section.shipment_details.title")}
                </h3>
              </div>
              <p className="text-gray-500 text-[3vw] md:text-[0.8vw] mb-[1.5vw] leading-relaxed">
                {t("file_a_claim.form_section.shipment_details.description")}
              </p>
            </div>

            {/* Fields Container (Colored Background) */}
            <div className="flex flex-col gap-y-[1vw] bg-[#FBF9FF] p-[1.5vw] rounded-2xl h-full">
              <div className="flex flex-row gap-4 w-full">
                {/* Country */}
                <div className="flex flex-col gap-1 w-1/2">
                  <label className="text-gray-700 font-bold text-[14px] md:text-[18px]">
                    {t("file_a_claim.form_section.fields.country.label")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    className="border border-[#B9AFD0] hover:cursor-pointer rounded-lg md:p-[0.6vw] p-3 focus:outline-none focus:border-[#99008A] w-full bg-white text-[14px] md:text-[0.9vw]"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      {t(
                        "file_a_claim.form_section.fields.country.default_option",
                      )}
                    </option>
                    <option value="VN">
                      {t("file_a_claim.form_section.fields.country.options.vn")}
                    </option>
                    <option value="MY">
                      {t("file_a_claim.form_section.fields.country.options.my")}
                    </option>
                    <option value="TH">
                      {t("file_a_claim.form_section.fields.country.options.th")}
                    </option>
                    <option value="PH">
                      {t("file_a_claim.form_section.fields.country.options.ph")}
                    </option>
                  </select>
                </div>

                {/* Claim Type */}
                <div className="flex flex-col gap-1 w-1/2">
                  <label className="text-gray-700 font-bold text-[14px] md:text-[18px]">
                    {t("file_a_claim.form_section.fields.claim_type.label")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="claimType"
                    className="border border-[#B9AFD0] rounded-lg md:p-[0.6vw] p-3 focus:outline-none focus:border-[#99008A] w-full bg-white text-[14px] md:text-[0.9vw] hover:cursor-pointer"
                    value={formData.claimType}
                    onChange={handleChange}
                    required
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

              {/* Tracking Number */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 font-bold text-[14px] md:text-[18px]">
                  {t("file_a_claim.form_section.fields.tracking_number.label")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="trackingNumber"
                  placeholder={t(
                    "file_a_claim.form_section.fields.tracking_number.placeholder",
                  )}
                  className="border border-[#B9AFD0] rounded-lg md:p-[0.6vw] p-3 focus:outline-none focus:border-[#99008A] w-full bg-white text-[14px] md:text-[0.9vw]"
                  value={formData.trackingNumber}
                  onChange={handleChange}
                  minLength={8}
                  required
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1 flex-grow">
                <label className="text-gray-700 font-bold text-[14px] md:text-[18px]">
                  {t("file_a_claim.form_section.fields.description.label")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  placeholder={t(
                    "file_a_claim.form_section.fields.description.placeholder",
                  )}
                  className="border border-[#B9AFD0] rounded-lg md:p-[0.6vw] p-3 focus:outline-none focus:border-[#99008A] w-full h-[30vw] md:h-full resize-none bg-white text-[14px] md:text-[0.9vw]"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button - Moved Inside Right Column */}
              <div className="flex justify-end mt-[1vw]">
                <button
                  type="submit"
                  className="
                    bg-gradient-to-r from-[#80358E] to-[#E6007E]
                    text-white font-bold
                    py-[1vw] px-[4vw] md:py-[0.7vw] md:px-[2.5vw]
                    rounded-full
                    shadow-lg hover:shadow-xl
                    transition-transform transform hover:-translate-y-1
                    md:text-[1vw] text-[3.5vw] hover:cursor-pointer
                  "
                >
                  {t("file_a_claim.form_section.buttons.submit_claim")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FileAClaimForm;
