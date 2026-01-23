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
  { id: 1, name: "ASEA", logo: `${partnersSectionAssetBaseURL}/asea.png` },
  {
    id: 2,
    name: "Bean Daikon",
    logo: `${partnersSectionAssetBaseURL}/bean_daikon.png`,
  },
  {
    id: 3,
    name: "Big Yellow Tag",
    logo: `${partnersSectionAssetBaseURL}/big_yellow_tag.png`,
  },
  { id: 4, name: "Big C", logo: `${partnersSectionAssetBaseURL}/bigc.png` },
  {
    id: 5,
    name: "Cool Mate",
    logo: `${partnersSectionAssetBaseURL}/cool_mate.png`,
  },
  { id: 6, name: "Crafio", logo: `${partnersSectionAssetBaseURL}/crafio.png` },
  {
    id: 7,
    name: "DH Foods",
    logo: `${partnersSectionAssetBaseURL}/dh_foods.png`,
  },
  { id: 8, name: "Donex", logo: `${partnersSectionAssetBaseURL}/donex.png` },
  {
    id: 9,
    name: "Eco Quote",
    logo: `${partnersSectionAssetBaseURL}/eco_quote.png`,
  },
  { id: 10, name: "Elise", logo: `${partnersSectionAssetBaseURL}/elise.png` },
  { id: 11, name: "GGG", logo: `${partnersSectionAssetBaseURL}/ggg.png` },
  {
    id: 12,
    name: "Hugo Boss",
    logo: `${partnersSectionAssetBaseURL}/hugo_boss.png`,
  },
  {
    id: 13,
    name: "Keebs Project",
    logo: `${partnersSectionAssetBaseURL}/keebs_project.png`,
  },
  {
    id: 14,
    name: "Keith Allen",
    logo: `${partnersSectionAssetBaseURL}/keith_allen.png`,
  },
  {
    id: 15,
    name: "LeFlair",
    logo: `${partnersSectionAssetBaseURL}/leflair.png`,
  },
  {
    id: 16,
    name: "Life Space",
    logo: `${partnersSectionAssetBaseURL}/life_space.png`,
  },
  {
    id: 17,
    name: "Lovepop",
    logo: `${partnersSectionAssetBaseURL}/lovepop.png`,
  },
  {
    id: 18,
    name: "Michelin",
    logo: `${partnersSectionAssetBaseURL}/michelin.png`,
  },
  {
    id: 19,
    name: "Oriembroly",
    logo: `${partnersSectionAssetBaseURL}/oriembroly.png`,
  },
  {
    id: 20,
    name: "Pantio",
    logo: `${partnersSectionAssetBaseURL}/pantio.png`,
  },
  {
    id: 21,
    name: "Seven Eleven",
    logo: `${partnersSectionAssetBaseURL}/seven_eleven.png`,
  },
  { id: 22, name: "Sixdo", logo: `${partnersSectionAssetBaseURL}/sixdo.png` },
  {
    id: 23,
    name: "Spry Interior",
    logo: `${partnersSectionAssetBaseURL}/spry_interior.png`,
  },
  {
    id: 24,
    name: "Tele247",
    logo: `${partnersSectionAssetBaseURL}/tele247.png`,
  },
  { id: 25, name: "Tesco", logo: `${partnersSectionAssetBaseURL}/tesco.png` },
  {
    id: 26,
    name: "Thea Delight",
    logo: `${partnersSectionAssetBaseURL}/thea_delight.png`,
  },
  {
    id: 27,
    name: "Zumvet",
    logo: `${partnersSectionAssetBaseURL}/zumvet.png`,
  },
];

export const servicesSectionServiceItems = [
  {
    id: "express",
    icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplaneairplane-delivery-1.svg",
  },
  {
    id: "commercial",
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
  commercial: "services_section.cards.commercial",
  postal_e_commerce: "services_section.cards.postal_e_commerce",
  sea_freight: "services_section.cards.sea_freight",
  us_domestic: "services_section.cards.us_domestic",
};

export const servicesSectionCardStaticData = {
  express: {
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/cards/express-card-new.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/dhl-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/fedex-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ups-new.webp",
    ],
    countryCodes: ["vn", "sg"],
  },
  commercial: {
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/cards/commercial-card-new.webp",
    countryCodes: ["vn"],
  },
  postal_e_commerce: {
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/cards/postal-card-new.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/singapore_post-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/bpost-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/uniuni-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/postnl-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/pos_malaysia-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ups-new.webp",
    ],
    countryCodes: ["my", "sg", "us"],
  },
  sea_freight: {
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/cards/sea-freight-card-new.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/vina_link_group-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/vina_dowell-new.webp",
    ],
    countryCodes: ["vn"],
  },
  us_domestic: {
    illustration:
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/cards/domestic-card-new.webp",
    partners: [
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/dhl-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/fedex-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/ups-new.webp",
      "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/partners/uniuni-new.webp",
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

/**
 * This file dynamically generates platform section data using i18next translations
 */

export const getPlatformSectionFeatures = (t) => {
  const leftCards = t("our_platform_section.cards.left_section_cards", {
    returnObjects: true,
  });

  const icons = [
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplaneairplane-delivery-1.svg",
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanebasket.svg",
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanesearch.svg",
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanepackage-return.svg",
  ];

  return Object.values(leftCards).map((text, index) => ({
    icon: icons[index],
    text,
  }));
};

export const getPlatformSectionLogisticsCard = (t, cardIndex = 1) => {
  const card = t(
    `our_platform_section.cards.right_section_cards.card_${cardIndex}`,
    { returnObjects: true },
  );

  return [
    {
      icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanebell.svg",
      title: card.item_1_title,
      description: card.item_1_description,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanedelivery%20(1).svg",
      title: card.item_2_title,
      description: card.item_2_description,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/duotone/airplanemoney-back-.svg",
      title: card.item_3_title,
      description: card.item_3_description,
    },
  ];
};

export const getPlatformShowcaseData = (t) => {
  const card1 = t("our_platform_section.cards.right_section_cards.card_1", {
    returnObjects: true,
  });

  const card2 = t("our_platform_section.cards.right_section_cards.card_2", {
    returnObjects: true,
  });

  return [
    {
      id: 1,
      gradient: "from-[#FFE6FF]/30 to-[#AA00FF]/10",
      image:
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/platform_section/card/platform_section_card_1.webp",
      imageAlt: card1.title,
      headingText: card1.title,
      highlights: card1.title_highlighted || [], // dynamically from locale
      capabilities: getPlatformSectionLogisticsCard(t, 1),
    },
    {
      id: 2,
      gradient: "from-[#FFE6FF]/30 to-[#AA00FF]/10",
      image:
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/platform_section/card/platform_section_card_2.webp",
      imageAlt: card2.title,
      headingText: card2.title,
      highlights: card2.title_highlighted || [], // dynamically from locale
      capabilities: getPlatformSectionLogisticsCard(t, 2),
    },
  ];
};

export const officesSectionCountries = [
  {
    icon: "https://flagcdn.com/sg.svg",
    country_key: "our_offices_section.cards.card_1.title",
    location_key: "our_offices_section.cards.card_1.location",
    email_key: "our_offices_section.cards.card_1.email",
  },
  {
    icon: "https://flagcdn.com/th.svg",
    country_key: "our_offices_section.cards.card_2.title",
    location_key: "our_offices_section.cards.card_2.location",
    email_key: "our_offices_section.cards.card_2.email",
  },
  {
    icon: "https://flagcdn.com/vn.svg",
    country_key: "our_offices_section.cards.card_3.title",
    location_key: "our_offices_section.cards.card_3.location",
    email_key: "our_offices_section.cards.card_3.email",
  },
  {
    icon: "https://flagcdn.com/my.svg",
    country_key: "our_offices_section.cards.card_4.title",
    location_key: "our_offices_section.cards.card_4.location",
    email_key: "our_offices_section.cards.card_4.email",
  },
  {
    icon: "https://flagcdn.com/id.svg",
    country_key: "our_offices_section.cards.card_5.title",
    location_key: "our_offices_section.cards.card_5.location",
    email_key: "our_offices_section.cards.card_5.email",
  },
  {
    icon: "https://flagcdn.com/ph.svg",
    country_key: "our_offices_section.cards.card_6.title",
    location_key: "our_offices_section.cards.card_6.location",
    email_key: "our_offices_section.cards.card_6.email",
  },
  {
    icon: "https://flagcdn.com/us.svg",
    country_key: "our_offices_section.cards.card_7.title",
    location_key: "our_offices_section.cards.card_7.location",
    email_key: "our_offices_section.cards.card_7.email",
  },
];

import {
  TrendingUp,
  Package,
  Globe,
  Users,
  Warehouse,
  Truck,
} from "lucide-react";

// Mapping of icons to match the item keys
const iconsMap = {
  item_1: <TrendingUp />,
  item_2: <Package />,
  item_3: <Globe />,
  item_4: <Users />,
  item_5: <Warehouse />,
  item_6: <Truck />,
};

export function parseStatTitle(title) {
  const clean = title.replace(/,/g, "");

  const match = clean.match(/^([\d.]+)\s*(.*)$/);

  if (!match) {
    return {
      value: 0,
      suffix: "",
    };
  }

  return {
    value: Number(match[1]),
    suffix: match[2] || "",
  };
}

export const getNumbersSectionStatsData = (t) => {
  const items = t("our_numbers_section.items", { returnObjects: true });

  return Object.entries(items).map(([key, value], index) => {
    const { value: headingValue, suffix: headingSuffix } = parseStatTitle(
      value.title,
    );

    return {
      id: index + 1,
      icon: iconsMap[key],
      headingValue,
      headingSuffix,
      description: value.description,
    };
  });
};
