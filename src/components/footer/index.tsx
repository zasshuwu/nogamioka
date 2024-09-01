"use client";

import { getSpotifyStatus } from "@/app/(home)/actions";
import Container from "../container";
import ContentCard from "../content-card";
import GlowText from "../glow-text";
import { Button } from "../ui/button";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container className="md:grid-cols-1">
      <ContentCard className="flex flex-col">
        <div className="flex items-center justify-center space-x-2">
          <span>&copy; {year}</span>
          <GlowText text="Anh Hoang Nguyen" />
        </div>
        <div>
          <p>Homepage &mdash; Version 6.0.0-alpha</p>
        </div>
      </ContentCard>
    </Container>
  );
}
