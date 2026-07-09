"use client";

import { quickLinkIcons, ShareIcon } from "@/components/icons";
import type { AgentConfig } from "@/lib/agent-config";

export function QuickLinks({
  quickLinks,
  agentName,
  onShare,
}: {
  quickLinks: AgentConfig["quickLinks"];
  agentName: string;
  onShare: () => void;
}) {
  const tileClass =
    "flex min-h-[52px] items-center gap-2.5 rounded-control border border-line bg-card px-3.5 py-3 font-body text-sm font-medium text-ink transition-all duration-200 hover:border-line-2 hover:shadow-[0_6px_16px_rgba(15,63,99,0.08)] active:scale-[0.99]";

  return (
    <div className="mt-6 px-5">
      <div className="grid grid-cols-2 gap-3">
        {quickLinks.map((link) => {
          const Icon = quickLinkIcons[link.icon];
          return (
            <a key={link.label} href={link.href} className={tileClass}>
              <span className="text-blue">
                <Icon size={18} />
              </span>
              {link.label}
            </a>
          );
        })}
        <button
          type="button"
          onClick={onShare}
          aria-label={`Share ${agentName}'s card`}
          className={tileClass}
        >
          <span className="text-blue">
            <ShareIcon size={18} />
          </span>
          Share card
        </button>
      </div>
    </div>
  );
}
