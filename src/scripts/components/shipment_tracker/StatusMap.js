// SGLink Status Dictionary
// export const STATUS_MAP = {
//   SHIPMENT_GENERATED: "The shipment has been generated.",
//   CREATING_FAILED: "The process of creating the shipment failed.",
//   SHIPMENT_PICKED_UP: "The shipment has been picked up.",
//   SHIPMENT_DROPPED_OFF_AT_THE_COUNTER:
//     "The shipment has been dropped off at the counter.",
//   SHIPMENT_RECEIVED_AT_HUB: "The shipment has been received at the hub.",
//   SHIPMENT_PROCESSING_AT_HUB: "The shipment is being processed at the hub.",
//   SHIPMENT_LEFT_SGLINK_ORIGIN_FACILITY:
//     "The shipment has left the SGLINK origin facility.",
//   SHIPMENT_IN_TRANSIT: "The shipment is in transit.",
//   SHIPMENT_COMPLETED_THE_CUSTOMS_CLEARANCE:
//     "The shipment has completed customs clearance.",
//   SHIPMENT_HOLD_BY_CUSTOMS_AT_DESTINATION:
//     "The shipment is held by customs at the destination.",
//   SHIPMENT_RECEIVERED_AT_DESTINATION:
//     "The shipment has been received at the destination.",
//   SHIPMENT_OUT_FOR_DELIVERY: "The shipment is out for delivery.",
//   SHIPMENT_DELIVERED: "The shipment has been delivered.",
//   SHIPMENT_DELIVERY_UNSUCCESSFUL: "Delivery was unsuccessful.",
//   SHIPMENT_RETUNRED_FROM_OVERSEAS:
//     "The shipment has been returned from overseas.",
//   SHIPMENT_HOLD_AT_POINT_OF_DELIVERY:
//     "The shipment is on hold at point of delivery.",
//   SHIPMERNT_RETURNED_TO_SENDER: "The shipment has been returned to sender.",
//   SHIPMENT_DAMAGED: "The shipment was damaged.",
//   SHIPMENT_LOST: "The shipment has been lost.",
//   SHIPMENT_FAILED_ATTEMPT: "Failed delivery attempt.",
//   HOLD_FOR_PAYMENT: "The shipment is on hold for payment.",
// };

// Helper → Convert statuses into ordered steps
export function mapStatuses(statuses, t) {
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
      label: t(step.statusCode.toLowerCase()), // use i18n key
      state,
    };
  });
}

// Helper → Get the last status label
export function getLastStatusLabel(statuses, t) {
  if (!Array.isArray(statuses) || statuses.length === 0) return null;

  const last = statuses[statuses.length - 1];
  return t(last.statusCode.toLowerCase());
}
