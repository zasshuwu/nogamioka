"use client"

import { useRouter } from "next/navigation"
import React from "react"
import { FaReact } from "react-icons/fa"

interface IBrowser {
  setActiveView: React.Dispatch<React.SetStateAction<string>>
}

const views = [
  'about',
  'experience',
  'projects',
  'resume'
]

export default function Browser() {
  const router = useRouter()

  return <div className="flex flex-col">
    <h2 className="text-lg uppercase p-2">Explorer</h2>
    <ul>
      {views.map((view, idx) => (
        <li onClick={() => router.push(`/home?view=${view}`,)} key={idx} className="px-2 flex items-center hover:bg-primary/10 cursor-pointer"><FaReact></FaReact>&nbsp;{view}.tsx</li>
      ))}
    </ul>
  </div>
}