import { cn } from "@/lib/utils";

export default function GlowText({ text, className }: { text: string, className?: string }) {
  return <>
    <span className={cn("absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-foreground via-foreground to-foreground bg-clip-text box-content font-extrabold text-transparent text-center select-none", className)}>
      {text}
    </span>
    <h1
      className={cn("relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-foreground/90 via-foreground to-foreground/60 bg-clip-text font-extrabold text-transparent text-center select-auto", className)}>
      {text}
    </h1></>
}