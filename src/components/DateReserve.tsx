"use client";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DateReserve() {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          value={reserveDate}
          onChange={(value) => setReserveDate(value)}
        />
      </LocalizationProvider>
    </>
  );
}
