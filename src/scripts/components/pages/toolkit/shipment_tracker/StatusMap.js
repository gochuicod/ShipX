import i18next from "i18next";
import { STATUS_I18N_KEYS } from "../../../../utils/constants";

export function mapStatuses(statuses, t = i18next.t) {
  if (!Array.isArray(statuses)) return [];

  const sorted = [...statuses].sort(
    (a, b) => new Date(b.updatedDate) - new Date(a.updatedDate),
  );

  return sorted.map((step, i) => {
    let state = "completed";

    if (i == 0 && step.statusCode !== "SHIPMENT_DELIVERED") {
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

  // Sort by date (Newest First) just to be safe
  const sorted = [...statuses].sort(
    (a, b) => new Date(b.updatedDate) - new Date(a.updatedDate),
  );

  // Since we sorted Newest -> Oldest, the LATEST status is now at index 0
  const latestStatus = sorted[0];

  return t(
    `shipment_tracker.shipment_status_map.${latestStatus.statusCode.toLowerCase()}`,
  );
}

export const formatShipmentDate = (statuses) => {
  if (!statuses || statuses.length === 0) return "Date not available";

  // Create a shallow copy to avoid mutating the original array
  // Sort by updatedDate in ascending order (Oldest -> Newest)
  const sortedStatuses = [...statuses].sort(
    (a, b) => new Date(a.updatedDate) - new Date(b.updatedDate),
  );

  // Get the last item (most recent status)
  const latestStatus = sortedStatuses[sortedStatuses.length - 1];

  if (!latestStatus?.updatedDate) return "Date not available";

  const date = new Date(latestStatus.updatedDate);

  // Format: "Nov 22, 2025"
  const datePart = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Format: "04:45 PM"
  const timePart = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${datePart} · ${timePart}`;
};
