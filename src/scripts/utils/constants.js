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

export const servicesSectionServiceItems = [
  {
    id: "express",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplaneairplane-delivery-1.svg",
  },
  {
    id: "postal",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanebell.svg",
  },
  {
    id: "postal_e_commerce",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanebasket.svg",
  },
  {
    id: "sea_freight",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanelocation-maps.svg",
  },
  {
    id: "us_domestic",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanebasket-1.svg",
  },
];

export const servicesSectionCardKeys = {
  express: "services_section.cards.express",
  postal: "services_section.cards.postal",
  postal_e_commerce: "services_section.cards.postal_e_commerce",
  sea_freight: "services_section.cards.sea_freight",
  us_domestic: "services_section.cards.us_domestic",
};

export const servicesSectionCardStaticData = {
  express: {
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/services_express.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/dhl.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/fedex.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ups.webp",
    ],
    countryCodes: ["vn", "sg"],
  },
  postal: {
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/services_postal.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/singapore_post.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/bpost.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/postnl.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/pos_malaysia.webp",
    ],
    countryCodes: ["sg", "my"],
  },
  postal_e_commerce: {
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/services_postal_e_commerce.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/singapore_post.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/bpost.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/uniuni.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/postnl.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/pos_malaysia.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ups.webp",
    ],
    countryCodes: ["my", "sg", "us"],
  },
  sea_freight: {
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/services_sea_freight.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/vina_link_group.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/vina_dowell.webp",
    ],
    countryCodes: ["vn"],
  },
  us_domestic: {
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/services_domestic.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/dhl.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/fedex.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ups.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/uniuni.webp",
    ],
    countryCodes: ["us"],
  },
};

export const platformSectionPartners = [
  {
    logo: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/shopify.webp",
    name: "shopify",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/lazada.webp",
    name: "lazada",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/shopee.webp",
    name: "shopee",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/amazon.webp",
    name: "amazon",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ebay.webp",
    name: "ebay",
  },
];

export const platformSectionFeatures = [
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplaneairplane-delivery-1.svg",
    text: "Manage orders and shipments across ASEAN and global destinations",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanebasket.svg",
    text: "Integrate marketplaces like Amazon, Shopee, Lazada, eBay, and Shopify",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanesearch.svg",
    text: "Track performance in real time, with visibility across every step",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanepackage-return.svg",
    text: "Access warehousing, fulfillment, freight, and delivery from one dashboard",
  },
];

export const platformSectionLogisticsCard = [
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanebell.svg",
    title: "Multimodal Transport",
    description: "sea, air, road & combined logistics",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanedelivery%20(1).svg",
    title: "Cross-Border Trucking",
    description: "bonded lanes (VN-SG, TH-VN)",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanemoney-back-.svg",
    title: "Customs Solutions",
    description: "clearance, IOSS/VAT, duty management",
  },
];

export const platformShowcaseData = [
  {
    id: 1,
    gradient: "from-[#FFE6FF]/30 to-[#AA00FF]/10",
    image:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/platform_section/card/platform_section_card_1_image.webp",
    imageAlt: "Logistics Solutions",
    headingText:
      "Flexible freight and clearance\nservices for regional & global trade",
    highlights: ["Flexible", "services"],
    capabilities: platformSectionLogisticsCard,
  },
  // {
  //   id: 2,
  //   gradient: "from-[#E6F0FF]/30 to-[#0066FF]/10",
  //   image:
  //     "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/platform_section/card/platform_section_card_1_image.webp",
  //   imageAlt: "Fulfillment",
  //   imageClassName: "saturate-50",
  //   headingText:
  //     "Automated fulfillment solutions\\nto scale your business faster",
  //   highlights: ["Automated", "solutions"],
  //   capabilities: platformSectionLogisticsCard,
  // },
];

export const officesSectionCountries = [
  {
    icon: "https://flagcdn.com/sg.svg",
    name: "Singapore",
  },
  {
    icon: "https://flagcdn.com/th.svg",
    name: "Thailand",
  },
  {
    icon: "https://flagcdn.com/vn.svg",
    name: "Vietnam",
  },
  {
    icon: "https://flagcdn.com/my.svg",
    name: "Malaysia",
  },
  {
    icon: "https://flagcdn.com/id.svg",
    name: "Indonesia",
  },
  {
    icon: "https://flagcdn.com/ph.svg",
    name: "Philippines",
  },
  {
    icon: "https://flagcdn.com/us.svg",
    name: "United States",
  },
];
