/* eslint-disable react/no-missing-key */
/* eslint-disable @eslint-react/no-missing-key */
import React from "react";

import { ComposeComponents, composeComponents } from "compose-components";
import { Bench } from "tinybench";
import { ComposeProvider } from "./alt";

const Context1 = React.createContext("context1");
const Context2 = React.createContext("context2");
const Context3 = React.createContext("context3");
const Context4 = React.createContext("context4");
const Context5 = React.createContext("context5");
const Context6 = React.createContext("context6");
const Context7 = React.createContext("context7");
const Context8 = React.createContext("context8");
const Context9 = React.createContext("context9");

type ProviderProps = React.PropsWithChildren<{
  value: string;
}>;

function Provider1({ children, value }: ProviderProps) {
  return <Context1.Provider value={value}>{children}</Context1.Provider>;
}

function Provider2({ children, value }: ProviderProps) {
  return <Context2.Provider value={value}>{children}</Context2.Provider>;
}

function Provider3({ children, value }: ProviderProps) {
  return <Context3.Provider value={value}>{children}</Context3.Provider>;
}

function Provider4({ children, value }: ProviderProps) {
  return <Context4.Provider value={value}>{children}</Context4.Provider>;
}

function Provider5({ children, value }: ProviderProps) {
  return <Context5.Provider value={value}>{children}</Context5.Provider>;
}

function Provider6({ children, value }: ProviderProps) {
  return <Context6.Provider value={value}>{children}</Context6.Provider>;
}

function Provider7({ children, value }: ProviderProps) {
  return <Context7.Provider value={value}>{children}</Context7.Provider>;
}

function Provider8({ children, value }: ProviderProps) {
  return <Context8.Provider value={value}>{children}</Context8.Provider>;
}

function Provider9({ children, value }: ProviderProps) {
  return <Context9.Provider value={value}>{children}</Context9.Provider>;
}

const bench = new Bench({ time: 300 })
  .add("with cloneElement", () => {
    React.createElement(
      ComposeProvider,
      {
        contexts: [
          <Provider1 value="1" />,
          <Provider2 value="2" />,
          <Provider3 value="3" />,
          <Provider4 value="4" />,
          <Provider5 value="5" />,
          <Provider6 value="6" />,
          <Provider7 value="7" />,
          <Provider8 value="8" />,
          <Provider9 value="9" />,
        ],
      },
      "children",
    );
  })
  .add("without cloneElement", () => {
    React.createElement(
      ComposeComponents,
      {
        renderComponents: composeComponents(
          [Provider1, { value: "1" }],
          [Provider2, { value: "2" }],
          [Provider3, { value: "3" }],
          [Provider4, { value: "4" }],
          [Provider5, { value: "5" }],
          [Provider6, { value: "6" }],
          [Provider7, { value: "7" }],
          [Provider8, { value: "8" }],
          [Provider9, { value: "9" }],
        ),
      },
      "children",
    );
  });

await bench.warmup();
await bench.run();

console.table(bench.table());
