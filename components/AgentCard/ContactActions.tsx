import {
  WhatsappIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
  FacebookIcon,
} from "@/components/icons";
import type { AgentConfig } from "@/lib/agent-config";

function ActionCircle({
  href,
  label,
  primary = false,
  children,
}: {
  href: string;
  label: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex flex-1 flex-col items-center gap-1.5"
    >
      <span
        className={[
          "flex h-12 w-12 items-center justify-center rounded-pill transition-transform duration-200 active:scale-95",
          primary
            ? "bg-whatsapp text-white shadow-card"
            : "border border-line-2 bg-card text-brand",
        ].join(" ")}
      >
        {children}
      </span>
      <span className="font-body text-xs font-medium text-slate">{label}</span>
    </a>
  );
}

export function ContactActions({ agent }: { agent: AgentConfig["agent"] }) {
  const waHref = `https://wa.me/${agent.whatsapp}?text=${encodeURIComponent(
    agent.whatsappPrefillMessage
  )}`;

  return (
    <nav
      aria-label="Contact options"
      className="mt-6 flex items-start justify-between gap-1 px-5"
    >
      <ActionCircle href={waHref} label="WhatsApp" primary>
        <WhatsappIcon size={22} />
      </ActionCircle>
      <ActionCircle href={`tel:${agent.phone}`} label="Call">
        <PhoneIcon size={20} />
      </ActionCircle>
      <ActionCircle href={`mailto:${agent.email}`} label="Email">
        <MailIcon size={20} />
      </ActionCircle>
      <ActionCircle href={agent.mapsUrl} label="Directions">
        <PinIcon size={20} />
      </ActionCircle>
      <ActionCircle href={agent.facebookUrl} label="Facebook">
        <FacebookIcon size={20} />
      </ActionCircle>
    </nav>
  );
}
