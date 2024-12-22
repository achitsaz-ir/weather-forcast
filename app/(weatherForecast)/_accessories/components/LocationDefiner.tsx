"use client";
import { Autocompelete } from "@/components/Autocomplete";
import { Button } from "@/components/ui/button";
import { LocateFixedIcon } from "lucide-react";
import React from "react";

export default function LocationDefiner() {
  const locations = [
    {
      value: "London",
      label: "London",
    },
    {
      value: "Tokyo",
      label: "Tokyo",
    },
    {
      value: "Tehran",
      label: "Tehran",
    },
  ];

  return (
    <div className="flex gap-3">
      <Autocompelete placeholder="Choose your location" items={locations} />
      <Button>
        <LocateFixedIcon /> Apply
      </Button>
    </div>
  );
}
