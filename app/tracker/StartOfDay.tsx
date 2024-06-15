import { format } from "date-fns";
import { LabeledCircle } from "@/app/tracker/LabeledCircle";

type Props = {
  date: Date;
};

export const StartOfDay = ({ date }: Props) => (
  <LabeledCircle startingPoint={0}>{format(date, "HH:mm")}</LabeledCircle>
);
