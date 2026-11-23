import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export function Card({
  className = "",
  hoverable = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 sm:p-7 text-text shadow-card transition-all duration-250 ${
        hoverable ? "hover:border-accent hover:bg-surface-2 hover:-translate-y-1" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
