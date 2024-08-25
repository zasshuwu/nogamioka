import Heading from "@/components/heading";
import About from "@/components/home";

export default function Page() {
  return <div className="flex flex-col space-y-4 p-4">
    <Heading />
    <About />
  </div>
}