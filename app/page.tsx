
import { Catalogue, Hero } from "@/components";
import { FilterProps } from "@/types";

export default function Home({ searchParams }: { searchParams: FilterProps }) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Catalogue searchParams={searchParams} />
    </main>
  );
}
