import MenuItem from "./MenuItem";
import type { MenuItem as MenuItemType } from "@/types/menu";


interface MenuSectionProps {
  category: {
    id: string;
    name: string;
    description: string;
    items: MenuItemType[];
  };
  state: string;
}
export default function MenuSection({
  category,
  state,
}: MenuSectionProps) {
  return (
    <section
      id={category.id}
      className="scroll-mt-28 py-12"
    >
      <h2 className="text-4xl font-bold">
        {category.name}
      </h2>

      {category.description && (
        <p className="mt-2 text-gray-600">
          {category.description}
        </p>
      )}

      <div className="mt-8 grid gap-6">
        {category.items.map((item) => (
         <MenuItem
  key={item.id}
  item={item}
  state={state}
/>
        ))}
      </div>
    </section>
  );
}