"use client";

import { Tracker } from "@/app/tracker/Tracker";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChildDay } from "@/domain/ChildDay";
import { planChildDay } from "@/domain/planChildDay";

const DEFAULT_DAY = planChildDay(new Date("2024-06-18T17:27"));

export const DayControl = () => {
  const [childDay, setChildDay] = useState<ChildDay>(DEFAULT_DAY);

  return (
    <div className="text-center">
      <Tracker childDay={childDay} />
      <Button
        variant="secondary"
        onClick={() => setChildDay(planChildDay(new Date()))}
      >
        Start your day
      </Button>
    </div>
  );
};
