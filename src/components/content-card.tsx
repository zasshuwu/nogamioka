import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function ContentCard({ children, className }: { children: ReactNode, className?: string }) {
  return <section className={cn("min-h-32 flex items-center justify-center border border-foreground/50 shadow-lg p-4 rounded-lg", className)}>{children}</section>
}