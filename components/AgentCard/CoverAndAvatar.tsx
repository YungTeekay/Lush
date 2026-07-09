/* eslint-disable @next/next/no-img-element */
import type { AgentConfig } from "@/lib/agent-config";

export function CoverAndAvatar({ agent }: { agent: AgentConfig["agent"] }) {
  return (
    <div className="relative mt-4">
      {/* Cover — SVG suburban skyline placeholder. Swap for real office/listing
          photography by replacing this block with an <img>. */}
      <div className="mx-5 overflow-hidden rounded-card" style={{ aspectRatio: "16 / 8" }}>
        <svg
          viewBox="0 0 400 200"
          preserveAspectRatio="xMidYMax slice"
          className="h-full w-full"
          role="img"
          aria-label="Illustration of suburban homes at sunset"
        >
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FDF1DA" />
              <stop offset="55%" stopColor="#FBE4C0" />
              <stop offset="100%" stopColor="#F4C77E" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sky)" />
          <circle cx="312" cy="66" r="26" fill="#F4A825" opacity="0.9" />
          {/* rear houses */}
          <g fill="#CFE0E9">
            <path d="M20 150 60 118 100 150 100 200 20 200z" />
            <path d="M300 152 340 122 380 152 380 200 300 200z" />
          </g>
          {/* front houses */}
          <g fill="#1B6FB0">
            <path d="M96 168 150 128 204 168 204 200 96 200z" />
          </g>
          <g fill="#12527F">
            <path d="M196 172 244 138 292 172 292 200 196 200z" />
          </g>
          <rect x="132" y="172" width="18" height="28" fill="#FDF1DA" />
          <rect x="168" y="170" width="14" height="14" fill="#FDF1DA" />
          <rect x="228" y="176" width="14" height="24" fill="#FDF1DA" />
          <rect x="0" y="196" width="400" height="4" fill="#0F3F63" opacity="0.25" />
        </svg>
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
