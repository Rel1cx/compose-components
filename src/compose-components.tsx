import * as React from "react";

// #region Types

type UnknownProps = Record<string, unknown>;

type ComponentWithChildren<P extends UnknownProps = UnknownProps> = React.ComponentType<React.PropsWithChildren<P>>;

type RenderFunction = (node: React.ReactNode) => React.ReactNode;

// #endregion

// #region Functions

/**
 * A function that returns a render function that composes multiple provider components.
 * @param args Tuples of a provider component and its props.
 */
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
export function composeComponents(
  ...args: [ComponentWithChildren<UnknownProps>, Omit<UnknownProps, "children">][]
): (children: React.ReactNode) => React.ReactNode {
  return children => args.reduceRight((acc, [Provider, props]) => <Provider {...props}>{acc}</Provider>, children);
}

export type ComposeComponentsProps = {
  /**
   * The children to nest within the composed providers.
   */
  children?: React.ReactNode;
  /**
   * The render prop that consumes the render function returned by `composeComponents`.
   */
  renderComponents: RenderFunction;
};

// #endregion

// #region Components

/**
 * A component that composes multiple provider components into a single provider using the render prop pattern.
 * @example
 * ```tsx
 * <ComposeComponents renderComponents={composeComponents([ProviderA, { value: "A" }], [ProviderB, { value: "B" }])}>
 *   {children}
 * </ComposeComponents>
 */
export function ComposeComponents({ children, renderComponents }: ComposeComponentsProps) {
  return renderComponents(children);
}

// #endregion
