import type { MenuItem } from "@/types/menu";
interface MenuItemProps {
  item: MenuItem;
  state: string;
}

export default function MenuItem({
  item,
  state,
}: MenuItemProps) {
  const soldOut =
    state === "special-sold-out" &&
    item.id === "brunch_07";

  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 ${
        soldOut
          ? "opacity-50"
          : "hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      {soldOut && (
        <span className="mb-3 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
          Sold Out
        </span>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{item.name}</h3>

          {item.description && (
            <p className="mt-2 text-gray-600">{item.description}</p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="text-lg font-bold text-amber-700">
          €{item.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}