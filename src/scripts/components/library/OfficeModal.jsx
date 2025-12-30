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
        className="bg-white rounded-xl p-6 w-[250px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold flex items-center gap-2">
          {office.icon && (
            <img
              src={office.icon}
              alt={office.country_name}
              className="w-5 h-5 object-cover rounded-full"
            />
          )}
          {office.country_name}
        </h2>

        {office.address && <p className="mt-4 text-sm">{office.address}</p>}
        {office.email && (
          <p className="mt-2 text-sm font-medium text-gray-600">
            {office.email}
          </p>
        )}
      </div>
    </div>
  );
}
