import Image from "next/image";
import { Plus } from "lucide-react";
import { ContactLinks } from "@/components/site/contact-links";
import { siteContent } from "@/data/site-content";

export const metadata = {
  title: "Plan a Visit | Tes Farms",
  description:
    "Call or WhatsApp George at (407) 718-6535. Visit Tes Farms in Central Florida by appointment for Indian plants and tropical fruit trees.",
};

export default function ContactPage() {
  const { business, faq } = siteContent;
  return (
    <>
      <section className="contact-hero">
        <div className="page-width contact-hero-inner">
          <div className="contact-title">
            <p>Plan your visit</p>
            <h1>
              Let’s talk
              <br />
              plants.
            </h1>
            <p>Ask George about plants, prices, or a time to visit.</p>
          </div>
          <div className="contact-details">
            <div className="contact-person">
              <Image
                src="/images/george-profile.jpg"
                alt="George’s Instagram profile portrait"
                width={64}
                height={64}
              />
              <h2>George Kurian</h2>
            </div>
            <ContactLinks />
            <dl>
              <div>
                <dt>When</dt>
                <dd>By appointment. Call or WhatsApp first.</dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd>
                  Central Florida. George will send directions when you book.
                </dd>
              </div>
              <div>
                <dt>Serving</dt>
                <dd>{business.address.serving}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section className="faq-section page-width" aria-labelledby="faq-title">
        <h2 id="faq-title">Good to know.</h2>
        <div>
          {faq.map((item) => (
            <details key={item.q}>
              <summary>
                {item.q}
                <Plus size={22} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
