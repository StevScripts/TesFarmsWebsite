import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { plantCategories } from "@/data/plant-catalog";
import { siteContent } from "@/data/site-content";
import { ContactLinks } from "@/components/site/contact-links";
import { VisitSection } from "@/components/site/visit-section";

const featured: Record<string, string> = {
  mangoes: "Alphonso, Kesar, Coconut Cream & more",
  avocados: "Brogdon, Choquette, Day & more",
  "fruit-trees": "Guava, lychee, jackfruit & chikoo",
  "berries-nuts-spices": "Turmeric, black pepper, moringa & more",
  "citrus-trees": "Meyer lemon, Key lime & kumquat",
  "exotic-indian-plants": "Curry leaf, jasmine, parijat & tulsi",
};
const categoryOrder = [
  "mangoes",
  "exotic-indian-plants",
  "fruit-trees",
  "avocados",
  "citrus-trees",
  "berries-nuts-spices",
];

export default function HomePage() {
  const { business, grower } = siteContent;
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Link className="hero-host" href="/about">
            <Image
              src="/images/george-profile.jpg"
              alt=""
              width={48}
              height={48}
            />
            <span>Grown by George Kurian</span>
          </Link>
          <h1 id="hero-title">
            A little <br />
            closer
            <br />
            to home.
          </h1>
          <p className="hero-description">
            Mango, curry leaf, jasmine, and other favorites from home. Grown in
            Central Florida.
          </p>
          <ContactLinks />
          <Link className="hero-browse" href="#plants">
            Find your plants <ArrowDown size={19} aria-hidden="true" />
          </Link>
        </div>
        <div className="hero-photo george-hero-photo">
          <Image
            src="/images/george-in-the-garden.jpg"
            alt="George in a sun hat beneath the climbing vegetables in his garden"
            fill
            preload
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <Link href="/about" className="photo-caption grower-caption">
            <span>
              <strong>Meet George.</strong>
              <small>From {grower.channelName}</small>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      <div className="local-strip">
        <p>
          Lake Nona <span>·</span> St. Cloud <span>·</span> Kissimmee{" "}
          <span>·</span> Greater Orlando
        </p>
        <Link href="/contact">Visits by appointment</Link>
      </div>
      <section
        className="plant-section page-width"
        id="plants"
        aria-labelledby="plants-title"
      >
        <div className="section-intro">
          <h2 id="plants-title">Find your plants.</h2>
        </div>
        <div className="plant-layout">
          <div className="category-list">
            {categoryOrder.map((slug) => {
              const cat = plantCategories.find(
                (category) => category.slug === slug,
              )!;
              return (
                <Link
                  href={`/plants/${slug}`}
                  key={slug}
                  className="category-link"
                >
                  <div>
                    <h3>{cat.name}</h3>
                    <p>{featured[slug]}</p>
                  </div>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              );
            })}
          </div>
          <Link href="/plants/exotic-indian-plants" className="jasmine-feature">
            <div className="jasmine-photo">
              <Image
                src="/images/jasmine.webp"
                alt="White jasmine flowers opening against deep green leaves"
                fill
                sizes="(max-width: 760px) 100vw, 35vw"
              />
            </div>
            <div>
              <h3>
                That familiar
                <br />
                jasmine fragrance.
              </h3>
              <span className="text-link">
                Explore Indian plants{" "}
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </section>
      <section className="story-section" aria-labelledby="story-title">
        <div className="page-width grower-story">
          <figure className="grower-figure">
            <div className="grower-guava-photo">
              <Image
                src="/images/george-with-guava.jpg"
                alt="George holding a large green guava in a post from Garden and Kitchen Pals"
                fill
                sizes="(max-width: 760px) 100vw, 40vw"
              />
            </div>
            <figcaption>
              <a
                href={grower.guavaPost}
                target="_blank"
                rel="noopener noreferrer"
              >
                George on Instagram{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
          <div className="grower-story-copy">
            <h2 id="story-title">
              You might already
              <br />
              know George.
            </h2>
            <p>
              He shares his garden on {grower.channelName}. At Tes Farms, he’ll
              help you choose a plant and learn how to grow it.
            </p>
            <Link className="text-link" href="/about">
              Get to know George <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <VisitSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: business.name,
            url: "https://tessfarms.com",
            description:
              "Indian plants and tropical fruit trees in Central Florida. Visit by appointment.",
            telephone: business.phone,
            areaServed: ["Lake Nona", "St. Cloud", "Kissimmee", "Orlando"],
            sameAs: [
              business.social.youtube,
              business.social.instagram,
              business.social.facebook,
            ],
            founder: {
              "@type": "Person",
              name: grower.name,
              sameAs: [business.social.youtube, business.social.instagram],
            },
          }),
        }}
      />
    </>
  );
}
