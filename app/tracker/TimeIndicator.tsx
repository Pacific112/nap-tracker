import { useState } from "react";
import { differenceInSeconds } from "date-fns";
import { useInterval } from "usehooks-ts";

const totalTrackerDegrees = 360 - 72;
const startingRotation = 180 + 36;

export const TimeIndicator = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useInterval(() => setCurrentTime(new Date()), 60 * 1000);

  const currentSecondsDifference = differenceInSeconds(currentTime, startDate);
  const totalDifference = differenceInSeconds(endDate, startDate);

  const timeRotation =
    (currentSecondsDifference / totalDifference) * totalTrackerDegrees;
  const rotation = startingRotation + timeRotation;

  return (
    <>
      <polygon
        points="16,6.5 15.5,7 16.5,7"
        className="fill-yellow-500"
        transform={`rotate(${rotation}, 16, 16)`}
      ></polygon>
    </>
  );
};
