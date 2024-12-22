import { CloudMoonIcon } from "lucide-react";
import React from "react";
import LocationDefiner from "./LocationDefiner";

export default function Header() {
  return (
    <div className="border-b-[1px] p-5 shadow-none flex  items-center justify-between flex-wrap">
      <div className="font-extrabold flex gap-2 items-center">
        <CloudMoonIcon />
        Forecast Weather
      </div>
      <LocationDefiner />
    </div>
  );
}
