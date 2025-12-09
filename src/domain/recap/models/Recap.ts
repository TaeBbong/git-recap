import type { Story } from "./Story";

export interface RecapUser {
  handle: string;
  name?: string;
  avatarUrl?: string;
}

export interface Recap {
  user: RecapUser;
  year: number;
  stories: Story[];
}
