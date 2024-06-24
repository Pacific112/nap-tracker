"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChildDay } from "@/domain/ChildDay";
import { planChildDay, updateNap } from "@/domain/planChildDay";
import { StartOfDay } from "@/app/tracker/start-of-day";
import { EndOfDay } from "@/app/tracker/end-of-day";
import { Nap } from "@/app/tracker/nap";
import { TimeIndicator } from "@/app/tracker/time-indicator";
import { NextActivityInfo } from "@/app/tracker/next-activity-info";
import { Tracker } from "@/app/tracker/tracker";
import { UpdateStartOfDayDrawer } from "@/app/tracker/update-start-of-day-drawer";
import { UpdateNapDrawer } from "@/app/tracker/update-nap-drawer";

const DEFAULT_START_OF_DAY = new Date("2024-06-24T06:30:00");

export const DayControl = () => {
  const [childDay, setChildDay] = useState<ChildDay>(
    planChildDay(DEFAULT_START_OF_DAY),
  );
  const onStartOfDayChanged = (newStartOfDate: Date) =>
    setChildDay(planChildDay(newStartOfDate));

  console.log(childDay);

  return (
    <div className="text-center">
      <Tracker>
        {childDay && (
          <>
            <UpdateStartOfDayDrawer
              currentTime={childDay.startOfDay}
              onStartOfDayChanged={onStartOfDayChanged}
            >
              <StartOfDay date={childDay.startOfDay} />
            </UpdateStartOfDayDrawer>
            <EndOfDay date={childDay.endOfDay} />

            {childDay.plannedNaps.map((nap, index) => (
              <UpdateNapDrawer
                key={index}
                onNapUpdated={({ startDate, endDate }) => {
                  setChildDay(
                    updateNap(childDay, { startDate, endDate, index }),
                  );
                }}
                nap={nap}
              >
                <Nap
                  key={index}
                  nap={nap}
                  startOfDay={childDay.startOfDay}
                  endOfDay={childDay.endOfDay}
                />
              </UpdateNapDrawer>
            ))}
            <TimeIndicator
              startDate={childDay.startOfDay}
              endDate={childDay.endOfDay}
            />
            <NextActivityInfo childDay={childDay} />
          </>
        )}
      </Tracker>
      <UpdateStartOfDayDrawer
        currentTime={new Date()}
        onStartOfDayChanged={onStartOfDayChanged}
      >
        <Button variant="secondary">Start your day</Button>
      </UpdateStartOfDayDrawer>
    </div>
  );
};
