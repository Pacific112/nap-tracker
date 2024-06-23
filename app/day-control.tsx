"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChildDay } from "@/domain/ChildDay";
import { planChildDay } from "@/domain/planChildDay";
import { StartOfDay } from "@/app/tracker/start-of-day";
import { EndOfDay } from "@/app/tracker/end-of-day";
import { Nap } from "@/app/tracker/nap";
import { TimeIndicator } from "@/app/tracker/time-indicator";
import { NextActivityInfo } from "@/app/tracker/next-activity-info";
import { Tracker } from "@/app/tracker/tracker";
import { UpdateStartOfDayDrawer } from "@/app/tracker/update-start-of-day-drawer";

export const DayControl = () => {
  const [childDay, setChildDay] = useState<ChildDay>();
  const onStartOfDayChanged = (newStartOfDate: Date) =>
    setChildDay(planChildDay(newStartOfDate));

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
              <Nap
                key={index}
                nap={nap}
                startOfDay={childDay.startOfDay}
                endOfDay={childDay.endOfDay}
              />
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
