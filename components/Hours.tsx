interface HoursProps {
  state: string;
}

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "08:00 – 15:00" },
  { day: "Wednesday", time: "08:00 – 15:00" },
  { day: "Thursday", time: "08:00 – 15:00" },
  { day: "Friday", time: "08:00 – 16:00" },
  { day: "Saturday", time: "09:00 – 17:00" },
  { day: "Sunday", time: "09:00 – 17:00" },
];

export default function Hours({ state }: HoursProps) {
  const today = state === "closed" ? "Monday" : "Tuesday";

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="mb-8 text-4xl font-bold">
        Opening Hours
      </h2>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        {hours.map((item) => (
          <div
            key={item.day}
            className={`flex items-center justify-between border-b px-6 py-4 last:border-none ${
              item.day === today
                ? "bg-amber-50"
                : ""
            }`}
          >
            <span
              className={`font-medium ${
                item.day === today
                  ? "text-amber-700"
                  : ""
              }`}
            >
              {item.day}
            </span>

            <span
              className={
                item.time === "Closed"
                  ? "font-medium text-red-600"
                  : "text-gray-600"
              }
            >
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}