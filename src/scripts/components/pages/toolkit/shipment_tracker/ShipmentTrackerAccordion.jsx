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
import { AlertCircle } from "lucide-react"; // Import for the bottom notice
import { cn } from "../../../../../lib/util";

const STATUS_COLORS = {
  SUCCESS: "text-[#008236]",
  WARNING: "text-[#D08700]",
  DEFAULT: "text-[#1A1A1A]",
};

const ShipmentTrackerAccordion = ({
  shipmentData = [],
  trackingNumber = "SGL2510001808",
  latestStatusHidden = false,
}) => {
  const [open, setOpen] = useState(1);
  const { t } = useTranslation();
  const { statuses } = shipmentData;

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

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
    const latestStatusCode = sorted[0]?.statusCode;

    let color = STATUS_COLORS.DEFAULT;
    if (latestStatusCode === "SHIPMENT_DELIVERED")
      color = STATUS_COLORS.SUCCESS;

    return {
      steps: mapStatuses(statuses, t),
      lastStatusLabel: getLastStatusLabel(statuses, t),
      statusColor: color,
      formattedDate: formatShipmentDate(statuses),
    };
  }, [statuses, t]);

  return (
    <div className="flex justify-center items-center md:w-[530px] w-[90vw] mx-auto">
      <Accordion
        open={open === 1}
        className={cn(
          "border-none overflow-hidden",
          "bg-linear-to-br from-[#FFE6FF]/5 to-[#AA00FF]/5",
          "backdrop-blur-md opacity-90 rounded-[20px]",
        )}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="border-none flex flex-col items-start p-6 md:p-8 md:pb-4 gap-1"
        >
          <span className="text-[#1A1A1A] font-semibold text-[16px] leading-5">
            {t(
              "shipment_tracker.shipment_activity_section.accordion_header.tracking_number_label",
            )}
            :
          </span>
          <span className="text-[#FF00E5] font-semibold md:text-[32px] text-[28px] leading-tight tracking-tight">
            {trackingNumber}
          </span>
        </AccordionHeader>

        <AccordionBody className="p-0 flex flex-col">
          {/* Activity Log Label Container */}
          <div className="px-6 md:px-8 pb-2">
            <span className="text-[#1A1A1A] font-semibold text-[16px] leading-5">
              {t(
                "shipment_tracker.shipment_activity_section.accordion_header.shipment_activity_log_label",
              )}
            </span>
          </div>

          {/* Stepper Logic Container */}
          <div className="px-6 md:px-8 py-2">
            <Stepper statuses={!shipmentData?.errors ? steps : []} />
          </div>

          {/* Local Time Notice - Based on Frame 1618873300 */}
          <div className="flex flex-row items-center justify-center gap-2 p-4 md:p-6">
            <div className="flex flex-row items-center gap-2 px-4 py-1 rounded-lg">
              <AlertCircle size={20} className="text-[#FF00E5] shrink-0" />
              <p className="text-[#4D525C] text-[14px] leading-tight font-normal">
                {t(
                  "shipment_tracker.shipment_activity_section.accordion_body.local_time_notice",
                )}
              </p>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default ShipmentTrackerAccordion;
