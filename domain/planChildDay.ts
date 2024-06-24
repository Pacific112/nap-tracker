import { addMinutes } from "date-fns";
import { ActivityPeriod, ChildDay, PlannedNap } from "@/domain/ChildDay";

const ACTIVITY_PERIODS: ActivityPeriod[] = [
  { activeTime: { minutes: 150 }, napTime: { minutes: 60 } },
  { activeTime: { minutes: 150 }, napTime: { minutes: 60 } },
  { activeTime: { minutes: 150 }, napTime: { minutes: 60 } },
  { activeTime: { minutes: 150 } },
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
  result.unshift({ startDate: napStart, endDate: napEnd });

  return result;
};

export const updateNap = (
  childDay: ChildDay,
  updatedNap: PlannedNap & { index: number },
): ChildDay => {
  const { index, ...nap } = updatedNap;
  const remainingPeriods = ACTIVITY_PERIODS.slice(index + 1);

  const notTouchedNaps = childDay.plannedNaps.slice(0, index);
  notTouchedNaps.push(nap);
  const updatedNaps = calculatePlannedNaps(nap.endDate, remainingPeriods);
  const plannedNaps = [...notTouchedNaps, ...updatedNaps];

  const endOfDay = addMinutes(
    plannedNaps.at(-1)?.endDate!,
    ACTIVITY_PERIODS.at(-1)?.activeTime.minutes!,
  );

  return {
    ...childDay,
    endOfDay,
    plannedNaps,
  };
};

export const planChildDay = (startOfDay: Date): ChildDay => {
  const plannedNaps = calculatePlannedNaps(startOfDay, ACTIVITY_PERIODS);
  const endOfDay = addMinutes(
    plannedNaps.at(-1)?.endDate!,
    ACTIVITY_PERIODS.at(-1)?.activeTime.minutes!,
  );

  return {
    startOfDay,
    plannedNaps,
    endOfDay,
  };
};
