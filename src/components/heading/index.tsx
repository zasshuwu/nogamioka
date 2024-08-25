import Container from "../container";
import ContentCard from "../content-card";
import Logo from "../logo";
import { ModeToggle } from "../theme-switcher";
import Clock from "./clock";

export default function Heading() {
  return (
    <Container className="lg:grid-cols-[2fr_1fr_0.25fr] grid-cols-2">
      <ContentCard>
        <Logo className="h-16 w-16" />
        &nbsp;<span className="text-4xl">AAANH</span>
      </ContentCard>
      <ContentCard>
        <Clock />
      </ContentCard>
      <ContentCard>
        <ModeToggle />
      </ContentCard>
    </Container>
  );
}
