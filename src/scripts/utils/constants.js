export const margin = "md:px-[8vw] px-[10vw]";

export const offices = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_20.svg",
    key: "singapore",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_21.svg",
    key: "thailand",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_22.svg",
    key: "vietnam",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_18.svg",
    key: "malaysia",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_17.svg",
    key: "indonesia",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_19.svg",
    key: "philippines",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_16.svg",
    key: "united_states",
  },
];

export const services = [
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_10.svg",
    key: "multimodal",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_11.svg",
    key: "cross_border",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_12.svg",
    key: "customs",
  },
];

export const services_2 = [
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_14.svg",
    key: "inventory_services",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_13.svg",
    key: "seamless_integrations",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_15.svg",
    key: "regional_advantage",
  },
];

export const languages = [
  {
    id: 1,
    name: "EN",
    key: "en",
  },
  {
    id: 2,
    name: "VN",
    key: "vn",
  },
  {
    id: 3,
    name: "MY",
    key: "my",
  },
  {
    id: 4,
    name: "ID",
    key: "ind",
  },
  {
    id: 5,
    name: "TH",
    key: "thai",
  },
];

export const hreflang = [
  {
    id: 1,
    name: "EN",
    key: "en",
  },
  {
    id: 2,
    name: "VN",
    key: "vi-VN",
  },
  {
    id: 3,
    name: "MY",
    key: "my-MY",
  },
  {
    id: 4,
    name: "ID",
    key: "id-ID",
  },
  {
    id: 5,
    name: "TH",
    key: "th-TH",
  },
];

export const STATUS_I18N_KEYS = {
  SHIPMENT_GENERATED: "shipment_tracker.shipment_status_map.shipment_generated",
  CREATING_FAILED: "shipment_tracker.shipment_status_map.creating_failed",
  SHIPMENT_PICKED_UP: "shipment_tracker.shipment_status_map.shipment_picked_up",
  SHIPMENT_DROPPED_OFF_AT_THE_COUNTER:
    "shipment_tracker.shipment_status_map.shipment_dropped_off_at_the_counter",
  SHIPMENT_RECEIVED_AT_HUB:
    "shipment_tracker.shipment_status_map.shipment_received_at_hub",
  SHIPMENT_PROCESSING_AT_HUB:
    "shipment_tracker.shipment_status_map.shipment_processing_at_hub",
  SHIPMENT_LEFT_SGLINK_ORIGIN_FACILITY:
    "shipment_tracker.shipment_status_map.shipment_left_sglink_origin_facility",
  SHIPMENT_IN_TRANSIT:
    "shipment_tracker.shipment_status_map.shipment_in_transit",
  SHIPMENT_COMPLETED_THE_CUSTOMS_CLEARANCE:
    "shipment_tracker.shipment_status_map.shipment_completed_the_customs_clearance",
  SHIPMENT_HOLD_BY_CUSTOMS_AT_DESTINATION:
    "shipment_tracker.shipment_status_map.shipment_hold_by_customs_at_destination",
  SHIPMENT_RECEIVERED_AT_DESTINATION:
    "shipment_tracker.shipment_status_map.shipment_received_at_destination",
  SHIPMENT_OUT_FOR_DELIVERY:
    "shipment_tracker.shipment_status_map.shipment_out_for_delivery",
  SHIPMENT_DELIVERED: "shipment_tracker.shipment_status_map.shipment_delivered",
  SHIPMENT_DELIVERY_UNSUCCESSFUL:
    "shipment_tracker.shipment_status_map.shipment_delivery_unsuccessful",
  SHIPMENT_RETUNRED_FROM_OVERSEAS:
    "shipment_tracker.shipment_status_map.shipment_returned_from_overseas",
  SHIPMENT_HOLD_AT_POINT_OF_DELIVERY:
    "shipment_tracker.shipment_status_map.shipment_hold_at_point_of_delivery",
  SHIPMERNT_RETURNED_TO_SENDER:
    "shipment_tracker.shipment_status_map.shipment_returned_to_sender",
  SHIPMENT_DAMAGED: "shipment_tracker.shipment_status_map.shipment_damaged",
  SHIPMENT_LOST: "shipment_tracker.shipment_status_map.shipment_lost",
  SHIPMENT_FAILED_ATTEMPT:
    "shipment_tracker.shipment_status_map.shipment_failed_attempt",
  HOLD_FOR_PAYMENT: "shipment_tracker.shipment_status_map.hold_for_payment",
};
