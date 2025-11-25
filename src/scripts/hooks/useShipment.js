import { createContext, useContext, useState } from "react";

const ShipmentContext = createContext();

export function ShipmentProvider({ children }) {
  const [shipmentData, setShipmentData] = useState(null);
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <ShipmentContext.Provider
      value={{
        shipmentData,
        setShipmentData,
        trackingNumber,
        setTrackingNumber,
      }}
    >
      {children}
    </ShipmentContext.Provider>
  );
}

export const useShipment = () => useContext(ShipmentContext);
