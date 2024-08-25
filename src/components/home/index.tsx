import Link from "next/link";
import Container from "../container";
import ContentCard from "../content-card";
import getConfig from "@/lib/config";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa"
import GlowText from "../glow-text";


export default function About() {
  const { owner } = getConfig()

  return <Container className="lg:grid-cols-[2fr_2fr_1fr]">
    <ContentCard>
      <GlowText className="text-4xl" text={"Anh Hoang Nguyen"} />
    </ContentCard>
    <ContentCard>
      <h2 className="text-4xl">Software Developer</h2>
    </ContentCard>
    <ContentCard className="space-x-2 text-2xl">
      <Link href={owner.github}><FaGithub /></Link>
      <Link href={owner.linkedin} className="text-blue-400"><FaLinkedin /></Link>
      <Link href={owner.homepage} className="text-green-500"><FaGlobe /></Link>
    </ContentCard>
  </Container>
}