import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import ProgressBar, { getShipmentProgressPercentage } from "./ProgressBar";
import { getLastStatusLabel, mapStatuses } from "./StatusMap";
import Stepper from "./Stepper";
import { useTranslation } from "react-i18next";

export default function ShipmentTrackerAccordion({
  shipmentData = [],
  trackingNumber = "1234567890",
}) {
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [open, setOpen] = useState(1);
  const { t } = useTranslation();

  const steps = mapStatuses(shipmentData?.statuses, t);
  const lastStatus = getLastStatusLabel(shipmentData?.statuses, t);

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
                {t(
                  "shipment_tracker.shipment_activity_section.accordion_header.tracking_number_label",
                )}
              </span>
            </div>
            <div className="md:flex flex-col gap-y-0 hidden">
              <span className="text-[#1E2939] text-[1vw] font-bold">
                {new Date(
                  shipmentData?.statuses?.[
                    shipmentData.statuses.length - 1
                  ]?.updatedDate,
                ).toLocaleString() || "YYYY/MM/DD, 00:00:00 AM"}
              </span>
              <span className="text-[#1E2939] text-[0.8vw] font-normal">
                {lastStatus || "null"}
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
                {t(
                  "shipment_tracker.shipment_activity_section.accordion_header.tracking_number_label",
                )}
                &nbsp;
                {new Date(
                  shipmentData?.statuses[
                    shipmentData?.statuses.length - 1
                  ]?.updatedDate,
                ).toLocaleString() || "YYYY/MM/DD, 00:00:00 AM"}
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
              {t(
                "shipment_tracker.shipment_activity_section.accordion_header.shipment_progress_label",
              )}
            </span>

            {/* Range button here for progress slider */}
            <ProgressBar
              progress={getShipmentProgressPercentage(shipmentData?.statuses)}
            />

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
              {t(
                "shipment_tracker.shipment_activity_section.accordion_header.shipment_progress_label",
              )}
            </span>

            <Stepper statuses={steps || []} />
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
