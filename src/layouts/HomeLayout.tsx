import { useState, type ReactNode } from 'react';
import TitleBar from '@/components/TitleBar';
import Image from 'next/image';

import sf_pro_display from '@/fonts/sf_pro';

interface HomeLayoutProps {
  currentView: string;
  children: ReactNode;
}

const HomeLayout = ({ children, currentView }: HomeLayoutProps) => {
  return (
    <div
      className={
        'relative flex flex-col w-full dark:bg-black bg-neutral-100 min-h-screen dark:text-white ' +
        sf_pro_display.className
      }
    >
      <Image
        className="object-cover opacity-80"
        src="/wallpaper-2.jpg"
        fill={true}
        alt="wallpaper"
      ></Image>
      <TitleBar currentView={currentView}></TitleBar>
      {children}
    </div>
  );
};

export default HomeLayout;
