import Container from "../container";
import ContentCard from "../content-card";
import Logo from "../logo";
import { ModeToggle } from "../theme-switcher";
import Clock from "./clock";

export default function Heading() {
  return (
    <Container className="lg:grid-cols-[0.25fr_1fr_0.25fr] grid-cols-2">
      <ContentCard className="">
        <Logo className="h-16 w-16" />
        <span className="md:text-4xl text-xl">AAANH</span>
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
