"use client"

import React, { LegacyRef } from "react"

export default function ResizableSection({ ref, children, isLeft }: { ref: LegacyRef<HTMLElement>, children: React.ReactNode, isLeft: boolean }) {
  return <section ref={ref} className={`overflow-x-hidden select-none bg-background h-full absolute top-0 ${isLeft ? 'left-0' : 'right-0'}`} style={{ width: '50%' }}>
    {children}
  </section>
}