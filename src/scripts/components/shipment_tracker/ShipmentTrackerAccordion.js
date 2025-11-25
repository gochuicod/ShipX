import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Stepper from "./Stepper";
import ProgressBar from "./ProgressBar";
import { getLastStatusCode } from "./StatusMap";
import { useState } from "react";

export const dummyStatuses = [
  {
    statusCode: "SHIPMENT_GENERATED",
    updatedDate: "2024-04-23T02:44:16.9825863",
    location: "Manila, Philippines",
  },
  {
    statusCode: "SHIPMENT_PROCESSING_AT_HUB",
    updatedDate: "2024-04-24T06:41:40.4343359",
    location: "Manila Hub",
  },
  {
    statusCode: "SHIPMENT_LEFT_SGLINK_ORIGIN_FACILITY",
    updatedDate: "2024-04-24T09:04:43.9903934",
    location: "Manila International Sorting Center",
  },
  {
    statusCode: "SHIPMENT_IN_TRANSIT",
    updatedDate: "2024-04-25T10:12:12.9027972",
    location: "In Transit – Air Cargo",
  },
  {
    statusCode: "SHIPMENT_RECEIVERED_AT_DESTINATION",
    updatedDate: "2024-04-28T13:47:41.1102219",
    location: "Cebu Distribution Hub",
  },
  {
    statusCode: "SHIPMENT_OUT_FOR_DELIVERY",
    updatedDate: "2024-04-29T08:14:33.4473312",
    location: "Cebu Delivery Team",
  },
  {
    statusCode: "SHIPMENT_DELIVERED",
    updatedDate: "2024-04-29T15:22:03.7978069",
    location: "Recipient Address",
  },
];

export default function ShipmentTrackerAccordion({
  shipmentData = [],
  trackingNumber = "1234567890",
}) {
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [open, setOpen] = useState(1);

  return (
    <>
      {/* Shipment information section */}
      <div
        className="
                    flex
                    justify-center items-center
                    md:w-[50vw] w-[90vw]
                    mx-auto mb-[6vw] mt-[7vw]
                "
        style={{
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        }}
      >
        <Accordion
          className="
            md:rounded-[1vw] rounded-[3vw]
            shadow-[0_0_5vw_rgba(255,0,229,0.10)]
          "
          open={open === 1}
          icon={
            !open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#CC00B7"
                className="md:size-[2vw] size-[6vw]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#CC00B7"
                className="md:size-[2vw] size-[6vw]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            )
          }
        >
          <AccordionHeader
            className={`
              flex flex-row gap-x-0
              justify-between items-center
              ${open ? "md:rounded-t-[1vw] rounded-t-[3vw]" : "md:rounded-[1vw] rounded-[3vw]"}
              cursor-pointer border-0
              md:bg-[#F7F1FF] bg-[#EDE9FE]
              md:px-[1vw] px-[3vw]
              md:py-[1.5vw] py-[2.5vw]
            `}
            onClick={() => handleOpen(1)}
          >
            {/* Desktop version for Accordion details */}
            <img
              className="
                w-[2vw] h-[2vw]
                md:block hidden
              "
              src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_2.svg"
              alt="ShipX - plane"
            />
            <div className="md:flex flex-col gap-y-0 hidden">
              <span className="text-[#1E2939] text-[1vw] font-bold">
                {trackingNumber || "1234567890"}
              </span>
              <span className="text-[#1E2939] text-[0.8vw] font-normal">
                Tracking Number
              </span>
            </div>
            <div className="md:flex flex-col gap-y-0 hidden">
              <span className="text-[#1E2939] text-[1vw] font-bold">
                {new Date(
                  shipmentData?.statuses[
                    shipmentData?.statuses.length - 1
                  ]?.updatedDate,
                ).toLocaleString() || "YYYY/MM/DD, 00:00:00 AM"}
              </span>
              <span className="text-[#1E2939] text-[0.8vw] font-normal">
                {getLastStatusCode(shipmentData) ||
                  "No shipment information available"}
              </span>
            </div>

            {/* Mobile version for Accordion details */}
            <div
              className="
                md:hidden flex flex-col
              "
            >
              <div
                className="
                  flex flex-row gap-x-[1vw]
                "
              >
                <img
                  className="
                    md:w-[2vw] w-[6vw]
                    md:h-[2vw] h-[6vw]
                  "
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_2.svg"
                  alt="ShipX - plane"
                />
                <span
                  className="
                  md:text-[#1E2939] text-[#1A1A1A]
                    text-[4vw]
                    font-semibold
                  "
                >
                  {trackingNumber || "1234567890"}
                </span>
              </div>
              <span
                className="
                  md:text-[#1E2939] text-[#1A1A1A]/85
                  text-[2.7vw]
                  font-medium
                "
              >
                {
                  "Last Updated Date: YYYY/MM/DD, 00:00:00 AM"
                  /* {new Date(
                    shipmentData?.statuses[
                      shipmentData?.statuses.length - 1
                    ]?.updatedDate,
                  ).toLocaleString() || "YYYY/MM/DD, 00:00:00 AM"} */
                }
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="
              flex flex-col
              md:px-[5vw] px-[3vw]
              md:py-[2vw] py-[5vw]
            "
          >
            <span
              className="
                md:text-[#4D4D4D] text-[#1A1A1A]
                md:text-[0.8vw] text-[3vw]
                font-bold
                md:mb-[0.5vw] mb-[2vw]
              "
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              Shipment Progress
            </span>

            {/* Range button here for progress slider */}
            <ProgressBar />

            <span
              className="
              md:text-[#4D4D4D] text-[#1A1A1A]
                md:text-[0.8vw] text-[3vw]
                font-bold
                md:mb-[1.5vw] mb-[2.5vw]
                md:mt-[1.5vw] mt-[5vw]
              "
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              Activity Log
            </span>

            <Stepper statuses={shipmentData || dummyStatuses} />
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
