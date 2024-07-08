"use client";

import { PropsWithChildren, createContext, useContext } from "react";

export const TestContext = createContext({});

type Props = PropsWithChildren<unknown>;

export const TestContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <TestContext.Provider value={{ test: "salam" }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => {
    const test = useContext(TestContext)

    return test;
}
