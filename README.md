# compose-components

This is a simple proof of concept that shows how to compose multiple components (such as providers) and support passing components' props in a type-safe way using render prop and render function overloading instead of the unrecommended Legacy React APIs like [`cloneElement`](https://react.dev/reference/react/cloneElement).

## Installation

```bash
pnpm install compose-components
```

## Usage

```tsx
import { ComposeComponents, composeComponents } from "compose-components";

const App = () => (
  <ComposeComponents
    renderComponents={composeComponents(
      [PaletteProvider, { mode: "light" }],
      [LayoutProvider, { layout: "default" }],
      [SizingProvider, { size: "md" }],
      [TypographyProvider, { font: "sans" }],
    )}
  >
    <div>App</div>
  </ComposeComponents>
);

declare function PaletteProvider({ children }: React.PropsWithChildren<{ mode: "light" | "dark" }>): React.ReactNode;
declare function LayoutProvider({ children }: React.PropsWithChildren<{ layout: "default" | "full" }>): React.ReactNode;
declare function SizingProvider({ children }: React.PropsWithChildren<{ size: "sm" | "md" | "lg" }>): React.ReactNode;
declare function TypographyProvider({ children }: React.PropsWithChildren<{ font: "sans" | "serif" }>): React.ReactNode;
```

## Performance

Since `cloneElement` is not used, this approach is nearly **10x** faster than the version that uses `cloneElement`.

```bash
compose-components [ main][+][📦 v0.0.0][ v22.6.0]
❯ pnpm benchmark

> compose-components@0.0.0 benchmark
> pnpm -F "./benchmark" run start


> benchmark@0.0.0 start compose-components/benchmark
> tsx ./main.tsx

┌─────────┬────────────────────────┬─────────────┬───────────────────┬──────────┬─────────┐
│ (index) │ Task Name              │ ops/sec     │ Average Time (ns) │ Margin   │ Samples │
├─────────┼────────────────────────┼─────────────┼───────────────────┼──────────┼─────────┤
│ 0       │ 'with cloneElement'    │ '222,705'   │ 4490.229389930139 │ '±0.25%' │ 66812   │
│ 1       │ 'without cloneElement' │ '2,049,821' │ 487.8472469985147 │ '±0.35%' │ 614947  │
└─────────┴────────────────────────┴─────────────┴───────────────────┴──────────┴─────────┘
```