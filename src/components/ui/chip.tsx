import React from "react";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Chip({ className = "", children, ...props }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border border-accent-alt/30 bg-accent-alt/5 px-2.5 py-1 text-xs font-mono text-accent-alt ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
