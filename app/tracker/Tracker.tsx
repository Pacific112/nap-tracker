"use client";

import { StartOfDay } from "@/app/tracker/StartOfDay";
import { EndOfDay } from "@/app/tracker/EndOfDay";
import { TrackerBase } from "@/app/tracker/TrackerBase";
import { Nap } from "@/app/tracker/Nap";
import { ChildDay } from "@/domain/ChildDay";

export const Tracker = ({ childDay }: { childDay: ChildDay }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      strokeWidth="4"
      className="z-0 relative text-primary w-72 h-72"
    >
      <TrackerBase />

      <StartOfDay date={childDay.startOfDay} />
      <EndOfDay date={childDay.endOfDay} />

      {childDay.plannedNaps.map((nap, index) => (
        <Nap
          key={index}
          nap={nap}
          startOfDay={childDay.startOfDay}
          endOfDay={childDay.endOfDay}
        />
      ))}
    </svg>
  );
};
