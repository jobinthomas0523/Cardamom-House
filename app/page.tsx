import Hero from "@/components/Hero";
import StickyNav from "@/components/StickyNav";
import TodaySpecial from "@/components/TodaySpecial";
import MenuSection from "@/components/MenuSection";
import Hours from "@/components/Hours";
import Footer from "@/components/Footer";
import menuData from "@/data/menu";
import StatusBanner from "@/components/StatusBanner";

interface HomeProps {
  searchParams: Promise<{
    state?: string;
  }>;
}


export default async function Home({ searchParams }: HomeProps) {
    const params = await searchParams;
  const state = params.state ?? "open";

  return (
    <main>
      <Hero state={state} />
      <StatusBanner state={state} />

      <TodaySpecial state={state} />

      <StickyNav />

      <div className="mx-auto max-w-7xl px-6 py-10">
        {menuData.categories.map((category) => (
        <MenuSection
  key={category.id}
  category={category}
  state={state}
/>


        ))}
        <Hours state={state} />

<Footer />
      </div>
    </main>
  );
}