import { BrandMark, ShieldCheckIcon } from "@/components/icons";
import type { AgentConfig } from "@/lib/agent-config";

export function BrandBar({ brand }: { brand: AgentConfig["brand"] }) {
  return (
    <div className="flex items-center justify-between px-5 pt-5">
      <div className="flex items-center gap-2">
        <span className="text-blue-ink">
          <BrandMark />
        </span>
        <span className="font-display text-lg leading-none text-blue-ink">
          <span className="font-bold">{brand.name}.</span>{" "}
          <span className="font-medium text-slate">{brand.suffix}</span>
        </span>
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-pill bg-amber-tint px-3 py-1.5 font-body text-xs font-semibold text-amber-dark">
        <ShieldCheckIcon size={14} />
        {brand.registration}
      </span>
    </div>
  );
}
