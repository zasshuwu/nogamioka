import { usePathname } from "next/navigation";
import React from "react";
import { FaReact } from "react-icons/fa";

export default function ViewContainer({ title, children }: { title: string, children: React.ReactNode }) {
  const fullpath = usePathname();
  const pathnames = fullpath.split('/').filter(path => path)

  return <div>
    <h1 className="p-2 text-lg bg-white/10 w-fit flex items-center text-green-500">
      <FaReact></FaReact>&nbsp;{title}.tsx
    </h1>
    <div className="p-1 flex items-center text-primary/50">
      <span>{pathnames.map((path) => path + (title.length > 0 ? ' > ' : null))}&nbsp;</span>
      <span className="flex items-center"><FaReact></FaReact>&nbsp;{title}.tsx</span>
    </div>
    {children}
  </div>
}