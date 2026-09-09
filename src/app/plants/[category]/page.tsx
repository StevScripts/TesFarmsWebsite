import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import {
  getCategoryBySlug,
  getAllCategorySlugs,
  plantCategories,
} from "@/data/plant-catalog";
import { VarietyList } from "@/components/site/variety-list";
import { VisitSection } from "@/components/site/visit-section";

export function generateStaticParams() {
  return getAllCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return { title: `${cat.name} | Tes Farms`, description: cat.intro };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();
  return (
    <>
      <div className="page-width">
        <div className="interior-heading">
          <Link className="breadcrumb" href="/#plants">
            <ArrowLeft size={18} aria-hidden="true" /> All plants
          </Link>
          <h1>{cat.name}</h1>
          <p>Ask George for current availability, sizes, and prices.</p>
        </div>
        <details className="category-navigation" key={cat.slug}>
          <summary>
            Browse other plants <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <nav aria-label="Plant categories">
            {plantCategories
              .filter((item) => item.slug !== category)
              .map((item) => (
                <Link href={`/plants/${item.slug}`} key={item.slug}>
                  {item.name}
                </Link>
              ))}
          </nav>
        </details>
        <section className="catalog-section" aria-label={`${cat.name} catalog`}>
          <VarietyList key={cat.slug} varieties={cat.varieties} />
        </section>
      </div>
      <VisitSection />
    </>
  );
}
