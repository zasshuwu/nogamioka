import Heading from "@/components/heading";
import About from "@/components/about";
import Navigator from "@/components/navigator";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import Gears from "@/components/gears";
import Footer from "@/components/footer";
import Spotify from "@/components/now-playing";

export default function Page() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Heading />
      <About />
      <br />
      <Spotify />
      <br />
      <Navigator />
      <br />
      <Experiences />
      <br />
      <Projects />
      <br />
      <Gears />
      <br />
      <Footer />
    </div>
  );
}
