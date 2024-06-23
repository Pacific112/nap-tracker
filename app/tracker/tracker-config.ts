const radius = 13;
const circumference = 2 * Math.PI * radius;
const offsetStep = 0.1;
const fill = 1 - offsetStep * 2;
const initialRotation = 0.75 * circumference - 0.1 * circumference;
const filledLength = fill * circumference;

// Always remember that circle starts drawing from the right (3 o'clock)
export const trackerConfig = {
  radius,
  circumference,
  offsetStep,
  fill,
  filledLength,
  initialRotation,
};
