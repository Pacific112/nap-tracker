import { trackerConfig } from "@/app/tracker/trackerConfig";

const endingOffsetLength =
  trackerConfig.circumference * trackerConfig.offsetStep * 2;

export const TrackerBase = () => (
  <circle
    cx="16"
    cy="16"
    r={trackerConfig.radius}
    role="presentation"
    className="h-full stroke-gray-200"
    strokeDasharray={`${trackerConfig.filledLength} ${endingOffsetLength}`}
    strokeDashoffset={trackerConfig.initialRotation}
    strokeLinecap="round"
  ></circle>
);
