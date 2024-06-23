import { format } from "date-fns";
import { LabeledCircle } from "@/app/tracker/labeled-circle";

type Props = {
  date: Date;
};

export const EndOfDay = ({ date }: Props) => (
  <LabeledCircle startingPoint={1}>{format(date, "HH:mm")}</LabeledCircle>
);
