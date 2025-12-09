import type { Recap } from "../models/Recap";

export interface RecapRepository {
  getYearRecap(handle: string, year: number): Promise<Recap>;
}
