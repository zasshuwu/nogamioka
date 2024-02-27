import Link from "next/link";
import { Logo } from "../TitleBar";
import { useRouter } from "next/router";

export default function ServicesNav() {
  const router = useRouter();
  const pathname = router.pathname.substring(1);

  return (
    <nav className="flex items-center space-x-2 p-4">
      <div className="flex items-center space-x-2">
        <Logo></Logo>
        <span>AAANH</span>
      </div>
      <span className="text-white/80">
        {`/ `}
        <Link className="hover:underline" href="/home">
          Home
        </Link>
        &nbsp;
        {`/ `}
        <Link className="capitalize hover:underline" href={`/${pathname}`}>
          {pathname}
        </Link>
      </span>
    </nav>
  );
}
