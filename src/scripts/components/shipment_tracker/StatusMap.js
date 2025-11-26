import i18next from "i18next";
import { STATUS_I18N_KEYS } from "../../utils/constants";

export function mapStatuses(statuses, t = i18next.t) {
  if (!Array.isArray(statuses)) return [];

  const sorted = [...statuses].sort(
    (a, b) => new Date(a.updatedDate) - new Date(b.updatedDate),
  );

  return sorted.map((step, i) => {
    const isLast = i === sorted.length - 1;
    let state = "completed";

    if (isLast && step.statusCode !== "SHIPMENT_DELIVERED") {
      state = "active";
    }

    return {
      ...step,
      label: t(STATUS_I18N_KEYS[step.statusCode] || step.statusCode),
      state,
    };
  });
}

export function getLastStatusLabel(statuses, t) {
  if (!Array.isArray(statuses) || statuses.length === 0 || !t) return null;

  const last = statuses[statuses.length - 1];
  return t(
    `shipment_tracker.shipment_status_map.${last.statusCode.toLowerCase()}`,
  );
}
