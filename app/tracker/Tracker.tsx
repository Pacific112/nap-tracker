"use client";

import { StartOfDay } from "@/app/tracker/StartOfDay";
import { EndOfDay } from "@/app/tracker/EndOfDay";
import { DayConfiguration } from "@/app/tracker/types";
import { TrackerBase } from "@/app/tracker/TrackerBase";
import { LongNap } from "@/app/tracker/LongNap";

const radius = 13;
const circumference = 2 * Math.PI * radius;
const fill = 0.8;
const startCircle = 0.75 * circumference - 0.1 * circumference;

// Always remember that circle starts drawing from the right (3 o'clock)
const TRACKER_CONFIG = {
  radius,
  circumference: 2 * Math.PI * 13,
  fill: 0.8,
  startCircle: 0.75 * 2 * Math.PI * 13 - 0.1 * 2 * Math.PI * 13,
};

export const Tracker = ({
  dayConfiguration,
}: {
  dayConfiguration: DayConfiguration;
}) => {
  return (
    <>
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
          <LongNap
            key={index}
            nap={nap}
            startOfDay={dayConfiguration.startOfDay}
            endOfDay={dayConfiguration.endOfDay}
          />
        ))}
      </svg>
    </>
  );
};
