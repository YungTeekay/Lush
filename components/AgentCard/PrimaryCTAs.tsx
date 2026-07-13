"use client";

import { SaveContactIcon, WhatsappIcon } from "@/components/icons";
import { generateVCard } from "@/lib/generateVCard";
import { agentConfig, type AgentConfig } from "@/lib/agent-config";

export function PrimaryCTAs({ agent }: { agent: AgentConfig["agent"] }) {
  const waHref = `https://wa.me/${agent.whatsapp}?text=${encodeURIComponent(
    agent.whatsappPrefillMessage
  )}`;

  function saveContact() {
    const vcard = generateVCard(agentConfig);
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${agent.name.replace(/\s+/g, "-")}.vcf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mt-6 flex flex-col gap-3 px-5">
      <button
        type="button"
        onClick={saveContact}
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-control border border-brand bg-card font-display font-semibold text-brand transition-all duration-200 hover:bg-brand hover:text-white hover:shadow-[0_10px_22px_rgba(213,1,48,0.3)] active:scale-[0.99]"
      >
        <SaveContactIcon size={20} />
        Save my contact
      </button>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-control bg-whatsapp font-display font-semibold text-white transition-all duration-200 hover:bg-whatsapp-dark hover:shadow-[0_10px_22px_rgba(14,124,67,0.32)] active:scale-[0.99]"
      >
        <WhatsappIcon size={20} />
        Message me on WhatsApp
      </a>
    </div>
  );
}
