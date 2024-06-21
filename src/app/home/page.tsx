'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import ResizableSection from "./components/resizable-section";
import Browser from "./components/browser";
import Viewer from "./components/viewer";
import { VscRemote, VscSourceControl } from "react-icons/vsc";
import RequestCode from "./components/viewer/request-code";
import { Button } from "@/components/ui/button";

export default function Home({ searchParams }: { searchParams: { view: string } }) {
  const resizerRef = useRef<HTMLDivElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startWidthLeft, setStartWidthLeft] = useState<number>(0);

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
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
    // Adding event listeners to handle mouse move and mouse up
    const handleMouseMove = (event: MouseEvent) => onMouseMove(event as any);
    const handleMouseUp = () => onMouseUp();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  const explorerInitialWidth = 25
  const viewerInitialWidth = 100 - 25
  const parseInitialWidth = (width: number) => `${width}%`

  return (
    <div
      className="w-full h-screen bg-background relative grid-rows-[1fr_2rem] grid"
      ref={containerRef}
    >
      <div className="relative z-10 w-full h-full flex">
        <ResizableSection initialWidth={parseInitialWidth(explorerInitialWidth)} ref={leftSectionRef} isLeft={true}>
          <Browser />
        </ResizableSection>
        <div
          ref={resizerRef}
          className="select-none w-0.5 hover:w-2 bg-green-500 cursor-ew-resize absolute top-0 h-full z-50"
          style={{ left: parseInitialWidth(explorerInitialWidth - .375) }}
          onMouseDown={onMouseDown}
        ></div>
        <ResizableSection initialWidth={parseInitialWidth(viewerInitialWidth)} ref={rightSectionRef} isLeft={false}>
          <Viewer view={searchParams.view} />
        </ResizableSection>
      </div>
      <div className="bg-blue-950 flex items-center">
        <a href="https://github.com/aaanh" className="transition-all ease-in-out duration-150 hover:bg-green-600 h-full flex items-center px-2 bg-green-500 text-background"><VscRemote />&nbsp;AAANH.COM</a>
        <a href="https://github.com/aaanh/homepage" className="transition-all ease-in-out duration-150 hover:bg-white/10 h-full flex items-center px-2"><VscSourceControl />&nbsp;v5</a>
      </div>
    </div>
  );
}
