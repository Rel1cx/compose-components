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
  id: string;
  title: string;
  description: string;
}>;

function Provider1({ children }: ProviderProps) {
  return <Context1.Provider value="value1">{children}</Context1.Provider>;
}

function Provider2({ children }: ProviderProps) {
  return <Context2.Provider value="value2">{children}</Context2.Provider>;
}

function Provider3({ children }: ProviderProps) {
  return <Context3.Provider value="value3">{children}</Context3.Provider>;
}

function Provider4({ children }: ProviderProps) {
  return <Context4.Provider value="value4">{children}</Context4.Provider>;
}

function Provider5({ children }: ProviderProps) {
  return <Context5.Provider value="value5">{children}</Context5.Provider>;
}

function Provider6({ children }: ProviderProps) {
  return <Context6.Provider value="value6">{children}</Context6.Provider>;
}

function Provider7({ children }: ProviderProps) {
  return <Context7.Provider value="value7">{children}</Context7.Provider>;
}

function Provider8({ children }: ProviderProps) {
  return <Context8.Provider value="value8">{children}</Context8.Provider>;
}

function Provider9({ children }: ProviderProps) {
  return <Context9.Provider value="value9">{children}</Context9.Provider>;
}

const bench = new Bench({ time: 300 })
  .add("with cloneElement", () => {
    React.createElement(
      ComposeProvider,
      {
        contexts: [
          <Provider1 id="1" title="title1" description="description1" />,
          <Provider2 id="2" title="title2" description="description2" />,
          <Provider3 id="3" title="title3" description="description3" />,
          <Provider4 id="4" title="title4" description="description4" />,
          <Provider5 id="5" title="title5" description="description5" />,
          <Provider6 id="6" title="title6" description="description6" />,
          <Provider7 id="7" title="title7" description="description7" />,
          <Provider8 id="8" title="title8" description="description8" />,
          <Provider9 id="9" title="title9" description="description9" />,
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
          [Provider1, { id: "1", title: "title1", description: "description1" }],
          [Provider2, { id: "2", title: "title2", description: "description2" }],
          [Provider3, { id: "3", title: "title3", description: "description3" }],
          [Provider4, { id: "4", title: "title4", description: "description4" }],
          [Provider5, { id: "5", title: "title5", description: "description5" }],
          [Provider6, { id: "6", title: "title6", description: "description6" }],
          [Provider7, { id: "7", title: "title7", description: "description7" }],
          [Provider8, { id: "8", title: "title8", description: "description8" }],
          [Provider9, { id: "9", title: "title9", description: "description9" }],
        ),
      },
      "children",
    );
  });

await bench.warmup();
await bench.run();

console.table(bench.table());
