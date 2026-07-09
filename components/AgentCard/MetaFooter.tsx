import { PinIcon } from "@/components/icons";
import type { AgentConfig } from "@/lib/agent-config";

export function MetaFooter({ agent }: { agent: AgentConfig["agent"] }) {
  return (
    <footer className="mt-6 border-t border-line px-5 py-5">
      <p className="flex items-center gap-2 font-body text-sm text-slate">
        <span className="text-blue">
          <PinIcon size={16} />
        </span>
        {agent.address}
      </p>
      <p className="mt-1.5 font-body text-sm text-slate-2">{agent.hours}</p>
      <p className="mt-3 font-display text-sm font-medium text-blue-ink">
        {agent.tagline}
      </p>
    </footer>
  );
}
