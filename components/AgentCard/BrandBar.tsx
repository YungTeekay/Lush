/* eslint-disable @next/next/no-img-element */
import { ShieldCheckIcon } from "@/components/icons";
import type { AgentConfig } from "@/lib/agent-config";

export function BrandBar({ brand }: { brand: AgentConfig["brand"] }) {
  return (
    <div className="flex items-center justify-between gap-3 px-5 pt-5">
      <img
        src="/realnet-logo.png"
        alt={`${brand.name} ${brand.suffix}`}
        width={434}
        height={140}
        className="h-8 w-auto"
      />
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-pill bg-plum-tint px-3 py-1.5 font-body text-xs font-semibold text-plum">
        <ShieldCheckIcon size={14} />
        {brand.registration}
      </span>
    </div>
  );
}
