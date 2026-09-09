import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { VisitSection } from "@/components/site/visit-section";
import { GeorgeVideos } from "@/components/site/george-videos";

export const metadata = {
  title: "Meet George Kurian | Tes Farms & Garden and Kitchen Pals",
  description:
    "Meet George Kurian, the grower behind Tes Farms and Garden and Kitchen Pals. Get to know his gardening videos, practical demonstrations, and Central Florida nursery.",
};

export default function AboutPage() {
  const { business, grower } = siteContent;
  return (
    <>
      <section className="about-hero">
        <div className="about-copy">
          <p>Garden and Kitchen Pals</p>
          <h1>
            Meet George
            <br />
            Kurian.
          </h1>
          <p>
            You may know him from YouTube. At Tes Farms, he’s the grower helping
            you find a plant for your own yard.
          </p>
        </div>
        <div className="about-photo george-about-photo">
          <Image
            src="/images/george-in-the-garden.jpg"
            alt="George in his garden, wearing a sun hat beneath a trellis of climbing vegetables"
            fill
            preload
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>
      <section className="page-width about-body">
        <div className="about-person">
          <h2>
            Growing things.
            <br />
            Sharing what
            <br />
            he learns.
          </h2>
          <a
            className="channel-proof"
            href={business.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            {grower.youtubeSubscribers} subscribers on YouTube{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div>
          <p>
            George films gardening lessons in Malayalam, from grafting a branch
            to growing fruit and vegetables. He shares the setbacks, too,
            including losing trees to a Florida freeze and figuring out what
            comes next.
          </p>
          <p>
            Bring your questions, or a plant name from a video. At the nursery,
            you can compare varieties and talk through what might work in your
            yard.
          </p>
        </div>
      </section>
      <GeorgeVideos />
      <VisitSection />
    </>
  );
}
