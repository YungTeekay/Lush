import { AgentCard } from "@/components/AgentCard/AgentCard";
import { agentConfig } from "@/lib/agent-config";

export default function Page() {
  return <AgentCard config={agentConfig} />;
}
