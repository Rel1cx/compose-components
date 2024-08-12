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
  a: [ComponentWithChildren<AP>, AP],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, AP],
  b: [ComponentWithChildren<BP>, BP],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, AP],
  b: [ComponentWithChildren<BP>, BP],
  c: [ComponentWithChildren<CP>, CP],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
  DP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, AP],
  b: [ComponentWithChildren<BP>, BP],
  c: [ComponentWithChildren<CP>, CP],
  d: [ComponentWithChildren<DP>, DP],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
  DP extends UnknownProps,
  EP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, AP],
  b: [ComponentWithChildren<BP>, BP],
  c: [ComponentWithChildren<CP>, CP],
  d: [ComponentWithChildren<DP>, DP],
  e: [ComponentWithChildren<EP>, EP],
): RenderFunction;
export function composeComponents<
  AP extends UnknownProps,
  BP extends UnknownProps,
  CP extends UnknownProps,
  DP extends UnknownProps,
  EP extends UnknownProps,
  FP extends UnknownProps,
>(
  a: [ComponentWithChildren<AP>, AP],
  b: [ComponentWithChildren<BP>, BP],
  c: [ComponentWithChildren<CP>, CP],
  d: [ComponentWithChildren<DP>, DP],
  e: [ComponentWithChildren<EP>, EP],
  f: [ComponentWithChildren<FP>, FP],
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
  a: [ComponentWithChildren<AP>, AP],
  b: [ComponentWithChildren<BP>, BP],
  c: [ComponentWithChildren<CP>, CP],
  d: [ComponentWithChildren<DP>, DP],
  e: [ComponentWithChildren<EP>, EP],
  f: [ComponentWithChildren<FP>, FP],
  g: [ComponentWithChildren<GP>, GP],
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
  a: [ComponentWithChildren<AP>, AP],
  b: [ComponentWithChildren<BP>, BP],
  c: [ComponentWithChildren<CP>, CP],
  d: [ComponentWithChildren<DP>, DP],
  e: [ComponentWithChildren<EP>, EP],
  f: [ComponentWithChildren<FP>, FP],
  g: [ComponentWithChildren<GP>, GP],
  h: [ComponentWithChildren<HP>, HP],
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
  a: [ComponentWithChildren<AP>, AP],
  b: [ComponentWithChildren<BP>, BP],
  c: [ComponentWithChildren<CP>, CP],
  d: [ComponentWithChildren<DP>, DP],
  e: [ComponentWithChildren<EP>, EP],
  f: [ComponentWithChildren<FP>, FP],
  g: [ComponentWithChildren<GP>, GP],
  h: [ComponentWithChildren<HP>, HP],
  i: [ComponentWithChildren<IP>, IP],
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
