"use client";

import { useQuery } from "@tanstack/react-query";
import { recapRepository } from "@/src/data/recap";
import { recapQueryKeys } from "./recapQueryKeys";

export function useRecap(handle: string, year: number) {
  return useQuery({
    queryKey: recapQueryKeys.yearRecap(handle, year),
    queryFn: () => recapRepository.getYearRecap(handle, year),
    staleTime: 1000 * 60 * 5,
  });
}
