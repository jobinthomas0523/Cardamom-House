import { Phone, MapPin } from "lucide-react";
import restaurant from "@/data/menu";

interface HeroProps {
  state: string;
}

export default function Hero({ state }: HeroProps) {
    const isOpen = state !== "closed";
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">
          Lisbon Brunch Café
        </span>

        <h1 className="mt-6 text-5xl font-bold text-gray-900 md:text-7xl">
          {restaurant.restaurant.name}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          {restaurant.restaurant.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">

         <div
  className={`rounded-full px-4 py-2 text-sm font-semibold ${
    isOpen
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {isOpen ? "🟢 Open Now" : "🔴 Closed Today"}
</div>

          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} />
            {restaurant.restaurant.address}
          </div>

        </div>

        <a
          href={`tel:${restaurant.restaurant.phone}`}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 text-white transition hover:bg-amber-800"
        >
          <Phone size={18} />
          Call Now
        </a>

      </div>
    </section>
  );
}