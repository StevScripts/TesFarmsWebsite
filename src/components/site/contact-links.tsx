import { MessageCircle, Phone } from "lucide-react";
import { siteContent } from "@/data/site-content";

export function whatsappLink(
  message = "Hi George, I'd like to visit Tes Farms. What plants are available?",
) {
  return `https://wa.me/${siteContent.business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function ContactLinks({ message }: { message?: string }) {
  return (
    <div className="contact-links">
      <a
        className="button button-primary"
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} aria-hidden="true" /> WhatsApp George
      </a>
      <a className="phone-link" href={`tel:+${siteContent.business.whatsapp}`}>
        <Phone size={18} aria-hidden="true" /> {siteContent.business.phone}
      </a>
    </div>
  );
}
