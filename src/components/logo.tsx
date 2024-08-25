import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return <div className={cn(className, "relative")}>
    <Image src="/logos/aaanh.png" fill={true} alt="aaanh's logo"></Image>
  </div>
}