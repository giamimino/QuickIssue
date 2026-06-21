import {
  Accessibility,
  AlignLeft,
  Bookmark,
  Clock,
  Computer,
  Globe,
  LayoutTemplate,
  RefreshCw,
  Share2,
  Users,
  Zap,
} from "lucide-react";

export const benefits = [
  {
    icon: Clock,
    title: "Save hours every sprint",
    description:
      "Stop spending 10 minutes writing the same issue structure. Good templates take seconds.",
    metric: "70%",
    metricLabel: "faster issue creation",
    color: "#6366f1",
  },
  {
    icon: AlignLeft,
    title: "Standardize reporting",
    description:
      "Every bug report, feature request, and security issue follows the same clear structure.",
    metric: "3x",
    metricLabel: "better signal-to-noise",
    color: "#3FB950",
  },
  {
    icon: Users,
    title: "Improve collaboration",
    description:
      "Maintainers get exactly the info they need. Contributors know exactly what to provide.",
    metric: "89%",
    metricLabel: "first-reply resolution",
    color: "#58A6FF",
  },
  {
    icon: RefreshCw,
    title: "Reuse what works",
    description:
      "A template that worked on one project works on all your projects. Build once, use everywhere.",
    metric: "50k+",
    metricLabel: "templates shared",
    color: "#F0883E",
  },
] as const;

export const features = [
  {
    icon: LayoutTemplate,
    title: "Unlimited Templates",
    description:
      "Build a personal library of issue templates tailored for every project — bug reports, feature requests, security disclosures, and more.",
    color: "#6366f1",
    bg: "rgba(99, 102, 241, 0.08)",
    border: "rgba(99, 102, 241, 0.2)",
  },
  {
    icon: Zap,
    title: "Generate Issues Fast",
    description:
      "Prefill GitHub issues in one click. Stop retyping the same structure every time and spend your energy on what matters.",
    color: "#F0883E",
    bg: "rgba(240, 136, 62, 0.08)",
    border: "rgba(240, 136, 62, 0.2)",
  },
  {
    icon: Globe,
    title: "Public Marketplace",
    description:
      "Discover and reuse community-curated templates. Share your best templates publicly and help thousands of developers.",
    color: "#3FB950",
    bg: "rgba(63, 185, 80, 0.08)",
    border: "rgba(63, 185, 80, 0.2)",
  },
  {
    icon: Bookmark,
    title: "Save & Favorite",
    description:
      "Bookmark templates from the community. Build a curated collection across all your repositories and teams.",
    color: "#58A6FF",
    bg: "rgba(88, 166, 255, 0.08)",
    border: "rgba(88, 166, 255, 0.2)",
  },
  {
    icon: Accessibility,
    title: "Accessibility First",
    description:
      "Every interface component is WCAG 2.1 AA compliant, keyboard navigable, and screen-reader friendly.",
    color: "#D2A8FF",
    bg: "rgba(210, 168, 255, 0.08)",
    border: "rgba(210, 168, 255, 0.2)",
  },
  {
    icon: Computer,
    title: "GitHub Native",
    description:
      "Authenticate with GitHub, link repositories, and push issue templates directly into your repo's .github directory.",
    color: "#E6EDF3",
    bg: "rgba(230, 237, 243, 0.05)",
    border: "rgba(230, 237, 243, 0.1)",
  },
] as const;

export const steps = [
  {
    number: "01",
    icon: Computer,
    title: "Connect GitHub",
    description:
      "Sign in with your GitHub account. QuickIssue connects to your repos securely via OAuth — no tokens to manage.",
    color: "#E6EDF3",
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "Create or Choose a Template",
    description:
      "Build your own from scratch using our visual editor, or browse the marketplace to find a community template.",
    color: "#6366f1",
  },
  {
    number: "03",
    icon: Zap,
    title: "Generate Issues Instantly",
    description:
      "Select a template, fill in the fields, and generate a perfectly structured GitHub issue in one click.",
    color: "#F0883E",
  },
  {
    number: "04",
    icon: Share2,
    title: "Share With the Community",
    description:
      "Make your best templates public and help thousands of developers standardize their workflows.",
    color: "#3FB950",
  },
] as const;
