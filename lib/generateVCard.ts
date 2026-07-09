import type { AgentConfig } from "./agent-config";

// Pure function: config -> vCard 3.0 string.
// Kept framework-free so it's trivial to unit-test or reuse.
export function generateVCard(config: AgentConfig): string {
  const { agent, brand } = config;
  const [firstName, ...rest] = agent.name.split(" ");
  const lastName = rest.join(" ");
  const org = `${brand.name} ${brand.suffix}`;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${lastName};${firstName};;;`,
    `FN:${agent.name}`,
    `ORG:${org}`,
    `TITLE:${agent.role}`,
    `TEL;TYPE=CELL:${agent.phone}`,
    `EMAIL;TYPE=INTERNET:${agent.email}`,
    `ADR;TYPE=WORK:;;${agent.address};;;;`,
    `URL:${agent.facebookUrl}`,
    "END:VCARD",
  ];

  return lines.join("\r\n");
}
