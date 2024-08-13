import * as React from "react";

// #region Types

type UnknownProps = Record<string, unknown>;

type ComponentWithChildren<P extends UnknownProps = UnknownProps> = React.ComponentType<React.PropsWithChildren<P>>;

type RenderFunction = (node: React.ReactNode) => React.ReactNode;

// #endregion

// #region Functions

export function composeComponents<
  AP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, Omit<AP, "children">],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, Omit<AP, "children">],
  b: [ComponentWithChildren<BP>, Omit<BP, "children">],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, Omit<AP, "children">],
  b: [ComponentWithChildren<BP>, Omit<BP, "children">],
  c: [ComponentWithChildren<CP>, Omit<CP, "children">],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
  DP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, Omit<AP, "children">],
  b: [ComponentWithChildren<BP>, Omit<BP, "children">],
  c: [ComponentWithChildren<CP>, Omit<CP, "children">],
  d: [ComponentWithChildren<DP>, Omit<DP, "children">],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
  DP extends UnknownProps,
  EP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, Omit<AP, "children">],
  b: [ComponentWithChildren<BP>, Omit<BP, "children">],
  c: [ComponentWithChildren<CP>, Omit<CP, "children">],
  d: [ComponentWithChildren<DP>, Omit<DP, "children">],
  e: [ComponentWithChildren<EP>, Omit<EP, "children">],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
  DP extends UnknownProps,
  EP extends UnknownProps,
  FP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, Omit<AP, "children">],
  b: [ComponentWithChildren<BP>, Omit<BP, "children">],
  c: [ComponentWithChildren<CP>, Omit<CP, "children">],
  d: [ComponentWithChildren<DP>, Omit<DP, "children">],
  e: [ComponentWithChildren<EP>, Omit<EP, "children">],
  f: [ComponentWithChildren<FP>, Omit<FP, "children">],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
  DP extends UnknownProps,
  EP extends UnknownProps,
  FP extends UnknownProps,
  GP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, Omit<AP, "children">],
  b: [ComponentWithChildren<BP>, Omit<BP, "children">],
  c: [ComponentWithChildren<CP>, Omit<CP, "children">],
  d: [ComponentWithChildren<DP>, Omit<DP, "children">],
  e: [ComponentWithChildren<EP>, Omit<EP, "children">],
  f: [ComponentWithChildren<FP>, Omit<FP, "children">],
  g: [ComponentWithChildren<GP>, Omit<GP, "children">],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
  DP extends UnknownProps,
  EP extends UnknownProps,
  FP extends UnknownProps,
  GP extends UnknownProps,
  HP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, Omit<AP, "children">],
  b: [ComponentWithChildren<BP>, Omit<BP, "children">],
  c: [ComponentWithChildren<CP>, Omit<CP, "children">],
  d: [ComponentWithChildren<DP>, Omit<DP, "children">],
  e: [ComponentWithChildren<EP>, Omit<EP, "children">],
  f: [ComponentWithChildren<FP>, Omit<FP, "children">],
  g: [ComponentWithChildren<GP>, Omit<GP, "children">],
  h: [ComponentWithChildren<HP>, Omit<HP, "children">],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
  DP extends UnknownProps,
  EP extends UnknownProps,
  FP extends UnknownProps,
  GP extends UnknownProps,
  HP extends UnknownProps,
  IP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, Omit<AP, "children">],
  b: [ComponentWithChildren<BP>, Omit<BP, "children">],
  c: [ComponentWithChildren<CP>, Omit<CP, "children">],
  d: [ComponentWithChildren<DP>, Omit<DP, "children">],
  e: [ComponentWithChildren<EP>, Omit<EP, "children">],
  f: [ComponentWithChildren<FP>, Omit<FP, "children">],
  g: [ComponentWithChildren<GP>, Omit<GP, "children">],
  h: [ComponentWithChildren<HP>, Omit<HP, "children">],
  i: [ComponentWithChildren<IP>, Omit<IP, "children">],
): RenderFunction;
export function composeComponents(
  ...args: [ComponentWithChildren<UnknownProps>, Omit<UnknownProps, "children">][]
): RenderFunction;
/**
 * Takes a list of components and their props and returns a render function that composes them.
 * @returns A render function that composes the components.
 * @example
 * ```tsx
 * const renderComponents = composeComponents([ProviderA, { value: "A" }], [ProviderB, { value: "B" }]);
 * //    ^? (children: React.ReactNode) => React.ReactNode
 * ```
 */
export function composeComponents(
  ...args: [ComponentWithChildren<UnknownProps>, Omit<UnknownProps, "children">][]
): (children: React.ReactNode) => React.ReactNode {
  return children => args.reduceRight((acc, [Provider, props]) => <Provider {...props}>{acc}</Provider>, children);
}

export type ComposeComponentsProps = {
  /**
   * The children to nest within the composed components.
   */
  children?: React.ReactNode;
  /**
   * A render prop that consumes the render function returned by `composeComponents`.
   */
  renderComponents: RenderFunction;
};

// #endregion

// #region Components

/**
 * A component that composes multiple components into a single component.
 * @returns React.ReactNode
 * @example
 * ```tsx
 * import React from "react";
 * import { ComposeComponents, composeComponents } from "compose-components";
 *
 * const renderComponents = composeComponents(
 *   [LocaleProvider, { locale: "en" }],
 *   [ConfigProvider, { config: "config" }],
 *   [LoggerProvider, { logger: "logger" }],
 * );
 *
 * function App() {
 *   return (
 *     <ComposeComponents renderComponents={renderComponents}>
 *       <ChildComponent />
 *     </ComposeComponents>
 *   );
 * }
 * ```
 * @example
 * ```tsx
 * import React, { useMemo } from "react";
 * import { ComposeComponents, composeComponents } from "compose-components";
 *
 * function App({ locale, config, logger }) {
 *   const renderComponents = useMemo(() =>
 *     composeComponents(
 *       [LocaleProvider, { locale }],
 *       [ConfigProvider, { config }],
 *       [LoggerProvider, { logger }],
 *     ), [locale, config, logger]);
 *
 *   return (
 *     <ComposeComponents renderComponents={renderComponents}>
 *       <ChildComponent />
 *     </ComposeComponents>
 *   );
 * }
 * ```
 */
export function ComposeComponents({ children, renderComponents }: ComposeComponentsProps) {
  return renderComponents(children);
}

// #endregion
