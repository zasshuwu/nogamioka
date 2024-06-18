'use client';

import Link from 'next/link';
import { Logo } from '../TitleBar';
import { usePathname, useRouter } from 'next/navigation';

export default function ServicesNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-2 border-b border-neutral-400 p-4 dark:border-neutral-800">
      <div className="flex items-center space-x-2">
        <Logo></Logo>
        <span>AAANH</span>
      </div>
      <span className="text-white/80">
        {`/ `}
        <Link className="hover:underline" href="/home">
          home
        </Link>
        <Link
          className="lowercase hover:underline"
          href={`${pathname.replaceAll('/', ' / ')}`}
        >
          {pathname}
        </Link>
      </span>
    </nav>
  );
}
