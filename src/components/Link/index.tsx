import { ReactNode } from "react";

import { LinkChildren, NavLink } from "./styles";

interface LinkProps {
  children: ReactNode;
  to: string;
}

export function Link({ to, children }: LinkProps) {
  return (
    <NavLink to={to}>
      {(active) => (
        <LinkChildren active={active.isActive}>{children}</LinkChildren>
      )}
    </NavLink>
  );
}
