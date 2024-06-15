"use client";

import { StartOfDay } from "@/app/tracker/StartOfDay";
import { EndOfDay } from "@/app/tracker/EndOfDay";
import { DayConfiguration } from "@/app/tracker/types";
import { TrackerBase } from "@/app/tracker/TrackerBase";
import { Nap } from "@/app/tracker/Nap";

export const Tracker = ({
  dayConfiguration,
}: {
  dayConfiguration: DayConfiguration;
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      strokeWidth="4"
      className="z-0 relative text-primary w-72 h-72"
    >
      <TrackerBase />

      <StartOfDay date={dayConfiguration.startOfDay} />
      <EndOfDay date={dayConfiguration.endOfDay} />

      {dayConfiguration.plannedNaps.map((nap, index) => (
        <Nap
          key={index}
          nap={nap}
          startOfDay={dayConfiguration.startOfDay}
          endOfDay={dayConfiguration.endOfDay}
        />
      ))}
    </svg>
  );
};
