import type { Story } from "@/src/domain/recap/models/Story";
import NumbersCard from "./cards/NumbersCard";
import ActivityCard from "./cards/ActivityCard";
import ProjectsCard from "./cards/ProjectsCard";
import TechStackCard from "./cards/TechStackCard";
import ImpactCard from "./cards/ImpactCard";
import CollabCard from "./cards/CollabCard";
import QualityCard from "./cards/QualityCard";
import StarsCard from "./cards/StarsCard";
import DeveloperTypeCard from "./cards/DeveloperTypeCard";

export default function StoryCard({ story }: { story: Story }) {
  switch (story.type) {
    case "numbers":
      return <NumbersCard story={story} />;
    case "activity":
      return <ActivityCard story={story} />;
    case "projects":
      return <ProjectsCard story={story} />;
    case "tech":
      return <TechStackCard story={story} />;
    case "impact":
      return <ImpactCard story={story} />;
    case "collab":
      return <CollabCard story={story} />;
    case "quality":
      return <QualityCard story={story} />;
    case "stars":
      return <StarsCard story={story} />;
    case "developerType":
      return <DeveloperTypeCard story={story} />;
    default:
      return null;
  }
}
