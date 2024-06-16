"use client";

import { StartOfDay } from "@/app/tracker/StartOfDay";
import { EndOfDay } from "@/app/tracker/EndOfDay";
import { TrackerBase } from "@/app/tracker/TrackerBase";
import { Nap } from "@/app/tracker/Nap";
import { ChildDay } from "@/domain/ChildDay";

export const Tracker = ({ childDay }: { childDay?: ChildDay }) => {
  return (
    <TrackerBase>
      {childDay ? (
        <>
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
        </>
      ) : null}
    </TrackerBase>
  );
};
