import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/site-content";

export function SiteFooter() {
  const { business } = siteContent;
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-top">
          <div>
            <Link href="/" className="wordmark">
              tes farms.
            </Link>
            <p>Indian roots. Florida grown.</p>
          </div>
          <nav aria-label="Social links">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={business.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tes Farms LLC</span>
          <span>Lake Nona · St. Cloud · Kissimmee · Orlando</span>
          <Link href="/contact">Visits by appointment</Link>
        </div>
      </div>
    </footer>
  );
}
