import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { siteContent } from "@/data/site-content";

export function GeorgeVideos() {
  const { business, grower } = siteContent;
  return (
    <section
      className="george-videos page-width"
      aria-labelledby="videos-title"
    >
      <div className="section-intro">
        <h2 id="videos-title">Learn with George.</h2>
        <p>Watch on YouTube · In Malayalam</p>
      </div>
      <div className="video-pair">
        {grower.videos.map((video) => (
          <a
            className="video-feature"
            key={video.href}
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${video.title} on YouTube`}
          >
            <div className="video-photo">
              <Image
                src={video.image}
                alt={video.alt}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <span className="video-play">
                <Play size={22} fill="currentColor" aria-hidden="true" />
              </span>
              <span className="video-duration">{video.duration}</span>
            </div>
            <div className="video-title">
              <h3>{video.title}</h3>
              <ArrowUpRight size={24} aria-hidden="true" />
            </div>
          </a>
        ))}
      </div>
      <div className="channel-links">
        <a
          className="text-link"
          href={business.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          More on YouTube <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <a
          className="text-link"
          href={business.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow on Instagram <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
