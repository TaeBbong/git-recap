"use client";

import { ReactNode, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { makeQueryClient } from "@/src/lib/query/queryClient";

export function AppProviders({ children }: { children: ReactNode }) {
  const [client] = useState(() => makeQueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
