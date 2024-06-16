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
