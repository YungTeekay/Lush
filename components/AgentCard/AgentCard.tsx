"use client";

import { useCallback, useState } from "react";
import type { AgentConfig } from "@/lib/agent-config";
import { BrandBar } from "./BrandBar";
import { CoverAndAvatar } from "./CoverAndAvatar";
import { ContactActions } from "./ContactActions";
import { PrimaryCTAs } from "./PrimaryCTAs";
import { ValueStrip } from "./ValueStrip";
import { QuickLinks } from "./QuickLinks";
import { MetaFooter } from "./MetaFooter";
import { Toast } from "./Toast";

export function AgentCard({ config }: { config: AgentConfig }) {
  const { brand, agent, valueProp, quickLinks } = config;
  const [toast, setToast] = useState<string | null>(null);

  const handleShare = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const shareData = {
      title: `${agent.name} · ${brand.name} ${brand.suffix}`,
      text: `${agent.name} — ${agent.role}`,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user dismissed the share sheet — do nothing
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setToast("Link copied to clipboard");
    } catch {
      setToast("Couldn't copy link");
    }
  }, [agent.name, agent.role, brand.name, brand.suffix]);

  return (
    <main className="mx-auto flex min-h-screen max-w-card flex-col justify-center px-4 py-8">
      <article className="overflow-hidden rounded-card bg-card pb-1 shadow-card">
        <BrandBar brand={brand} />
        <CoverAndAvatar agent={agent} />

        {/* Identity block */}
        <div className="mt-3 px-5 text-center">
          <h1 className="font-display text-2xl font-semibold text-ink">
            {agent.name}
          </h1>
          <p className="mt-1 font-body text-sm font-semibold text-brand">
            {agent.role}
          </p>
          <p className="mx-auto mt-2 max-w-[34ch] font-body text-sm text-slate">
            {agent.blurb}
          </p>
        </div>

        <ContactActions agent={agent} />
        <PrimaryCTAs agent={agent} />
        <ValueStrip valueProp={valueProp} />
        <QuickLinks
          quickLinks={quickLinks}
          agentName={agent.name}
          onShare={handleShare}
        />
        <MetaFooter agent={agent} />
      </article>

      {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}
    </main>
  );
}
