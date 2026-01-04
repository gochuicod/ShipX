import { useTranslation } from "react-i18next";

export default function OfficeModal({ isOpen, onClose, office }) {
  const { t } = useTranslation();

  if (!isOpen || !office) return null;

  return (
    <div
      className="fixed inset-0 bg-black/5 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon and Location Section */}
        <div className="flex items-start gap-4">
          {office.icon && (
            <img
              src={office.icon}
              alt={office.country_name}
              className="w-8 h-8 object-cover rounded-full mt-1"
            />
          )}

          <div className="flex flex-col">
            {/* Country Name */}
            <h2 className="text-lg font-semibold">{t(office.country_name)}</h2>

            {/* Location */}
            {office.address && (
              <p className="mt-1 text-sm text-gray-700">{t(office.address)}</p>
            )}

            {/* Email */}
            {office.email && (
              <p className="mt-2 text-sm font-medium text-gray-600">
                {t(office.email)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
