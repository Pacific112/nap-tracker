import { Tracker } from "@/app/tracker/Tracker";
import { planChildDay } from "@/domain/planChildDay";

const START_OF_DAY = new Date(2024, 11, 6, 8, 0);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Tracker childDay={planChildDay(START_OF_DAY)} />
    </main>
  );
}
