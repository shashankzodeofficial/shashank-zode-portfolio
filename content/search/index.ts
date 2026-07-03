import {
  Award,
  Bot,
  Brain,
  Briefcase,
  Compass,
  FileSearch,
  FileText,
  FlaskConical,
  Gauge,
  Home,
  LayoutDashboard,
  Layers,
  Library,
  MapPinned,
  MessageSquareCode,
  Mic,
  Newspaper,
  Quote,
  Rocket,
  User,
  Users,
  Wand2,
} from "lucide-react";

import { aiAgents } from "@/content/ai-labs/agents";
import { architectureDiagrams } from "@/content/ai-labs/architecture-diagrams";
import { automationProjects } from "@/content/ai-labs/automation";
import { aiExperiments } from "@/content/ai-labs/experiments";
import { llmApplications } from "@/content/ai-labs/llm-applications";
import { prompts } from "@/content/ai-labs/prompts";
import { aiRoadmap } from "@/content/ai-labs/roadmap";
import { aiUseCases } from "@/content/knowledge/ai-use-cases";
import { articles } from "@/content/knowledge/articles";
import { frameworks } from "@/content/knowledge/frameworks";
import { caseStudies } from "@/content/projects";
import { professionalCertifications } from "@/content/recruiters/certifications";
import { executivePrinciples } from "@/content/thought-leadership/principles";
import { publications } from "@/content/thought-leadership/publications";
import { speakingTopics } from "@/content/thought-leadership/speaking-topics";
import { futureTrends } from "@/content/thought-leadership/trends";
import type { SearchRecord } from "@/types/search";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const staticPages: SearchRecord[] = [
  { id: "page-home", title: "Home", description: "Supply chain executive, AI product builder, and digital transformation leader.", url: "/", type: "Page", section: "Home", tags: ["overview"], icon: Home },
  { id: "page-about", title: "About", description: "Career timeline, leadership evolution, milestones, and professional values.", url: "/about", section: "About", type: "Page", tags: ["career", "timeline", "biography"], icon: User },
  { id: "page-projects", title: "Projects", description: "Five AI-powered supply chain platforms — the business problem, architecture, and impact behind each.", url: "/projects", section: "Projects", type: "Page", tags: ["portfolio", "case studies"], icon: Rocket },
  { id: "page-ai-labs", title: "AI Innovation Center", description: "Live AI platforms, agent architectures, a prompt library, and the frameworks behind applied AI.", url: "/ai-labs", section: "AI Labs", type: "Page", tags: ["ai", "innovation"], icon: Brain },
  { id: "page-ai-labs-projects", title: "AI Projects Portfolio", description: "Five live AI platforms with working demos, architecture, and business impact.", url: "/ai-labs/projects", section: "AI Labs", type: "Page", tags: ["ai", "portfolio"], icon: Rocket },
  { id: "page-ai-labs-experiments", title: "AI Experiments", description: "Practical AI experiments — the business problem, approach, and lessons learned.", url: "/ai-labs/experiments", section: "AI Labs", type: "Page", tags: ["ai", "experiments"], icon: FlaskConical },
  { id: "page-ai-labs-prompts", title: "Prompt Engineering Library", description: "Copy-ready prompts across 14 business categories.", url: "/ai-labs/prompts", section: "AI Labs", type: "Page", tags: ["ai", "prompts"], icon: Wand2 },
  { id: "page-ai-labs-agents", title: "AI Agents", description: "Reference architectures for autonomous AI agent workflows.", url: "/ai-labs/agents", section: "AI Labs", type: "Page", tags: ["ai", "agents"], icon: Bot },
  { id: "page-ai-labs-automation", title: "Automation Projects", description: "Real business process automation with measurable KPIs.", url: "/ai-labs/automation", section: "AI Labs", type: "Page", tags: ["automation"], icon: Gauge },
  { id: "page-ai-labs-rag", title: "Retrieval-Augmented Generation", description: "How grounded, cited enterprise AI assistants work.", url: "/ai-labs/rag", section: "AI Labs", type: "Page", tags: ["ai", "rag"], icon: FileSearch },
  { id: "page-ai-labs-architecture", title: "AI Architecture Library", description: "Diagrams for LLM, agent, and enterprise AI systems.", url: "/ai-labs/architecture", section: "AI Labs", type: "Page", tags: ["ai", "architecture"], icon: LayoutDashboard },
  { id: "page-ai-labs-llm", title: "LLM Applications", description: "Where large language models create real business value.", url: "/ai-labs/llm-applications", section: "AI Labs", type: "Page", tags: ["ai", "llm"], icon: MessageSquareCode },
  { id: "page-ai-labs-roadmap", title: "AI Roadmap", description: "From AI-assisted operations to executive copilots.", url: "/ai-labs/roadmap", section: "AI Labs", type: "Page", tags: ["ai", "roadmap"], icon: MapPinned },
  { id: "page-ai-labs-demos", title: "Interactive AI Demos", description: "A prompt playground with simulated responses.", url: "/ai-labs/demos", section: "AI Labs", type: "Page", tags: ["ai", "demo"], icon: Wand2 },
  { id: "page-knowledge", title: "Knowledge Hub", description: "Consulting-grade articles on supply chain, operations, AI, and leadership.", url: "/knowledge", section: "Knowledge Hub", type: "Page", tags: ["articles", "insights"], icon: Library },
  { id: "page-knowledge-frameworks", title: "Framework Library", description: "Original supply chain, operations, and AI adoption frameworks.", url: "/knowledge/frameworks", section: "Knowledge Hub", type: "Page", tags: ["frameworks"], icon: Layers },
  { id: "page-knowledge-ai-use-cases", title: "AI Use Case Repository", description: "Business problem, solution, KPIs, and prompt templates for real AI use cases.", url: "/knowledge/ai-use-cases", section: "Knowledge Hub", type: "Page", tags: ["ai", "use cases"], icon: Bot },
  { id: "page-thought-leadership", title: "Thought Leadership", description: "Executive perspectives on supply chain strategy, AI leadership, and transformation.", url: "/thought-leadership", section: "Thought Leadership", type: "Page", tags: ["leadership"], icon: Compass },
  { id: "page-tl-insights", title: "Leadership Insights Library", description: "Executive-leadership, supply chain strategy, and business transformation articles.", url: "/thought-leadership/insights", section: "Thought Leadership", type: "Page", tags: ["leadership", "articles"], icon: Library },
  { id: "page-tl-principles", title: "Executive Leadership Principles", description: "Eleven principles behind every executive decision.", url: "/thought-leadership/principles", section: "Thought Leadership", type: "Page", tags: ["leadership", "principles"], icon: Compass },
  { id: "page-tl-speaking", title: "Speaking & Conferences", description: "Speaking topics, formats, speaker bio, and past conference participation.", url: "/thought-leadership/speaking", section: "Thought Leadership", type: "Page", tags: ["speaking"], icon: Mic },
  { id: "page-tl-publications", title: "Publications Library", description: "Whitepapers, executive briefs, and business frameworks.", url: "/thought-leadership/publications", section: "Thought Leadership", type: "Page", tags: ["publications"], icon: FileText },
  { id: "page-tl-interviews", title: "Interviews", description: "Executive interviews, podcast appearances, and media conversations.", url: "/thought-leadership/interviews", section: "Thought Leadership", type: "Page", tags: ["interviews"], icon: Users },
  { id: "page-tl-quotes", title: "Executive Quotes Library", description: "Original quotes on leadership, AI, and execution.", url: "/thought-leadership/quotes", section: "Thought Leadership", type: "Page", tags: ["quotes"], icon: Quote },
  { id: "page-tl-trends", title: "Future Trends Center", description: "Ten forward-looking trends in AI and supply chain.", url: "/thought-leadership/trends", section: "Thought Leadership", type: "Page", tags: ["trends"], icon: MapPinned },
  { id: "page-tl-media", title: "Media Center", description: "Press, podcasts, conference features, and the media kit.", url: "/thought-leadership/media", section: "Thought Leadership", type: "Page", tags: ["media"], icon: Newspaper },
  { id: "page-fitness", title: "Fitness Journey", description: "A 125kg to 85kg transformation and the leadership lessons behind it.", url: "/fitness", section: "Fitness", type: "Page", tags: ["fitness", "discipline"], icon: Gauge },
  { id: "page-recruiters", title: "For Recruiters", description: "Resume, certifications, skills matrix, portfolio toolkit, and direct contact.", url: "/recruiters", section: "For Recruiters", type: "Page", tags: ["resume", "contact", "hiring"], icon: Briefcase },
];

const articleRecords: SearchRecord[] = articles.map((article) => ({
  id: `article-${article.slug}`,
  title: article.title,
  description: article.subtitle,
  url: `/knowledge/${article.slug}`,
  type: "Article",
  section: "Knowledge Hub",
  tags: [...article.category, ...article.tags],
  icon: article.icon,
}));

const frameworkRecords: SearchRecord[] = frameworks.map((framework) => ({
  id: `framework-${framework.slug}`,
  title: framework.title,
  description: framework.description,
  url: "/knowledge/frameworks",
  type: "Framework",
  section: "Knowledge Hub",
  tags: [framework.category],
  icon: framework.icon,
}));

const aiUseCaseRecords: SearchRecord[] = aiUseCases.map((useCase) => ({
  id: `ai-use-case-${useCase.slug}`,
  title: useCase.title,
  description: useCase.businessProblem,
  url: "/knowledge/ai-use-cases",
  type: "AI Use Case",
  section: "Knowledge Hub",
  tags: useCase.tags,
  icon: useCase.icon,
}));

const caseStudyRecords: SearchRecord[] = caseStudies.map((study) => ({
  id: `case-study-${study.slug}`,
  title: study.title,
  description: study.tagline,
  url: `/projects/${study.slug}`,
  type: "Case Study",
  section: "Projects",
  tags: [study.category, study.businessDomain, ...study.techStack],
  icon: study.icon,
}));

const experimentRecords: SearchRecord[] = aiExperiments.map((experiment) => ({
  id: `experiment-${experiment.slug}`,
  title: experiment.title,
  description: experiment.businessProblem,
  url: "/ai-labs/experiments",
  type: "AI Experiment",
  section: "AI Labs",
  tags: [experiment.category, ...experiment.tags],
  icon: experiment.icon,
}));

const promptRecords: SearchRecord[] = prompts.map((prompt) => ({
  id: `prompt-${prompt.slug}`,
  title: prompt.title,
  description: prompt.businessObjective,
  url: "/ai-labs/prompts",
  type: "Prompt",
  section: "AI Labs",
  tags: [prompt.category, ...prompt.tags],
  icon: Wand2,
}));

const agentRecords: SearchRecord[] = aiAgents.map((agent) => ({
  id: `agent-${agent.slug}`,
  title: agent.title,
  description: agent.businessPurpose,
  url: "/ai-labs/agents",
  type: "AI Agent",
  section: "AI Labs",
  tags: agent.tags,
  icon: agent.icon,
}));

const automationRecords: SearchRecord[] = automationProjects.map((project) => ({
  id: `automation-${project.slug}`,
  title: project.title,
  description: project.businessChallenge,
  url: "/ai-labs/automation",
  type: "Automation Project",
  section: "AI Labs",
  tags: project.tags,
  icon: project.icon,
}));

const llmApplicationRecords: SearchRecord[] = llmApplications.map((application) => ({
  id: `llm-application-${application.slug}`,
  title: application.title,
  description: application.businessProblem,
  url: "/ai-labs/llm-applications",
  type: "LLM Application",
  section: "AI Labs",
  tags: application.tags,
  icon: application.icon,
}));

const architectureRecords: SearchRecord[] = architectureDiagrams.map((diagram) => ({
  id: `architecture-${diagram.slug}`,
  title: diagram.title,
  description: diagram.summary,
  url: "/ai-labs/architecture",
  type: "Architecture Diagram",
  section: "AI Labs",
  tags: [diagram.category],
  icon: diagram.icon,
}));

const roadmapRecords: SearchRecord[] = aiRoadmap.map((phase) => ({
  id: `roadmap-${slugify(phase.title)}`,
  title: phase.title,
  description: phase.description,
  url: "/ai-labs/roadmap",
  type: "Roadmap Phase",
  section: "AI Labs",
  tags: [phase.period],
  icon: phase.icon,
}));

const principleRecords: SearchRecord[] = executivePrinciples.map((principle) => ({
  id: `principle-${principle.slug}`,
  title: principle.title,
  description: principle.description,
  url: "/thought-leadership/principles",
  type: "Leadership Principle",
  section: "Thought Leadership",
  tags: ["leadership principle"],
  icon: principle.icon,
}));

const speakingTopicRecords: SearchRecord[] = speakingTopics.map((topic) => ({
  id: `speaking-topic-${slugify(topic.title)}`,
  title: topic.title,
  description: topic.description,
  url: "/thought-leadership/speaking",
  type: "Speaking Topic",
  section: "Thought Leadership",
  tags: ["speaking"],
  icon: topic.icon,
}));

const publicationRecords: SearchRecord[] = publications.map((publication) => ({
  id: `publication-${publication.slug}`,
  title: publication.title,
  description: publication.description,
  url: "/thought-leadership/publications",
  type: "Publication",
  section: "Thought Leadership",
  tags: [publication.category],
  icon: publication.icon,
}));

const trendRecords: SearchRecord[] = futureTrends.map((trend) => ({
  id: `trend-${trend.slug}`,
  title: trend.title,
  description: trend.executiveSummary,
  url: "/thought-leadership/trends",
  type: "Future Trend",
  section: "Thought Leadership",
  tags: [trend.category],
  icon: trend.icon,
}));

const certificationRecords: SearchRecord[] = professionalCertifications.map((cert) => ({
  id: `certification-${cert.slug}`,
  title: cert.title,
  description: cert.narrative,
  url: "/recruiters#certifications",
  type: "Certification",
  section: "For Recruiters",
  tags: cert.methodologies ?? [cert.issuer],
  icon: Award,
}));

export const searchIndex: SearchRecord[] = [
  ...staticPages,
  ...articleRecords,
  ...frameworkRecords,
  ...aiUseCaseRecords,
  ...caseStudyRecords,
  ...experimentRecords,
  ...promptRecords,
  ...agentRecords,
  ...automationRecords,
  ...llmApplicationRecords,
  ...architectureRecords,
  ...roadmapRecords,
  ...principleRecords,
  ...speakingTopicRecords,
  ...publicationRecords,
  ...trendRecords,
  ...certificationRecords,
];

export function getAllSearchTags(): string[] {
  return Array.from(new Set(searchIndex.flatMap((record) => record.tags))).sort();
}

export function getRecordsByUrl(url: string): SearchRecord[] {
  return searchIndex.filter((record) => record.url === url);
}

/**
 * Content-based "recommended for you" — finds other records sharing the
 * most tags with whatever's indexed at the current path. Falls back to an
 * empty list rather than guessing when the current page has no tag overlap.
 */
export function getRecommendationsForPath(pathname: string, limit = 4): SearchRecord[] {
  const current = getRecordsByUrl(pathname);
  const currentTags = new Set(current.flatMap((record) => record.tags.map((t) => t.toLowerCase())));
  if (currentTags.size === 0) return [];

  const scored = searchIndex
    .filter((record) => record.url !== pathname)
    .map((record) => {
      const overlap = record.tags.filter((tag) => currentTags.has(tag.toLowerCase())).length;
      return { record, overlap };
    })
    .filter((entry) => entry.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap);

  return scored.slice(0, limit).map((entry) => entry.record);
}
