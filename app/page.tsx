import { DayControl } from "@/app/day-control";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-gray-400">
      <DayControl />
    </main>
  );
}
