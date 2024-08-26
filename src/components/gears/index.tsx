import { getGears } from "@/data/gears";
import Container from "../container";
import ContentCard from "../content-card";
import ComputingComponent from "./components/computing";
import GearComponent from "./components/gear";
import LensComponent from "./components/lens";
import GlowText from "../glow-text";
import { LucideAnvil } from "lucide-react";

export default function Gears() {
  const { computing, gears, lenses } = getGears();

  return (
    <Container className="lg:grid-cols-[1fr_4fr]">
      <ContentCard className="sm:text-4xl text-2xl">
        <LucideAnvil />
        &nbsp;
        <GlowText text="Gears" />
      </ContentCard>
      <Container className="lg:grid-cols-4">
        <ContentCard className="sm:text-4xl text-2xl">
          <h4>Computing</h4>
        </ContentCard>
        {computing?.map((gear, idx) => (
          <ContentCard key={gear.model + idx}>
            <ComputingComponent {...gear} />
          </ContentCard>
        ))}
        <ContentCard className="sm:text-4xl text-2xl">
          <h4>Photography</h4>
        </ContentCard>

        {gears?.map((gear) => (
          <ContentCard key={gear.model}>
            <GearComponent {...gear} />
          </ContentCard>
        ))}

        {lenses?.map((gear) => (
          <ContentCard key={gear.model}>
            <LensComponent {...gear} />
          </ContentCard>
        ))}
      </Container>
    </Container>
  );
}
