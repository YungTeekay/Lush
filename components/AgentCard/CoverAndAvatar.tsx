/* eslint-disable @next/next/no-img-element */
import type { AgentConfig } from "@/lib/agent-config";

export function CoverAndAvatar({ agent }: { agent: AgentConfig["agent"] }) {
  return (
    <div className="relative mt-4">
      {/* Cover — real property photography. Swap /cover.jpg for the agent's
          own listing or office photo. */}
      <div className="mx-5 overflow-hidden rounded-card" style={{ aspectRatio: "16 / 8" }}>
        <img
          src="/cover.jpg"
          alt="A welcoming family home with a warm red roof and garden"
          width={972}
          height={486}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Avatar overlapping the cover's bottom edge */}
      <div className="-mt-11 flex justify-center">
        <img
          src={agent.photo}
          alt={`${agent.name}, ${agent.role}`}
          width={96}
          height={96}
          className="h-24 w-24 rounded-pill object-cover shadow-card ring-4 ring-card"
        />
      </div>
    </div>
  );
}
