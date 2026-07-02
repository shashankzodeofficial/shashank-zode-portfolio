import {
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  Compass,
  Cpu,
  Database,
  Dumbbell,
  Eye,
  GraduationCap,
  Lightbulb,
  Network,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
  Workflow,
} from "lucide-react";

import type {
  AwardEntry,
  BusinessChallenge,
  CareerMilestone,
  CareerTimelineEntry,
  Certification,
  IconLabel,
  LeadershipPrinciple,
  LeadershipStage,
  PersonalInterest,
} from "@/types";

/**
 * All content below is original executive writing grounded in the CV —
 * never copied or paraphrased line-by-line. Company names used here
 * (Amazon, Reliance Retail, IBO) are already public and established
 * throughout the site; the Business Challenges section intentionally
 * omits them per the requested "problem, not employer" framing.
 */

export const myStory = [
  {
    heading: "Where it started",
    body: "I didn't plan a career in supply chain. I studied biotechnology, then marketing — and my first jobs were in optical retail and campaign coordination, nowhere near a warehouse. What pulled me in was simpler than a career plan: I liked watching a system work, and I liked it more when I could see exactly why it didn't.",
  },
  {
    heading: "Falling into operations",
    body: "That curiosity found its outlet on a transportation floor — leading a shift, then a team, inside one of the most demanding logistics operations in the country. The scale was unforgiving: tens of thousands of shipments a day, zero tolerance for drift. It was the first place I learned that operations isn't a support function. It's where strategy either survives contact with reality, or doesn't.",
  },
  {
    heading: "Growing into leadership",
    body: "Leading through Amazon's steepest ecommerce growth years — and later through Covid-era disruption — taught me the difference between managing a team and leading one. Managing keeps today's plan on track. Leading means staying calm enough, during a crisis, that your team can still think clearly. I got good at the second one by being tested on it repeatedly.",
  },
  {
    heading: "From operator to strategist",
    body: "Taking full P&L ownership of a five-state network was the shift from executing someone else's strategy to setting my own. Unifying five fragmented business lines onto one logistics backbone wasn't a technical problem — it was a trust problem, an incentives problem, and a sequencing problem, all at once. That's where I learned that the best transformations are usually about removing duplication no one owns.",
  },
  {
    heading: "Curiosity for AI",
    body: "The AI interest didn't come from following a trend. It came from being frustrated by the same thing every operator is frustrated by: knowing the business's true state a week later than I needed to. I started building the dashboards and planning tools I wished existed. That turned into architecting full AI-powered platforms — not because I set out to become a product builder, but because the operator in me couldn't wait for someone else to build them.",
  },
  {
    heading: "Why transformation excites me now",
    body: "Sixteen years in, the work that energizes me hasn't changed much: taking something complex, fragmented, or manual, and making it quiet — systems that just work, teams that don't need heroics, decisions made on real data instead of the loudest voice in the room. What has changed is the toolkit. AI now lets me build that kind of quiet excellence faster than ever, at a scale that used to take years.",
  },
];

export const leadershipStages: LeadershipStage[] = [
  {
    icon: Compass,
    stage: "01",
    title: "Learning Operations",
    description:
      "Started by owning execution, not strategy — sortation, dispatch, and shift performance in a high-volume transportation network where every process gap showed up immediately.",
    keyLearning: "Respect the floor before you try to redesign it.",
  },
  {
    icon: Users,
    stage: "02",
    title: "Managing Teams",
    description:
      "Moved from owning a task to owning a team's output — learning to lead through Amazon's peak-season volume spikes and the accountability that comes with other people's performance.",
    keyLearning:
      "Leadership starts the moment you're accountable for a result you don't personally control.",
  },
  {
    icon: Workflow,
    stage: "03",
    title: "Leading Transformations",
    description:
      "Took P&L ownership of a multi-state network and unified fragmented business lines onto shared infrastructure — my first experience designing, not just running, a network.",
    keyLearning: "The biggest wins are usually removing duplication no one owns.",
  },
  {
    icon: Building2,
    stage: "04",
    title: "Driving Enterprise Change",
    description:
      "Stood up greenfield supply chain infrastructure across five new cities ahead of business expansion — designing the network before the demand existed to justify it.",
    keyLearning:
      "When you're building infrastructure and the business at once, sequencing matters more than speed.",
  },
  {
    icon: Brain,
    stage: "05",
    title: "Building AI Solutions",
    description:
      "Stopped waiting for tools that didn't exist and started building them — AI-powered planning and control-tower platforms now used for daily operational decisions.",
    keyLearning:
      "The operator who understands the problem is often best positioned to build the tool.",
  },
  {
    icon: TrendingUp,
    stage: "06",
    title: "Creating Business Value",
    description:
      "Today, the work is connecting all of it — operations, technology, and leadership — into measurable business outcomes: revenue growth, cost discipline, and service levels that compound.",
    keyLearning: "Sustainable growth is a design choice, not a lucky outcome.",
  },
];

export const careerTimeline: CareerTimelineEntry[] = [
  {
    period: "2009 – 2013",
    role: "Marketing Coordinator → Store Manager",
    organization: "Lawrence & Mayo Opticals · Reliance Vision Express",
    stage: "Where It Started",
    challenge:
      "Understanding how customer-facing execution actually drives business results, not just strategy.",
    transformation:
      "Moved from supporting marketing campaigns to owning a full store's P&L — inventory, an 8-person team, and the customer experience.",
    lesson:
      "The fundamentals of business — inventory, people, customers — are learned on the floor, not in a boardroom.",
    impact:
      "Achieved 115% of annual sales targets through improved customer experience and upselling programmes.",
  },
  {
    period: "2013 – 2019",
    role: "Team Lead → Operations Manager I/II",
    organization: "Amazon Transportation Services",
    stage: "Learning the Machine",
    challenge:
      "Amazon's transportation network was scaling faster than the processes built to run it.",
    transformation:
      "Progressed from leading a single shift to owning transportation processes across multiple facilities, launching three semi-automated sort centres through India's steepest ecommerce growth years.",
    lesson:
      "Systems that work at 10x scale look nothing like systems that work at 1x — you rebuild, you don't just push harder.",
    impact:
      "Grew throughput capacity by 35%+ and improved sortation accuracy to 99.8% across 80,000+ daily shipments.",
  },
  {
    period: "2019 – 2021",
    role: "Operations Manager III",
    organization: "Amazon Transportation & Seller Services",
    stage: "Leading Through Crisis",
    challenge:
      "Running India's largest sort centre and largest return centre through Covid-era volatility, border disruptions, and peak-season volume spikes.",
    transformation:
      "Held operations together through lockdowns and regional disruptions while still driving cost and quality improvements — rerouting to safeguard shipments during active disruption.",
    lesson:
      "In a crisis, the leader's job isn't to have all the answers — it's to keep the team moving while the answers surface.",
    impact:
      "Delivered $4.4M and $1.07M in annual cost reductions across two operations; recognized with Amazon's Exceptional & Contingency Champion Award.",
  },
  {
    period: "2021 – 2024",
    role: "General Manager – Hub & Transportation",
    organization: "Reliance Retail",
    stage: "From Operator to Strategist",
    challenge:
      "Five separate business verticals were each running fragmented logistics — duplicating cost and slowing delivery.",
    transformation:
      "Took full P&L ownership of an 8-hub, 5-state network and unified five business verticals onto one owned logistics backbone, eliminating third-party dependency.",
    lesson:
      "The biggest transformation wins usually aren't a new initiative — they're removing the duplication no one owns.",
    impact:
      "$2.6M in transportation savings over two years; delivery SLAs improved to next-day across a 5-state network.",
  },
  {
    period: "2024 – Present",
    role: "Director – Supply Chain Management",
    organization: "IBO (EBO Mart Pvt. Ltd.)",
    stage: "Building From Zero",
    challenge:
      "A retail chain expanding into five new cities with no existing supply chain infrastructure to support it.",
    transformation:
      "Designed and stood up distribution infrastructure ahead of the business — warehousing, manpower, and last-mile — while building the AI platforms to plan and run it.",
    lesson:
      "When you're building infrastructure and the business at the same time, sequencing matters more than speed.",
    impact:
      "Scaled from 2 to 5 cities and 50 stores in 12 months; grew revenue 36% while cutting supply chain cost-to-revenue from 6% to 3.6%.",
  },
  {
    period: "Ongoing",
    role: "AI Product Builder",
    organization: "Independent Initiative",
    stage: "Building the Tools, Not Just Running Them",
    challenge:
      "Off-the-shelf tools couldn't keep pace with the planning and visibility problems the business actually had.",
    transformation:
      "Independently architected AI-powered platforms — NexusOne, RouteSphere, SCS-Fabric — giving leadership real-time visibility instead of end-of-week reporting.",
    lesson:
      "If the tool you need doesn't exist, the operator who understands the problem is often best positioned to build it.",
    impact:
      "Five AI/digital platforms now used for daily planning, transportation visibility, and warehouse decisions.",
  },
];

export const careerMilestones: CareerMilestone[] = [
  {
    icon: Rocket,
    title: "First Leadership Role",
    achievement:
      "Promoted to Team Lead, taking charge of transportation and last-mile operations for 80,000+ daily shipments.",
    significance:
      "The first experience owning outcomes for a team rather than just a task.",
    lesson:
      "Leadership starts the moment you're accountable for a result you don't personally control.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Transformation",
    achievement:
      "Led India's largest Return Centre (400,000 sq. ft.) through a 25% reduction in return processing time.",
    significance:
      "Proved that even the most operationally intense facilities can be redesigned around lean principles without sacrificing throughput.",
    lesson:
      "The biggest efficiency gains come from removing steps, not adding technology.",
  },
  {
    icon: Truck,
    title: "Large-Scale Operations",
    achievement:
      "Managed sort and transportation operations processing up to 600,000 packages a day.",
    significance:
      "Operating at this scale forced a shift from managing people to designing systems that manage themselves.",
    lesson:
      "At extreme scale, your process is your product — get it wrong and no amount of hustle fixes it.",
  },
  {
    icon: Network,
    title: "Supply Chain Strategy",
    achievement: "Took full P&L ownership of a 5-state hub and transportation network.",
    significance:
      "Moved from executing someone else's strategy to setting network design and investment priorities directly.",
    lesson: "Strategy without P&L accountability is just an opinion.",
  },
  {
    icon: Database,
    title: "Digital Transformation",
    achievement:
      "Deployed TMS, vendor scheduler, and automated invoicing systems that cut manual tracking effort by ~40%.",
    significance:
      "Digitization wasn't the goal — it was the way to make good decisions visible in real time instead of at month-end.",
    lesson:
      "Technology adoption succeeds when it removes a manual step, not when it adds a dashboard.",
  },
  {
    icon: Brain,
    title: "AI Product Development",
    achievement:
      "Independently architected NexusOne, an AI-powered end-to-end supply chain planning platform.",
    significance:
      "Marked the shift from being a consumer of tools to being the builder of them.",
    lesson:
      "The best AI products come from people who've lived the problem, not just studied it.",
  },
  {
    icon: TrendingUp,
    title: "Business Excellence",
    achievement:
      "Scaled a business from $31.8M to $43.4M in revenue while cutting supply chain cost-to-revenue from 6% to 3.6%.",
    significance:
      "Demonstrated that growth and cost discipline aren't a trade-off when the network is designed well.",
    lesson: "Sustainable growth is a design choice, not a lucky outcome.",
  },
];

export const businessChallenges: BusinessChallenge[] = [
  {
    icon: Warehouse,
    title: "Scaling Warehouse Operations",
    situation:
      "A fast-growing retail operation needed new distribution capacity in multiple cities within months, not years.",
    approach:
      "Designed a repeatable playbook for warehouse space planning, category allocation, and workforce onboarding, deployable city by city.",
    outcome:
      "Launched a 50-store distribution network across 5 new cities in under 12 months.",
    takeaway:
      "Speed at scale comes from repeatable playbooks, not heroic one-off efforts.",
  },
  {
    icon: Eye,
    title: "Improving Inventory Visibility",
    situation:
      "Leadership lacked real-time visibility into inventory and shipment status across a multi-city network, forcing reactive decisions.",
    approach:
      "Directed the deployment of a transportation management system and vendor scheduler dashboard to surface live operational data.",
    outcome:
      "Cut manual tracking effort by roughly 40% and gave leadership same-day visibility.",
    takeaway:
      "You can't make decisions faster than your data arrives — fix the data pipe first.",
  },
  {
    icon: Cpu,
    title: "Driving Digital Transformation",
    situation:
      "Core logistics processes — invoicing, tracking, vendor performance — were still running on manual, spreadsheet-based workflows.",
    approach:
      "Led the rollout of automated invoicing and digital tracking systems, replacing manual reconciliation across the network.",
    outcome:
      "Improved billing accuracy from 94% to 99.2% and cut administrative overhead by roughly 35%.",
    takeaway:
      "Digital transformation succeeds when it targets one broken workflow, not a company-wide slogan.",
  },
  {
    icon: BarChart3,
    title: "Building Analytics Platforms",
    situation:
      "Executive teams were making planning decisions on lagging, static reports rather than live operational data.",
    approach:
      "Independently designed and built AI-powered planning and control-tower platforms covering inventory, transportation, and warehouse capacity.",
    outcome:
      "Delivered five platforms now used for daily executive decision-making and network monitoring.",
    takeaway:
      "The person who owns the operational problem is often best-positioned to design the tool for it.",
  },
  {
    icon: Users,
    title: "Leading Cross-Functional Teams",
    situation:
      "Warehousing, transportation, and vendor management functions operated with separate priorities and little coordination.",
    approach:
      "Built a unified cross-functional team structure with shared KPIs and joint accountability across functions.",
    outcome:
      "Led teams of 90+ across functions, aligning previously siloed groups around one operating plan.",
    takeaway:
      "Cross-functional leadership is less about authority and more about designing shared incentives.",
  },
  {
    icon: Target,
    title: "Improving Customer Experience",
    situation:
      "Delivery SLAs varied wildly by region, undermining customer trust in a delivery-sensitive category.",
    approach:
      "Redesigned transportation routing and hub coverage to standardize service levels across regions.",
    outcome:
      "Improved delivery SLAs from 3–4 days to next-day in metro markets and 2-day in Tier 2/3 markets.",
    takeaway:
      "Customer experience in operations is a network design problem before it's a service problem.",
  },
  {
    icon: Workflow,
    title: "Business Process Redesign",
    situation:
      "Redundant warehousing nodes and an oversized fleet were quietly inflating logistics costs with no clear owner.",
    approach:
      "Rationalized the distribution network, eliminated redundant nodes, and right-sized the transport fleet.",
    outcome: "Delivered $0.42M+ in annualized savings with zero impact to delivery SLAs.",
    takeaway:
      "The costliest inefficiencies are usually structural, not operational — fix the structure first.",
  },
  {
    icon: Brain,
    title: "AI Implementation",
    situation:
      "Supply chain planning relied on manual, spreadsheet-driven forecasting with no scenario-modelling capability.",
    approach:
      "Architected an AI-powered space intelligence and planning engine capable of scenario modelling and capacity optimization.",
    outcome:
      "Gave planning teams the ability to model warehouse capacity and space scenarios before committing capital.",
    takeaway:
      "AI earns its place in operations when it replaces guesswork on a decision that had none.",
  },
];

/** Distinct from the homepage's Leadership Philosophy — a more personal operating philosophy. */
export const executivePhilosophy: LeadershipPrinciple[] = [
  {
    icon: Target,
    title: "Customer Obsession",
    description:
      "Every operational decision is tested against one question: does this make the customer's experience better, faster, or more reliable.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Discipline",
    description:
      "Consistency in the details — SLA tracking, root-cause reviews, vendor scorecards — is what separates a good quarter from a repeatable operating model.",
  },
  {
    icon: Workflow,
    title: "Continuous Improvement",
    description:
      "No process is ever finished. Lean Six Sigma thinking means every workflow is a draft waiting for its next iteration.",
  },
  {
    icon: BarChart3,
    title: "Data Before Assumptions",
    description:
      "Opinions are a starting point for a conversation, not a basis for a decision. I trust the dashboard over the anecdote.",
  },
  {
    icon: Brain,
    title: "AI With Business Purpose",
    description:
      "AI earns its place when it solves a real operational bottleneck — not because it's fashionable to adopt.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Networks don't scale — teams do. My job is building people who can run the network without me in the room.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership",
    description:
      "Accountability doesn't stop at your job description. If it's broken and you can see it, it's yours to fix.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "The best ideas rarely come from the boardroom. They come from staying curious enough to keep asking the floor.",
  },
];

export const careerHighlights: IconLabel[] = [
  { icon: Compass, label: "16+ Years Experience" },
  { icon: Network, label: "Supply Chain Leadership" },
  { icon: Brain, label: "AI Builder" },
  { icon: ShieldCheck, label: "Operations Excellence" },
  { icon: Workflow, label: "Transformation Programs" },
  { icon: Users, label: "Cross-Functional Leadership" },
  { icon: Target, label: "Business Strategy" },
  { icon: Cpu, label: "Digital Innovation" },
];

export const professionalValues: IconLabel[] = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Target, label: "Accountability" },
  { icon: Users, label: "Customer Focus" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: GraduationCap, label: "Learning" },
  { icon: Network, label: "Collaboration" },
  { icon: Workflow, label: "Execution" },
  { icon: TrendingUp, label: "Resilience" },
];

export const personalInterests: PersonalInterest[] = [
  {
    icon: Dumbbell,
    label: "Fitness",
    connection:
      "A 125kg-to-85kg transformation built through the same discipline I apply to running operations — consistency compounds, in the gym and in the business.",
  },
  {
    icon: Cpu,
    label: "Technology",
    connection:
      "Staying hands-on with the tools I ask my teams to adopt, rather than directing change from a distance.",
  },
  {
    icon: Brain,
    label: "AI",
    connection:
      "Building AI platforms myself rather than just sponsoring them — the fastest way to separate real capability from hype.",
  },
  {
    icon: GraduationCap,
    label: "Learning",
    connection:
      "Lean Six Sigma, product design, and prompt engineering — treating my own skill set as a portfolio that needs active management.",
  },
  {
    icon: Users,
    label: "Mentoring",
    connection:
      "Coaching managers into leaders — the highest-leverage work I do, because it outlasts any single initiative.",
  },
  {
    icon: BookOpen,
    label: "Knowledge Sharing",
    connection:
      "Writing playbooks and frameworks so the lessons from one network don't have to be relearned on the next.",
  },
  {
    icon: Compass,
    label: "Business Strategy",
    connection:
      "Thinking beyond the current role toward enterprise-level scope — connecting execution to strategy.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Lean Six Sigma Green Belt",
    issuer: "KPMG",
    year: "2020",
    status: "verified",
  },
  {
    name: "AI & Data Leadership",
    issuer: "To be announced",
    year: "In progress",
    status: "upcoming",
  },
  {
    name: "Executive Leadership Program",
    issuer: "To be announced",
    year: "Planned",
    status: "upcoming",
  },
];

export const awards: AwardEntry[] = [
  {
    title: "Exceptional & Contingency Champion Award",
    issuer: "Amazon",
    period: "2020",
    description:
      "Recognized for ensuring operational continuity during Covid lockdowns and AP–TG border disruptions, safeguarding 500K+ customer shipments through rapid rerouting.",
    status: "verified",
  },
  {
    title: "Cowboy Award",
    issuer: "Amazon",
    period: "2013 – 2015",
    description:
      "Awarded for operational excellence in ensuring service continuity during critical regulatory disruptions, safeguarding 160,000+ customer shipments.",
    status: "verified",
  },
  {
    title: "Additional Recognition",
    issuer: "To be updated",
    period: "Ongoing",
    description:
      "This section will be updated as new industry and business recognitions are received.",
    status: "upcoming",
  },
];

export const pullQuotes = [
  "Operational excellence begins with disciplined execution.",
  "Technology creates value only when it solves a real business problem.",
  "Leadership is measured by the capability you build in others.",
];
