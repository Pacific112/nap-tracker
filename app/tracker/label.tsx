import { SVGProps } from "react";
import clsx from "clsx";

export const Label = ({
  className,
  children,
  ...props
}: SVGProps<SVGTextElement>) => (
  <text className={clsx("fill-gray-100", className)} fontSize={1} {...props}>
    {children}
  </text>
);
