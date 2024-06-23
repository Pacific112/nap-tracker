import { format } from "date-fns";
import { LabeledCircle } from "@/app/tracker/labeled-circle";
import React from "react";

type Props = {
  date: Date;
  onClick?: () => void;
};

export const StartOfDay = React.forwardRef<SVGGElement, Props>(
  ({ date, onClick }, ref) => (
    <LabeledCircle ref={ref} startingPoint={0} onClick={onClick}>
      {format(date, "HH:mm")}
    </LabeledCircle>
  ),
);

StartOfDay.displayName = "StartOfDay";
