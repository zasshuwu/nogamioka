import Container from "../container";
import ContentCard from "../content-card";
import GlowText from "../glow-text";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container className="md:grid-cols-1">
      <ContentCard className="space-x-2">
        <span>&copy; {year}</span>
        <GlowText text="Anh Hoang Nguyen" />
      </ContentCard>
    </Container>
  );
}
