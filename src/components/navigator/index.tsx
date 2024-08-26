import { FaLink } from "react-icons/fa";
import Container from "../container";
import ContentCard from "../content-card";
import Link from "next/link";
import { LucideCompass, LucideLink2 } from "lucide-react";

export default function Navigator() {
  const targets = ["Experiences", "Projects", "Resume", "Contact", "Gears"];

  return (
    <Container className="lg:grid-cols-[1fr_4fr]">
      <ContentCard className="text-4xl text-accent border-none">
        <LucideCompass />
        &nbsp; Navigator
      </ContentCard>
      <Container className="grid lg:grid-cols-4">
        {targets.map((target) => (
          <Link
            key={target}
            className="group"
            href={`#${target.toLowerCase()}`}
          >
            <ContentCard className="text-3xl relative text-left justify-start">
              <span className="relative group-hover:text-green-400">
                {target}
              </span>
              &nbsp;
              <LucideLink2 className="opacity-0 group-hover:opacity-100 transition-all ease-in-out" />
            </ContentCard>
          </Link>
        ))}
      </Container>
    </Container>
  );
}
