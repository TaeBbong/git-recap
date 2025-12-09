import type { RecapRepository } from "@/src/domain/recap/repositories/RecapRepository";
import type { Recap } from "@/src/domain/recap/models/Recap";
import { sleep } from "@/src/utils/sleep";

export class MockupRecapRepository implements RecapRepository {
  async getYearRecap(handle: string, year: number): Promise<Recap> {
    // simulate network latency
    await sleep(450);

    return {
      user: {
        handle,
        name: handle,
        avatarUrl: `https://avatars.githubusercontent.com/${handle}`,
      },
      year,
      stories: [
        {
          type: "numbers",
          title: "Your Year in Numbers",
          subtitle: "A snapshot of everything you shipped.",
          totals: {
            commits: 1234,
            contributions: 1680,
            prsOpened: 88,
            prsMerged: 61,
            issuesOpened: 40,
            issuesClosed: 35,
            reviews: 120,
            starsGained: 200,
          },
        },
        {
          type: "activity",
          title: "When You Coded",
          subtitle: "Your rhythm across the year.",
          monthlyIndex: [
            { month: 1, index: 60 },
            { month: 2, index: 75 },
            { month: 3, index: 120 },
            { month: 4, index: 90 },
            { month: 5, index: 140 },
            { month: 6, index: 110 },
            { month: 7, index: 80 },
            { month: 8, index: 65 },
            { month: 9, index: 130 },
            { month: 10, index: 150 },
            { month: 11, index: 100 },
            { month: 12, index: 70 },
          ],
          peakMonth: 10,
          restMonth: 1,
        },
        {
          type: "projects",
          title: "Your Main Worlds",
          subtitle: "Where your focus really lived.",
          projects: [
            { repo: `${handle}/chungmo-app`, focusScore: 0.82, activityDays: 92, stars: 320 },
            { repo: `${handle}/spicy-mask`, focusScore: 0.61, activityDays: 64, stars: 180 },
            { repo: `${handle}/thorvg-flutter`, focusScore: 0.48, activityDays: 41, stars: 95 },
          ],
        },
        {
          type: "tech",
          title: "Tech Evolution",
          subtitle: "Your stack got sharper.",
          primary: [
            { name: "Dart", score: 0.62 },
            { name: "TypeScript", score: 0.21 },
            { name: "Python", score: 0.17 },
          ],
          firstHalf: [
            { name: "Dart", score: 0.58 },
            { name: "TypeScript", score: 0.18 },
            { name: "Python", score: 0.24 },
          ],
          secondHalf: [
            { name: "Dart", score: 0.66 },
            { name: "TypeScript", score: 0.24 },
            { name: "Python", score: 0.10 },
          ],
        },
        {
          type: "impact",
          title: "Your Impact",
          subtitle: "The work that moved things forward.",
          topPRs: [
            {
              repo: `${handle}/chungmo-app`,
              title: "Refactor parsing pipeline + add schedule model",
              impactScore: 0.93,
              summary: "Stabilized the core parsing flow and unlocked scalable feature expansion.",
            },
            {
              repo: `${handle}/spicy-mask`,
              title: "Introduce multi-layered PII detection strategy",
              impactScore: 0.88,
              summary: "Raised detection accuracy while preserving on-device privacy guarantees.",
            },
          ],
        },
        {
          type: "collab",
          title: "Collab Vibes",
          subtitle: "Your year with people.",
          topCollaborators: [
            { handle: "maintainer-a", count: 12 },
            { handle: "teammate-b", count: 9 },
            { handle: "oss-friend-c", count: 6 },
          ],
          reviewStats: { given: 120, approved: 80 },
        },
        {
          type: "quality",
          title: "Quality & Craft",
          subtitle: "Signals of mature engineering.",
          signals: {
            testRatio: 0.28,
            refactorRatio: 0.35,
            docsRatio: 0.14,
          },
        },
        {
          type: "stars",
          title: "Stars & OSS",
          subtitle: "Love from the community.",
          starsGained: 200,
          mostLovedRepo: { repo: `${handle}/chungmo-app`, stars: 320 },
        },
        {
          type: "developerType",
          title: "Your Developer Type",
          subtitle: "A fun label backed by real signals.",
          developerType: {
            label: "Builder",
            tagline: "You shipped systems, not just commits.",
            reasons: [
              "High project focus in 2 major products",
              "Strong PR merge and iteration cadence",
              "Consistent refactor + feature delivery mix",
            ],
          },
          keywords: ["refactor", "firebase", "ai", "parser", "flutter"],
          badges: ["10-Day Streak", "First OSS Merge", "Release Momentum"],
        },
      ],
    };
  }
}
