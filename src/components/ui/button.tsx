import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-accent to-accent-2 text-bg font-bold hover:-translate-y-0.5 hover:brightness-110",
    secondary:
      "border border-border bg-transparent text-text hover:-translate-y-0.5 hover:border-accent hover:bg-surface-2",
    ghost:
      "bg-transparent text-muted hover:text-text hover:bg-surface-2",
    outline:
      "border border-border bg-transparent text-text hover:border-accent hover:bg-surface-2",
  };

  const combinedClass = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass} target={props.target} rel={props.rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
