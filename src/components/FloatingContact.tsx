import { Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`mailto:${profile.email}`}
        aria-label="Email Nexora Technologies"
        className="floating-action"
      >
        <Mail className="h-5 w-5" />
      </a>

      <a
        href={profile.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Nexora Technologies on WhatsApp"
        className="floating-action floating-action-primary"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
