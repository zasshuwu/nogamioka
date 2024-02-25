import { type ReactNode } from "react";
import ServicesNav from "~/components/Services/ServicesNav";
import sf_pro from "~/fonts/sf_pro";

interface IServiceLayout {
  children: ReactNode;
}

export default function ServiceLayout({ children }: IServiceLayout) {
  return (
    <div
      className={`min-h-screen dark:bg-black dark:text-white ${sf_pro.className}`}
    >
      <ServicesNav></ServicesNav>
      {children}
    </div>
  );
}
