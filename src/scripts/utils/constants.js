export const margin = "lg:px-24 md:px-16 px-4";

const ASSET_BASE_URL =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/";

export const offices = [
  {
    image: `${ASSET_BASE_URL}main_icon_20.svg`,
    key: "singapore",
  },
  {
    image: `${ASSET_BASE_URL}main_icon_21.svg`,
    key: "thailand",
  },
  {
    image: `${ASSET_BASE_URL}main_icon_22.svg`,
    key: "vietnam",
  },
  {
    image: `${ASSET_BASE_URL}main_icon_18.svg`,
    key: "malaysia",
  },
  {
    image: `${ASSET_BASE_URL}main_icon_17.svg`,
    key: "indonesia",
  },
  {
    image: `${ASSET_BASE_URL}main_icon_19.svg`,
    key: "philippines",
  },
  {
    image: `${ASSET_BASE_URL}main_icon_16.svg`,
    key: "united_states",
  },
];

export const services = [
  {
    icon: `${ASSET_BASE_URL}main_icon_10.svg`,
    key: "multimodal",
  },
  {
    icon: `${ASSET_BASE_URL}main_icon_11.svg`,
    key: "cross_border",
  },
  {
    icon: `${ASSET_BASE_URL}main_icon_12.svg`,
    key: "customs",
  },
];

export const services_2 = [
  {
    icon: `${ASSET_BASE_URL}main_icon_14.svg`,
    key: "inventory_services",
  },
  {
    icon: `${ASSET_BASE_URL}main_icon_13.svg`,
    key: "seamless_integrations",
  },
  {
    icon: `${ASSET_BASE_URL}main_icon_15.svg`,
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

const SHIPMENT_STATUS_I18N_BASE_KEY = "shipment_tracker.shipment_status_map";

export const STATUS_I18N_KEYS = {
  SHIPMENT_GENERATED: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_generated`,
  CREATING_FAILED: `${SHIPMENT_STATUS_I18N_BASE_KEY}.creating_failed`,
  SHIPMENT_PICKED_UP: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_picked_up`,
  SHIPMENT_DROPPED_OFF_AT_THE_COUNTER: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_dropped_off_at_the_counter`,
  SHIPMENT_RECEIVED_AT_HUB: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_received_at_hub`,
  SHIPMENT_PROCESSING_AT_HUB: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_processing_at_hub`,
  SHIPMENT_LEFT_SGLINK_ORIGIN_FACILITY: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_left_sglink_origin_facility`,
  SHIPMENT_IN_TRANSIT: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_in_transit`,
  SHIPMENT_COMPLETED_THE_CUSTOMS_CLEARANCE: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_completed_the_customs_clearance`,
  SHIPMENT_HOLD_BY_CUSTOMS_AT_DESTINATION: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_hold_by_customs_at_destination`,
  SHIPMENT_RECEIVERED_AT_DESTINATION: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_received_at_destination`,
  SHIPMENT_OUT_FOR_DELIVERY: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_out_for_delivery`,
  SHIPMENT_DELIVERED: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_delivered`,
  SHIPMENT_DELIVERY_UNSUCCESSFUL: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_delivery_unsuccessful`,
  SHIPMENT_RETUNRED_FROM_OVERSEAS: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_returned_from_overseas`,
  SHIPMENT_HOLD_AT_POINT_OF_DELIVERY: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_hold_at_point_of_delivery`,
  SHIPMERNT_RETURNED_TO_SENDER: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_returned_to_sender`,
  SHIPMENT_DAMAGED: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_damaged`,
  SHIPMENT_LOST: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_lost`,
  SHIPMENT_FAILED_ATTEMPT: `${SHIPMENT_STATUS_I18N_BASE_KEY}.shipment_failed_attempt`,
  HOLD_FOR_PAYMENT: `${SHIPMENT_STATUS_I18N_BASE_KEY}.hold_for_payment`,
};

const partnersSectionAssetBaseURL =
  "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners";

export const partnersSectionData = [
  { id: 1, name: "ASEA", logo: `${partnersSectionAssetBaseURL}/asea.webp` },
  {
    id: 2,
    name: "Bean Daikon",
    logo: `${partnersSectionAssetBaseURL}/bean_daikon.webp`,
  },
  {
    id: 3,
    name: "Big Yellow Tag",
    logo: `${partnersSectionAssetBaseURL}/big_yellow_tag.webp`,
  },
  { id: 4, name: "Big C", logo: `${partnersSectionAssetBaseURL}/bigc.webp` },
  {
    id: 5,
    name: "Cool Mate",
    logo: `${partnersSectionAssetBaseURL}/cool_mate.webp`,
  },
  { id: 6, name: "Crafio", logo: `${partnersSectionAssetBaseURL}/crafio.webp` },
  {
    id: 7,
    name: "DH Foods",
    logo: `${partnersSectionAssetBaseURL}/dh_foods.webp`,
  },
  { id: 8, name: "Donex", logo: `${partnersSectionAssetBaseURL}/donex.webp` },
  {
    id: 9,
    name: "Eco Quote",
    logo: `${partnersSectionAssetBaseURL}/eco_quote.webp`,
  },
  { id: 10, name: "Elise", logo: `${partnersSectionAssetBaseURL}/elise.webp` },
  { id: 11, name: "GGG", logo: `${partnersSectionAssetBaseURL}/ggg.webp` },
  {
    id: 12,
    name: "Hugo Boss",
    logo: `${partnersSectionAssetBaseURL}/hugo_boss.webp`,
  },
  {
    id: 13,
    name: "Keebs Project",
    logo: `${partnersSectionAssetBaseURL}/keebs_project.webp`,
  },
  {
    id: 14,
    name: "Keith Allen",
    logo: `${partnersSectionAssetBaseURL}/keith_allen.webp`,
  },
  {
    id: 15,
    name: "LeFlair",
    logo: `${partnersSectionAssetBaseURL}/leflair.webp`,
  },
  {
    id: 16,
    name: "Life Space",
    logo: `${partnersSectionAssetBaseURL}/life_space.webp`,
  },
  {
    id: 17,
    name: "Lovepop",
    logo: `${partnersSectionAssetBaseURL}/lovepop.webp`,
  },
  {
    id: 18,
    name: "Michelin",
    logo: `${partnersSectionAssetBaseURL}/michelin.webp`,
  },
  {
    id: 19,
    name: "Oriembroly",
    logo: `${partnersSectionAssetBaseURL}/oriembroly.webp`,
  },
  {
    id: 20,
    name: "Pantio",
    logo: `${partnersSectionAssetBaseURL}/pantio.webp`,
  },
  {
    id: 21,
    name: "Seven Eleven",
    logo: `${partnersSectionAssetBaseURL}/seven_eleven.webp`,
  },
  { id: 22, name: "Sixdo", logo: `${partnersSectionAssetBaseURL}/sixdo.webp` },
  {
    id: 23,
    name: "Spry Interior",
    logo: `${partnersSectionAssetBaseURL}/spry_interior.webp`,
  },
  {
    id: 24,
    name: "Tele247",
    logo: `${partnersSectionAssetBaseURL}/tele247.webp`,
  },
  { id: 25, name: "Tesco", logo: `${partnersSectionAssetBaseURL}/tesco.webp` },
  {
    id: 26,
    name: "Thea Delight",
    logo: `${partnersSectionAssetBaseURL}/thea_delight.webp`,
  },
  {
    id: 27,
    name: "Zumvet",
    logo: `${partnersSectionAssetBaseURL}/zumvet.webp`,
  },
];
