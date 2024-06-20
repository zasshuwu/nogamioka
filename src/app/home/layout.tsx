import React from "react";

export async function generateMetadata() {
  return {
    title: 'AAANH Homepage',
    description: 'Bleeding edge experimentations'
  }

}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <main>
    {children}
  </main>
}