import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Container({ children, className }: { children: ReactNode, className?: string }) {
  return <div className={cn("grid gap-4 grid-cols-1", className)}>{children}</div>
}