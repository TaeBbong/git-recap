export type StoryType =
  | "numbers"
  | "activity"
  | "projects"
  | "tech"
  | "impact"
  | "collab"
  | "quality"
  | "stars"
  | "developerType";

export interface StoryBase {
  type: StoryType;
  title: string;
  subtitle?: string;
}

export interface NumbersStory extends StoryBase {
  type: "numbers";
  totals: {
    commits: number;
    contributions: number;
    prsOpened: number;
    prsMerged: number;
    issuesOpened: number;
    issuesClosed: number;
    reviews: number;
    starsGained: number;
  };
}

export interface ActivityStory extends StoryBase {
  type: "activity";
  monthlyIndex: Array<{ month: number; index: number }>;
  peakMonth: number;
  restMonth: number;
}

export interface ProjectsStory extends StoryBase {
  type: "projects";
  projects: Array<{
    repo: string;
    focusScore: number; // 0..1
    activityDays: number;
    stars: number;
  }>;
}

export interface TechStackStory extends StoryBase {
  type: "tech";
  primary: Array<{ name: string; score: number }>;
  firstHalf: Array<{ name: string; score: number }>;
  secondHalf: Array<{ name: string; score: number }>;
}

export interface ImpactStory extends StoryBase {
  type: "impact";
  topPRs: Array<{
    repo: string;
    title: string;
    impactScore: number;
    summary: string;
  }>;
}

export interface CollabStory extends StoryBase {
  type: "collab";
  topCollaborators: Array<{ handle: string; count: number }>;
  reviewStats: { given: number; approved: number };
}

export interface QualityStory extends StoryBase {
  type: "quality";
  signals: {
    testRatio: number;      // 0..1
    refactorRatio: number;  // 0..1
    docsRatio: number;      // 0..1
  };
}

export interface StarsStory extends StoryBase {
  type: "stars";
  starsGained: number;
  mostLovedRepo: { repo: string; stars: number };
}

export interface DeveloperTypeStory extends StoryBase {
  type: "developerType";
  developerType: {
    label: string;
    tagline: string;
    reasons: string[];
  };
  keywords: string[];
  badges: string[];
}

export type Story =
  | NumbersStory
  | ActivityStory
  | ProjectsStory
  | TechStackStory
  | ImpactStory
  | CollabStory
  | QualityStory
  | StarsStory
  | DeveloperTypeStory;
