'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import ResizableSection from "./components/resizable-section";
import Browser from "./components/browser";
import Viewer from "./components/viewer";
import { VscRemote, VscSourceControl } from "react-icons/vsc";
import { cn } from "@/lib/utils";

export default function Home({ searchParams }: { searchParams: { view: string } }) {
  const resizerRef = useRef<HTMLDivElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startWidthLeft, setStartWidthLeft] = useState<number>(0);
  const [hideSidebar, setHideSidebar] = useState(false);

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isResizing) return;
      const dx = event.clientX - startX;
      if (leftSectionRef.current && containerRef.current) {
        const newWidthLeft = startWidthLeft + dx;
        const containerWidth = containerRef.current.getBoundingClientRect().width;
        if (newWidthLeft < 0 || newWidthLeft > containerWidth) return;
        leftSectionRef.current.style.width = `${newWidthLeft}px`;
        resizerRef.current!.style.left = `${newWidthLeft}px`;
        rightSectionRef.current!.style.width = `${containerWidth - newWidthLeft - resizerRef.current!.offsetWidth}px`;
      }
    },
    [isResizing, startX, startWidthLeft]
  );

  const onMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  const onMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (leftSectionRef.current) {
        setIsResizing(true);
        setStartX(event.clientX);
        setStartWidthLeft(leftSectionRef.current.getBoundingClientRect().width);
      }
    },
    []
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => onMouseMove(event);
    const handleMouseUp = () => onMouseUp();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  const initialLeftWidth = 25; // initial width for the left section
  const initialRightWidth = 100 - initialLeftWidth;

  return (
    <div className="w-full h-screen bg-background relative grid-rows-[1fr_2rem] grid" ref={containerRef}>
      <div className="relative z-10 w-full h-full flex">
        {!hideSidebar && (
          <ResizableSection ref={leftSectionRef} isLeft={true} initialWidth={`${initialLeftWidth}%`}>
            <Browser />
          </ResizableSection>
        )}
        {!hideSidebar && (
          <div
            ref={resizerRef}
            className="select-none w-0.5 hover:w-2 bg-green-500 cursor-ew-resize absolute top-0 h-full z-50"
            style={{ left: `${initialLeftWidth}%` }}
            onMouseDown={onMouseDown}
          ></div>
        )}
        <ResizableSection
          initialWidth={hideSidebar ? '100%' : `${initialRightWidth}%`}
          ref={rightSectionRef}
          isLeft={false}
        >
          <Viewer hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} view={searchParams.view} />
        </ResizableSection>
      </div>
      <div className="bg-blue-950 flex items-center">
        <a href="https://github.com/aaanh" className="transition-all ease-in-out duration-150 hover:bg-green-600 h-full flex items-center px-2 bg-green-500 text-background">
          <VscRemote />&nbsp;AAANH.COM
        </a>
        <a href="https://github.com/aaanh/homepage" className="transition-all ease-in-out duration-150 hover:bg-white/10 h-full flex items-center px-2">
          <VscSourceControl />&nbsp;v5
        </a>
      </div>
    </div>
  );
}
