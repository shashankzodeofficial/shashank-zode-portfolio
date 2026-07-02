import {
  Bot,
  Brain,
  Cloud,
  Cpu,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Layers,
  LayoutDashboard,
  Lock,
  MessageSquare,
  Network,
  ScrollText,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Warehouse,
  Workflow,
} from "lucide-react";

import type { NamedArchitectureDiagram } from "@/types/ai-labs";

export const architectureDiagrams: NamedArchitectureDiagram[] = [
  {
    slug: "llm-workflow",
    title: "LLM Workflow",
    icon: Brain,
    category: "Foundations",
    summary:
      "How a single request moves from a user prompt to a validated response in a typical LLM-powered feature.",
    diagram: {
      title: "Prompt to response",
      description: "The standard request path for a single LLM-powered interaction.",
      nodes: [
        { icon: MessageSquare, label: "User Prompt", detail: "Structured input" },
        { icon: Layers, label: "Prompt Template", detail: "Context + instructions" },
        { icon: Brain, label: "LLM Inference", detail: "Model generates response" },
        { icon: ShieldCheck, label: "Output Validation", detail: "Format & safety checks" },
        { icon: LayoutDashboard, label: "Response Delivered", detail: "Rendered to user" },
      ],
    },
  },
  {
    slug: "ai-chatbot-architecture",
    title: "AI Chatbot Architecture",
    icon: MessageSquare,
    category: "Applications",
    summary:
      "The components behind a conversational assistant that maintains context and calls tools when needed.",
    diagram: {
      title: "Conversational assistant components",
      description: "How a chatbot maintains conversation state and reaches for external tools.",
      nodes: [
        { icon: MessageSquare, label: "User Message", detail: "Conversation turn" },
        { icon: ScrollText, label: "Conversation Memory", detail: "Recent turn history" },
        { icon: Brain, label: "LLM Reasoning", detail: "Decides response or tool call" },
        { icon: Cpu, label: "Tool / Function Call", detail: "Optional external action" },
        { icon: LayoutDashboard, label: "Reply Rendered", detail: "Back to the user" },
      ],
    },
  },
  {
    slug: "rag-pipeline",
    title: "RAG Pipeline",
    icon: FileSearch,
    category: "Foundations",
    summary:
      "Retrieval-Augmented Generation: grounding an LLM's answer in retrieved, cited source documents rather than model memory alone.",
    diagram: {
      title: "From a question to a grounded, cited answer",
      description: "The retrieval-augmented generation pattern used across the Knowledge Management Agent and enterprise AI assistants.",
      nodes: [
        { icon: MessageSquare, label: "User Query", detail: "Natural-language question" },
        { icon: Database, label: "Vector Database", detail: "Indexed document embeddings" },
        { icon: FileSearch, label: "Retrieval", detail: "Top-matching document chunks" },
        { icon: Brain, label: "LLM Generation", detail: "Answers from retrieved context only" },
        { icon: ShieldCheck, label: "Cited Response", detail: "Links back to source documents" },
      ],
    },
  },
  {
    slug: "multi-agent-architecture",
    title: "Multi-Agent Architecture",
    icon: Network,
    category: "Applications",
    summary:
      "How multiple specialized agents coordinate under an orchestrator to solve a task no single agent could handle alone.",
    diagram: {
      title: "Coordinated agents under an orchestrator",
      description: "A supervising orchestrator routes sub-tasks to specialized agents and assembles the final result.",
      nodes: [
        { icon: Workflow, label: "Task Received", detail: "Complex, multi-step request" },
        { icon: GitBranch, label: "Orchestrator", detail: "Decomposes into sub-tasks" },
        { icon: Bot, label: "Specialized Agents", detail: "Inventory, forecasting, reporting" },
        { icon: Layers, label: "Result Aggregation", detail: "Combines agent outputs" },
        { icon: ShieldCheck, label: "Human Approval", detail: "Final check before action" },
      ],
    },
  },
  {
    slug: "ai-governance-framework",
    title: "AI Governance Framework",
    icon: Shield,
    category: "Governance",
    summary:
      "The guardrail layers that sit around any AI system before it's trusted with real operational decisions.",
    diagram: {
      title: "Guardrails around an AI system",
      description: "The governance layers every agent or LLM feature in this portfolio is designed against.",
      nodes: [
        { icon: Lock, label: "Data Access Boundaries", detail: "What the system can and can't see" },
        { icon: Gauge, label: "Confidence Thresholds", detail: "When to escalate vs. act" },
        { icon: Users, label: "Human Approval Points", detail: "Non-negotiable checkpoints" },
        { icon: ScrollText, label: "Audit Logging", detail: "Every action is traceable" },
        { icon: ShieldCheck, label: "Continuous Review", detail: "Governance revisited, not one-time" },
      ],
    },
  },
  {
    slug: "prompt-orchestration",
    title: "Prompt Orchestration",
    icon: Layers,
    category: "Foundations",
    summary:
      "How a complex task gets broken into a chain of smaller, more reliable prompts instead of one large, brittle instruction.",
    diagram: {
      title: "Chaining prompts for reliability",
      description: "Breaking a complex task into smaller, verifiable prompt steps.",
      nodes: [
        { icon: Workflow, label: "Task Definition", detail: "The overall goal" },
        { icon: GitBranch, label: "Step Decomposition", detail: "Smaller, focused prompts" },
        { icon: Brain, label: "Sequential Execution", detail: "Each step's output feeds the next" },
        { icon: ShieldCheck, label: "Validation Between Steps", detail: "Catch errors before they compound" },
        { icon: LayoutDashboard, label: "Final Output", detail: "Assembled and verified" },
      ],
    },
  },
  {
    slug: "enterprise-ai-stack",
    title: "Enterprise AI Stack",
    icon: Server,
    category: "Foundations",
    summary:
      "The layered technology stack — from data infrastructure to the executive-facing interface — behind a production-grade enterprise AI feature.",
    diagram: {
      title: "From raw data to an executive interface",
      description: "The layers that connect enterprise data to an AI-powered decision surface.",
      nodes: [
        { icon: Database, label: "Data Layer", detail: "Warehouses, operational systems" },
        { icon: Cloud, label: "Integration & APIs", detail: "Connects systems to the AI layer" },
        { icon: Brain, label: "Model Layer", detail: "LLMs, forecasting, optimization models" },
        { icon: Shield, label: "Governance Layer", detail: "Guardrails, logging, access control" },
        { icon: LayoutDashboard, label: "Experience Layer", detail: "Dashboards, chat, agent interfaces" },
      ],
    },
  },
  {
    slug: "supply-chain-ai-ecosystem",
    title: "Supply Chain AI Ecosystem",
    icon: Truck,
    category: "Domain",
    summary:
      "How the AI capabilities across planning, warehouse, transportation, and executive reporting connect into a single operating ecosystem.",
    diagram: {
      title: "A connected AI operating ecosystem",
      description: "How planning, warehouse, transportation, and executive AI capabilities connect end to end.",
      nodes: [
        { icon: Sparkles, label: "Planning AI", detail: "Forecasting & replenishment" },
        { icon: Warehouse, label: "Warehouse AI", detail: "Space & throughput optimization" },
        { icon: Truck, label: "Transportation AI", detail: "Tracking & network health" },
        { icon: Brain, label: "Executive AI Layer", detail: "Reporting & decision support" },
        { icon: ShieldCheck, label: "Governance Backbone", detail: "Guardrails across every layer" },
      ],
    },
  },
];

export function getArchitectureDiagramBySlug(slug: string): NamedArchitectureDiagram | undefined {
  return architectureDiagrams.find((diagram) => diagram.slug === slug);
}
