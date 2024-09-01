"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../container";
import ContentCard from "../content-card";
import SpotifyStatusCard from "./status-card";
import { getSpotifyStatus } from "@/app/(home)/actions";
import { NowPlaying } from "@/lib/types";
import GlowText from "../glow-text";
import { LucideMusic2 } from "lucide-react";

export default function Spotify() {
  const [nowPlayingData, setNowPlayingData] = useState<NowPlaying>({
    progress_ms: 0,
    currently_playing_type: undefined,
    is_playing: false,
    item: undefined,
  });

  const [localProgress, setLocalProgress] = useState(0); // Local progress state
  const [startTime, setStartTime] = useState(0); // Time when the song started

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID

  // 1. useEffect to Poll for Song Changes
  useEffect(() => {
    const fetchSpotifyStatus = async () => {
      try {
        const data = await getSpotifyStatus();
        if (data.item?.uri !== nowPlayingData.item?.uri) {
          // Compare using URI
          setNowPlayingData(data);
          setLocalProgress(data.progress_ms);
          setStartTime(Date.now());
        }
      } catch (error) {
        console.error("Error fetching Spotify status:", error);
      }
    };

    fetchSpotifyStatus(); // Initial fetch

    const pollInterval = setInterval(fetchSpotifyStatus, 90000); // Poll every 1 min 30 sec

    return () => clearInterval(pollInterval);
  }, [nowPlayingData.item?.uri]); // Dependency is the song URI

  // 2. useEffect to Handle Progress Emulation
  useEffect(() => {
    if (nowPlayingData.is_playing) {
      // Clear any existing interval before starting a new one
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }

      // Start a new interval for progress tracking
      progressIntervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const newProgress = nowPlayingData.progress_ms + elapsedTime;
        setLocalProgress(
          Math.min(newProgress, nowPlayingData.item?.duration_ms || 0)
        );
      }, 1000); // Update progress every second
    } else if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [nowPlayingData.is_playing, startTime, nowPlayingData.progress_ms]); // Dependencies are the play state, startTime, and initial progress

  return (
    <Container>
      <ContentCard className="text-4xl border-none space-x-2">
        <LucideMusic2 />
        <GlowText text="Now Playing" />
      </ContentCard>
      <ContentCard>
        <SpotifyStatusCard
          {...nowPlayingData}
          progress_ms={localProgress}
        ></SpotifyStatusCard>
      </ContentCard>
    </Container>
  );
}
