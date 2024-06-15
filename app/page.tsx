import { Tracker } from "@/app/tracker/Tracker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-400">
      <Tracker
        dayConfiguration={{
          startOfDay: new Date(2024, 11, 6, 8, 0),
          endOfDay: new Date(2024, 11, 6, 20, 0),
          plannedNaps: [
            {
              startDate: new Date(2024, 11, 6, 9, 17),
              endDate: new Date(2024, 11, 6, 10, 32),
            },
            {
              startDate: new Date(2024, 11, 6, 13, 19),
              endDate: new Date(2024, 11, 6, 14, 36),
            },
            {
              startDate: new Date(2024, 11, 6, 16, 44),
              endDate: new Date(2024, 11, 6, 17, 8),
            },
          ],
        }}
      />
    </main>
  );
}
