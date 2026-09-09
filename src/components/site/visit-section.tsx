import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactLinks } from "./contact-links";

export function VisitSection() {
  return (
    <section className="visit-section" aria-labelledby="visit-title">
      <div className="page-width visit-inner">
        <div>
          <h2 id="visit-title">Visit the nursery.</h2>
          <p>Central Florida · By appointment</p>
        </div>
        <div className="visit-actions">
          <ContactLinks />
          <Link className="text-link" href="/contact">
            Plan your visit <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
