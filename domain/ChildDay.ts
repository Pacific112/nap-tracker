export type PlannedNap = {
  startDate: Date;
  endDate: Date;
};

export type ActivityPeriod = {
  activeTime: { minutes: number };
  napTime?: { minutes: number };
};

export type ChildDay = {
  plannedNaps: PlannedNap[];
  startOfDay: Date;
  endOfDay: Date;
};

export const findCurrentNap = (childDay: ChildDay, currentDate: Date) => {
  return childDay.plannedNaps.reduce<PlannedNap | undefined>((acc, nap) => {
    if (nap.endDate > currentDate) {
      if (!acc) {
        return nap;
      }
      return acc.startDate < nap.startDate ? acc : nap;
    }

    return acc;
  }, undefined);
};
