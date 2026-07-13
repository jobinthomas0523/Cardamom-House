import { MapPin, Phone } from "lucide-react";
import menuData from "@/data/menu";

export default function Footer() {
  const { restaurant } = menuData;

  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="font-heading text-4xl font-bold text-gray-900">
              {restaurant.name}
            </h2>

            <p className="mt-4 max-w-md text-gray-600">
              {restaurant.tagline}
            </p>

            <p className="mt-8 text-sm text-gray-400">
              © {new Date().getFullYear()} {restaurant.name}. All rights
              reserved.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-amber-700" />

              <span className="text-gray-700">
                {restaurant.address}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-amber-700" />

              <a
                href={`tel:${restaurant.phone}`}
                className="transition hover:text-amber-700"
              >
                {restaurant.phone}
              </a>
            </div>

            <div className="flex items-center gap-3">
              {/* Inline Instagram SVG to avoid missing export from lucide-react */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 text-amber-700"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>

              <a
                href={`https://instagram.com/${restaurant.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-amber-700"
              >
                {restaurant.instagram}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}