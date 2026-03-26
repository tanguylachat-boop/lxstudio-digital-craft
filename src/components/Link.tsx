import type { AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

const Link = ({ to, children, ...props }: LinkProps) => (
  <a href={to} {...props}>
    {children}
  </a>
);

export default Link;
