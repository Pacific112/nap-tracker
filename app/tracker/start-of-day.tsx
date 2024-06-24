import { format } from "date-fns";
import { LabeledCircle } from "@/app/tracker/labeled-circle";
import React, { PropsWithoutRef, PropsWithRef } from "react";

type Props = {
  date: Date;
  onClick?: () => void;
  ref?: React.Ref<SVGGElement>;
};

export const StartOfDay = ({ date, onClick, ref }: Props) => (
  <LabeledCircle ref={ref} startingPoint={0} onClick={onClick}>
    {format(date, "HH:mm")}
  </LabeledCircle>
);

StartOfDay.displayName = "StartOfDay";
