"use client"

import { useRouter, useSearchParams } from "next/navigation"
import React from "react"
import Image from 'next/image'
import Logo from "@/components/logo"

interface IBrowser {
  setActiveView: React.Dispatch<React.SetStateAction<string>>
}

const views = [
  'home',
  'about',
  'experience',
  'projects',
  'resume',
  'uses',
  'msft-sso',
  'google-sso',
  'contact'
]

export default function Browser() {
  const router = useRouter()
  const searchParams = useSearchParams()

  return <div className="flex flex-col h-full">
    <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <h2 className="text-lg uppercase p-2">Explorer</h2>
    </div>
    <ul>
      {views.map((view, idx) => (
        <li onClick={() => router.push(view === 'home' ? '/home' : `/home?view=${view}`,)} key={idx} className={`transition-all duration-100 ease-in-out px-2 flex items-center hover:bg-primary/10 cursor-pointer ${searchParams.get('view') === view ? "bg-yellow-400/20 hover:bg-yellow-400/30" : null}`}><Logo className="w-4 h-4"></Logo>&nbsp;{view}.tsx</li>
      ))}
    </ul>
    <section className="mt-auto m-2 p-2 py-0 bg-green-500/10 rounded-lg grid grid-cols-[65px_auto] gap-2 divide-x divide-primary/30 w-fit">
      <div className="flex items-center justify-center py-2">
        <div className="h-16 w-16 relative">
          <Image src="https://avatars.githubusercontent.com/u/37283437?v=4" fill={true} alt="avatar" className="object-contain rounded-full shadow-lg"></Image>
        </div>
      </div>
      <div className="text-sm flex flex-col space-y-1 p-2 max-w-64">
        <p>Anh H Nguyen</p>
        <p className="break-all text-xs text-primary/50 bg-background/50 p-1 rounded-lg w-fit"><a href="mailto:anhnguyen@aaanh.com">AnhNguyen@aaanh.com</a></p>
        <p>Software Developer</p>
      </div>
    </section>
  </div>
}