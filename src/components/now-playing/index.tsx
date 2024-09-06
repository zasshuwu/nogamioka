"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../container";
import ContentCard from "../content-card";
import SpotifyStatusCard from "../spotify/status-card";
import { getSpotifyStatus } from "@/app/(home)/actions";
import { AppleMusicNowPlaying, NowPlaying } from "@/lib/types";
import GlowText from "../glow-text";
import { LucideMusic2 } from "lucide-react";
import AppleMusicStatusCard from "../apple-music/status-card";

export default function Spotify() {
  const [nowPlayingData, setNowPlayingData] = useState<NowPlaying>({
    progress_ms: 0,
    currently_playing_type: undefined,
    is_playing: false,
    item: undefined,
  });
  const [appleNowPlayingData, setAppleNowPlayingData] =
    useState<AppleMusicNowPlaying>({
      title: "Not playing anything",
      albumTitle: "---",
      artist: "---",
      albumCoverUrl: "https://github.com/aaanh-enterprise.png",
    });

  const [localProgress, setLocalProgress] = useState(0); // Local progress state
  const [startTime, setStartTime] = useState(0); // Time when the song started

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval ID

  const fetchAppleMusicStatus = async () => {
    try {
      const res = await fetch("/api/v1/apple-music-now-playing", {
        cache: "no-store",
      });
      const data = await res.json();
      if (data) {
        setAppleNowPlayingData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchSpotifyStatus = async () => {
    try {
      const data = await getSpotifyStatus();
      if (data) {
        if (data.item?.uri !== nowPlayingData.item?.uri) {
          // Compare using URI
          setNowPlayingData(data);
          setLocalProgress(data.progress_ms);
          setStartTime(Date.now());
        }
      }
    } catch (error) {
      console.error("Error fetching Spotify status:", error);
    }
  };

  const POLL_PERIOD = 10000; // Time before re-polling the playing status in ms

  // 1. useEffect to Poll for Song Changes
  useEffect(() => {
    fetchSpotifyStatus(); // Initial fetch
    fetchAppleMusicStatus();

    const pollIntervalSpotify = setInterval(fetchSpotifyStatus, POLL_PERIOD);
    const pollIntervalAppleMusic = setInterval(
      fetchAppleMusicStatus,
      POLL_PERIOD
    );

    return () => {
      clearInterval(pollIntervalSpotify);
      clearInterval(pollIntervalAppleMusic);
    };
  }, [nowPlayingData.item?.uri]); // Dependency is the song URI

  // 2. useEffect to update emulated playing peogress interval and refetching logic
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
        if (newProgress >= (nowPlayingData.item?.duration_ms || 0)) {
          // If the song has ended, reset the progress and trigger a new fetch
          setLocalProgress(0);
          setStartTime(Date.now());
          // Trigger a re-fetch
          fetchSpotifyStatus();
        } else {
          setLocalProgress(
            Math.min(newProgress, nowPlayingData.item?.duration_ms || 0)
          );
        }
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
    <Container className="xl:grid-cols-2 grid-cols-1">
      <ContentCard className="col-span-2 text-4xl border-none space-x-2">
        <LucideMusic2 />
        <GlowText text="Now Playing" />
      </ContentCard>
      <ContentCard>
        <SpotifyStatusCard
          {...nowPlayingData}
          progress_ms={localProgress}
        ></SpotifyStatusCard>
      </ContentCard>
      <ContentCard>
        <AppleMusicStatusCard {...appleNowPlayingData} />
      </ContentCard>
    </Container>
  );
}
