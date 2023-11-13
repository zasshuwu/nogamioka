import { type ReactNode } from "react"
import sf_pro from "~/fonts/sf_pro";

interface IndexLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: IndexLayoutProps) => {
  return <div className={"relative flex flex-col w-full justify-center items-center dark:bg-black bg-neutral-100 min-h-screen dark:text-white " + sf_pro.className}>
    {children}
  </div>
}

export default RootLayout;