"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page({ searchParams }: { searchParams: { ip: string } }) {
  const router = useRouter()

  return <div className="min-h-screen flex items-center justify-center flex-col">
    <h1 className="font-bold text-destructive">Error 429: Rate Limited</h1>
    <p>You are being rate limited from submitting contact forms.</p>
    <Button onClick={() => router.push("/home?view=contact")}>Go back</Button>
  </div>
}