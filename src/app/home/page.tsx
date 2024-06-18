'use client';

import { useCallback, useRef, useState } from "react";
import ResizableSection from "./components/resizable-section";
import Browser from "./components/browser";
import Viewer from "./components/viewer";
import { VscRemote, VscSourceControl } from "react-icons/vsc";

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

  return (
    <main
      className="w-full h-screen bg-background relative grid-rows-[1fr_2rem] grid"
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <div className="relative z-10 w-full">
        <ResizableSection ref={leftSectionRef} isLeft={true}>
          <Browser></Browser>
        </ResizableSection>
        <div
          ref={resizerRef}
          className="select-none w-0.5 bg-green-500 cursor-ew-resize absolute top-0 h-full"
          style={{ left: '49.8%' }}
          onMouseDown={onMouseDown}
        ></div>
        <ResizableSection ref={rightSectionRef} isLeft={false}>
          <Viewer view={searchParams.view}></Viewer>
        </ResizableSection>
      </div>
      <div className="bg-blue-950 flex items-center">
        <div className="h-full flex items-center px-2 bg-green-500 text-background"><VscRemote></VscRemote>&nbsp;AAANH.COM</div>
        <div className="h-full flex items-center px-2"><VscSourceControl></VscSourceControl>&nbsp;v4.1</div>
      </div>
    </main>
  );
}
