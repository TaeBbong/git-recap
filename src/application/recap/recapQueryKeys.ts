export const recapQueryKeys = {
  yearRecap: (handle: string, year: number) => ["recap", handle, year] as const,
};
