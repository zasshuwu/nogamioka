import Heading from "@/components/heading";
import About from "@/components/about";
import Navigator from "@/components/navigator";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Heading />
      <About />
      <Navigator />
      <Experiences />
      <Projects />
    </div>
  );
}
