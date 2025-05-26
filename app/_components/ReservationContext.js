import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

export const useReservation = () => {
  return useContext(ReservationContext);
};

export default function ReservationProvider({ children }) {
  const [range, setRange] = useState("");

  return (
    <ReservationContext.Provider
      value={{
        range,
        setRange,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
