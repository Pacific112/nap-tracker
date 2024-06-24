import { differenceInMinutes, format } from "date-fns";
import { Label } from "@/app/tracker/label";
import { Arc } from "@/app/tracker/arc";
import { PlannedNap } from "@/domain/ChildDay";

type Props = {
  nap: PlannedNap;
  startOfDay: Date;
  endOfDay: Date;
  onClick?: () => void;
};

export const Nap = ({ startOfDay, nap, endOfDay, onClick }: Props) => {
  const totalMinutes = differenceInMinutes(endOfDay, startOfDay);
  const circleStart = differenceInMinutes(nap.startDate, startOfDay);
  const circleEnd = differenceInMinutes(nap.endDate, startOfDay);

  const startingPoint = circleStart / totalMinutes;
  const endingPoint = circleEnd / totalMinutes;

  // + 180 - move to the bottom
  // + 36 - move to the start of the day
  // - 2 - adjustment
  // + 10 - adjustment
  const startLabelPosition = startingPoint * 360 * 0.8 + 180 + 36 - 2;
  const endLabelPosition = endingPoint * 360 * 0.8 + 180 + 36 + 10;

  return (
    <>
      <Arc
        startingPoint={startingPoint}
        endingPoint={endingPoint}
        onClick={onClick}
      />

      <Label x={14} y={6} transform={`rotate(${startLabelPosition}, 16, 16)`}>
        {format(nap.startDate, "HH:mm")}
      </Label>
      <Label x={14} y={6} transform={`rotate(${endLabelPosition}, 16, 16)`}>
        {format(nap.endDate, "HH:mm")}
      </Label>
    </>
  );
};
