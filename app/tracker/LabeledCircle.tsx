import { Label } from "@/app/tracker/Label";
import { format } from "date-fns";
import { SVGProps } from "react";

const startAngle = 126;

// starting point - value from 0 to 1, percentage of the circle
export const LabeledCircle = ({
  startingPoint,
  children,
}: {
  startingPoint: number;
  children: React.ReactNode;
}) => {
  const angle = startAngle + startingPoint * (360 - 2 * 36);

  const x = 16 + Math.cos((angle * Math.PI) / 180) * 13;
  const y = 16 + Math.sin((angle * Math.PI) / 180) * 13;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle
        r={2}
        role="presentation"
        className="h-full fill-amber-300 stroke-orange-400"
        strokeWidth="0.2"
      ></circle>
      <Label textAnchor="middle" y={3}>
        {children}
      </Label>
    </g>
  );
};
