import { addMinutes } from "date-fns";
import { ActivityPeriod, ChildDay, PlannedNap } from "@/app/(domain)/ChildDay";

const ACTIVITY_PERIODS: ActivityPeriod[] = [
  { activeTime: { minutes: 120 }, napTime: { minutes: 30 } },
  { activeTime: { minutes: 120 }, napTime: { minutes: 60 } },
  { activeTime: { minutes: 120 }, napTime: { minutes: 90 } },
  { activeTime: { minutes: 90 } },
];

const calculatePlannedNaps = (
  currentTime: Date,
  periods: ActivityPeriod[],
): PlannedNap[] => {
  if (periods.length === 0) {
    return [];
  }

  const [period, ...restPeriods] = periods;
  if (!period.napTime) {
    return [];
  }

  const napStart = addMinutes(currentTime, period.activeTime.minutes);
  const napEnd = addMinutes(napStart, period.napTime.minutes);

  const result = calculatePlannedNaps(napEnd, restPeriods);
  result.push({ startDate: napStart, endDate: napEnd });

  return result;
};
const countTotalMinutes = (periods: ActivityPeriod[]) =>
  periods.reduce(
    (acc, period) =>
      acc + period.activeTime.minutes + (period.napTime?.minutes || 0),
    0,
  );

export const planChildDay = (startOfDay: Date): ChildDay => {
  const plannedNaps = calculatePlannedNaps(startOfDay, ACTIVITY_PERIODS);
  const endOfDay = addMinutes(startOfDay, countTotalMinutes(ACTIVITY_PERIODS));

  return {
    startOfDay,
    plannedNaps,
    endOfDay,
  };
};
