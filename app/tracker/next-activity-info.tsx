import { ChildDay, findCurrentNap } from "@/domain/ChildDay";
import { differenceInHours, differenceInMinutes, isAfter } from "date-fns";
import { useInterval } from "usehooks-ts";
import { useMemo, useState } from "react";

type Mode = "nap" | "activity" | "before_sleep";
const TITLE: Record<Mode, string> = {
  nap: "Baby will wake up in:",
  activity: "Next nap in:",
  before_sleep: "Sleep in:",
};

const formatDate = (dateToFormat: Date, currentDate: Date) => {
  const hours = Math.abs(differenceInHours(currentDate, dateToFormat));
  const minutes = Math.abs(differenceInMinutes(currentDate, dateToFormat));

  if (hours >= 0) {
    return `${hours} h ${minutes % 60} min`;
  }
  return `${minutes % 60} min`;
};

export const NextActivityInfo = ({ childDay }: { childDay: ChildDay }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useInterval(() => setCurrentDate(new Date()), 60 * 1000);

  const [mode, nextActivity] = useMemo<[Mode, Date]>(() => {
    const nextNap = findCurrentNap(childDay, currentDate);
    if (!nextNap) {
      return ["before_sleep", childDay.endOfDay];
    }

    if (isAfter(nextNap.startDate, currentDate)) {
      return ["activity", nextNap.startDate];
    }

    return ["nap", nextNap.endDate];
  }, [currentDate, childDay]);

  return (
    <g
      textAnchor="middle"
      dominantBaseline="middle"
      transform="translate(16,12)"
      className="fill-white"
    >
      <text fontSize={1}>{TITLE[mode]}</text>
      <text fontSize={2} y={2}>
        {formatDate(nextActivity, currentDate)}
      </text>
    </g>
  );
};
