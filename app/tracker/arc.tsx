import { trackerConfig } from "@/app/tracker/tracker-config";

const { circumference } = trackerConfig;

export const Arc = ({
  startingPoint,
  endingPoint,
}: {
  startingPoint: number;
  endingPoint: number;
}) => {
  // how much
  // 0.8 - 80% of the circle. But I think it should be based on end of day somehow
  const filledDistance = (endingPoint - startingPoint) * 0.8;

  return (
    <circle
      cx="16"
      cy="16"
      r={trackerConfig.radius}
      role="presentation"
      strokeDasharray={`${filledDistance * circumference} ${(1 - filledDistance) * circumference}`}
      strokeDashoffset={
        circumference * 0.75 -
        circumference * 0.1 -
        startingPoint * 0.8 * circumference
      }
      strokeLinecap="round"
      className="h-full stroke-blue-300 transition-all !duration-500"
    ></circle>
  );
};
