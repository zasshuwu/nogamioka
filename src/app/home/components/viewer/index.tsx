import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Resume from "@/components/Resume"

interface IViewer {
  view: string
}

export default function Viewer({ view }: IViewer) {
  switch (view) {
    case 'about': {
      return <About></About>
    }
    case 'experience': {
      return <Experience></Experience>
    }
    case 'projects': {
      return <Projects></Projects>
    }
    case 'resume': {
      return <Resume></Resume>
    }
  }
}