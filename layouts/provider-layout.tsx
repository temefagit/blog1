"use client";

import { TestContextProvider } from "@/context/test-context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Fragment, PropsWithChildren } from "react";

type Props = PropsWithChildren<unknown>;

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const ProviderLayout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <TestContextProvider>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </TestContextProvider>
    </Fragment>
  );
};
