export type PlannedNap = {
  startDate: Date;
  endDate: Date;
};

export type DayConfiguration = {
  plannedNaps: PlannedNap[];
  startOfDay: Date;
  endOfDay: Date;
};
