interface Props {
  state: string;
}
export default function TodaySpecial({
  state,}: Props) {
    const soldOut = state === "special-sold-out";
  return (
    <section className="mx-auto -mt-10 max-w-7xl px-6">
      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-lg">

        <span className="font-semibold uppercase tracking-wider text-amber-700">
          Chef's Pick
        </span>

        <h2 className="mt-3 text-3xl font-bold">
          Saffron French Toast
        </h2>

       {soldOut ? (
  <span className="mt-3 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
    Sold Out Today
  </span>
) : (
  <p className="mt-4 text-gray-600">
    Chef's pick today:
    our Saffron French Toast with cardamom syrup.
  </p>
)}

        <div className="mt-6 text-2xl font-bold text-amber-700">
          €12.80
        </div>

      </div>
    </section>
  );
}