import { trackerConfig } from "@/app/tracker/tracker-config";

const endingOffsetLength =
  trackerConfig.circumference * trackerConfig.offsetStep * 2;

export const Tracker = ({ children }: { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    strokeWidth="4"
    className="z-0 relative text-primary w-72 h-72"
  >
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
    {children}
  </svg>
);
