import { SparkIcon } from "@/components/icons";
import type { AgentConfig } from "@/lib/agent-config";

export function ValueStrip({ valueProp }: { valueProp: AgentConfig["valueProp"] }) {
  return (
    <div className="mt-6 px-5">
      <div className="flex gap-3 rounded-control bg-amber-tint p-4">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-pill bg-amber text-white">
          <SparkIcon size={18} />
        </span>
        <div>
          <p className="font-display font-semibold text-blue-ink">
            {valueProp.heading}
          </p>
          <p className="mt-0.5 font-body text-sm text-slate">{valueProp.body}</p>
        </div>
      </div>
    </div>
  );
}
