import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState, useMemo } from "react";
import {
  getLastStatusLabel,
  mapStatuses,
  formatShipmentDate,
} from "./StatusMap";
import Stepper from "./Stepper";
import { useTranslation } from "react-i18next";

const STATUS_COLORS = {
  SUCCESS: "text-[#008236]",
  WARNING: "text-[#D08700]",
  DEFAULT: "text-[#1A1A1A]",
};

const WARNING_STATUSES = new Set([
  "CREATING_FAILED",
  "SHIPMENT_DELIVERY_UNSUCCESSFUL",
  "SHIPMENT_RETUNRED_FROM_OVERSEAS",
  "SHIPMERNT_RETURNED_TO_SENDER",
  "SHIPMENT_DAMAGED",
  "SHIPMENT_LOST",
  "SHIPMENT_FAILED_ATTEMPT",
  "SHIPMENT_HOLD_BY_CUSTOMS_AT_DESTINATION",
  "SHIPMENT_HOLD_AT_POINT_OF_DELIVERY",
  "HOLD_FOR_PAYMENT",
]);

const LatestStatusInfo = ({
  isHidden,
  statusLabel,
  statusColor,
  formattedDate,
}) => {
  const { t } = useTranslation();

  if (isHidden) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <span className="text-[#4D4D4D] md:text-[#1A1A1A] md:text-[0.8vw] text-[3vw] font-bold">
        {t(
          "shipment_tracker.shipment_activity_section.accordion_body.latest_status_text",
        )}
      </span>
      <span className={`${statusColor} md:text-[1vw] text-[3.5vw] font-bold`}>
        {statusLabel}
      </span>
      {formattedDate && (
        <span className="text-[#63666D]/90 md:text-[0.65vw] text-[2.3vw] font-normal">
          {formattedDate}
        </span>
      )}
    </div>
  );
};

export default function ShipmentTrackerAccordion({
  shipmentData = [],
  trackingNumber = "SGL2510001808",
  latestStatusHidden = false,
}) {
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [open, setOpen] = useState(1);
  const { t } = useTranslation();
  const { statuses } = shipmentData;

  const { steps, lastStatusLabel, statusColor, formattedDate } = useMemo(() => {
    if (!statuses || statuses.length === 0) {
      return {
        steps: [],
        lastStatusLabel: null,
        statusColor: STATUS_COLORS.DEFAULT,
        formattedDate: null,
      };
    }

    const sorted = [...statuses].sort(
      (a, b) => new Date(b.updatedDate) - new Date(a.updatedDate),
    );
    const latestStatus = sorted[0];
    const latestStatusCode = latestStatus?.statusCode;

    let color = STATUS_COLORS.DEFAULT;
    if (latestStatusCode === "SHIPMENT_DELIVERED") {
      color = STATUS_COLORS.SUCCESS;
    } else if (WARNING_STATUSES.has(latestStatusCode)) {
      color = STATUS_COLORS.WARNING;
    }

    return {
      steps: mapStatuses(statuses, t),
      lastStatusLabel: getLastStatusLabel(statuses, t),
      statusColor: color,
      formattedDate: formatShipmentDate(statuses),
    };
  }, [statuses, t]);

  return (
    <>
      {/* Shipment information section */}
      <div
        className="
                    flex
                    justify-center items-center
                    md:w-[32vw] w-[90vw]
                    mx-auto
                "
        style={{
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        }}
      >
        <Accordion
          className="
            md:rounded-[1vw] rounded-[3vw]
            shadow-[0_0_5vw_rgba(255,0,229,0.10)]
            border border-[#C9C4D3]/90
          "
          open={open === 1}
        >
          <AccordionHeader
            className={`
              flex flex-row gap-x-0
              justify-between items-center
              ${open ? "md:rounded-t-[1vw] rounded-t-[3vw]" : "md:rounded-[1vw] rounded-[3vw]"}
              cursor-pointer border-0
              bg-[#F6F3FF]
              md:px-[1.5vw] px-[4vw]
              md:py-[1vw] py-[2.5vw]
            `}
            onClick={() => handleOpen(1)}
          >
            <div className="flex flex-col gap-y-0">
              <span
                className="
                  text-[#4D4D4D] md:text-[#1A1A1A]
                  md:text-[0.8vw] text-[2.3vw]
                  font-bold
                "
              >
                {t(
                  "shipment_tracker.shipment_activity_section.accordion_header.tracking_number_label",
                )}
                :
              </span>
              <span
                className="
                  text-[#FF00E5]
                  md:text-[1.5vw] text-[4.5vw]
                  font-semibold
                "
              >
                {trackingNumber || "SGL2510001808"}
              </span>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="
              flex flex-col
              md:px-[1.5vw] px-[4vw]
              md:py-[1vw] py-[5vw]
            "
          >
            <LatestStatusInfo
              isHidden={latestStatusHidden}
              statusLabel={lastStatusLabel}
              statusColor={statusColor}
              formattedDate={formattedDate}
            />
            <span
              className={`
              text-[#4D4D4D] md:text-[#1A1A1A]
                md:text-[0.8vw] text-[3vw]
                font-bold
                md:mb-[1.5vw] mb-[1.5vw]
                ${
                  latestStatusHidden === true
                    ? "md:mt-0 mt-0"
                    : "md:mt-[1vw] mt-[2vw]"
                }
              `}
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              {t(
                "shipment_tracker.shipment_activity_section.accordion_header.shipment_activity_log_label",
              )}
            </span>

            <Stepper statuses={!shipmentData?.errors ? steps : []} />
            <div
              className="
                flex flex-row
                md:gap-x-[0.25vw] gap-x-[0.5vw]
                justify-center items-center
                md:mt-[1vw] mt-[3vw]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="md:size-[1.2vw] size-[4vw] stroke-[2px] stroke-[#FF00E5]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
              <p
                className="
                  text-[#4D4D4D]/90
                  md:text-[0.7vw] text-[2.5vw]
                  font-normal
                "
              >
                {t(
                  "shipment_tracker.shipment_activity_section.accordion_body.local_time_notice",
                )}
              </p>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
