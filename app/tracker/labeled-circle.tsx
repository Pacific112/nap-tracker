import { Label } from "@/app/tracker/label";
import React from "react";

const startAngle = 126;

type Props = {
  ref?: React.Ref<SVGGElement>;
  startingPoint: number;
  onClick?: () => void;
  children: React.ReactNode;
};

// starting point - value from 0 to 1, percentage of the circle
export const LabeledCircle = ({
  startingPoint,
  onClick,
  children,
  ref,
}: Props) => {
  const angle = startAngle + startingPoint * (360 - 2 * 36);

  const x = 16 + Math.cos((angle * Math.PI) / 180) * 13;
  const y = 16 + Math.sin((angle * Math.PI) / 180) * 13;

  return (
    <g
      ref={ref}
      role="button"
      transform={`translate(${x}, ${y})`}
      onClick={onClick}
    >
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

LabeledCircle.displayName = "LabeledCircle";
