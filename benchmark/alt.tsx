import { cloneElement, memo } from "react";

export interface ComposeProviderProps extends React.PropsWithChildren {
  contexts: React.ReactElement[];
}

export const ComposeProvider = memo(({
  contexts,
  children,
}: ComposeProviderProps) =>
  contexts.reduceRight(
    (children: React.ReactNode, parent) =>
      cloneElement(
        parent,
        { children },
      ),
    children,
  )
);
